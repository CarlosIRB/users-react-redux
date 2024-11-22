import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/authSlice";
import { Link, useNavigate } from "react-router-dom";

const CustomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 20px;
  font-family: Arial;
  width: min-content;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Componente estilizado para 'label' que puedes usar como etiqueta personalizada
const CustomLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
`;

// Componente estilizado para 'input' con estilo automático
const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

// Componente estilizado para 'button'
const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #658f36; /* Cambiar el color de fondo al pasar el ratón */
    transform: scale(1.05); /* Efecto de aumento al pasar el ratón */
    transition: all 0.3s ease; /* Suavizar el cambio con una transición */
  }

  &:focus {
    box-shadow: 0 0 3px 3px rgba(30, 200, 30, 0.6);
  }
`;

const Login = () => {
  const users = useSelector((state) => state.users);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const verifyUser = () => {
    const userExists = users.find(
      (u) => u.user === user && u.password === password
    );
    return userExists;
  };

  const handleLogin = () => {
    const userExists = verifyUser();
    if (!userExists) {
      console.log("User not found");
      alert("User not found");
      return;
    }
    dispatch(login(userExists));
    navigate("/profile");
  };

  return (
    <CustomBox>
      <CustomLabel>User</CustomLabel>
      <Input
        placeholder="User"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <CustomLabel>Password</CustomLabel>
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Enter</Button>
      <Link
        style={{ marginTop: "10px", color: "#007BFF", textDecoration: "none" }}
        to="/register"
      >
        Register
      </Link>
    </CustomBox>
  );
};

export default Login;
