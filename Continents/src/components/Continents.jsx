import React from "react";
import { useSelector } from "react-redux";
import "../index.css";
import styles from "./styles";
import { Link } from "react-router-dom";

export default function Continents() {
  const { allCountries, country, mode, search } = useSelector((store) => store);

  return (
    <section
      className={` ${styles.paddingX} ${styles.paddingY} ${
        mode === "light" ? "" : "bg-dark text-white"
      }`}
    >
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        {country.length > 0 &&
          country
            .filter(({ ...all }) => {
              if (search.toLowerCase() === "") {
                return { ...all };
              }
              if (search.toLowerCase() !== "") {
                return all.name.common
                  .toLowerCase()
                  .includes(search.toLowerCase());
              }
            })
            .map(({ ...all }, index) => {
              return (
                <Link to={`/country/${all.name.common}`} key={index}>
                  {/* //this div will center the items in the center of the screen */}
                  <div className="flex flex-col shadow-lg  mx-auto max-w-[320px] rounded-lg">
                    <div className="   h-[200px]  ">
                      <img
                        src={all.flags.png}
                        alt=""
                        className="w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className=" h-1/2  pt-2 flex flex-col pl-4">
                      <h2 className="font-semibold text-[18px] ">
                        {all.name.common}
                      </h2>
                      <div className="mt-2">
                        <h3>
                          <span className="text-md font-semibold">
                            Capital:
                          </span>{" "}
                          {all.capital ? all.capital[0] : ""}
                        </h3>
                        <h3>
                          <span className="text-md font-semibold">
                            Population:
                          </span>{" "}
                          {all.population}
                        </h3>
                        <h3>
                          <span className="text-md font-semibold">Region:</span>{" "}
                          {all.region}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
      </div>
    </section>
  );
}
