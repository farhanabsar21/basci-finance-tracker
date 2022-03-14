import { useEffect, useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    // clean up state
    const [isCancel, setIsCancelled] = useState(false)

    const logout = async () => {
        setError(null)
        setIsPending(true)
        
        try{
            await projectAuth.signOut()
            dispatch({
                type: 'LOGOUT',
                payload: null
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
    return { logout, error, isPending }
}