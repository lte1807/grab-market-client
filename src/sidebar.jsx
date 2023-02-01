import React from "react";
import './sidebar.css';

import HomeWorkIcon from '@mui/icons-material/HomeWork'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import MonetizationOnICon from '@mui/icons-material/MonetizationOn'

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <HomeWorkIcon className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon" />
                            Analystics
                        </li>
                        <li className="sidebarListItem">
                            <MonetizationOnICon className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">등록</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <HomeWorkIcon className="sidebarIcon" />
                            서비스 접수
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon" />
                            기사 등록
                        </li>

                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">조회</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <HomeWorkIcon className="sidebarIcon" />
                            서비스 조회
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon" />
                            기사 조회
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon" />
                            일정 조회
                        </li>
                        <li className="sidebarListItem">
                            <MonetizationOnICon className="sidebarIcon" />
                            서비스 진행 현황
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}