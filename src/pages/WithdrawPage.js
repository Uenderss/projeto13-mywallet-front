import {useState, useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import UserContext from "../UserContext";

import {Input} from "../elements/Input";
import {Button}from "../elements/Button";
import {Screen}from "../elements/Screen";
import {Title}from "../elements/Title";


function WithdrawPage() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  
  const {dados} = useContext(UserContext);
  const navigator = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    
    const body = {
      description, 
      type: "withdraw",
      value: parseFloat(value)
    };
    const headers = {
      headers: { "Authorization": `Bearer ${dados.token}`}
    }
    try {
      await axios.post("https://projeto13-mywallet-back-t6.herokuapp.com/transactions", body, headers);
      alert("Registro feito com sucesso!");
      navigator("/home");
    } catch (error) {
      console.log("An error occurred.");
      console.log(error);
    }
  }

  return (
    <Screen>
      <Title>
        <div><h1>Nova saída</h1></div></Title>
      <form>
        {/* valor */}
        <Input 
          type="number"
          placeholder="Valor"
          value={value} 
          onChange={(e) => setValue(e.target.value)}
        />

        {/* valor */}
        <Input 
          type="text"
          placeholder="Descrição"
          value={description} 
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button type="submit" onClick={handleSubmit}>Salvar saída</Button>
      </form>
    </Screen>
  )
}

export default WithdrawPage;