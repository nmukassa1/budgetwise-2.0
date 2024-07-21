import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/')
        }, 3000)

        return () => clearTimeout(timer)
    })

    return ( 
        <>
            404 Page doesn't exist
        </>
     );
}

export default NotFound;