import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MessagerContainer from "./MessagerContainer";

type MessagerNavigateProps = {
    isAuth: boolean
}

function MessagerNavigateContainer(props: MessagerNavigateProps){

    const navigate = useNavigate()

    useEffect(() => {
        if (props.isAuth === false) navigate('/login')
    }, [])

    return(
        <div>
            <MessagerContainer/>
        </div>
    )
}

export default MessagerNavigateContainer;