import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import SideBar from '../components/sidebar/SideBar';

const Layout = () => {
  return (
    <>
      {/* Fixed Top Navbar */}
      <Navbar />

      {/* Sidebar and Content Container */}
      <div>
        {/* Fixed Sidebar */}
        <div className="fixed top-16 left-0 w-[400px] h-screen overflow-y-auto bg-white border-r">
          <SideBar />
        </div>

        {/* Main Content with left margin (same width as sidebar) */}
        <main className="ml-[400px] pt-16 p-4 min-h-screen bg-gray-100">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
