
import { useLoaderData } from "react-router";

const UserDetails = () => {

    const user = useLoaderData();


    return (
        <div>
            <h2>This is Details</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
            <p>Company: {user.company.name}</p>
            <p>Position: {user.company.catchPhrase}</p>
        </div>
    );
};

export default UserDetails;