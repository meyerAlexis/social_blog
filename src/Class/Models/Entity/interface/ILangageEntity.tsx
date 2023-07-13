import ILangChoice from "../../ILangChoice";

export default interface ILangageEntity {
  id: string;
  address: ILangChoice;
  competence_describ: ILangChoice;
  email: ILangChoice;
  intro: ILangChoice;
  name: ILangChoice;
  nationality: ILangChoice;
  phone: ILangChoice;
  section_comp: ILangChoice;
  section_exp: ILangChoice;
  section_creat: ILangChoice;
  section_form: ILangChoice;
  section_hob: ILangChoice;
  title: ILangChoice;
  zip: ILangChoice;
}
