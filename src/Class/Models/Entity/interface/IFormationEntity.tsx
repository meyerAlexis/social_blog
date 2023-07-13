import ILangChoice from "../../ILangChoice";

export default interface IFormationEntity {
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
