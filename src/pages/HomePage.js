import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Transaction from "../Transaction";
import UserContext from "../UserContext";

import { Screen2 } from "../elements/Screen2";
import Logout from "../elements/Logout";
import { Title } from "../elements/Title";
import styled from "styled-components";

function HomePage() {
  const [transactions, setTransactions] = useState([]);

  const { dados } = useContext(UserContext);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await axios.get(
          "https://projeto13-mywallet-back-t6.herokuapp.com/transactions",
          {
            headers: {
              Authorization: `Bearer ${dados.token}`,
            },
          }
        );
        console.log(response);
        setTransactions(response.data);
      } catch (error) {
        alert("Ops! Infelizmente aconteceu um erro! Tente novamente!");
        console.log(error.response);
      }
    }

    getUserData();
  }, [dados]);

  function buildTransactions() {
    if (transactions.length > 0) {
      return transactions.map((transaction, index) => {
        const { type, date, description, value } = transaction;
        return (
          <Transaction
            key={index}
            type={type}
            date={date}
            description={description}
            value={value}
          />
        );
      });
    } else {
      return <p>Não há registros de entrada ou saída</p>;
    }
  }

  function buildBalance() {
    if (transactions.length > 0) {
      return transactions.reduce((previous, current) => {
        if (current.type === "deposit") {
          return previous + current.value;
        }

        return previous - current.value;
      }, 0);
    } else {
      return 0;
    }
  }

  const transacationsSection = buildTransactions();
  const balanceSection = buildBalance();

  return (
    <Screen2>
      <Title>
        <div>
          <h1>Olá, {dados.name}</h1>
        </div>
        <Logout />
      </Title>
      <Extrato>
        <Movimentation>{transacationsSection}</Movimentation>
        <div>Saldo: {balanceSection}</div>
      </Extrato>
      <Buttons>
        <Link to="/deposit">
          <ButtonCash>Nova Entrada</ButtonCash>
        </Link>
        <Link to="/withdraw">
          <ButtonCash>Nova Saída</ButtonCash>
        </Link>
      </Buttons>
    </Screen2>
  );
}

export default HomePage;

const Extrato = styled.div`
  width: 90%;
  min-width: 326px;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Saldo=styled.div`
`;

const ButtonCash = styled.div`
  width: 155px;
  height: 114px;
  margin: 9px;
  background: #a328d6;
  border-radius: 5px;
  cursor: pointer;
  padding: 0px;
`;
const Movimentation = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    padding: 3px;
  }

  div div {
    width: 70%;
    justify-content: flex-start;
  }
  div div p {
    margin-right: 30px;
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    text-decoration: none;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
  }
`;
