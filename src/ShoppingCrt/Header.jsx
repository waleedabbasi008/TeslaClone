import React from 'react'
import { Container, Navbar, FormControl, Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Header = () => {
    return (
        <>
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand href="#"> <a> Shopping Cart </a> </Navbar.Brand>
                    <Navbar.Text className='search'>
                        <FormControl style={{ width: '500px' }} placeholder='search a product' />
                    </Navbar.Text>
                    <Dropdown as={ButtonGroup}>
                        <Button variant="success"> <AiOutlineShoppingCart style={{fontSize:"2rem"}} /> </Button>

                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Navbar>


        </>
    )
}

export default Header;