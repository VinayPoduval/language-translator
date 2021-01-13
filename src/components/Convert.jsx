import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
    const [translatedText, setTranslated] = useState('');
    const [debouncedText, setDebounced] = useState(text);

    useEffect(()=>{
        const timerId = setTimeout(()=>setDebounced(text), 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(()=>{
        const getTranslated = async() => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            });
            setTranslated(data.data.translations[0].translatedText)
        };
        getTranslated();
    }, [language, debouncedText]);
    return(
        <React.Fragment>
            <input type="text" placeholder="Translated text..." value={translatedText} readOnly/>
        </React.Fragment>
    );
}

export default Convert;