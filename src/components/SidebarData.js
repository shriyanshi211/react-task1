import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import './SidebarData.css';
function SidebarData () {
    const data =[
        {
            title: "Dashboard",
            icon: <DashboardIcon/>
        },
        {
            title: "Members",
            icon: <PeopleIcon/>
        },
        {
            title: "Exercise Plans",
            icon: <FitnessCenterIcon/>
        },
        {
            title: "Profile",
            icon: <AccountCircleIcon/>
        },
        {
            title: "Logout",
            icon: <LogoutIcon/>
        },
    ]
  return (
    <div>
        <ul className='Sidebarlist'>
        {data.map((val,key)=>{
           return <li className='row' key ={key}> <div id="icon">{val.icon}</div>{" "}
           <div id="title">
            {val.title}
           </div>
           </li>;

        })}
        </ul>
    </div>
  )
}

export default  SidebarData;