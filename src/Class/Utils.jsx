import LanguageApp from "./Language";
import CryptoJS from 'crypto-js';

function decrypt(data, pwd) {
  var decrypted = CryptoJS.AES.decrypt(data, pwd).toString(CryptoJS.enc.Utf8);
  if (decrypted !== null) {
    return decrypted;
  } else {
    return false;
  }
}



function countProperties(obj) {
  let keys = 0;
  if (obj !== null && typeof obj !== "undefined") {
    keys = Object.keys(obj).length;
  }
  return keys;
}

/**
 * Return describ content for competence
 * @param {*} name 
 * @returns 
 */
function getContentCompetence(name) {
  let lang = new LanguageApp();
  let text = lang.getCv();
  let val = "";
  switch (name.toLowerCase()) {
    case "css":
      val = text.contentCss;
      break;
    case "jquery":
      val = text.contentJquery;
      break;
    case "javascript":
      val = text.contentJavascript;
      break;
    case "firebase":
      val = text.contentFirebase;
      break;
    case "react":
      val = text.contentReact;
      break;
    case "react-native":
      val = text.contentReactNative;
      break;
    case "php":
      val = text.contentPhp;
      break;
    case "java":
      val = text.contentJava;
      break;
    default:
      val = text.noContent;
      break;
  }
  return val;
}

function getTextLang(lang, value) {

  let textLang = "";


  switch (lang) {
    case "fr":
      textLang = value.fr
      break;

    case "en":
      textLang = value.en
      break;


    default:
      textLang = value.fr
      break;
  }

  return textLang;
}

const getClassTitleArticle = (i) => {
  let tabClassTitle = ["one", "two", "three", "four"];
  if (i < 0) {
      return tabClassTitle[0];
  } else if (i <= 3 && i > 0) {
      return tabClassTitle[i];
  } else {
      return tabClassTitle[i - (4 * Math.floor(i / 4))];
  }
}

const loadingForm = (num = 3) => {
  return (
      <div>
          {[...Array(num)].map((x, i) =>
              <div key="item-exp-load" style={{ height: 220, width: "100%", backgroundColor: "#fcfcfc", padding: 10 }}>
                  <h2 id="heading-expload" key="item-exp-h2-load" >
                      <button className="accordion-button-load" type="button" data-bs-toggle="collapse">
                      </button>
                  </h2>

                  <div id="collapse-exp" className="div-loading"
                      style={{ height: 180, width: "90%", paddingTop: 10 }}>
                      <div className="viewLine exp" style={{ height: 10, width: "80%", backgroundColor: "#e8e8e8", marginTop: 10 }}> </div>
                      <div className="viewLine exp" style={{ height: 10, width: "80%", backgroundColor: "#e8e8e8", marginTop: 10 }}> </div>
                      <div className="viewLine exp" style={{ height: 10, width: "80%", backgroundColor: "#e8e8e8", marginTop: 10 }}> </div>


                      <button key="but-exp-comp1-load" type="button" data-bs-toggle="offcanvas"
                          style={{ height: 50, width: 60, backgroundColor: "#e8e8e8", border: 0, marginTop: 10 }}>
                      </button>
                      <button key="but-exp-comp2-load" type="button" data-bs-toggle="offcanvas"
                          style={{ height: 50, width: 60, backgroundColor: "#e8e8e8", border: 0, marginTop: 10, marginLeft: 10 }}>
                      </button>
                      <button key="but-exp-comp3-load" type="button" data-bs-toggle="offcanvas"
                          style={{ height: 50, width: 60, backgroundColor: "#e8e8e8", border: 0, marginTop: 10, marginLeft: 10 }}>
                      </button>
                      <button key="but-exp-comp4-load" type="button" data-bs-toggle="offcanvas"
                          style={{ height: 50, width: 60, backgroundColor: "#e8e8e8", border: 0, marginTop: 10, marginLeft: 10 }}>
                      </button>
                  </div>

                  <h2 id="heading-expload" key="item-exp-h2-load" >
                      <button className="accordion-button-load" type="button" data-bs-toggle="collapse">
                      </button>
                  </h2>
              </div>
          )}

      </div>

  );
}
const loadingProjet = (num = 3) => {
  return (
      <div>
          {[...Array(num)].map((x, i) =>
              <div key="item-exp-load" style={{ height: 220, width: "100%", backgroundColor: "#fcfcfc",marginBottom:10, padding: 10 }}>
                  <h2 id="heading-expload" key="item-exp-h2-load" >
                      <button className="accordion-button-load" type="button" data-bs-toggle="collapse">
                      </button>
                  </h2>

                  <div id="collapse-exp" className="div-loading"
                      style={{ height: 180, width: "90%", paddingTop: 10 }}>
                      <div className="viewLine exp" style={{ height: 10, width: "20%", backgroundColor: "#e8e8e8", marginTop: 10 }}> </div>
                      <div className="viewLine exp" style={{ height: 10, width: "70%", backgroundColor: "#e8e8e8", marginTop: 20 }}> </div>
                      <div className="viewLine exp" style={{ height: 10, width: "60%", backgroundColor: "#e8e8e8", marginTop: 10 }}> </div>
                      <div className="viewLine exp" style={{ height: 10, width: "40%", backgroundColor: "#e8e8e8", marginTop: 10 }}> </div>
                  </div>
                 
              </div>
          )}

      </div>

  );
}
export { countProperties, getContentCompetence, decrypt, getTextLang, getClassTitleArticle, loadingForm, loadingProjet };