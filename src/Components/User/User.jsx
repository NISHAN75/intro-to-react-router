import { NavLink } from "react-router";
const User = ({ user }) => {

    
    return (
        <div>
            <h3 className="text-3xl">{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
            <NavLink to={`/users/${user.id}`}>View Details</NavLink>
        </div>
    );
};

export default User;