import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { Card } from 'antd';

const Profile = () => {
  const { getUserInfo, user, pedidos, productos } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <>
      <h1>Profile {user.name}</h1>
      {/* {console.log('pedidos:', user.Pedidos)} */}
      {user.Pedidos && user.Pedidos.length > 0 ? (
        user.Pedidos.map((pedido) => (
          <Card key={pedido.id}>
            <h2>Pedido {pedido.id}</h2>
            <p>Fecha {new Date(pedido.createdAt).toLocaleDateString()}</p>

            <h3>Productos:</h3>
            <ul>
              {pedido.Productos && pedido.Productos.length > 0 ? (
                pedido.Productos.map((producto) => (
                  <li key={producto.id}>
                    {producto.name} - ${producto.price}
                  </li>
                ))
              ) : (
                <li>No hay productos en este pedido</li>
              )}
            </ul>
          </Card>
        ))
      ) : (
        <p>No tienes pedidos</p>
      )}
    </>
  );
};

export default Profile;
