import React, { useState } from 'react';
import axios from 'axios';
import { useApiContext } from '../components/ApiContext';

const PaymentForm = () => {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { paymentApiUrl } = useApiContext();

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await axios.post(paymentApiUrl, {
                amount: amount,
                currency: currency
            });

            if (response.data.success) {
                setMessage(`Payment successful! Transaction ID: ${response.data.transactionId}`);
            } else {
                setMessage('Payment failed.');
            }
        } catch (error) {
            setMessage('An error occurred during payment processing.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Make a Payment</h2>
            <form onSubmit={handlePayment}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                        Amount
                    </label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currency">
                        Currency
                    </label>
                    <select
                        id="currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="INR">INR</option>
                        {/* Add more currencies as needed */}
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                    disabled={loading}
                >
                    {loading ? 'Processing...' : 'Pay Now'}
                </button>
            </form>
            {message && (
                <div className="mt-4 p-2 text-center text-white bg-green-500 rounded">
                    {message}
                </div>
            )}
        </div>
    );
};

export default PaymentForm;
