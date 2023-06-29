"use client";

import { useContext } from "react";
import updateRoleFetch from "../utils/updateRoleFetch";
import { UserContext } from "../context/user.context";
import deleteUserFetch from "../utils/deleteUserFetch";

export default function UserButtons({ userDelete, uid, cookie }) {
  const { userChange, setUserChange } = useContext(UserContext);

  const handleDelete = async () => {
    const changeRole = await deleteUserFetch(uid, cookie);
    setUserChange(userChange + 1);
  };

  const handleRole = async () => {
    const changeRole = await updateRoleFetch(uid, cookie);
    setUserChange(userChange + 1);
  };
  return (
    <div>
      <button onClick={handleDelete}>❌</button>
      <button onClick={handleRole}>Editar</button>
    </div>
  );
}
