import React from "react";
import { auth } from "../../firebase-config";
import {
  createTrip,
  getDriverTripCount,
  getTripsByDriver,
  getTripsByPassenger,
  updateOrAddReview,
} from "../../firebaseUtils/tripUtils";

const NewTrip = () => {
  const addTrip = async () => {
    if (auth.currentUser)
      await createTrip(
        auth.currentUser.uid,
        auth.currentUser.uid,
        "Bergen",
        "Oslo",
        500,
        1200
      );
  };

  const updateReview = async () => {
    await updateOrAddReview("nNHbEflQd4zndYUgs4Kh", 2, "Relativ dårlig sjåfør");
  };

  const tripByDriver = async () => {
    if (auth.currentUser) {
      const res = await getTripsByDriver(auth.currentUser.uid);
      console.log(res);
    }
  };

  const tripByPassenger = async () => {
    if (auth.currentUser) {
      const res = await getTripsByPassenger(auth.currentUser.uid);
      console.log(res);
    }
  };

  const driverCount = async () => {
    if (auth.currentUser) {
      const res = await getDriverTripCount(auth.currentUser.uid);
      console.log(res);
    }
  };

  return (
    <div>
      <input type="button" value="Add trip" onClick={addTrip} />
      <input type="button" value="Update review" onClick={updateReview} />
      <input type="button" value="Trips by driver" onClick={tripByDriver} />
      <input
        type="button"
        value="Trips by passenger"
        onClick={tripByPassenger}
      />
      <input type="button" value="Get diver count" onClick={driverCount} />
    </div>
  );
};

export default NewTrip;
