import ILangChoice from "../../ILangChoice";

export default interface IFormationDto {
  id: string;
  date: ILangChoice;
  describ: ILangChoice;
  locality: ILangChoice;
  title: ILangChoice;
  level: string;
  link: string;
  display : boolean;
  order: number;
}
