import { useState, useEffect, useRef } from 'react'
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, _query, _orderby) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    // taking reference
    const query = useRef(_query).current 
    const orderby = useRef(_orderby).current 
    
    useEffect(()=> {
        let ref = projectFirestore.collection(collection)

        if(query){
            ref = ref.where(...query)
        }

        if(orderby){
            ref = ref.orderBy(...orderby)
        }

        const unsub = ref.onSnapshot((snapshot) => {
            let results = []
            snapshot.docs.forEach((doc) => {
                results.push({...doc.data(), id: doc.id})
            })
            setDocument(results)
            setError(null)
        }, (err) => {
            console.log(err)
            setError('something went wrong')
        })

        return () => unsub()

    }, [collection, query, orderby])

    return { document, error }
}