
import React, { useState } from 'react'
import Heading from '../widgets/heading'
import { Col, Container, Image, Row, Stack } from 'react-bootstrap'
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai'
import Paragraph from '../widgets/paragraph'
import Space from '../widgets/space'
import Separator from '../widgets/separator'
import { backgroundColor, mutedText, primaryColor, secondaryColor, textColor } from '../utils/company_colors'
import Heading2 from './heading2'
import Heading3 from './heading3'

const Footer = () => {
    return (
       <div style={{backgroundColor:"#e2e2e2"}}>
       <Space/>

        <Container id='contact'>
            <Row>
            <Col className='d-none d-md-block' md={3}>
               <Heading  text={`Aqual attorneys`}/>
               <div className='bg-primary mt-3' style={{width:"50%",height:3}}></div>

            </Col>
            <Col md={3} className={`mt-4`}>
            <Heading3  text={`Offices address`}/>
            <Paragraph color={mutedText} className={`mt-3`} text={` Office ni Victoria palace<br>
                Mezzanine floor,<br>
                New bagamoyo rd,<br>
                P.o box 3553<br>
                Dar es salaam`}/>
            </Col>
            <Col md={3} className={`mt-4`}>
            <Heading3 className={`mb-2`}  text={`Managing partner`}/>

            <Paragraph color={mutedText} text={`Patrick Rutta Kajwahura`}/>
            <Paragraph color={mutedText} className={`mt-3`} text={`
                           Email<br/>
                           <a href="mailto:pattrick.rutta@aqualattorneys.com">pattrick.rutta@aqualattorneys.com</a> <br>
                           <a href="mailto:pattrick.rutta@gmail.com">pattrick.rutta@gmail.com</a> <br>
                           <a href="mailto:pattrick.rutta@lawswood.co.tz">pattrick.rutta@lawswood.co.tz</a> <br>
                
                `}/>
                   <Paragraph color={mutedText} className={`mt-3`} text={`
                           Phone <br/>
                            <a href="tel:+255688553694">+255 (0) 688 553 694</a>
                
                `}/>
            
            </Col>
            <Col md={3} className={`mt-4`}>
            <Heading3  className={`mb-2`} text={`Partner`}/>
            <Paragraph color={mutedText} text={`Henry Kambalile`}/>
            <Paragraph color={mutedText} className={`mt-3`} text={`
                           Email<br/>
                           <a href="mailto:HKambalile@aqualattorneys.com">HKambalile@aqualattorneys.com</a> <br>
                          <a href="mailto:hkambalilesgt@yahoo.com">hkambalilesgt@yahoo.com</a> <br>

                
                `}/>
                   <Paragraph color={`#ffffff70`} className={`mt-3`} text={`
                           Phone <br/>
                           <a href="tel:+255716387780">+255 (0) 716 387 780</a>
                
                `}/>
            </Col>
           </Row>
           <Space/>

            </Container>
          
       </div>
    )
}

export default Footer
