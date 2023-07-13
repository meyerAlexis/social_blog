import { db } from "../../firebase";
import CreationEntity from "../Models/Entity/CreationEntity";
import ICreationEntity from "../Models/Entity/interface/ICreationEntity";


export default class CreationDao {
  listCreation = Array<ICreationEntity>();
  nameTable = "creation";

  constructor() {}

  getCreation(): Array<ICreationEntity> {
    return this.listCreation;
  }

  async getDataCreationById(id: string) {
    this.listCreation = Array<ICreationEntity>();
    const snapshot = await db
      .collection(this.nameTable)
      .where("uid", "==", id)
      .get();
    const receivedCompetences: ICreationEntity[] = snapshot.docs.map(
      (document: any) => {
        return {
          ...document.data(),
          id: document.id
        };
      }
    );
    let creation: CreationEntity = new CreationEntity();
    receivedCompetences.forEach((element: any) => {
      
      //console.log("Competence : id " + element.id);
      creation.setAll(element);
      this.listCreation.push(creation);
    });

    return this.listCreation;
  }

  async getDataCreation(): Promise<Array<ICreationEntity>> {
    this.listCreation = Array<ICreationEntity>();
    const snapshot = await db.collection(this.nameTable).get();

    const receivedCompetences: ICreationEntity[] = snapshot.docs.map(
      (document: any) => {
        return {
          ...document.data(),
          id: document.id
        };
      }
    );

    receivedCompetences.forEach((element: any) => {
      let creation: CreationEntity = new CreationEntity();
      creation.setAll(element);
      this.listCreation.push(creation);
    });

    return this.listCreation;
  }
}


