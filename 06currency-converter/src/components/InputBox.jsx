import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "inr",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    const amountInputId = useId()
    return (
        <div className={`bg-black/85 p-3 rounded-lg text-lg text-cyan-400 flex border border-cyan-400 hover:bg-gradient-to-r from-black  to-white/30 hover:text-black hover:border-red-600 ${className}`}>
            <div className='w-1/2 hover:text-red-600'>
                <label htmlFor={amountInputId} className='bg-transparent rounded-lg text-cyan-400 text-black/40 mb-2 inline-block hover:text-red-600 '>
                    {label}
                </label>
                <input
                    id={amountInputId}
                    type="number"
                    placeholder='Amound'
                    className='outline-none w-full bg-transparent py-1.5'
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-cyan-300 mb-2 w-full hover:text-red-700'>Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-transparent border border-red-600 cursor-pointer outline-none hover:text-red-600"
                    disabled={currencyDisabled}
                    value={selectedCurrency}
                    onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }}
                >
                    {
                        currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))
                    }
                </select>

            </div>
        </div>


    );
};

export default InputBox