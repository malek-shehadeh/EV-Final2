import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear the cart after successful payment
    clearCart();

    // Redirect to home after 5 seconds
    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [clearCart, navigate]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center max-w-md mx-4">
        <div className="text-green-500 mb-6">
          <svg
            className="w-20 h-20 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Payment Successful!
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Thank you for your purchase. Your order has been processed successfully.
        </p>

        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          You will be redirected to the home page in 5 seconds...
        </p>

        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 
                   transition-colors duration-200"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;