import React, { useContext, useEffect, useState } from "react";

export const API_URL = `https://www.omdbapi.com/?apikey=e23eba27`;
const AppContext =  React.createContext();

//we need to create provider function
const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({show:"false", msg:""});
    const [query, setQuery] = useState("titanic");
    const getMovies = async (url) => {
        setIsLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
           
            if(data.Response === "True"){
                setIsLoading(false);
                setMovie(data.Search);
                
                
            }
           
            else{
              setIsError({
                show:true,
                msg: data.error,
              })
            }
          
            
        } 
        catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        let timeOut = setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);
        },1000)
        return () => clearTimeout(timeOut);
    },[query]);
   
    //the app that we wrapped we cat get that data so we use children
    //Those data we want to pass to another component then we have to pass it in value
        return<AppContext.Provider value={{isLoading, isError, movie, query, setQuery}}>
            {children}
        </AppContext.Provider>
}

//global context hooks (Alternative method)
const useGlobalContext  = () => {
    return useContext(AppContext);
}
export {AppContext, AppProvider, useGlobalContext};