import IHobbieEntity from "../Entity/interface/IHobbieEntity";
import ILangChoice from "../ILangChoice";
import IHobbieDto from "./interface/IHobbieDto";

export default class HobbieDto  implements IHobbieDto {
  id: string = "0";
  name: ILangChoice = { en: "", fr: "" };
  display: boolean = true;
  
  setOfHobbieEntity(element: IHobbieEntity){
    this.setId(String(element.id));
    this.setName(element.name);
    this.setDisplay(true);
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

  setName(val: ILangChoice) {
    this.name = val;
  }
  getName(): ILangChoice {
    return this.name;
  }
}
