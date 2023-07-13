import IExperienceEntity from "../../Entity/interface/IExperienceEntity";
import IFormationEntity from "../../Entity/interface/IFormationEntity";
import ILangChoice from "../../ILangChoice";

export default interface ICompetenceDto {
  id: string;
  class: string;
  display: boolean;
  experience: Array<IExperienceEntity>;
  formation: Array<IFormationEntity>;
  level: string;
  link: string;
  name: ILangChoice;
  type: ILangChoice;
}
