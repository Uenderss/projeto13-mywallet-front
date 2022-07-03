import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

import Logo from "./Elementos/Logo";
import { Input } from "../Elements/Input";
import { Button } from "../Elements/Button";
import { StyledLink } from "../Elements/StyledLink";
import { Screen } from "../Elements/Screen";

function SignUpPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefaut();
    try {
      const response = await axios.post("http://localhost:5000/sign-in", {
        email,
        password,
      });
      const { token, name } = response.data;
      setUser({name,token});
      navigate("/home");
    } catch (error) {
      alert("Try again! Invalid email or password.");
      console.log(error.response);
    }
  }

  return (
    
      <Screen>
        <div>
          <Logo />
          <form onSubmit={handleSubmit}>
            
            <Input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" value="Submit">
              Entrar
            </Button>
          </form>
        </div>
        <div>
          <StyledLink to="/">
            <h5>Primeira ves? Cadastra-se!</h5>
          </StyledLink>
        </div>
      </Screen>
    
  );
}

export default SignUpPage;
