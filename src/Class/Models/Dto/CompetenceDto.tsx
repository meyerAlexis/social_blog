import ExperienceDto from "./ExperienceDto";
import FormationDto from "./FormationDto";
import IFormationDto from "./interface/IFormationDto";
import IExperienceDto from "./interface/IExperienceDto";
import ICompetenceDto from "./interface/ICompetenceDto";

import IExperienceEntity from "../Entity/interface/IExperienceEntity";
import ICompetenceEntity from "../Entity/interface/ICompetenceEntity";
import IFormationEntity from "../Entity/interface/IFormationEntity";
import ILangChoice from "../ILangChoice";


export default class CompetenceDto implements ICompetenceDto {
  id: string = "";
  class: string = "";
  display: boolean = true;
  level: string = "0";
  link: string = "";
  name: ILangChoice = { en: "", fr: "" };
  type: ILangChoice = { en: "", fr: "" };
  lang: string = "fr";

  experience: Array<IExperienceDto> = [
    {
      id: "0",
      date: { en: "", fr: "" },
      locality: { en: "", fr: "" },
      title: { en: "", fr: "" },
      display: true,
      order: 0
    }
  ];
  formation: Array<IFormationDto> = [
    {
      id: "0",
      date: { en: "", fr: "" },
      describ: { en: "", fr: "" },
      title: { en: "", fr: "" },
      locality: { en: "", fr: "" },
      level: "",
      link: "",
      display : true,
      order: 0
    }
  ];

  setOfCompetenceEntity(
    element: ICompetenceEntity,
    resultatExp: ExperienceDto[],
    resultatForm: FormationDto[]
  ) {
    this.setId(String(element.id));
    this.setDisplay(Boolean(element.display));
    this.setLevel(String(element.level));
    this.setLink(String(element.link));
    this.setName(element.name);
    this.setType(element.type);

    //console.log(element.name);
    let exp: Array<IExperienceDto>= [
      {
        id: "0",
        date: { en: "", fr: "" },
        locality: { en: "", fr: "" },
        title: { en: "", fr: "" },
        display : true,
        order: 0
      }
    ];
    //console.log("Competence Exp array: " ,element.experience)
    element.experience.map((compExp) => {
      resultatExp.forEach((itemExp) => {
        if (itemExp.id.trim() === compExp.id.trim()  ) {
          exp.push(itemExp);
        }
      });
    });
    this.setExperience(exp);

    let form: Array<IFormationDto> = [
      {
        id: "0",
        date: { en: "", fr: "" },
        describ: { en: "", fr: "" },
        title: { en: "", fr: "" },
        locality: { en: "", fr: "" },
        level: "",
        link: "",
        display : true,
        order: 0
      }
    ];
    element.formation.map((compForm) => {
      resultatForm.forEach((itemForm) => {
        if (itemForm.id.trim() === compForm.id.trim() ) {
          form.push(itemForm);
        }
      });
    });
    this.setFormation(form);
  }

  setId(val: string) {
    this.id = val;
  }
  getId(): string {
    return this.id;
  }

  setClass(val: string) {
    this.class = val;
  }
  getClass(): string {
    return this.class;
  }

  setDisplay(val: boolean) {
    this.display = val;
  }
  getDisplay(): boolean {
    return this.display;
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
