import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import cars from './CarJson';
const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;           //changes committed
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;
`
const Menu = styled.div`
text-decoration: none;
display: flex;
align-items: center;
p {
  font-weight: 700;
  text-transform: uppercase;
  padding: 15px 0 0  15px;
  flex-wrap: nowrap;
  font-size: 1.2rem;
}
@media screen and (max-width: 768px) {
  display: none;
  
}
@media screen and (max-width: 350px) {
    
    
 }

`
const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: white;
width: 300px;
z-index: 1;
list-style: none;
padding: 20px;
font-weight: 700;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.2s ease-in-out;

li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0,0,0,0.25);
  a{
   font-weight: 600; 
  }
 }
 @media screen and (max-width: 350px) {
    width: 200px;
    
 }
 `
const CustomClose = styled(CloseIcon)`
width: 2.5rem;
cursor: pointer;
`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`
const RightMenu = styled.div`
a{
  font-weight: 700;
  font-size: 1.2rem;
  margin-right: 10px; 
  @media screen and (max-width: 350px) {
    display: none;
    
 }
}
`
const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`
const Navbar = () => {
    const [openHamburger, setopenHamburger] = useState(false);
    console.log(cars);

    return (
        <>
            <Container>
                <a href='#home'>
                    <img src="/images/logo.svg" alt="" />
                </a>
                <Menu>
                    {cars && cars.map((car) => {
                        const { name, link, id } = car;
                        return (
                            <>
                                <p key={id}> <a href={link}> {name} </a> </p>

                            </>
                        )
                    })}
                </Menu>
                <RightMenu>
                    <a href="#"> Shop </a>
                    <a href="#"> Tesla Account </a>
                    <CustomMenu onClick={() => setopenHamburger(true)} />
                </RightMenu>
                <BurgerNav show={openHamburger}>

                    <CloseWrapper>
                        <CustomClose onClick={() => setopenHamburger(false)} />
                    </CloseWrapper>
                    {
                        cars && cars.map((car) => {
                            const { name, link, id } = car;
                            return (
                                <>
                                    <li key={id}>    <a href={link}> {name} </a> </li>

                                </>
                            )
                        })
                    }
                    <li>    <a href='#home'> Existing inventory </a> </li>
                    <li>    <a href='#home'> Used inventory </a> </li>
                    <li>    <a href='#home'> Trade-in  </a> </li>
                    <li>    <a href='#home'> Cyber truck </a> </li>
                    <li>    <a href='#home'> Roadster </a> </li>

                </BurgerNav>
            </Container>
        </>
    )
}

export default Navbar;