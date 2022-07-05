import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Logo from "../elements/Logo";
import { Input } from "../elements/Input";
import { Button } from "../elements/Button";
import { StyledLink } from "../elements/StyledLink";
import { Screen } from "../elements/Screen";
import dotenv from "dotenv";
dotenv.config();

function SignUpPage(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

function handleSubmit(e) {
  e.preventDefault();
  
  axios
    .post("https://projeto13-mywallet-back-t6.herokuapp.com/signup", {
      name,
        email,
        password,
        confirmPassword,
    })
    .then(function (res) {
      console.log(res.data);
      navigate("/");
      console.log(res);
    })
    .catch(function (error) {
      alert("Não foi possivel realizar o cadastro Tente novamente");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      console.log(error);
    });
}

  return (
    <>
      <Screen>
        <div>
          <Logo />
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="E-mail"
              value={email}
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirme a senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button type="submit" value="Submit">
              Cadastrar
            </Button>
          </form>
        </div>
        <div>
          <StyledLink to="/">
            <h5>Já tem uma conta? Entre agora!</h5>
          </StyledLink>
        </div>
      </Screen>
    </>
  );
}

export default SignUpPage;
