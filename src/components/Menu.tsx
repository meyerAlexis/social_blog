import { useState } from "react";
import LanguageApp from "../Class/Language"
import IMenu from "../Class/Langage/IMenu"

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function Menu() {

    //const [lang, setLang] = useState();
    const [lang, setLang] = useState<any>(new LanguageApp());
    const [langSite, setLangSite] = useState<any>("");
    const [text, setText] = useState<IMenu>(lang.getMenu());

    const linkVisited = (className: string) => {
        let myPara = document.querySelector(className);
        if (myPara != null) myPara.classList.add('visited');
    }

    const onLoad = () => {
        let myPara = document.querySelector(".link-secondary.one");
        if (myPara != null) myPara.classList.add('test');

        setLang(new LanguageApp());
        setText(lang.getMenu());
        let urlPage = document.location.href; // url de la page en cours
        let linkSite = text.linkSite;

        switch (urlPage) {
            case linkSite:
            case linkSite + "/":
                linkVisited(".link-secondary.one");
                break;
            case linkSite + "/mon-cv":
            case linkSite + "/mon-cv#" + text.titleForm:
            case linkSite + "/mon-cv#" + text.titleExp:
                linkVisited(".link-secondary.two");
                break;
            case linkSite + "/project":
            case linkSite + "/project-meet-love":
                linkVisited(".link-secondary.three");
                break;
            default:

        }
    };

    return (
        <div className="container" onLoad={onLoad} >
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                    </div>

                    <div className="col-4 text-center titlesite fs-2">
                        <h3>{text ? text.titleSite : "Cv"}</h3>
                    </div>

                </div>
            </header>

            <div className="nav-scroller mb-2 " >
                <nav className="nav navMenu">
                    <a className="p-2 link-secondary one" href={`/`} >
                        <span>{text.menuHome}</span>
                    </a>                
                   
                    <span className="select-lang" >
                        <div style={{ fontSize: 14 }}>{text.lblLangSite}</div>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} >
                            <Select
                                id="langSite-select-menu"
                                label={text ? text.lblLangSite : "lblLangSite"}
                                value={(lang.getLangSession() !== "" && lang.getLangSession() !== null) ? lang.getLangSession() : "fr"}
                                
                                onChange={(e) => {
                                    setLangSite(e.target.value);
                                    lang.setLang(e.target.value);                                   
                                    window.location.reload();
                                }} >
                                <MenuItem value="fr">{text ? text.langFr : "fr"}</MenuItem>
                                <MenuItem value="en">{text ? text.langEn : "en"}</MenuItem>
                            </Select>
                        </FormControl>
                    </span>


                </nav>
            </div>
        </div>

    );
}

export default Menu;