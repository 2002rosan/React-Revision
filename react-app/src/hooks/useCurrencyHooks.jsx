import { useEffect, useState } from "react";

function useCurrencyHooks(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => {
            res.json()
        })
        .then((__data) => {
            setData(__data)
            console.log(__data); 
        })
    }, [currency])

    return data;
}

export default useCurrencyHooks;