import DefaultCurrency from "../DefaultCurrency/DefaultCurrency";
import React, { useContext } from "react";
import { GlobalContext } from "../../service/context/Context";

export default function Home() {
  const {
    rates,
    country1,
    country2,
    setText,
    text,
    value2,
    num,
    setValue1,
    setValue2,
    convert,
  } = useContext(GlobalContext);

  return (
    <div className="m-auto app">
      <form className="mt-12" onChange={convert()}>
        <div className="flex justify-between">
          <div className="selectInput">
            <select
              onChange={(e) => setValue1(e.target.value)}
              className="w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-center shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
              {country1
                ? Object.keys(country1).map((val, idx) => (
                    <option key={idx} value={country1[val]}>
                      {val}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <div className="icons flex flex-col items-center justify-center">
            <i className="fa-solid fa-arrow-right"></i>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="selectInput">
            <select
              onChange={(e) => setValue2(e.target.value)}
              className="w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-center shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            >
              {country2
                ? Object.keys(country2).map((val, idx) => (
                    <option key={idx} value={country2[val]}>
                      {val}
                    </option>
                  ))
                : null}
            </select>
          </div>
        </div>
        <div className="form flex flex-col">
          <label htmlFor="" className="ml-3">
            Amount
          </label>
          <div className="inputCurrency w-full flex items-center justify-between">
            <input
              type="number"
              onChange={(e) => setText(e.target.value)}
              className="cursor-default  focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            />
            <button type="button">
              <i className="fa-solid fa-arrows-rotate"></i>
            </button>
          </div>
          <h3 className="ml-3">{`${num}  `}</h3>
        </div>

        {rates
          ? Object.keys(rates).map((key) => (
              <>
                {key === "USD" ||
                key === "EUR" ||
                key === "TRY" ||
                key === "RUB" ? (
                  <DefaultCurrency
                    key={key}
                    fxSymbol={key}
                    fxRate={(value2 / rates[key]) * text}
                  />
                ) : null}
              </>
            ))
          : null}
      </form>
    </div>
  );
}
