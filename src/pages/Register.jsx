import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/usersSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Componente estilizado para el contenedor
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
const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
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
  background-color: #0896fe;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3; /* Cambiar el color de fondo al pasar el ratón */
    transform: scale(1.05); /* Efecto de aumento al pasar el ratón */
    transition: all 0.3s ease; /* Suavizar el cambio con una transición */
  }

  &:focus {
    box-shadow: 0 0 3px 3px rgba(0, 100, 195,0.6);
  }
`;

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    user: "",
    password: "",
    permissions: ["analize"],
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!user.name.trim()) {
      console.log("name is required");
      return;
    }
    if (!user.user.trim()) {
      console.log("user is required");
      return;
    }
    if (!user.password.trim()) {
      console.log("password is required");
      return;
    }

    dispatch(
      addUser({
        ...user,
        id: uuid(),
      })
    );

    setUser({
      name: "",
      user: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <CustomBox>
      <Title>Register</Title>
      <Input
        placeholder="Name"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <Input
        placeholder="User"
        value={user.user}
        name="user"
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      <Button onClick={handleRegister}>Add</Button>
    </CustomBox>
  );
};

export default Register;
