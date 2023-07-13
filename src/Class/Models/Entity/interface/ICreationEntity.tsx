import ILangChoice from "../../ILangChoice";

export default interface ICreationEntity {
  id: string;
  date: string;
  display: boolean;
  describ: ILangChoice;
  name: ILangChoice;
  img: string;
  link: string;

  presentTitle: ILangChoice;
  presentDate: ILangChoice;
  presentTxt: ILangChoice;
  order: number;
  param: string ;

}
