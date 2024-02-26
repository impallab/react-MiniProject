import { useState } from 'react';
import {InputBox} from "./components";
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount,setAmount]=useState(1);
  const [convertFrom,setConvertFrom]=useState("usd");
  const [convertTo,setConvertTo]=useState("inr");
  const [convertedAmount,setConvertedAmount]=useState(0);
  const currencyInformation =useCurrencyInfo(convertFrom);
  const options = Object.keys(currencyInformation)

  const swapFunc = ()=>{
    setConvertFrom(convertTo);
    setConvertTo(convertFrom);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = ()=>{
    setConvertedAmount(amount * currencyInformation[convertTo]);
  }

  document.body.style.backgroundColor="black" 
  const [count, setCount] = useState(0)
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20220512/pngtree-growing-chart-against-the-background-of-the-usa-america-flag-candlestick-image_1298783.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 hover:bg-black hover:border-red-600 ">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectedCurrency={convertFrom}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-red-600 rounded-md bg-black text-cyan-300 px-2 py-0.5 transition-colors duration-500 hover:bg-red-600 hover:text-white hover:border-cyan-400 "
                            onClick={swapFunc}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setConvertTo(currency)}
                            selectedCurrency={convertTo}
                            amountDisabled
                        />
                    </div>
                    <button type="submit" className="w-full bg-black border border-cyan-400 text-cyan-300 px-4 py-3 rounded-lg transition-colors duration-3000 hover:bg-gradient-to-r from-black  to-white/30 hover:text-red-600 hover:border-red-600">
                        Convert {convertFrom.toUpperCase()} to {convertTo.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
