import { db } from "../../firebase";
import ExperienceEntity from "../Models/Entity/ExperienceEntity";
import IExperienceEntity from "../Models/Entity/interface/IExperienceEntity";

export default class ExperienceDao {
  listExperience = Array<IExperienceEntity>();
  nameTable = "experience";

  constructor() {}

  getFormation(): Array<IExperienceEntity> {
    return this.listExperience;
  }

  async getDataExperienceById(id: string): Promise<IExperienceEntity> {
    this.listExperience = Array<IExperienceEntity>();
    const snapshot = await db
      .collection(this.nameTable)
      .where("uid", "==", id)
      .get();
    const receivedCompetences: IExperienceEntity[] = snapshot.docs.map(
      (document: any) => {
        return {
          ...document.data(),
          id: document.id
        };
      }
    );
    let formation: ExperienceEntity = new ExperienceEntity();
    receivedCompetences.forEach((element: IExperienceEntity) => {
      formation = new ExperienceEntity();
      formation.setAll(element);
    });

    return formation;
  }

  async getDataExperience(): Promise<Array<IExperienceEntity>> {
    this.listExperience = Array<IExperienceEntity>();
    const snapshot = await db.collection(this.nameTable).get();

    const receivedCompetences: IExperienceEntity[] = snapshot.docs.map(
      (document: any) => {
        return {
          ...document.data(),
          id: document.id
        };
      }
    );

    receivedCompetences.forEach((element: any) => {
      let experience: ExperienceEntity = new ExperienceEntity();
      experience.setAll(element);
      this.listExperience.push(experience);
    });

    return this.listExperience;
  }
}

