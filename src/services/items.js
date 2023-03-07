import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore'

const getAll = async (producto) => {

  const db = getFirestore()

  const itemCollection = collection(db, producto)

  const snapshot = await getDocs(itemCollection)

  const item = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

  return item

}

const get = async (id) => {
  const db = getFirestore()

  const itemDoc = doc(db, "home" , id)
  
  const snapshot = await getDoc(itemDoc)

  const item = { id: snapshot.id, ...snapshot.data() }

  return item
}

const add = (itemDetail) => { };

export const itemService = { get, getAll, add };
