import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { SignUp } from "./Component/SignUp";
import { Login } from "./Component/Login";
import { UserProvider } from "./userContext";
import { Account } from "./Component/Account";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
