import React from "react";
import { Outlet } from "react-router-dom";
import FloatingPlayer from "../../components/floatingPlayer/FloatingPlayer";

function Root() {
  return (
    <div className="root_layout">
      <Outlet />
      OUTLET
      <FloatingPlayer />
    </div>
  );
}

export default Root;
