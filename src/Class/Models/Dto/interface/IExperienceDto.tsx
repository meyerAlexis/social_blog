import ILangChoice from "../../ILangChoice";

export default interface IExperienceDto {
  id: string;
  title: ILangChoice;
  date: ILangChoice;
  locality: ILangChoice;
  display: boolean;
  order: number;
}

