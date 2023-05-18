import React from 'react'
import Space from '../widgets/space'
import { Col, Container, Row } from 'react-bootstrap'
import Heading from '../widgets/heading'
import { aboutMissionAndVision } from './home_page'
import Paragraph from '../widgets/paragraph'
import { AiOutlineClose } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { secondaryColor } from '../utils/company_colors'
const VisionPage = () => {
const navigate = useNavigate()

    return (
        <div>
     <Space height={50}/>
           <Container>
           <div onClick={()=>{navigate('/')}} className='d-flex justify-content-end'>
            <AiOutlineClose size={50} color={secondaryColor}/>
           </div>
           </Container>
           <Space height={50}/>
        <Container>
         <Heading text={aboutMissionAndVision[1].title}/>
         <Space height={50}/>
         <Row>
             <Col md={{offset:2}}>
             <Paragraph textIndent={50} text={aboutMissionAndVision[1].description}/>
             </Col>
         </Row>
         </Container>            
     </div>
    )
}

export default VisionPage
