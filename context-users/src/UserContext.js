import React, { createContext, useState } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
	const [userState, setUserState] = useState({
		Bob: true,
		Gary: true,
		Jessica: true,
		Sam: true,
		Eric: true,
	});

	return (
		<UserContext.Provider value={{ userState, setUserState }}>
			{children}
		</UserContext.Provider>
	);
};
