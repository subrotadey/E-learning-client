import React from 'react';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../components/Hooks/useAdmin';
import Navbar from '../components/Pages/Shared/Navbar/Navbar';
import { AuthContext } from '../contexts/AuthProvider';

const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
              <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content mt-20">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

              </div> 
              <div className="drawer-side  mt-16">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                  {/* <!-- Sidebar content here --> */}
                  <h2 className="text-3xl">DASHBOARD </h2>
                  <div className="divider"></div>
                  <li><Link to='/dashboard'>My Courses</Link></li>
                  {
                    isAdmin && <>
                        <li><Link to='/dashboard/allusers'>All users</Link></li>
                        <li><Link to='/dashboard/addcourse'>Add Course</Link></li>
                        <li><Link to='/dashboard/managecourses'>Manage Course</Link></li>
                        <li><Link to='/dashboard/addteacher'>Add a Teacher</Link></li>
                        <li><Link to='/dashboard/manageteachers'>Manage Teacher</Link></li>
                    </>
                  }
                </ul>
              </div>
            </div>
        </div>
    );
};

export default DashboardLayout;