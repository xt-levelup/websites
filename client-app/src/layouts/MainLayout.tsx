import { Outlet, NavLink } from "react-router-dom";

const MainLayout = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <nav className="mx-[5%] p-[1em] bg-blue-900 border border-[1px] border-blue-600 flex flex-row items-center justify-between">
        <div className="flex flex-row justify-center items-center">
          <svg
            width="48px"
            height="48px"
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M172.6 806.2l45.3 45.3c25 25 65.5 25 90.5 0L540.8 619l-90.5-90.5-277.7 277.7z"
              fill="#0a2be8"
            />
            <path
              d="M676.5 483.2l174.9-174.9c25-25 25-65.5 0-90.5l-45.3-45.3L586 392.7l90.5 90.5z"
              fill="#b8ebf1"
            />
            <path
              d="M540.738 347.452l220.12-220.12 45.255 45.254-220.12 220.12z"
              fill="#bbc3f0"
            />
            <path
              d="M127.364 760.869L405.042 483.19l45.254 45.254-277.678 277.678z"
              fill="#c6ecf1"
            />
            <path
              d="M172.624 308.355l135.763-135.763L806.185 670.39 670.422 806.153z"
              fill="#3D5AFE"
            />
            <path
              d="M818.5 838.6l20-19.8c20.9-20.8 24.9-53.1 9.8-78.4l-42.1-70-135.8 135.8 70.2 42c25.1 15 57.2 11 77.9-9.6z"
              fill="#8C9EFF"
            />
            <path
              d="M172.6 308.4l135.8-135.8c-25-25-65.5-25-90.5 0l-45.3 45.3c-25 24.9-25 65.5 0 90.5z"
              fill="#FFEA00"
            />
          </svg>
          <span className="text-[36px] text-cyan-300 italic font-[600]">
            - Design
          </span>
        </div>
        <div className="border border-[3px] border-green-600 w-[80%] flex flex-row items-center gap-[5%] justify-end">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "font-[600] text-cyan-100 italic text-[24px]"
                : "font-[480] text-[24px] hover:overline text-cyan-300 italic ";
            }}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => {
              return isActive
                ? "font-[600] text-cyan-100 italic text-[24px]"
                : "font-[480] text-[24px] hover:overline text-cyan-300 italic ";
            }}
            end
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => {
              return isActive
                ? "font-[600] text-cyan-100 italic text-[24px]"
                : "font-[480] text-[24px] hover:overline text-cyan-300 italic ";
            }}
            end
          >
            Cart
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) => {
              return isActive
                ? "font-[600] text-cyan-100 italic text-[24px]"
                : "font-[480] text-[24px] hover:overline text-cyan-300 italic ";
            }}
            end
          >
            Orders
          </NavLink>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => {
              return isActive
                ? "font-[600] text-cyan-100 italic text-[24px]"
                : "font-[480] text-[24px] hover:overline text-cyan-300 italic ";
            }}
            end
          >
            Log In
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default MainLayout;
