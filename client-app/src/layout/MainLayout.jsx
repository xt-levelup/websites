import {Helmet} from "react-helmet";
import {Outlet} from "react-router-dom";

const MainLayout=()=>{
    return <div className="container mx-auto max-w-7xl">
        <div>
            Video, Background
        </div>
        <div>
            <nav>Links to</nav>
            <Outlet>                
            </Outlet>
        </div>
    </div>
};

export default MainLayout;