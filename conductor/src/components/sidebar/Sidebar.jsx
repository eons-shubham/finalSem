import React from 'react'
import './sidebae.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top"><span className="logo">admin</span></div>
        <hr/>
        <div className="center">
            <ul>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>
                        Dashboard
                    </span>
                </li>
                
                <li>
                    <DirectionsBusIcon className="icon"/>
                    <span>
                       Bus Request
                    </span>
                </li>
                <li>
                    <CurrencyRupeeIcon className="icon"/>
                    <span>
                        Fees
                    </span>
                </li>
                <li>
                    <PersonPinIcon className="icon"/>
                    <span>
                        Student
                    </span>
                </li>
                <li>
                    <PersonPinIcon className="icon"/>
                    <span>
                        Driver
                    </span>
                </li>
                <li>
                    <PersonPinIcon className="icon"/>
                    <span>
                        Conductor
                    </span>
                </li>
                <li>
                    <PersonPinIcon className="icon"/>
                    <span>
                        Co-ordinator
                    </span>
                </li>
                <li>
                    <LogoutIcon className="icon"/>
                    <span>
                        Logout
                    </span>
                </li>
                
            </ul>
        </div>
        <div className="bottom">
           <div className="colorOption"></div>
           <div className="colorOption"></div>
            </div>

    </div>
  )
}

export default Sidebar