import React, {createContext,  useContext, useEffect, useState} from "react";

export const data = {
    en: {
        card: 'card',
        order: 'order',
        result: 'result',
        checkout: 'checkout',
        check_the_entered: 'Check the entered data'
    },
    rus: {
        card: 'корзина',
        order: 'заказ',
        result: 'результат',
        checkout: 'оформить заказ',
        check_the_entered: 'Проверте введенные данные'
    },
};

const SettingContext = createContext({});

export const LanguageProvider = ({children}) => {
    const [lang, setLang] = useState("Eng");
    const [text, setText] = useState({});

    const onChangeLang = () => setLang(prev => {
        return (prev === "Eng")? "Рус" : "Eng"
    });

    const getLanguage = () => {
        if (lang === "Eng") {
          setText(data.en);
        }
        else {
          setText(data.rus);
        }
    };

    useEffect(() => getLanguage(), [getLanguage, lang]);
    const value = { text, lang, onChangeLang };

    return (
        <SettingContext.Provider value={value}>
            {children}
        </SettingContext.Provider>
    );
};

export const useLanguage = () => useContext(SettingContext);