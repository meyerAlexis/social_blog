import { db } from "../../firebase";
import CompetenceEntity from "../Models/Entity/CompetenceEntity";
import ExperienceEntity from "../Models/Entity/ExperienceEntity";
import FormationEntity from "../Models/Entity/FormationEntity";
import ICompetenceEntity from "../Models/Entity/interface/ICompetenceEntity";
import IExperienceEntity from "../Models/Entity/interface/IExperienceEntity";
import IFormationEntity from "../Models/Entity/interface/IFormationEntity";
import {countProperties} from "../Utils";

export default class CompetenceDao {
  //competence: CompetenceEntity = new CompetenceEntity();
  listCompetences = Array<ICompetenceEntity>();
  nameTable = "competence";

  getCompetence(): Array<ICompetenceEntity> {
    return this.listCompetences;
  }

  async getDataCompetence(): Promise<Array<ICompetenceEntity>> {
    const snapshot = await db.collection(this.nameTable).get();

    const receivedCompetences: Array<ICompetenceEntity> = snapshot.docs.map(
      (document: any) => {
        return {
          ...document.data(),
          id: document.id
        };
      }
    );

    let competence: CompetenceEntity;
    //let formationDao: FormationDao = new FormationDao();
    //let experienceDao: ExperienceDao = new ExperienceDao();

    receivedCompetences.forEach((element: ICompetenceEntity) => {
      competence = new CompetenceEntity();
      competence.setId(element.id);
      competence.setClass(element.class);
      competence.setDisplay(element.display);

      let listExp = Array<IExperienceEntity>();

      for (let index = 0; index < countProperties(element.experience); index++) {
        let expEntity: ExperienceEntity = new ExperienceEntity();
        expEntity.setId(String(element.experience[index]));
        listExp.push(expEntity);
      }

      competence.setExperience(listExp);

      let listForm = Array<IFormationEntity>();
      for (let index = 0; index < countProperties(element.formation); index++) {
        let formEntity: FormationEntity = new FormationEntity();
        formEntity.setId(String(element.formation[index]));
        listForm.push(formEntity);
      }
      competence.setFormation(listForm);

      competence.setLevel(element.level);
      competence.setLink(element.link);
      competence.setName(element.name);
      competence.setType(element.type);

      this.listCompetences.push(competence);
    });
    return this.listCompetences;
  }
}
