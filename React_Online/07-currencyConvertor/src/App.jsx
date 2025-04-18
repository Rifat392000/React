import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  // State variables for amount, currency selection, and converted amount
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('bdt');
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetching currency info for the "from" currency
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // Function to swap the "from" and "to" currencies along with their values
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  // Function to convert the amount based on exchange rate
  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          {/* Form to handle currency conversion */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* Input box for entering amount and selecting "from" currency */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(val)=> setAmount(val)}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOptions={options}
                selectCurrency={from}

              />
            </div>

            {/* Button to swap currencies */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            {/* Input box for displaying converted amount and selecting "to" currency */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                currencyOptions={options}
                selectCurrency={to}
                amountDisable = {true}
              />
            </div>

            {/* Button to trigger conversion */}
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;