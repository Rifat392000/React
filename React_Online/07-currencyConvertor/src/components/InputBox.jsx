import React, { useId } from 'react';

function InputBox({
  label, // Label for the input field
  amount, // Amount entered by the user
  onAmountChange, // Function to handle changes in amount input
  onCurrencyChange, // Function to handle changes in currency selection
  currencyOptions = [], // List of available currency options
  selectCurrency = 'usd', // Default selected currency
  amountDisable = false, // Disable the amount input field if true
  currencyDisable = false, // Disable the currency dropdown if true
  className = '', // Additional class names for styling
}) {
  const inputLevelTrack = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      {/* Input field for entering the amount */}
      <div className="w-1/2">
        <label htmlFor={inputLevelTrack} className="text-black/40 mb-2 inline-block">{label}</label>
        <input

          id={inputLevelTrack}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable} // Disable input if amountDisable is true
          value={amount} // Display the entered amount
          onChange={(e) => onAmountChange(Number(e.target.value))} // Handle amount change
        />
      </div>
      {/* Dropdown for selecting the currency type */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency} // Set the selected currency
          onChange={(e) => onCurrencyChange(e.target.value)} // Handle currency change
          disabled={currencyDisable} // Disable dropdown if currencyDisable is true
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()} {/* Display currency in uppercase */}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
