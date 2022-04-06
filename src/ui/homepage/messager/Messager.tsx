import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type MessagerProps = {
    isAuth: boolean
}

function Messager(props: MessagerProps){

    const navigate = useNavigate()

    useEffect(() => {
        if (props.isAuth === false) navigate('/login')
    }, [])

    return(
        <div>
            Messages
        </div>
    )
}

export default Messager;