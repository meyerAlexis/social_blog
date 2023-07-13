import LanguageApp from "../Class/Language";
import $ from "jquery"

import "../style/template/google.css"
import "../style/template/windows.css"
import AuthLocal from "../Class/AuthLocal";
import { useEffect } from "react";

export default function Footer() {

    let lang = new LanguageApp();
    let text = lang.getFooter();
    let authLocal = new AuthLocal();

    const goLink = (link: string) => {
        window.location.assign(text.linkSite + link);
    }

    //Update site for theme select by user
    const uptThemeSite = (name: string) => {
        if (name !== undefined && name !== null) {
            authLocal.setThemeInSession(name);

            $("#root").removeClass("google windows")
            $("#root").addClass(name)
        } else {
            throw 'Theme name is no valid';
        }
    }

    useEffect(() => {
        load()
    }, []);

    const load = async () => {
        console.log("load")
        //Define theme in local
        $("#root").removeClass("google windows")
        $("#root").addClass(await authLocal.getTheme())
    }



    return (
        <div className="container footer">


            <div className="position-sticky" >
                <div className="p-4 mb-3 bg-light rounded">
                    <h5 className="fst-italic">{text.footerTitle}</h5>

                    <div><span>{text.footerThemeTitle}</span>
                        <button id="link-theme" onClick={() => uptThemeSite("google")}>{text.footerThemePart1}</button>
                        <button id="link-theme" onClick={() => uptThemeSite("windows")}>{text.footerThemePart2}</button>
                    </div>

                </div>


                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 text-center">
                    <div className="feature col">
                        <div className="card-header py-3">
                            <h5 className="my-0 fw-normal">{text.footerProjetTitle}</h5>
                        </div>
                        <div className="card-body">

                            <ul className="list-unstyled mt-3 mb-4">
                                <li> <a className="p-2 link-secondary four" href={`/`} >
                                    <span>{text.footerProjetMl}</span>
                                </a></li>
                                <li> <a className="p-2 link-secondary four" href={`/`} >
                                    <span>{text.footerProjetGame}</span>
                                </a></li>
                                <li> <a className="p-2 link-secondary four" href={`/`} >
                                    <span>{text.footerProjetThree}</span>
                                </a></li>
                            </ul>
                            
                        </div>
                    </div>

                    <div className="feature col">
                        <div className="card-header py-3">
                            <h5 className="my-0 fw-normal">{text.footerFormTitle}</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>
                                    <a className="p-2 link-secondary four" href={`/`} >
                                        <span>{text.footerFormPart1}</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="p-2 link-secondary four" href={`/`} >
                                        <span>{text.footerFormPart2}</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="p-2 link-secondary four" href={`/`} >
                                        <span>{text.footerFormPart3}</span>
                                    </a>
                                </li>
                            </ul>

                            
                        </div>
                    </div>

                    

                </div>


            </div>
        </div>
    )
}
