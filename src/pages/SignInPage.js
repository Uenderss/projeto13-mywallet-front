import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

import Logo from "../elements/Logo";
import { Input } from "../elements/Input";
import { Button } from "../elements/Button";
import { Screen } from "../elements/Screen";
import { StyledLink } from "../elements/StyledLink";

import dotenv from 'dotenv';
dotenv.config();

function SignInPage(props) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setDados } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
  
    axios
      .post("https://projeto13-mywallet-back-t6.herokuapp.com/signin", {
        email,
        password

      }).then(function (response) {
        localStorage.setItem('token',response.data.token);
        setDados( response.data);
        console.log(response.data);
        if(response.data.name !== null){
           navigate("/home");
        }else{
          alert("Erro meu querido");
        }


      }).catch(function (error) {
        alert("Email ou senha invalido. Tente novamente!");
        setEmail("");
        setPassword("");
        console.log(error);
      });
  }
  return (
    
      <Screen>
        <div>
          <Logo />
          <form onSubmit={handleSubmit}>
            
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)
              }
            />
            <Button type="submit" value="Submit">
              Entrar
            </Button>
          </form>
        </div>
        <div>
          <StyledLink to="/signup">
            <h5>Primeira vez? Cadastra-se!</h5>
          </StyledLink>
        </div>
      </Screen>
    
  );
}

export default SignInPage;
