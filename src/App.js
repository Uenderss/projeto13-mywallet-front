import {BrowserRouter, Routes, Route} from "react-router-dom";

import GlobalCss from "./GlobalCss";

import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import DepositPage from "./pages/DepositPage";
import WithdrawPage from "./pages/WithdrawPage";


function App(){
    //precisa criar uma forma de manipular o token pelo corpo do app.
    return (
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<SignInPage/>}/>
        <Route path='/singn-up' element={<SignUpPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/deposit' element={<DepositPage/>}/>
        <Route path='/withdraw' element={<WithdrawPage/>}/>
        </Routes>
        </BrowserRouter>
        )}

export default App;