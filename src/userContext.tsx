import { ReactNode, createContext, useContext, useState } from "react";

interface User {
  email: string;
  username?: string;
  password: string;
}

interface userContextType {
  user: User | null;
  login: (userData: User) => void;
  updateUser: (userData: User) => void;
}

const userContext = createContext<userContextType | null>(null);

//create a useContext API
export const useUser = (): userContextType => {
  const context = useContext(userContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const login = (userData: User) => setUser(userData);

  const updateUser = (newUserData: User) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newUserData,
    }));
  };

  return (
    <userContext.Provider value={{ user, login, updateUser }}>
      {children}
    </userContext.Provider>
  );
};
