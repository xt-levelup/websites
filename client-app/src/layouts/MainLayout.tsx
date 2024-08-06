import { Outlet, useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>NAV</nav>
      <Outlet />
    </div>
  );
};

export default MainLayout;
