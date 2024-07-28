import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";

function Profile() {
    const { user } = useContext(UserContext);

    return (
        <>
            {!user && <h2>Please Login</h2>}
            {user && <h2>Welcome {user.username}</h2>}
        </>
    );
}

export default Profile;
