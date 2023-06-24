import React from "react";
import SidebarButton from "./SidebarButton";


export default function Sidebar(){



    return <div className="sidebar-div">
        <SidebarButton name=" Content Indicators" url="https://kitsu.io/api/edge/categories?fields%5Bcategory%5D=title%2Cslug&filter%5Bparent_id%5D=223&page%5Blimit%5D=50"/>
        <SidebarButton name=" Dynamic" url="https://kitsu.io/api/edge/categories?fields%5Bcategory%5D=title%2Cslug&filter%5Bparent_id%5D=227&page%5Blimit%5D=50"/>
        <SidebarButton name=" Elements" url="https://kitsu.io/api/edge/categories?fields%5Bcategory%5D=title%2Cslug&filter%5Bparent_id%5D=228&page%5Blimit%5D=50"/>
        <SidebarButton name=" Setting" url="https://kitsu.io/api/edge/categories?fields%5Bcategory%5D=title%2Cslug&filter%5Bparent_id%5D=230&page%5Blimit%5D=50"/>
        <SidebarButton name=" Target Demographics" url="https://kitsu.io/api/edge/categories?fields%5Bcategory%5D=title%2Cslug&filter%5Bparent_id%5D=241&page%5Blimit%5D=50"/>
        <SidebarButton name=" Themes" url="https://kitsu.io/api/edge/categories?fields%5Bcategory%5D=title%2Cslug&filter%5Bparent_id%5D=231&page%5Blimit%5D=50"/>
    </div>
}
