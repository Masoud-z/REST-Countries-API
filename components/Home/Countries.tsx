import React, {useState, useEffect, useContext} from 'react';
import {  Error, Grid, Loading } from './styles';
import Country from '../cards/Country';
import {RiLoader2Fill} from 'react-icons/ri'
import { RegionContext } from '../helper/RegionContext';
import { CountryContext } from '../helper/CountryContext';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [showLoading, setshowLoading] = useState(true);
    const [errorHandler, setErrorHandler] = useState(false);
    const {region, setRegion}:any = useContext(RegionContext);
    const {searchedCountry,setSearchedCountry}:any = useContext(CountryContext);

    
    useEffect(()=>{
        if(region != ""){
            setCountries([]);
            fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then(res => res.json())
            .then(data =>{data.status ? setErrorHandler(true)
                : setCountries(data), setErrorHandler(false);});
                console.log("region");
                
        }
        if(searchedCountry != ""){
            setCountries([]);
            // setRegion("");
            fetch(`https://restcountries.com/v3.1/name/${searchedCountry}`)
            .then(res => res.json())
            .then(data =>{ 
                if(data.status) {
                    setErrorHandler(true);setCountries([]);}
                else {
                    setCountries(data); setErrorHandler(false);
                }
         });
         console.log("country");
        }
        if(searchedCountry === "" && region === ""){
            setCountries([]);
            setErrorHandler(false)
            fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data =>{ setCountries(data); });
            console.log("all");
            
        } 

    }, [region, searchedCountry])
    
    
    
    const CountriesCard= countries.map(country =>{ 
        return(  
           <Country
             key={country.name.common} 
             img={country.flags.png}
             name={country.name.common}
             population={country.population.toLocaleString()}
             continent={country.continents[0]}
             capital={country.capital} /> 
        )
    });

    return (
        <>
            {countries.length == 0 && !errorHandler && <Loading dark>
                <RiLoader2Fill />
            </Loading>}
            {errorHandler && <Error dark>
                    Country not Found
                </Error>}
            <Grid>
               {CountriesCard}
            </Grid>
        </>
    );
};

export default Countries;