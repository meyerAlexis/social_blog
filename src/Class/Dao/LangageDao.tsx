import { db } from "../../firebase";
import ILangageEntity from "../Models/Entity/interface/ILangageEntity";
import LangageEntity from "../Models/Entity/LangageEntity";

export default class LangageDao {
  listLangage = Array<ILangageEntity>();
  nameTable = "langage";

  constructor() {}

  getLangage(): Array<ILangageEntity> {
    return this.listLangage;
  }

  async getDataLangageById(id: string) {
    this.listLangage = Array<ILangageEntity>();
    const snapshot = await db
      .collection(this.nameTable)
      .where("uid", "==", id)
      .get();
    const receivedCompetences: ILangageEntity[] = snapshot.docs.map(
      (document: any) => {
        return {
          ...document.data(),
          id: document.id
        };
      }
    );
    receivedCompetences.forEach((element: any) => {
      let langage: LangageEntity = new LangageEntity();
      langage.setAll(element);
      this.listLangage.push(langage);
    });

    return this.listLangage;
  }

  async getDataLangage(): Promise<Array<ILangageEntity>> {
    this.listLangage = Array<ILangageEntity>();
    const snapshot = await db.collection(this.nameTable).get();

    const receivedCompetences: ILangageEntity[] = snapshot.docs.map(
      (document: any) => {
        return {
          ...document.data(),
          id: document.id
        };
      }
    );

    receivedCompetences.forEach((element: any) => {
      let langage: LangageEntity = new LangageEntity();
      langage.setAll(element);
      this.listLangage.push(langage);
    });

    return this.listLangage;
  }
}


