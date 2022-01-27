import { doc, getDoc, setDoc } from "firebase/firestore"

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

export const getUserInformation = async (userID: string): Promise<UserInformationType | null> => {
    const userSnap = await getDoc(doc(db, "userInformation", userID))
    if(userSnap.exists()) {
        const userInfo: UserInformationType = {
            name: userSnap.data().name,
            birthday: userSnap.data().birthday.toDate(),
        }

        return userInfo
    } else {
        return null
    }
}

export const getCurrentUserInformation = async () : Promise<UserInformationType|null> => {
    if(!auth.currentUser) throw new Error("User is not authenticated")
    
    return getUserInformation(auth.currentUser.uid)
}