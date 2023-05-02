import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAllCountries,
  setSearch,
  setCountry,
} from "../features/countrySlice";
import { options } from "../selectOptions";

export default function AllCountries() {
  const { search, mode, allCountries } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [state, setState] = useState(allCountries);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  //function that takes selected value, filters out the selected continent and dispatches it
  const handleSelect = (e) => {
    setLoading(true);
    const continent = allCountries.filter((country) => {
      if (e.target.value === "All") {
        return allCountries;
      } else {
        return country.continents[0] === e.target.value;
      }
    });

    setTimeout(() => {
      dispatch(setCountry(continent));
      setLoading(false);
    }, 3000);
  };

  console.log(state);
  console.log(search);

  async function name() {
    const api = await fetch(`https://restcountries.com/v3.1/all`);
    const response = await api.json();

    console.log(response);

    dispatch(updateAllCountries(response));
    dispatch(setCountry(response));
    setState(response);
  }

  useEffect(() => {
    name();
    dispatch(setSearch(""));
  }, []);
  if (loading) return "Loading...";

  return (
    <section className={`${styles.paddingX} relative `}>
      <div className={`${styles.boxWidth} `}>
        <di className=" flex flex-col md:flex-row justify-between items-center gap-y-3 ">
          {/* <Search className="shadow-lg" /> */}
          <div>
            <h3>Filter by Continent</h3>
            <select
              onChange={handleSelect}
              className="shadow-xl h-[30px] outline-none border border-gray-300"
            >
              <option defaultValue disabled>
                Select Continent
              </option>
              <option value="All">All continents</option>
              <option value="Europe">Europe</option>
              <option value="Africa">Africa</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Oceania">Oceania</option>
              <option value="Asia">Asia</option>
            </select>
          </div>

          <form onChange={handleChange} className="text-center">
            {" "}
            <h1 className={`${mode === "light" ? "" : "text-white"} `}>
              Search by country
            </h1>
            <input
              type="Search"
              className="shadow-xl h-[30px] outline-none border border-gray-300 rounded-lg"
              placeholder="Search.."
            />
          </form>
        </di>
      </div>
    </section>
  );
}
