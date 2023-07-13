import CompetenceDao from "../Dao/CompetenceDao";
import ExperienceDao from "../Dao/ExperienceDao";
import FormationDao from "../Dao/FormationDao";
import CreationDao from "../Dao/CreationDao";
import LangageDao from "../Dao/LangageDao";

import ExperienceDto from "../Models/Dto/ExperienceDto";
import CompetenceDto from "../Models/Dto/CompetenceDto";
import FormationDto from "../Models/Dto/FormationDto";
import CreationDto from "../Models/Dto/CreationDto";
import LangageDto from "../Models/Dto/LangageDto";
import CvDto from "../Models/Dto/CvDto";
import HobbieDao from "../Dao/HobbieDao";
import HobbieDto from "../Models/Dto/HobbieDto";


export default class CvController {
  constructor() {
    //const cv = new CvController();
  }

  async getAllData(): Promise<CvDto> {
    let cvDto: CvDto = new CvDto();


    //Get Experiences of db, and converti
    //ExperienceEntity(ExperienceDao) -> ExperienceDto
    let experienceDao = new ExperienceDao();
    let resultatExp = await experienceDao
      .getDataExperience()
      .then((experiences) => {
        let listExperienceDto = Array<ExperienceDto>();

        experiences.forEach((experience) => {
          let experienceDto = new ExperienceDto();
          experienceDto.setOfExperienceEntity(experience);
          listExperienceDto.push(experienceDto);
        });
        return listExperienceDto;
      });
    cvDto.setExperiences(resultatExp);

    //Get Formations of db, and converti
    //FormationEntity(FormationDao) -> FormationDto
    let formationDao = new FormationDao();
    let resultatFormation = await formationDao
      .getDataFormation()
      .then((formations) => {
        let listFormationDto = Array<FormationDto>();

        formations.forEach((formation) => {
          let formationDto = new FormationDto();
          formationDto.setOfFormationEntity(formation);
          listFormationDto.push(formationDto);
        });
        return listFormationDto;
      });
    cvDto.setFormation(resultatFormation);



    //Get comptence of db, and converti
    //CompetenceEntity(CompetenceDao) -> CompetenceDto
    let competenceDao = new CompetenceDao();
    let resultatCompetences = await competenceDao
      .getDataCompetence()
      .then((competences) => {
        let listCompDto = Array<CompetenceDto>();

        competences.forEach((competence) => {
          let competenceDto = new CompetenceDto();
          competenceDto.setOfCompetenceEntity(competence, resultatExp, resultatFormation);
          listCompDto.push(competenceDto);
        });

        return listCompDto;
      });
    cvDto.setCompetences(resultatCompetences);

    //Get Creation of db, and converti
    //CreationEntity(CreationDao) -> CompetenceDto
    let creationDao = new CreationDao();
    let resultatCreation = await creationDao
      .getDataCreation()
      .then((creations) => {
        let listCreationDto = Array<CreationDto>();

        creations.forEach((creation) => {
          let creationDto = new CreationDto();
          creationDto.setOfCreationEntity(creation);
          listCreationDto.push(creationDto);
        });
        return listCreationDto;
      });
    cvDto.setCreations(resultatCreation);

    //Get Creation of db, and converti
    //CreationEntity(CreationDao) -> CompetenceDto
    let hobbieDao = new HobbieDao();
    let resultatHobbie = await hobbieDao
      .getDataHobbie()
      .then((hobbies) => {
        let listHobbieDto = Array<HobbieDto>();

        hobbies.forEach((hobbie) => {
          let hobbieDto = new HobbieDto();
          hobbieDto.setOfHobbieEntity(hobbie);
          listHobbieDto.push(hobbieDto);
        });
        return listHobbieDto;
      });
      cvDto.setHobbies(await resultatHobbie);    

    //Get Langage of db, and converti
    //LangageEntity(LangageDao) -> LangageDto
    let langageDao = new LangageDao();
    let resultatLangage = await langageDao
    .getDataLangage().then((langages) => {
      let listLangageDto = Array<LangageDto>();

      langages.forEach((langage) => {
        let langageDto = new LangageDto();
        langageDto.setOfLangageEntity(langage);
        listLangageDto.push(langageDto);
      });
      return listLangageDto;
    });
    cvDto.setLangage(resultatLangage);
    return cvDto;
  }
}
