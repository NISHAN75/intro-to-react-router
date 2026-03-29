import { use } from "react";
const Users2 = ({userPromise}) => {
    const users = use(userPromise);
    console.log("this is users data" , users);
    
    return (
        <div>
            <h2>This is User2</h2>
        </div>
    );
};

export default Users2;