import React from 'react';
import { Outlet } from "react-router-dom";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ display: 'flex', height: '94vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    {/* <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        Sidebar
                    </a> */}
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink exact to="/doctors" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="columns">Doctors</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/patients" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">Patients</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/beds" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Beds</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/analytics" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
                        </NavLink>

                        <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px 5px',
                        }}
                    >
                        {/* Sidebar Footer */}
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
            <Outlet />
        </div>
    );
};

export default Sidebar;