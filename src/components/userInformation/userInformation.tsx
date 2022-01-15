import React, { useState } from "react";
import { auth } from "../../firebase-config";
import {
  createOrUpdateUserInformation,
  getCurrentUserInformation,
} from "../../firebaseUtils/userUtils";

const UserInformation = () => {
  const [username, setUsername] = useState<string>(
    auth.currentUser ? (auth.currentUser.displayName as string) : ""
  );
  const [birthday, setBirthday] = useState<Date>(new Date());

  const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const changeBirthday = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(new Date(event.target.value));
  };
  const finished = async () => {
    await createOrUpdateUserInformation(username, birthday);
  };

  return (
    <div>
      Name:
      <input
        type="text"
        name="name"
        id="name"
        value={username}
        onChange={changeName}
      />
      Birthday:
      <input
        type="date"
        name="birthday"
        id="birthday"
        value={birthday.toISOString().split("T")[0]}
        onChange={changeBirthday}
      />
      <input type="button" value="Finsihed" onClick={finished} />
    </div>
  );
};

export default UserInformation;
