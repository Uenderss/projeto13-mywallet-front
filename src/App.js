import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalCss from "./GlobalCss";
import UserContext from "./UserContext";

import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import DepositPage from "./pages/DepositPage";
import WithdrawPage from "./pages/WithdrawPage";

function App() {

  const [dados, setDados] = useState(null);
  
  return (
    <UserContext.Provider value={{ dados, setDados }}>
      <BrowserRouter>
        <GlobalCss>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/singn-up" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/deposit" element={<DepositPage />} />
            <Route path="/withdraw" element={<WithdrawPage />} />
          </Routes>
        </GlobalCss>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
