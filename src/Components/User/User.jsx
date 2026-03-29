import { useLoaderData } from "react-router";
const User = () => {
    const users = useLoaderData();
    console.log(users);
    
    return (
        <div>
            <h2>This is User</h2>
        </div>
    );
};

export default User;