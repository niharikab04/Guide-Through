import React, { createContext, useState,useEffect } from 'react';

export const TipContext = createContext();

export const TipProvider = ({ children }) => {
    const [tip, setTip] = useState(() => {
        // Load initial value from local storage if available
        const savedTip = localStorage.getItem('tip');
        return savedTip ? JSON.parse(savedTip) : null;
    });

    useEffect(() => {
        // Save tip to local storage whenever it changes
        if (tip) {
            localStorage.setItem('tip', JSON.stringify(tip));
        }
    }, [tip]);

    return (
        <TipContext.Provider value={{ tip, setTip }}>
            {children}
        </TipContext.Provider>
    );
};
