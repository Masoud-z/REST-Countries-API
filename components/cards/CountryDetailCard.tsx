/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useContext, useEffect, useState } from 'react';
import { Dark } from '../helper/Dark';
import { Button, Flex, FlexColumn, Grid } from './styles';

const CountryDetailCard = (props:any) => {

    const {darkMode, setDarkMode}:any = useContext(Dark);
    const nativeName = Object.values(props.native)[0];
    const currencies = Object.values(props.currencies).map(currency=>currency.name);
    const languages = Object.values(props.languages);
    const [borderCountries,setBorderCountries]:any = useState([]);


    // useEffect(()=>{
    //     setBorderCountries([]);
    //     let newArray:any =[];
    //     props.borders.map(country=>{
    //         fetch(`https://restcountries.com/v3.1/alpha/${country}`)
    //         .then(res => res.json())
    //         .then(data =>{setBorderCountries(perv=>{
    //             newArray = perv;
    //             newArray.push(data[0]);
    //             return newArray;
    //             })
    //         })
    //     });
    // },[])

    // console.log(borderCountries);
  

    //   const  borderCountriesBotton = borderCountries.map(borderCountry=>{
    //         console.log(borderCountry);
    //         return(
    //             <Button key={borderCountry.name.common} dark={darkMode}>{borderCountry.name.common}</Button>
    //         )
    //     });

        
        // console.log(borderCountriesBotton);
        

    
    return (
        <Grid>
          <img src={props.img} alt={props.name}/> 

            <FlexColumn dark={darkMode}>
                <h1>{props.name}</h1>
                <Flex dark={darkMode}>
                    <FlexColumn dark={darkMode}>
                        <p>
                            <b>Native Name: </b>
                            {nativeName.common}
                        </p>

                        <p>
                            <b>Population: </b>
                            {props.population}
                        </p>

                        <p>
                            <b>Region: </b>
                            {props.region}
                        </p>

                        <p>
                            <b>Sub Region: </b>
                            {props.subregion}
                        </p>

                        <p>
                            <b>Capital: </b>
                            {props.capital}
                        </p>
                    </FlexColumn>

                    <FlexColumn dark={darkMode}>
                        <p>
                            <b>Top Level Domain: </b>
                            {props.tld}
                        </p>

                        <p>
                            <b>Currencies: </b>
                            {currencies}
                        </p>

                        <p>
                            <b>Languages: </b>
                            {languages.toString()}
                        </p>
                    </FlexColumn>
                </Flex>

                <Flex dark={darkMode} css={css`margin-top:0px;`}>
                    <p><b>Border Countries: </b></p>
                </Flex>
            </FlexColumn>
        </Grid>
    );
};

export default CountryDetailCard;