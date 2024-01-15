import { useEffect, useState } from "react";
import conf from "../../conf/conf";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    const request = conf(currency);
    fetch(request)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;

