import React, { useEffect, useState } from "react"
import fetchPopularRepos from "../../api"
import Repos from "./Repos"
import SelectLanguage from "./SelectLanguages"

const Popular = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(null)
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const url = new URL(window.location);
        const languageFromURL = url.searchParams.get('language')
        setSelectedLanguage(languageFromURL)
    },[])


    useEffect(() => {
        if(selectedLanguage !== null) { 
            const url = new URL(window.location);
            url.searchParams.set('language', selectedLanguage);
            window.history.pushState({}, '', url);
        setLoading(true)
        fetchPopularRepos(selectedLanguage)
        .then((data)=> {
            setRepos(data)
            setLoading(false)
        })}
    },[selectedLanguage])
    
    const onSelectLanguage = (language) => {
        if(loading) return
        setSelectedLanguage(language)
    }

    return (
       <>
        <SelectLanguage   
        selectedLanguage={selectedLanguage}
        onSelectLanguage={onSelectLanguage}

        />
        {loading ? <p>Loading...</p> : null}
            <Repos 
            repos={repos} />
       </>
       
    )
}
export default Popular