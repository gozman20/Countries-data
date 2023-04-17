import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styles";
import ScrollToTop from "./ScrollToTop";

export default function Country() {
  const { allCountries, mode } = useSelector((store) => store);
  const [curr, setCurrency] = useState([]);
  const [countryLanguage, setCountryLanguage] = useState([]);
  console.log(allCountries);
  const { id } = useParams();
  const country = allCountries.find(({ name }) => name.common === id);

  function getCurrency() {
    const currency = Object.values(country.currencies).map(
      (currency) => currency.name
    );
    console.log(currency);
    setCurrency(currency);
  }
  const language = Object.entries(country.languages);
  console.log(language);

  function getLanguage() {
    const allLanguages = [];
    const language = Object.entries(country.languages).map((language) =>
      allLanguages.push(language[1])
    );
    console.log(allLanguages);
    setCountryLanguage(allLanguages);
  }

  useEffect(() => {
    getCurrency();
    getLanguage();
  }, [id]);

  console.log(country);
  return (
    <section
      className={` ${
        mode === "light" ? "" : "bg-dark text-white"
      } container mx-auto`}
    >
      <ScrollToTop />
      <div
        className={`${styles.paddingY} ${styles.paddingX} flex flex-col md:flex-row justify-center  items-center md:items-start md:gap-x-10 md:gap-y-0 gap-y-6`}
      >
        {/* ---country name and flag */}
        <div className="flex flex-col-reverse md:flex-col justify-center items-center ">
          <div className="md:w-[400px] md:h-[300px]  object-cover">
            <img src={country.flags.png} className="h-[100%] w-[100%]  " />
          </div>
          <h1
            className={`${
              mode === "light" ? "" : "text-white"
            } font-bold md:text-[38px]  text-[25px]`}
          >
            {country.name.common}
          </h1>
        </div>
        {/* ---country info---- */}
        <div className="flex flex-col justify-center  gap-y-2">
          <h3>
            <span className="text-md font-semibold"> Capital:{""}</span>{" "}
            {country.capital[0]}
          </h3>
          <h3>
            <span className="text-md font-semibold"> Continent:</span> {""}{" "}
            {country.continents[0]}
          </h3>
          <h3>
            <span className="text-md font-semibold"> Currency:{""}</span>{" "}
            {curr[0]}
          </h3>
          <h3>
            <span className="text-md font-semibold"> Population: {""}</span>
            {country.population}
          </h3>
          <h3>
            <span className="text-md font-semibold"> Region: {""}</span>
            {country.region}
          </h3>
          <h3>
            <span className="text-md font-semibold"> Language: {""}</span>
            {countryLanguage.join(", ")}
          </h3>

          {country.borders && (
            <h3>
              <span className="text-md font-semibold">Borders: {""} </span>
              {country.borders.join(", ")}
            </h3>
          )}
        </div>
      </div>
    </section>
  );
}
