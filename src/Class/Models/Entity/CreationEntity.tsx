import ILangChoice from "../ILangChoice";
import ICreationEntity from "./interface/ICreationEntity";

export default class CreationEntity implements ICreationEntity {
  id: string = "0";
  date: string = "0";
  display: boolean = true;
  img: string = "";
  link: string = "";
  describ: ILangChoice = { en: "", fr: "" };
  name: ILangChoice = { en: "", fr: "" };

  presentTitle: ILangChoice = { en: "", fr: "" };
  presentDate: ILangChoice = { en: "", fr: "" };
  presentTxt: ILangChoice = { en: "", fr: "" };
  order: number = 0;
  param: string = "";


  setAll(element: ICreationEntity) {
    this.setId(element.id);
    this.setDate(element.date);
    this.setDisplay(element.display);
    this.setImg(element.img);
    this.setDescrib(element.describ);
    this.setName(element.name);
    this.setLink(element.link);

    this.setPresentTitle(element.presentTitle);
    this.setPresentDate(element.presentDate);
    this.setPresentTxt(element.presentTxt);
    this.setOrder(element.order);
    this.setParam(element.param);
  }

  setId(val: string) {
    this.id = val;
  }
  getId(): string {
    return this.id;
  }

  setDate(val: string) {
    this.date = val;
  }
  getDate(): string {
    return this.date;
  }

  setDisplay(val: boolean) {
    this.display = val;
  }
  getDisplay(): boolean {
    return this.display;
  }

  setImg(val: string) {
    this.img = val;
  }
  getImg(): string {
    return this.img;
  }

  setDescrib(val: ILangChoice) {
    this.describ = val;
  }
  getDescrib(): ILangChoice {
    return this.describ;
  }

  setName(val: ILangChoice) {
    this.name = val;
  }
  getName(): ILangChoice {
    return this.name;
  }  
  
  setLink(val: string) {
    this.link = val;
  }
  getLink(): string {
    return this.link;
  }

  /*Show presnetation page projet */
  setPresentTitle(val: ILangChoice) {
    this.presentTitle = val;
  }
  getPresentTitle(): ILangChoice {
    return this.presentTitle;
  }  

  setPresentDate(val: ILangChoice) {
    this.presentDate = val;
  }
  getPresentDate(): ILangChoice {
    return this.presentDate;
  }  
  
  setPresentTxt(val: ILangChoice) {
    this.presentTxt = val;
  }
  getPresentTxt(): ILangChoice {
    return this.presentTxt;
  }  

  setOrder(order: number) {
    this.order = order;
  }
  getOrder(): number {
    return this.order;
  }
        
  setParam(val: string) {
    this.param = val;
  }
  getParam(): string {
    return this.param;
  }
}

