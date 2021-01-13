import React, { useState } from 'react';
import Dropdown from './components/Dropdown.jsx';
import Convert from './components/Convert.jsx';

const options = [
    {
        language: 'Spanish',
        value: 'es'
    },
    {
        language: 'French',
        value: 'fr'
    },
    {
        language: 'German',
        value: 'de'
    },
    {
        language: 'Russian',
        value: 'ru'
    },
    {
        language: 'Hindi',
        value: 'hi'
    }
];
const App = () => {
    const [language, setLanguage] = useState(options[0].value);
    const [text, setText] = useState('');

    return(
        <>
            <h1>Language Translator</h1>
            <div className="main-container">
                <input type="text" placeholder="Enter text to translate..." value={text} onChange={(e)=>setText(e.target.value)} />
                <p>*Type text here</p>
                <Dropdown 
                    selected={language}
                    onSelectChange={setLanguage}
                    options={options} />
                <Convert language={language} text={text} />
                <p>*You cant type here</p>
            </div>
        </>
    );
};

export default App;