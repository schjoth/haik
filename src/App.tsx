import { User } from "firebase/auth";
import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import Login from "./components/login/Login";
import RegisterUser from "./components/registerUser/RegisterUser";
import { auth } from "./firebase-config";
import UserInformation from "./components/userInformation/userInformation";
import NewTrip from "./components/newTrip/newTrip";

function App() {
  const [user, setUser] = useState<User | null>(null);

  onAuthStateChanged(auth, (authUser: User | null) => {
    console.log(authUser);
    setUser(authUser);
  });

  return (
    <div className="App">
      {user ? (
        <div>
          {user.email}
          <UserInformation />
          <NewTrip />
        </div>
      ) : (
        <div>
          <RegisterUser />
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;
