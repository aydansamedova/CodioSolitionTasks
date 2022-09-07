import axios from "axios";

export const currency = async () => {
  try {
    const currency = await axios(
      "https://api.exchangerate.host/latest?base=USD"
    );
    return currency.data;
  } catch (err) {
    console.log(err);
  }
};
