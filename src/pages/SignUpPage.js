import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Logo from "./Elementos/Logo";
import {Input} from "../Elements/Input";
import {Button} from "../Elements/Button";
import {StyledLink} from "../Elements/StyledLink";
import {Screen} from "../Elements/Screen";



function SignUpPage(props){
    console.log(props);
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    const navigate=useNavigate();

   async function handleSubmit(e){
        e.preventDefaut();
        try{

            await axios.post("http://localhost:5000/sign-up",{
                name, email, password, confirmPassword
            });
            alert("Successfully registered!");
            navigate("/");

        }catch(error){
            alert("Try again! Invalid email or password.");
            console.log(error);
        }
    }

    return <>
        <Screen>
            <div>
                <Logo/>
                <form onSubmit={handleSubmit}>

                    <Input type="text" placeholder='Nome' value={name} onChange={(e)=>setName(e.target.value)}/>
                    <Input type="text" placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <Input type="text" placeholder='Senha' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <Input type="text" placeholder='Confirme a senha' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <Button type="submit" value="Submit">
          Cadastrar
        </Button>
                </form>
            </div>
            <div>
                <StyledLink to="/"><h5>Já tem uma conta? Entre agora!</h5></StyledLink>
            </div>
        </Screen>
    </>
}

export default SignUpPage;