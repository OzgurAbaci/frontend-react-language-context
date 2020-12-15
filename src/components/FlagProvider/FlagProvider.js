import React, {useContext} from 'react';
import {LanguageContext} from "../../context/languageContext/LanguageContext";
import { ReactComponent as FlagNL } from '../../assets/netherlands.svg';
import { ReactComponent as FlagES } from '../../assets/spain.svg';


export function FlagProvider(){
    const {language} = useContext(LanguageContext);

    if(language === 'nl'){
        return <FlagES />
    } else{
        return <FlagNL />
    }
}