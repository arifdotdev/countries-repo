import { use, useState } from "react";
import type { CountryType } from "../type";
import Country from "../Country/Country";
import './countries.css'

export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([])  
  const [visitedFlags, setVisitedFlags] = useState<string[]>([])
  const countries = use(countriesPromise);

  const handleVisitedCountry = (country: CountryType):void => {

    const exists = visitedCountries.find(c => c.ccn3.ccn3 === country.ccn3.ccn3)
    if(exists){
      const remainingCountries = visitedCountries.filter(c => c.ccn3.ccn3 !== country.ccn3.ccn3)
      setVisitedCountries(remainingCountries)
    }
    else{
      const newVisitedCountries = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountries);
    }
  }

  const handleVisitedFlags = (flag: string): void => {
      if(visitedFlags.includes(flag)){
        const remainingFlags = visitedFlags.filter(f => f !== flag)
        setVisitedFlags(remainingFlags)
      }
      else{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
      } 
  }

  return (
    <>
      <h2>Countries: {countries.length}</h2>
      <h4>Visited Countries: {visitedCountries.length}</h4>
      <h4>Visited flags: {visitedFlags.length}</h4>
      <div>
        {
          visitedCountries.map(country => <li>{country.name.common}</li>)
        }
      </div>
      <div className="visited-flags">
        {
          visitedFlags.map(flag => <img src={flag} alt="visited flags"/>)
        }
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </>
  );
}
