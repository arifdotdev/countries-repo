import { Suspense } from "react";
import "./App.css";

import type { CountryType } from "./type";
import Countries from "./Countries/Countries";

const countriesPromise:Promise<CountryType[]> = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())
  .then(data => data.countries)

function App() {
  return (
    <>
      <h2>World on the go...</h2>

      <Suspense fallback={<div>Loading...</div>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;