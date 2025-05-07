import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Payment = () => {
    const [amount, setAmount] = useState(0);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { ride } = location.state || {};

    useEffect(() => {
        if (ride?.fare) {
            setAmount(ride.fare);
        }
    }, [ride]);

    const initPayment = async () => {
        try {
            setLoading(true);
            const { data } = await axios.post('http://localhost:5000/api/payment/orders', 
                { amount: amount },
                { 
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            if (!data.success) {
                throw new Error('Failed to create payment order');
            }

            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID,
                amount: data.order.amount,
                currency: "INR",
                name: "HeyTaxi",
                description: "Taxi Payment",
                order_id: data.order.id,
                handler: async (response) => {
                    try {
                        const verifyResponse = await axios.post(
                            'http://localhost:5000/api/payment/verify',
                            {
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                rideId: ride._id
                            },
                            {
                                headers: {
                                    'Content-Type': 'application/json',
                                }
                            }
                        );

                        if (verifyResponse.data.success) {
                            alert('Payment Successful!');
                            navigate('/home');
                        } else {
                            alert('Payment verification failed');
                        }
                    } catch (error) {
                        console.error('Verification Error:', error);
                        alert('Payment verification failed');
                    }
                },
                prefill: {
                    name: ride?.user?.name || '',
                    email: ride?.user?.email || '',
                    contact: ride?.user?.phone || ''
                },
                theme: {
                    color: "#3399cc"
                }
            };

            const razorpayInstance = new window.Razorpay(options);
            razorpayInstance.open();

        } catch (error) {
            console.error('Payment Error:', error);
            alert('Failed to initialize payment');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Payment Page</h1>
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Amount (INR)</label>
                    <input
                        type="number"
                        value={amount}
                        readOnly
                        className="w-full px-3 py-2 border rounded bg-gray-50"
                    />
                </div>
                <button
                    onClick={initPayment}
                    disabled={loading}
                    className={`w-full ${loading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} 
                        text-white py-2 px-4 rounded transition-colors`}
                >
                    {loading ? 'Processing...' : `Pay Now ₹${amount}`}
                </button>
                <button
                    onClick={() => navigate(-1)}
                    disabled={loading}
                    className="w-full border-2 border-gray-300 text-gray-700 py-2 px-4 mt-2 
                        rounded hover:bg-gray-100 transition-colors"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
};

export default Payment;