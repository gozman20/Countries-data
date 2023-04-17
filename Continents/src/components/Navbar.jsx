import React, { useState } from "react";
import styles from "./styles";
import { CiDark, CiLight } from "react-icons/ci";
import { setMode } from "../features/countrySlice";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { mode } = useSelector((store) => store);
  console.log(mode);
  return (
    <div className={`${styles.paddingX} pt-6 shadow-lg  `}>
      <nav>
        <div className="flex flex-row justify-between items-center">
          <h1 className={`text-[40px] ${mode === "light" ? "" : "text-white"}`}>
            Countries of the world
          </h1>

          {toggle ? (
            <CiLight
              className={`text-[40px] ${mode === "light" ? "" : "text-white"}`}
              onClick={() => {
                dispatch(setMode());
                setToggle((prev) => !prev);
              }}
            />
          ) : (
            <CiDark
              className={`text-[40px] ${mode === "light" ? "" : "text-white"}`}
              onClick={() => {
                dispatch(setMode());
                setToggle((prev) => !prev);
              }}
            />
          )}
        </div>
      </nav>
    </div>
  );
}
