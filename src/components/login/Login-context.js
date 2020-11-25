import React, { createContext, useContext, useState } from "react";

const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {

	const login = useState({logged: false});

	return (
		<LoginContext.Provider value={login}>
			{children}
		</LoginContext.Provider>
	);
};

export const useLogin = () => useContext(LoginContext)

export default LoginContext;
