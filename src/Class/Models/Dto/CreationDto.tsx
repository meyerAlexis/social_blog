import ICreationEntity from "../Entity/interface/ICreationEntity";
import ILangChoice from "../ILangChoice";
import ICreationDto from "./interface/ICreationDto";

export default class CreationDto implements ICreationDto {
  id:string = "0";
  date: string = "";
  describ: ILangChoice = {en:"", fr:""};
  name: ILangChoice = {en:"", fr:""};
  img: string = "";
  link: string = "";
  display: boolean = true;

  presentTitle: ILangChoice = { en: "", fr: "" };
  presentDate: ILangChoice = { en: "", fr: "" };
  presentTxt: ILangChoice = { en: "", fr: "" };
  order: number = 0;
  param: string = "";

  setOfCreationEntity(element: ICreationEntity){
    this.setId(String(element.id));
    this.setDate(element.date);
    this.setDescrib(element.describ)
    this.setName(element.name);
    this.setImg(element.img);
    this.setLink(element.link);
    this.setDisplay(element.display);
    
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

  setDescrib(val: ILangChoice) {
    this.describ = val;
  }
  getDescrib(): ILangChoice {
    return this.describ;
  }
  
  setDisplay(val: boolean) {
    this.display = val;
  }
  getDisplay(): boolean {
    return this.display;
  }
    
  setName(val: ILangChoice) {
    this.name = val;
  }
  getName(): ILangChoice {
    return this.name;
  }

  setImg(val: string) {
    this.img = val;
  }
  getImg(): string {
    return this.img;
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
