import i18next from "react-i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector0";


function Language () {
i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbacking: 'en',
        resources: {
            en: {
                translation: {
                    learn: 'Learn React'
                }
            }
        }
    })
}

export default Language
