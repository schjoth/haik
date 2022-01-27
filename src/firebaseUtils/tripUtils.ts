import { collection, addDoc, doc, updateDoc, query, where, getDocs, limit as limitQuery } from "firebase/firestore"
import { db } from "../firebase-config"
import { ReviewType, TripType } from "../types/tripType"

export const createTrip = async (driver: string, passenger: string, from: string, to:string, kilometers: number, price: number): Promise<string> => {

    const tripInformation: TripType = {
        passenger,
        driver,
        from,
        to,
        kilometers,
        price,
        review: null
    }

    const docRef = await addDoc(collection(db, "trips"), tripInformation)
    return docRef.id
}

export const updateOrAddReview = async (trip_id: string, dice: 1|2|3|4|5|6, text:string) => {
    const review: ReviewType = {
        dice,
        text
    }

    const tripDocRef = doc(db, "trips", trip_id)
    await updateDoc(tripDocRef, { review })
}

export const getTripsByDriver = async (driverID: string, limit: number = 10): Promise<TripType[]> => {
    const tripRef = collection(db, "trips")
    const q = query(tripRef, where("driver", "==", driverID), limitQuery(limit))

    const querySnap = await getDocs(q)

    return querySnap.docs.map(doc => doc.data() as TripType)
}

export const getTripsByPassenger = async (passengerID: string, limit: number = 10): Promise<TripType[]> => {
    const tripRef = collection(db, "trips")
    const q = query(tripRef, where("passenger", "==", passengerID), limitQuery(limit))

    const querySnap = await getDocs(q)

    return querySnap.docs.map(doc => doc.data() as TripType)
}


export const getDriverTripCount = async (driverID: string): Promise<number> => {
    const tripRef = collection(db, "trips")
    const q = query(tripRef, where("driver", "==", driverID))

    const querySnap = await getDocs(q)

    return querySnap.size
} 
