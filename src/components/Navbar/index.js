import React from 'react'
import { 
    Nav, 
    NavLink, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink
 } from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>

                    <img src={require('/Users/Grace/Documents/TechPoint/marketApp/src/components/Navbar/images/GTlogo.png')} 
                    alt="logo" /> 
                </NavLink>
                <Bars /> 
                <NavMenu> 
                    <NavLink to="/resources" activeStyle>
                        Resources 
                    </NavLink>
                    <NavLink to="/forums" activeStyle>
                        Forums 
                    </NavLink>
                    <NavLink to="/farmers" activeStyle>
                        Farmers 
                    </NavLink>
                    <NavLink to="/markets" activeStyle>
                        Markets
                    </NavLink>
                    {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink> */}

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
