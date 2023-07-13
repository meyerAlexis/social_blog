import ILangChoice from "../ILangChoice";
import ICompetenceEntity from "./interface/ICompetenceEntity";
import IExperienceEntity from "./interface/IExperienceEntity";
import IFormationEntity from "./interface/IFormationEntity";


export default class CompetenceEntity implements ICompetenceEntity {
  id: string = "";
  class: string = "";
  display: boolean = true;
  level: number = 0;
  link: string = "";
  name: ILangChoice = { en: "", fr: "" };
  type: ILangChoice = { en: "", fr: "" };

  experience: Array<IExperienceEntity> = [
    {
      id: "0",
      date: { en: "", fr: "" },
      locality: { en: "", fr: "" },
      title: { en: "", fr: "" },
      display : true,
      order: 0
    }
  ];
  formation: Array<IFormationEntity> = [
    {
      id: "0",
      date: { en: "", fr: "" },
      describ: { en: "", fr: "" },
      locality:{ en: "", fr: "" },
      title: { en: "", fr: "" },
      level: "",
      link: "",
      display : true,
      order: 0
    }
  ];

  setAll(element: ICompetenceEntity){
    this.setId(element.id);
    this.setDisplay(element.display);
    this.setLevel(element.level);
    this.setLink(element.link);
    this.setName(element.name);
    this.setType(element.type);
    this.setExperience(element.experience);
    this.setFormation(element.formation);
  }

  setClass(val: string) {
    this.class = val;
  }
  getClass(): string {
    return this.class;
  }

  setId(val: string) {
    this.id = val;
  }
  getId(): string {
    return this.id;
  }

  setDisplay(val: boolean) {
    this.display = val;
  }
  getDisplay(): boolean {
    return this.display;
  }

  setLevel(val: number) {
    this.level = val;
  }
  getLevel(): number {
    return this.level;
  }

  setLink(val: string) {
    this.link = val;
  }
  getLink(): string {
    return this.link;
  }

  setName(val: ILangChoice) {
    this.name = val;
  }
  getName(): ILangChoice {
    return this.name;
  }

  setType(val: ILangChoice) {
    this.type = val;
  }
  getType(): ILangChoice {
    return this.type;
  }

  setExperience(val: Array<IExperienceEntity>) {
    this.experience = val;
  }
  getExperience(): Array<IExperienceEntity> {
    return this.experience;
  }

  setFormation(val: Array<IFormationEntity>) {
    this.formation = val;
  }
  getFormation(): Array<IFormationEntity> {
    return this.formation;
  }
}
