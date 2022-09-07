import { createContext, useEffect, useState } from "react";
import { currency } from "../api/api";

// context
export const GlobalContext = createContext({});

// provider
export const GlobalProvider = ({ children }) => {
  const [rates, setRates] = useState();
  const [text, setText] = useState(1);
  const [country1, setCountry1] = useState([]);
  const [country2, setCountry2] = useState([]);
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  const [num, setNum] = useState(1);

  useEffect(() => {
    currency().then((data) => {
      setRates(data.rates);
      setCountry2(data.rates);
      setCountry1(data.rates);
    });
    convert()
  }, []);

  const convert = () => {
    let num =(value2 / value1) * text;

setNum(num)
};
 

  return (
    <GlobalContext.Provider
      value={{
        rates,
        text,
        setText,
        country2,
        country1,
        num,
        value2,
        setValue1,setValue2,convert
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
