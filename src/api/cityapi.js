import { useState, useEffect } from "react";

const CityApi = () =>{
    let[allcity, setCity] = useState( [] );

    const getCity = () =>{
        fetch("city.json")
        .then(response =>response.json())
        .then(cityArray =>{
            setCity( cityArray.sort() );
        })
    }

    useEffect(()=>{
        getCity();
    }, []);

    return(
        <section>
            <h1> How to make Api Call </h1>
            <p>
                <button onClick={getCity}> Display City </button>
            </p>

            <fieldset>
                <legend> Total City : { allcity.length } </legend>
                {
                    allcity.map((cityname, index)=>{
                        return(
                            <p key={index}> { cityname } </p>
                        )
                    })
                }
            </fieldset>

            <fieldset>
                <legend> Display in select box </legend>
                <select>
                    <option>Choose City </option>
                    {
                        allcity.map((cityname, index)=>{
                            return(
                                <option key={index}> { cityname } </option>
                            )
                        })
                    }
                </select>
            </fieldset>   

            <fieldset>
                <legend> Display in Checkbox </legend>
                    {
                        allcity.map((cityname, index)=>{
                            return(
                                <p key={index}> 
                                    <input type="checkbox"/> { cityname } 
                                </p>
                            )
                        })
                    }
            </fieldset>   

            <fieldset>
                <legend> Display in Radio Button </legend>
                    {
                        allcity.map((cityname, index)=>{
                            return(
                                <p key={index}> 
                                    <input type="radio" name="city"/> { cityname } 
                                </p>
                            )
                        })
                    }
            </fieldset>   

        </section>
    )
}

export default CityApi;