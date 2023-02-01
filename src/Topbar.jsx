import React from 'react'
import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>고치고</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNoneIcon />
                        <span className='topIconBadge'>2</span>
                    </div>

                    <div className='topbarIconContainer'>
                        <LanguageIcon />
                        <span className='topIconBadge'>2</span>
                    </div>

                    <div className='topbarIconContainer'>
                        <SettingsIcon />
                    </div>
                    <div className='topbarIconContainer'>
                        <PersonIcon />
                    </div>
                </div>
            </div>

        </div>
    )
}