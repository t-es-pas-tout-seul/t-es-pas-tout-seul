import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import { RiHomeHeartFill } from 'react-icons/ri';
import { ImVideoCamera } from 'react-icons/im';
import { AiFillAudio } from 'react-icons/ai';
import { IoNewspaperSharp } from 'react-icons/io5';
import { RiAdminFill } from 'react-icons/ri';



import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from 'react-router-dom';


function SideBar() {

const navigate = useNavigate();

  return (
<SideNav
    onSelect={(selected) => {
        const destination = '/' + selected;
            navigate(destination);
            console.log("afasf");
       }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="Home">
            <NavIcon>
            <RiHomeHeartFill size={30} style={{verticalAlign: 'middle'}}/>
            </NavIcon >
            <NavText>
                <strong>Menu Principal</strong>
            </NavText>
        </NavItem>

        <NavItem eventKey="Audio">
            <NavIcon>
            <AiFillAudio size={30} style={{verticalAlign: 'middle'}}/>
            </NavIcon>
            <NavText>
                Audio
            </NavText>
        </NavItem>
        
        <NavItem eventKey="Videos">
            <NavIcon>
            <ImVideoCamera size={30} style={{verticalAlign: 'middle'}}/>
            </NavIcon>
            <NavText>
                Videos
            </NavText>
        </NavItem>

        <NavItem eventKey="Articles">
            <NavIcon>
            <IoNewspaperSharp size={30} style={{verticalAlign: 'middle'}}/>
            </NavIcon>
            <NavText>
                Articles
            </NavText>
        </NavItem>

        <NavItem eventKey="Admin">
            <NavIcon>
            <RiAdminFill size={30} style={{verticalAlign: 'middle'}}/>
            </NavIcon>
            <NavText>
                Admin
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
    );
}

export default SideBar;
