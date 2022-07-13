import React, { createContext } from 'react';

const AuthProvider = () => {
    const AuthContext = createContext();
    return (
        <AuthContext.Provider value ="kisu na">
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;