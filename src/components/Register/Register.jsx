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

      <label for="name">Nombre:</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" name="email" required />

      <label for="password">Contraseña:</label>

      <input type="password" id="password" name="password" required />

      <label for="role">Rol:</label>
      <select id="role" name="role">
        <option value="user">Usuario</option>
        <option value="admin">Administrador</option>
      </select>

      <button type="submit">Registrarse</button>
    </div>
  );
};
export default Register;
