import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { updateAllCountries, setSearch } from "../features/countrySlice";
import { options } from "../selectOptions";

export default function AllCountries() {
  const { search, mode, allCountries } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [state, setState] = useState(allCountries);

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  console.log(state);
  console.log(search);

  async function name() {
    const api = await fetch(`https://restcountries.com/v3.1/all`);
    const response = await api.json();

    console.log(response);

    dispatch(updateAllCountries(response));
    setState(response);
  }

  useEffect(() => {
    name();
  }, []);

  return (
    <section className={`${styles.paddingX}  `}>
      <div className={`${styles.boxWidth}`}>
        <div className=" flex flex-row justify-between items-center  ">
          {/* <Search className="shadow-lg" /> */}
          <select onChange={handleChange} className="shadow-xl h-[30px]">
            <option defaultValue disabled>
              Select Continent
            </option>
            <option value="europe">Europe</option>
            <option value="africa">Africa</option>
            <option value="north america">North America</option>
            <option value="south america">South America</option>
            <option value="oceania">Oceania</option>
            <option value="asia">Asia</option>
          </select>

          <form onChange={handleChange}>
            {" "}
            <h1 className={`${mode === "light" ? "" : "text-white"} `}>
              Search by country
            </h1>
            <input
              type="Search"
              className="shadow-xl h-[30px]"
              placeholder="Search.."
            />
          </form>
        </div>
      </div>
    </section>
  );
}
