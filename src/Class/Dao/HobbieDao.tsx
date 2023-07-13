import { db } from "../../firebase";
import HobbieEntity from "../Models/Entity/HobbieEntity";
import IHobbieEntity from "../Models/Entity/interface/IHobbieEntity";

export default class HobbieDao {
  listHobbies = Array<IHobbieEntity>();
  nameTable = "hobbies";

  constructor() {
  
  }

  getHobbie(): Array<IHobbieEntity> {
    return this.listHobbies;
  }

  async getDataHobbiesById(id: string) {
    this.listHobbies = Array<IHobbieEntity>();
    const snapshot = await db
      .collection(this.nameTable)
      .where("uid", "==", id)
      .get();
    const receivedCompetences: IHobbieEntity[] = snapshot.docs.map(
      (document: any) => {
        return {
          ...document.data(),
          id: document.id
        };
      }
    );
    let creation: HobbieEntity = new HobbieEntity();
    receivedCompetences.forEach((element: any) => {
      
      //console.log("Competence : id " + element.id);
      creation.setAll(element);
      this.listHobbies.push(creation);
    });

    return this.listHobbies;
  }

  async getDataHobbie(): Promise<Array<IHobbieEntity>> {
    this.listHobbies = Array<IHobbieEntity>();
    const snapshot = await db.collection(this.nameTable).get();

    const receivedCompetences: IHobbieEntity[] = snapshot.docs.map(
      (document: any) => {
        return {
          ...document.data(),
          id: document.id
        };
      }
    );

    receivedCompetences.forEach((element: any) => {
      let hobbie: HobbieEntity = new HobbieEntity();
     
      //console.log("Competence : id " + element.id);
      hobbie.setAll(element);
      this.listHobbies.push(hobbie);
    });
  
    return this.listHobbies;
  }
}


