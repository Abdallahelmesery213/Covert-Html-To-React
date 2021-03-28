
import { React } from 'react';
import { Link } from 'react-router-dom';
import {NavbarSection ,Logo, LogoText, UlList ,UlItem,UlLink} from './style'
const Navbar = () => {
    return ( 
        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
                
                <UlList>
                    <UlItem><UlLink> <Link to="/">Home</Link> </UlLink>  </UlItem>
                    <UlItem><UlLink href="#">Work</UlLink> </UlItem>
                    <UlItem><UlLink href="#">Portfolio</UlLink> </UlItem>
                    <UlItem><UlLink href="#">Resume</UlLink> </UlItem>
                    <UlItem><UlLink href="#">About</UlLink> </UlItem>
                    <UlItem><UlLink> <Link to="/contact"> Contact </Link></UlLink> </UlItem>
                </UlList>
                
                
                
            </div>
            
        </NavbarSection>
     );
}
 
export default Navbar;