import { NavLink, Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="border border-[3px] border-blue-600 mx-[5%]">
      <nav className=" bg-blue-900 flex flex-row justify-between px-[1%] py-[1em] items-center">
        <div className="flex flex-row gap-[2em] px-[1%] items-center justify-center">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "text-[30px] text-blue-100 font-[600] italic"
                : "text-[30px] text-blue-300 hover:overline italic";
            }}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => {
              return isActive
                ? "text-[30px] text-blue-100 font-[600] italic"
                : "text-[30px] text-blue-300 hover:overline italic";
            }}
            end
          >
            Products
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) => {
              return isActive
                ? "text-[30px] text-blue-100 font-[600] italic"
                : "text-[30px] text-blue-300 hover:overline italic";
            }}
            end
          >
            Users
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/login"
            className={({ isActive }) => {
              return isActive
                ? "text-[30px] text-blue-100 font-[600] italic"
                : "text-[30px] text-blue-300 hover:overline italic";
            }}
            end
          >
            Login
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default MainLayout;
