import React, { createContext, useContext } from 'react';

const ApiContext = createContext();

export const useApiContext = () => {
    return useContext(ApiContext);
};

export const ApiProvider = ({ children }) => {
    const value = {
        paymentApiUrl: 'http://localhost:5050/payment' // Add your API endpoint here
    };

    return (
        <ApiContext.Provider value={value}>
            {children}
        </ApiContext.Provider>
    );
};
