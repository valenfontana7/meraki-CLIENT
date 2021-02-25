import React, { useState } from "react";
import { db } from "../../firebase";

function UserForm() {
  const [user, setUser] = useState({});

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection("users").doc().set(user);
    console.log("user created");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          name="first_name"
          onChange={handleInputChange}
          value={user.first_name}
          id="first_name"
        />
        <label htmlFor="">Apellido</label>
        <input
          type="text"
          name="last_name"
          onChange={handleInputChange}
          value={user.last_name}
          id="last_name"
        />
        <label htmlFor="">Nombre de usuario</label>
        <input
          type="text"
          name="username"
          onChange={handleInputChange}
          value={user.username}
          id="username"
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          onChange={handleInputChange}
          value={user.email}
          id="email"
        />
        <label htmlFor="">Contraseña</label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          value={user.password}
          id="password"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default UserForm;
