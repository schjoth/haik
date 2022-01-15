import {doc, setDoc } from "firebase/firestore"

import { UserInformationType } from "../types/userType"
import { auth, db } from "../firebase-config"

export const createOrUpdateUserInformation = async (name: string, birthday: Date) => {
    const userInformation: UserInformationType = {
        birthday,
        name
    }

    if(auth.currentUser){
        const userID = auth.currentUser.uid
        
        await setDoc(doc(db, "userInformation", userID), userInformation)
    } else {
        throw new Error("User is not authenticated")
    }
}