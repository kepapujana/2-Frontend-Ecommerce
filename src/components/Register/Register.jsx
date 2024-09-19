import React from "react";
import "./Register.styles.scss";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { Form, Input, Button } from "antd";

const Register = () => {
  const { login } = useContext(UserContext);

  const navigate = useNavigate();
  //esta accion solo se va procesar si hay un usuario logeado, y hay un token
  useEffect(() => {
    setTimeout(() => {
      const foundToken = JSON.parse(localStorage.getItem("token"));
      if (foundToken) {
        navigate("/profile");
      }
    }, 2000);
  }, [login]);

  const onFinish = (values) => {
    login(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h1>Formulario de Registro</h1>
      <p></p>
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="name" required />
      <p></p>
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" required />
      <p></p>
      <label for="password">Contraseña:</label>

      <input type="password" id="password" name="password" required />
      <p></p>

      <button type="submit">Registrarse</button>
    </div>
  );
};
export default Register;
