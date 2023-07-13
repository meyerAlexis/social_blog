import { db } from "../../firebase";
import FormationEntity from "../Models/Entity/FormationEntity";
import IFormationEntity from "../Models/Entity/interface/IFormationEntity";

export default class FormationDao {
  listFormation = Array<IFormationEntity>();
  nameTable = "formation";

  constructor() {}

  getFormation(): Array<IFormationEntity> {
    return this.listFormation;
  }

  async getDataFormationById(id: string): Promise<IFormationEntity> {
    this.listFormation = Array<IFormationEntity>();
    const snapshot = await db
      .collection(this.nameTable)
      .where("uid", "==", id)
      .get();
    const receivedCompetences: IFormationEntity[] = snapshot.docs.map(
      (document: any) => {
        return {
          ...document.data(),
          id: document.id
        };
      }
    );
    let formation: FormationEntity = new FormationEntity();
    receivedCompetences.forEach((element: IFormationEntity) => {
      formation = new FormationEntity();
      formation.setAll(element);
    });

    return formation;
  }

  async getDataFormation(): Promise<Array<IFormationEntity>> {
    this.listFormation = Array<IFormationEntity>();
    const snapshot = await db.collection(this.nameTable).get();

    const receivedFormation: Array<IFormationEntity> = snapshot.docs.map(
      (document: any) => {
        return {
          ...document.data(),
          id: document.id
        };
      }
    );

    receivedFormation.forEach((element: any) => {
      let formationEntity: FormationEntity = new FormationEntity();
      formationEntity.setAll(element);
      this.listFormation.push(formationEntity);
    });

    return this.listFormation;
  }
}
