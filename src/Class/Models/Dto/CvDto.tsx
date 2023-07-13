import HobbieDto from "./HobbieDto";

import ICompetenceDto from "./interface/ICompetenceDto";
import IExperienceDto from "./interface/IExperienceDto";
import IFormationDto from "./interface/IFormationDto";
import ICreationDto from "./interface/ICreationDto";
import ILangageDto from "./interface/ILangageDto";
import IHobbieDto from "./interface/IHobbieDto";

export default class CvDto {
  competences: Array<ICompetenceDto> = Array<ICompetenceDto>();
  creations: Array<ICreationDto> = Array<ICreationDto>();
  experiences: Array<IExperienceDto> = Array<IExperienceDto>();
  formations: Array<IFormationDto> = Array<IFormationDto>();
  hobbiess: Array<IHobbieDto> = Array<IHobbieDto>();
  langages: Array<ILangageDto> = Array<ILangageDto>();

  getCompetences() : Array<ICompetenceDto>{
    return this.competences;
  }
  setCompetences(newComp : Array<ICompetenceDto>){
    this.competences = newComp;
  }

  getCreations(): Array<ICreationDto>{
    return this.creations;
  }
  setCreations(newCreat : Array<ICreationDto>){
    this.creations = newCreat;
  }

  getExperiences(): Array<IExperienceDto>{
    return this.experiences;
  }
  setExperiences(newExp : Array<IExperienceDto>){
    this.experiences = newExp;
  } 

  getFormation(): Array<IFormationDto>{
    return this.formations;
  }  
  setFormation(newForm : Array<IFormationDto>){
    this.formations = newForm;
  } 

  getHobbies(): Array<IHobbieDto>{
    return this.hobbiess;
  }  
  setHobbies(hobbies : Array<IHobbieDto>){
    this.hobbiess = hobbies;
  } 

  getLangage(): Array<ILangageDto>{
    return this.langages;
  }  
  setLangage(newLang : Array<ILangageDto>){
    this.langages = newLang;
  } 

}
