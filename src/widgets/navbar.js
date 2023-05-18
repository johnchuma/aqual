import React, { useState } from 'react'
import { Button, Container, Nav, Navbar, Offcanvas, Stack } from 'react-bootstrap'
import Heading from './heading'
import Paragraph from './paragraph'

import Space from './space'

import CustomButton from './button'
import Heading2 from './heading2'
import { AnimateComponent } from '../utils/animation'
import { secondaryColor, textColor } from '../utils/company_colors'
import { animated } from 'react-spring'
import { AiOutlineClose } from 'react-icons/ai'
export const links = [{name:"About us",path:"#about"},{name:"Services",path:"#services"},{name:"Why us ?",path:"#why"},,{name:"Contact us",path:"#contact"}];
const NavigationBar = () => {
    const navAnimation = AnimateComponent({from:{x:0},to:{x:20}})
const [showMenu, setShowMenu] = useState(false);

    return (
       
       <>
       <Space height={40}/>
       <Navbar expand="md" >
        <Container>
        <Navbar.Brand >
            <Heading2  fontWeight={700}  text={`Aqual Attorney`}/>
        </Navbar.Brand>
        <Navbar.Toggle onClick={()=>setShowMenu(true)} className='border-0 shadow-none'></Navbar.Toggle>
        <Navbar.Collapse className='ms-auto d-none d-md-block'>
            <Offcanvas show={showMenu} onHide={()=>setShowMenu(false)}>
                <Space/>
                <Offcanvas.Header className='d-flex justify-content-end'>
                    
                  <AiOutlineClose onClick={()=>setShowMenu(false)} color={secondaryColor} size={40}/>
                </Offcanvas.Header>
                <Offcanvas.Body>
                {
                links.map((item)=>{
                  return <Nav.Link href={item.path}  className='me-3 mb-3'><Heading2 style={navAnimation.styles} text={item.name}/></Nav.Link>
                })
            }
                </Offcanvas.Body>
            </Offcanvas>
        <Nav className='ms-auto d-flex align-items-center'>
            {
                links.map((item)=>{
                  return <Nav.Link href={item.path}  className='me-3'><Paragraph style={navAnimation.styles} text={item.name}/></Nav.Link>
                })
            }
         
        </Nav>
        </Navbar.Collapse>
        </Container>
       </Navbar>
       </>
    )
}

export default NavigationBar
