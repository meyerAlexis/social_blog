import ILangChoice from "../ILangChoice";
import IExperienceEntity from "./interface/IExperienceEntity";

export default class ExperienceEntity implements IExperienceEntity {
  id: string = "";
  title: ILangChoice = { en: "", fr: "" };
  date: ILangChoice = { en: "", fr: "" };
  locality: ILangChoice = { en: "", fr: "" };
  display : boolean = true;
  order: number = 0;

  setAll(element: IExperienceEntity) {
    this.setId(element.id);
    this.setTitle(element.title);
    this.setDate(element.date);
    this.setLocality(element.locality);
    this.setOrder(element.order);
  }

  setId(val: string) {
    this.id = val;
  }
  getId(): string {
    return this.id;
  }

  setTitle(val: ILangChoice) {
    this.title = val;
  }
  getTitle(): ILangChoice {
    return this.title;
  }

  setDate(val: ILangChoice) {
    this.date = val;
  }
  getDate(): ILangChoice {
    return this.date;
  }

  setLocality(val: ILangChoice) {
    this.locality = val;
  }
  getLocality(): ILangChoice {
    return this.locality;
  }

  setOrder(order: number) {
    this.order = order;
  }
  getOrder(): number {
    return this.order;
  }
}
