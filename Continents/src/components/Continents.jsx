import React from "react";
import { useSelector } from "react-redux";
import "../index.css";
import styles from "./styles";
import { Link } from "react-router-dom";

export default function Continents() {
  const { allCountries, mode, search } = useSelector((store) => store);

  return (
    <div
      className={` flex flex-wrap justify-center md:gap-x-5 md:gap-y-0 gap-y-5 ${
        styles.paddingX
      } ${styles.paddingY} ${mode === "light" ? "" : "bg-dark text-white"}`}
    >
      {allCountries.length > 0 &&
        allCountries
          .filter(({ ...all }) => {
            return search.toLowerCase() === ""
              ? { ...all }
              : all.name.common.toLowerCase().includes(search.toLowerCase());
          })
          .map(({ ...all }, index) => {
            return (
              <Link
                to={`/country/${all.name.common}`}
                key={index}
                className="  flex flex-col shadow-lg    "
              >
                <div className=" h-1/2 rounded-tl-[35px]">
                  <img
                    src={all.flags.png}
                    alt=""
                    className="w-[100%] h-[100%] "
                  />
                </div>
                <div className=" h-1/2  pt-2 flex flex-col pl-4">
                  <h2 className="font-semibold ">{all.name.common}</h2>
                  <div className="mt-2">
                    <h3>
                      <span className="text-md font-semibold">Capital:</span>{" "}
                      {all.capital ? all.capital[0] : ""}
                    </h3>
                    <h3>
                      <span className="text-md font-semibold">Population:</span>{" "}
                      {all.population}
                    </h3>
                    <h3>
                      <span className="text-md font-semibold">Region:</span>{" "}
                      {all.region}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
    </div>
  );
}
