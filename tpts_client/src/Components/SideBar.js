import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

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
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Menu Principal
            </NavText>
        </NavItem>

        <NavItem eventKey="Videos">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Videos
            </NavText>
        </NavItem>

        <NavItem eventKey="Audio">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Audio
            </NavText>
        </NavItem>

        <NavItem eventKey="Articles">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Articles
            </NavText>
        </NavItem>

        <NavItem eventKey="Admin">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
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
