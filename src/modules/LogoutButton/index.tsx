import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../state";

const LogoutButton = () => {

    const dispatch = useDispatch();
    const { logoutUser } =  bindActionCreators(actionCreators, dispatch);

    function handleLogout(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event.preventDefault();
        logoutUser();
        <Link to={'/'}>Logout </Link>
    }

    return(
        <div>
            <div/>
            <div/>
            <button className="LogoutButton" onClick={handleLogout}> Logout </button>
        </div>
    )
}

export default LogoutButton;