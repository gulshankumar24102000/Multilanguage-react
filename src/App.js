import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'


// Contains the value and text for the options
const languages = [
	{ value: '', text: "Options" },
	{ value: 'en', text: "English" },
	{ value: 'hi', text: "Hindi" },
	{ value: 'ur', text: "Urdu" }
]

function App() {

	// It is a hook imported from 'react-i18next'
	const { t } = useTranslation();

	const [lang, setLang] = useState('');

	// This function put query that helps to
	// change the language
	const handleChange = e => {
    // e.prevent.Default()
		setLang(e.target.value);
		let loc = "http://localhost:3000/";
		window.location.replace(loc + "?lng=" + e.target.value);
	}

	return (
		<div className="App">

			
			<h1>{t('Home')}</h1>
			<label>{t('choose language value')}</label>

			<select value={lang} onChange={handleChange}>
				{languages.map(item => {
					return (<option key={item.value}
					value={item.value}>{item.text}</option>);
				})}
			</select>
		</div>
	);
}

export default App;
