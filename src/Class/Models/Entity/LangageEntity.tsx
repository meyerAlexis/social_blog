import ILangChoice from "../ILangChoice";
import ILangageEntity from "./interface/ILangageEntity";

export default class LangageEntity implements ILangageEntity {
  id: string = "";
  address: ILangChoice = { en: "", fr: "" };
  competence_describ: ILangChoice = { en: "", fr: "" };
  email: ILangChoice = { en: "", fr: "" };
  intro: ILangChoice = { en: "", fr: "" };
  name: ILangChoice = { en: "", fr: "" };
  nationality: ILangChoice = { en: "", fr: "" };
  phone: ILangChoice = { en: "", fr: "" };
  section_comp: ILangChoice = { en: "", fr: "" };
  section_exp: ILangChoice = { en: "", fr: "" };
  section_creat: ILangChoice = { en: "", fr: "" };
  section_form: ILangChoice = { en: "", fr: "" };
  section_hob: ILangChoice = { en: "", fr: "" };
  title: ILangChoice = { en: "", fr: "" };
  zip: ILangChoice = { en: "", fr: "" };

  setAll(element: ILangageEntity) {
    this.setId(element.id);
    this.setAddress(element.address);
    this.setCompetenceDescrib(element.competence_describ);
    this.setEmail(element.email);
    this.setIntro(element.intro);
    this.setName(element.name);
    this.setNationality(element.nationality);
    this.setPhone(element.phone);
    this.setSectionExp(element.section_exp);
    this.setSectionComp(element.section_comp);
    this.setSectionCreat(element.section_creat);
    this.setSectionForm(element.section_form);
    this.setSectionHob(element.section_hob);
    this.setTitle(element.title);
    this.setZip(element.zip);
  }

  setId(val: string) {
    this.id = val;
  }
  getId(): string {
    return this.id;
  }

  setAddress(val: ILangChoice) {
    this.address = val;
  }
  getAddress(): ILangChoice {
    return this.address;
  }

  setCompetenceDescrib(val: ILangChoice) {
    this.competence_describ = val;
  }
  getCompetenceDescrib(): ILangChoice {
    return this.competence_describ;
  }

  setEmail(val: ILangChoice) {
    this.email = val;
  }
  getEmail(): ILangChoice {
    return this.email;
  }

  setIntro(val: ILangChoice) {
    this.intro = val;
  }
  getIntro(): ILangChoice {
    return this.intro;
  }

  setName(val: ILangChoice) {
    this.name = val;
  }
  getName(): ILangChoice {
    return this.name;
  }

  setNationality(val: ILangChoice) {
    this.nationality = val;
  }
  getNationality(): ILangChoice {
    return this.nationality;
  }

  setPhone(val: ILangChoice) {
    this.phone = val;
  }
  getPhone(): ILangChoice {
    return this.phone;
  }

  setSectionExp(val: ILangChoice) {
    this.section_exp = val;
  }
  getSectionExp(): ILangChoice {
    return this.section_exp;
  }

  setSectionComp(val: ILangChoice) {
    this.section_comp = val;
  }
  getSectionComp(): ILangChoice {
    return this.section_comp;
  }

  setSectionCreat(val: ILangChoice) {
    this.section_creat = val;
  }
  getSectionCreat(): ILangChoice {
    return this.section_creat;
  }

  setSectionForm(val: ILangChoice) {
    this.section_form = val;
  }
  getSectionForm(): ILangChoice {
    return this.section_form;
  }

  setSectionHob(val: ILangChoice) {
    this.section_hob = val;
  }
  getSectionHob(): ILangChoice {
    return this.section_hob;
  }

  setTitle(val: ILangChoice) {
    this.title = val;
  }
  getTitle(): ILangChoice {
    return this.title;
  }

  setZip(val: ILangChoice) {
    this.zip = val;
  }
  getZip(): ILangChoice {
    return this.zip;
  }
}
