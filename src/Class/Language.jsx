
import {
    pages_fr, textHome_fr, textProject_fr, textCv_fr, textMenu_fr, textFooter_fr, textPageError_fr
} from "../Translations/text-lang-fr";
import {
    pages_en, textHome_en, textProject_en, textCv_en, textMenu_en, textFooter_en, textPageError_en
} from "../Translations/text-lang-en";

export default class LanguageApp {
   
    constructor() {
        this.lang = this.getLangSession() ? this.getLangSession() : "fr";
        this.text = this.getHome();
    }

    //Language
    setLang(lang_new) {
        if (lang_new !== null) {
            this.lang = lang_new;
            this.saveLangSession(lang_new);
            //console.log("In Language set lang to " + lang_new)
        } else {
            this.lang = "fr";
        }
    }

    saveLangSession(_lang) {
        sessionStorage.setItem("lang", _lang);
    }

    getLangSession() {
        return sessionStorage.getItem("lang");
    }


    getLang() {
        return this.lang;
    }

    //Home
    getHome() {
        let langHome;

        switch (this.lang) {
            case "fr":
                langHome = { ...textHome_fr, ...pages_fr };
                break;
            case "en":
                langHome = { ...textHome_en, ...pages_fr };
                break;
            default:
                langHome = { ...textHome_fr, ...pages_fr };
                break;
        }

        return langHome;
    }


    //Menu
    getFooter() {
        let langMenu;
        switch (this.lang) {
            case "fr":
                langMenu = { ...textFooter_fr, ...pages_fr };
                break;
            case "en":
                langMenu = { ...textFooter_en, ...pages_en };
                break;
            default:
                langMenu = { ...textFooter_fr, ...pages_fr };
                break;
        }

        return langMenu;
    }
    //Error
    getError() {
        let langError;
        switch (this.lang) {
            case "fr":
                langError = { ...textPageError_fr };
                break;
            case "en":
                langError = { ...textPageError_en };
                break;
            default:
                langError = { ...textPageError_fr };
                break;
        }

        return langError;
    }



    //Menu
    getMenu() {
        let langMenu;
        switch (this.lang) {
            case "fr":
                langMenu = { ...textMenu_fr, ...pages_fr };
                break;
            case "en":
                langMenu = { ...textMenu_en, ...pages_en };
                break;
            default:
                langMenu = { ...textMenu_fr, ...pages_fr };
                break;
        }

        return langMenu;
    }

    render() {
        return ("");
    }

}