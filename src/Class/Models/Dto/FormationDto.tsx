import IFormationEntity from "../Entity/interface/IFormationEntity";
import ILangChoice from "../ILangChoice";
import IFormationDto from "./interface/IFormationDto";

export default class FormationDto implements IFormationDto {
  id: string = "0";
  date: ILangChoice = { en: "", fr: "" };
  describ: ILangChoice = { en: "", fr: "" };
  locality: ILangChoice = { en: "", fr: "" };
  title: ILangChoice = { en: "", fr: "" };
  level: string = "";
  link: string = "";
  display : boolean = true;
  order: number = 0;

  setOfFormationEntity(element: IFormationEntity){
    this.setId(String(element.id));
    this.setDate(element.date);
    this.setDescrib(element.describ);
    this.setLocality(element.locality);
    this.setTitle(element.title);
    this.setLevel(String(element.level));
    this.setLink(String(element.link));
    this.display = element.display;
    this.setOrder(element.order);
  }

  setId(val: string) {
    this.id = val;
  }
  getId(): string {
    return this.id;
  }

  setDate(val: ILangChoice) {
    this.date = val;
  }
  getDate(): ILangChoice {
    return this.date;
  }

  setDescrib(val: ILangChoice) {
    this.describ = val;
  }
  getDescrib(): ILangChoice {
    return this.describ;
  }  
 
  setLocality(val: ILangChoice) {
    this.locality = val;
  }
  getLocality(): ILangChoice {
    return this.locality;
  }  
   
  setTitle(val: ILangChoice) {
    this.title = val;
  }
  getTitle(): ILangChoice {
    return this.title;
  }

  setLevel(val: string) {
    this.level = val;
  }
  getLevel(): string {
    return this.level;
  }

  setLink(val: string) {
    this.link = val;
  }
  getLink(): string {
    return this.link;
  }

  setOrder(order: number) {
    this.order = order;
  }
  getOrder(): number {
    return this.order;
  }
}
