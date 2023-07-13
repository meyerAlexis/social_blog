import ILangChoice from "../ILangChoice";
import IHobbieEntity from "./interface/IHobbieEntity";


export default class HobbieEntity implements IHobbieEntity {
  id: string = "";
  name: ILangChoice = { en: "", fr: "" };
  display: boolean = true;

  setAll(element: IHobbieEntity) {
    this.setId(element.id);
    this.setDisplay(element.display);
    this.setName(element.name);
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
