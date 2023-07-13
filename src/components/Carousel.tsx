import { useEffect, useState } from "react";
import LanguageApp from "../Class/Language";

export default function Carousel() {

    const [lang, setLang] = useState<any>(new LanguageApp());
    const [text, setText] = useState<any>(lang.getHome());

    useEffect(() => {
        setLang(new LanguageApp());
        if(lang) { setText(lang.getHome()) }
    }, []);
    return (


        <div id="myCarousel" className="carousel slide bg-dark" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Meet Love"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">

                    <div className="container">
                        <div className="carousel-caption text-start">
                            <h1>{text.carousel_ml_title}</h1>
                            <p>{text.carousel_ml_content}</p>
                            <p><a className="btn btn-lg btn-primary" href="/project-meet-love">{text.carousel_ml_but}</a></p>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                

                    <div className="container">
                        <div className="carousel-caption">
                            <h1>{text.carousel_m2_title}</h1>
                            <p>{text.carousel_m2_content}</p>
                            <p><a className="btn btn-lg btn-primary" href="/project-mygames">{text.carousel_m2_but}</a></p>
                        </div>
                    </div>
                </div>


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">{text.prev}</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">{text.next}</span>
            </button>
        </div>

    );
}
