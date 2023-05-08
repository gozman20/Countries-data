import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function CountryDetails() {
  const { allCountries, mode } = useSelector((store) => store);
  const { id } = useParams();
  console.log(id);

  const selectedCountry = allCountries.find(
    (country) => country.name.common === id
  );

  function language() {
    const countryLanguage = [];
    Object.entries(selectedCountry.languages).map((language) =>
      countryLanguage.push(language[1])
    );
    return countryLanguage.join();
  }

  function currency() {
    const result = Object.values(selectedCountry.currencies).map(
      (currency) => currency.name
    );
    return result;
  }
  return (
    <>
      <Link
        to=".."
        className={`py-2 px-3 ml-4 bg-black text-white ${
          mode === "light" ? "" : "border border-white"
        }`}
      >
        Back to previous page
      </Link>
      <div className="grid place-items-center ">
        <div>
          <div className="mb-2 font-bold text-[30px]">
            {selectedCountry.name.common}
          </div>
          <div
            className={`max-w-[350px] css-shadow  ${
              mode === "light" ? "" : "border border-white"
            }`}
          >
            {" "}
            <div className="">
              <img
                className="h-full w-full object-cover"
                src={selectedCountry.flags.png}
              />
            </div>
            {/* country details */}
            <div className={` p-2 ${mode === "light" ? "" : "text-white"}`}>
              <div>
                <span className="font-bold">Capital: </span>
                {selectedCountry.capital?.[0]}
              </div>
              <div>
                <span className="font-bold">Population: </span>
                {selectedCountry.population}
              </div>
              <div>
                <span className="font-bold">Region: </span>
                {selectedCountry.region}
              </div>
              {selectedCountry.borders && (
                <div>
                  <span className="font-bold">Border: </span>
                  {selectedCountry.borders.join(", ")}
                </div>
              )}
              <div>
                <span className="font-bold">Currency: </span>
                {currency()}
              </div>
              <div>
                <span className="font-bold">Language: </span>
                {language()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
