import React from "react"
import classnames from 'classnames'

const SelectLanguage = ({onSelectLanguage,selectedLanguage}) => {


    const languages = ['All', 'Javascript', 'Python', 'CSS', 'Java', 'Ruby']
return (
    <ul className="languages">
        {languages.map((language, index) => {
            return (
            <>
                <li 
                className={classnames('languages-item',{'languages-item_active': language === selectedLanguage })}
                key={index + language}
                onClick={()=> onSelectLanguage(language)}>    
                {language}
                </li>
                
            </>
            )
        })}
    </ul>
)
}

export default SelectLanguage