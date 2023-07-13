//import React from 'react';

import { useState } from "react";
import IHome from "../Class/Langage/IHome";
import LanguageApp from "../Class/Language";

import { getClassTitleArticle } from "../Class/Utils";
import { GoogleLogin } from '@react-oauth/google';

//import axios from "axios";
import Carousel from "./Carousel";

export default function Home(props: any) {

    const [lang, setLang] = useState<any>(new LanguageApp());
    const [text, setText] = useState<IHome>(lang.getHome());

    const onLoad = async () => {
        console.log("onLoad")
        setLang(new LanguageApp());
        setText(lang.getHome());
        document.title = text.titlePage;
    };



    /**
     * Read Rss
     */
    const [error, setError] = useState("");

    return (
        <>
            <Carousel />
            <div className="row" onLoad={onLoad}>
                <div className="slide-particule-img"></div>
                <div className="container">
                    <h2 key="title-row" className="pb-4 fst-italic">
                        {text.titleItem}
                    </h2>

                    <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;

                </div>

                <div>{error}</div>

            </div>
        </>
    );
}

