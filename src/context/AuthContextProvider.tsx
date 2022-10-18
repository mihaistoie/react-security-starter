import React from "react";
import { useState } from "react";
import { AuthContextInterface } from "src/context/AuthContext";

const AuthContextProvider = React.createContext<{
    auth?: AuthContextInterface;
    setAuth?: React.Dispatch<React.SetStateAction<AuthContextInterface>>;
}>({
    auth: {},
    setAuth: null
});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState<AuthContextInterface>({});

    return (
        <AuthContextProvider.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContextProvider.Provider>
    );
};

export default AuthContextProvider;
