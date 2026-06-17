import { Outlet } from "react-router";

const Root = () => {
    return (
        <div className=''>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;