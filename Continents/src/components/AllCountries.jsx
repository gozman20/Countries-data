import React, { useState, useEffect } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAllCountries } from "../features/countrySlice";
import styles from "./styles";
import DropDown from "./DropDown";

export default function AllCountries() {
  const [selected, setSelected] = useState("Select a continent");
  const { mode } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [AllCountriesData, setAllCountriesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  async function getAllCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setAllCountriesData(data);
    dispatch(setAllCountries(data));
  }

  const typeFilter = searchParams.get("continents");
  const displayedCountries = typeFilter
    ? AllCountriesData.filter((country) => country.continents[0] === typeFilter)
    : AllCountriesData;
  // console.log(typeFilter);

  //onSearch
  function onSearch(e) {
    setSearch(e.target.value);
  }

  //useEffect
  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className={`${styles.paddingX}`}>
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 px-[20px] gap-y-[6px] ">
        {/* <div className="w-[200px] h-[30px] "></div> */}
        <DropDown
          selected={selected}
          setSelected={setSelected}
          setSearchParams={setSearchParams}
        />
        <div className="w-[200px] h-[30px]">
          <input
            type="search"
            placeholder="E.g Nigeria"
            className="w-full h-full outline-none p-2"
            onChange={onSearch}
          />
        </div>
      </div>
      <div className={`grid place-items-center `}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
          {displayedCountries
            .filter((country) => {
              if (search === "") {
                return country;
              } else if (
                country.name.common.toLowerCase().includes(search.toLowerCase())
              ) {
                return country;
              }
            })
            .map((country, index) => (
              <Link
                to={`/country/${country.name.common}`}
                key={index}
                className={`${
                  mode === "light"
                    ? ""
                    : "bg-dark text-white border border-white"
                } `}
              >
                <div className="h-[350px] css-shadow">
                  {" "}
                  <div className="h-[50%]">
                    <img
                      className="h-full w-full object-cover"
                      src={country.flags.png}
                    />
                  </div>
                  {/* country details */}
                  <div className="h-[50%] p-2">
                    <div className="mb-2 font-bold lg:text-[30px] text-[25px]">
                      {country.name.common}
                    </div>
                    <div>
                      <span className="font-bold">Capital: </span>
                      {country.capital?.[0]}
                    </div>
                    <div>
                      <span className="font-bold">Population: </span>
                      {country.population}
                    </div>
                    <div>
                      <span className="font-bold">Region: </span>
                      {country.region}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
