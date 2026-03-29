import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Root.css";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="root-main">
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;

/**
 * 1.use: userPromise > Suspense > promise > use(usersPromise)
 * 2.[Less used to far] > useState + useEffect(() => {},[])
 * 3. set Loader in the route definition: Load Data before router component is rendered


 */