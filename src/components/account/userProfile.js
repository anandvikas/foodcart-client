import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

const UserProfile = () => {
    const { id } = useParams();
    const { request, response } = useRequest();
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        request("GET", `/user/getOne/${id}`);
    }, []);
    useEffect(() => {
        if (response) {
            setUserData(response);
        }
    }, [response]);
    return (
        userData && (
            <div>
                <h4>User Name : {userData.userName}</h4>
                <h4>Email : {userData.email}</h4>
                <h4>Gender : {userData.gender}</h4>
            </div>
        )
    );
}

export default UserProfile
