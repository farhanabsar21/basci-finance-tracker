import { useEffect, useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
    const { dispatch } = useAuthContext()
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    // clean up state
    const [isCancel, setIsCancelled] = useState(false)

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)
        
        try{
            const res = await projectAuth.signInWithEmailAndPassword(email, password)
            dispatch({
                type: 'LOGIN',
                payload: res.user
            })
            // update state according to clean up
            if(!isCancel){
                setIsPending(false)
                setError(null)
            }
        }
        catch(err){
            if(isCancel){
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
    }
    
    // we need some clean up functions 
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])
    return { login, error, isPending }
}