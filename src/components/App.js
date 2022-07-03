import {BrowserRouter, Routes, Route} from "react-router-dom";

import SignInPage from "./SignInPage.js";
import SignUpPage from "./SignUpPage.js";
import HomePage from "./HomePage.js";
import DepositPage from "./DepositPage.js";
import WithdrawPage from "./WithdrawPage.js";


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