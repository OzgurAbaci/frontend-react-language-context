import React, {createContext, useState} from 'react';

export const LanguageContext = createContext()

export function LanguageContextProvider({children}){
    const [language, setLanguage] = useState('nl');

    // function setDutch(){
    //     setLanguage('nl');
    // }
    //
    // function setSpanish(){
    //     setLanguage('es');
    // }

    function toggleLanguage(){
        if (language === 'nl'){
            setLanguage('es')
        } else {
            setLanguage('nl')
        }
    }

    const data = {
        language,
        toggleLanguage
    }

    return(
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    )
}