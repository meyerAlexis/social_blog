import ILangChoice from "../../ILangChoice";
import IExperienceEntity from "./IExperienceEntity";
import IFormationEntity from "./IFormationEntity";

export default interface ICompetenceEntity {
  id: string;
  class: string;
  display: boolean;
  experience: Array<IExperienceEntity>;
  formation: Array<IFormationEntity>;
  level: number;
  link: string;
  name: ILangChoice;
  type: ILangChoice;
}
