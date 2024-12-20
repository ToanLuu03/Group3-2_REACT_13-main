import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main Content Area with dynamic margin */}
      <div
        className={`transition-all duration-300 ${
          collapsed ? "ml-0" : "ml-[250px]"
        } flex-grow p-4`}
      >
        {/* Outlet renders the child route components */}
        <Outlet context={{ collapsed }}/>
      </div>
    </div>
  );
};

export default MainLayout;
