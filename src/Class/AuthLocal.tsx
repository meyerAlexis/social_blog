import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Show if auth valid, and get date user auth
 */
export default class AuthLocal {

  nameTheme = 'name';
  nameThemeDef = "google";

  AuthLocal() {
  }

  setThemeInSession(nameTheme: string) {
    try {
      AsyncStorage.removeItem(this.nameTheme);
      AsyncStorage.setItem(this.nameTheme, nameTheme);

    } catch (error) {
      throw 'Error set theme in local'
    }
  }


  async getTheme(): Promise<string> {
    let resp = await AsyncStorage.getItem(this.nameTheme);

    if (resp !== null) {
      return resp;
    } else {
      return this.nameThemeDef;
    }
  }


}

