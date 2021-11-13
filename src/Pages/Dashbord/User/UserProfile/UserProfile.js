import React from 'react';
import useAuth from '../../../../Hooks/useAuth';

const UserProfile = () => {
    const { user } = useAuth()
    return (
        <div>

            <h1 className=" fw-bold fs-1 p-5 mt05 mx-auto" >Hello <span className="text-warning"> {user.displayName}  </span> Your Profile LayOut Comming Soon</h1>
        </div>
    );
};

export default UserProfile;