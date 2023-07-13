import ILangChoice from "../../ILangChoice";

export default interface IExperienceEntity {
  id: string;
  title: ILangChoice;
  date: ILangChoice;
  locality: ILangChoice;
  display: boolean;
  order: number;
}
