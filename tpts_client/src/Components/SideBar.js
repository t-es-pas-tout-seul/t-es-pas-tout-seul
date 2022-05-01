import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import { RiHomeHeartFill } from 'react-icons/ri';
import { AiFillVideoCamera } from 'react-icons/ai';
import { MdAudiotrack } from 'react-icons/md';
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
            <RiHomeHeartFill size={35} style={{verticalAlign: 'middle'}}/>
            </NavIcon >
            <NavText>
                <strong>Menu Principal</strong>
            </NavText>
        </NavItem>

        <NavItem eventKey="Videos">
            <NavIcon>
            <AiFillVideoCamera size={35} style={{verticalAlign: 'middle'}}/>
            </NavIcon>
            <NavText>
                Videos
            </NavText>
        </NavItem>

        <NavItem eventKey="Audio">
            <NavIcon>
            <MdAudiotrack size={35} style={{verticalAlign: 'middle'}}/>
            </NavIcon>
            <NavText>
                Audio
            </NavText>
        </NavItem>

        <NavItem eventKey="Articles">
            <NavIcon>
            <IoNewspaperSharp size={35} style={{verticalAlign: 'middle'}}/>
            </NavIcon>
            <NavText>
                Articles
            </NavText>
        </NavItem>

        <NavItem eventKey="Admin">
            <NavIcon>
            <RiAdminFill size={35} style={{verticalAlign: 'middle'}}/>
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
