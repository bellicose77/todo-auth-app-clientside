import React, { createContext } from 'react';

const AuthProvider = ({children}) => {
    const AuthContext = createContext();
    return (
        <AuthContext.Provider value ="kisu na">
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;