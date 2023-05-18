import React, { useEffect, useState } from 'react'
import Heading from '../widgets/heading'
import { Col, Container, Image, Offcanvas, Row, Stack } from 'react-bootstrap'
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineClose, AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai'
import Paragraph from '../widgets/paragraph'
import Space from '../widgets/space'
import Separator from '../widgets/separator'
import { backgroundColor, mutedBackground, mutedText, primaryColor, secondaryColor, textColor } from '../utils/company_colors'
import Footer from '../widgets/footer'
import NavigationBar from '../widgets/navbar'
import { useNavigate } from 'react-router-dom'
import Heading2 from '../widgets/heading2'
import { AnimateComponent } from '../utils/animation'
import { animated, useSprings } from 'react-spring'
const whyChooseUs =[
    {why:"Customer Satisfaction",details:" Exceeding customers' satisfaction is our standard of service delivery. Our Clients are always informed of what is going on in their matters and the quality of our output is above the standard service. Our Client should expect the best service that aims not only at pleasing the client but exceeding the satisfaction and delight the client. Clients whom we have served for more than a year have moved from satisfaction to delight Integrity Members of the Firms and the employees have very high integrity which supplements our professionalism. All our clients are encouraged to disclose to the firm anyelement of lack of integrity by any member of the firm"},
    {why:"Periodic report",details:`For all Our Clients we do reporting on the progress of their matters either monthly or weekly depending on the nature of the subject matter and also depending on the interest of the client. The monthly report includes the brief of the matter, development in the matter, the following scheduled dates for cases, and any other information which is necessary according to the request of the client`},
    {why:"Expeditiousness and excellence",details:`Our focus is to see to it that all client's matters are handled with utmost efficiency, without delays and get timely conclusion. Our slogan for quality is perfection and excellence with zero default.`},
    {why:"Conﬁdentiality",details:` We understand our clients' needs for the privacy and confidentiality. We handle complex commercial and personal matters, while providing a secure environment for open and frank communications. Accomplished We are skilled, dedicated and strategists with the experience to accomplish our clients’ goals in the boardroom, negotiating table and at the working field. `}

]
const services = [
    {
service:"Wills and Estate Administration",
image:"will.jpg",
details:`
Our Wills and Estate Administration Team can offer clients the peace of mind that their affairs are organized in a manner that ensures their needs and intentions are met. We offer clients guidance on the best structure of a Will, tailored for individual circumstances, and including options that minimize tax burdens and ensure wealth preservation for beneficiaries.
Our Team walks families and executors through the administration of an estate, from the simplest to the very complex, helping to make probate and asset distribution as seamless as possible.
`},
{
    service:"Competition/Foreign Investment",
    image:"why.jpg",
    details:`
    Competition/Foreign Investment Law Team provides advice to clients in all aspects of Tanzanian competition law and foreign investment review matters.
    Our Firm works closely drawing on the skills and knowledge of commercial transactions, securities, energy, regulatory, litigation and other practice areas where required to provide full service in meeting the objectives of our clients in a timely and effective manner
`},
{
    service:"Commercial Arbitration",
    image:"arbitration.jpg",
    details:`
    Commercial Arbitration team utilize their extensive experience and knowledge of arbitration practice and law to assist clients in resolving their disputes efficiently and cost effectively while reducing the risks associated with litigation.
    This team has in-depth industry knowledge with respect to commercial, construction, employment, insurance, intellectual property, pensions, real estate, securities and tax matters, which serves them well in a wide range of commercial arbitration disputes.
`},
{
        service:"Residence & Work  Permits and Labour  Law",
        image:"land.jpeg",
        details:`
        Any foreigner intending to reside in the United Republic of Tanzania for investment, business, employment or any other legal activity may be issued with a Residence Permit& Work Permits. Providing legal opinions on various Labour law issues. To guide companies on both contentious and non-contentious Labour matters. To draft and drawing up employment contracts in line with Tanzanian Labour laws, preparation of employment manuals, institution of disciplinary measures, termination of contracts of employment, redundancies/ retrenchments, work permits for foreign employees and all other Labour law related issues. To develop voluntary agreements. To assist in mediating employment disputes and defending Labour cases instituted by employees against the company and vice versa.
`},
{
        service:"Residence & Work  Permits and Labour  Law",
        image:"labour.jpg",
        details:`
        Any foreigner intending to reside in the United Republic of Tanzania for investment, business, employment or any other legal activity may be issued with a Residence Permit& Work Permits. Providing legal opinions on various Labour law issues. To guide companies on both contentious and non-contentious Labour matters. To draft and drawing up employment contracts in line with Tanzanian Labour laws, preparation of employment manuals, institution of disciplinary measures, termination of contracts of employment, redundancies/ retrenchments, work permits for foreign employees and all other Labour law related issues. To develop voluntary agreements. To assist in mediating employment disputes and defending Labour cases instituted by employees against the company and vice versa.
`}
,
{
        service:"Family Lawyers",
        image:"family.jpg",
        details:`
        Family Law Matters involving the end of a
        marriage, disputes over custody or Child Support, or allegations
         of abuse and neglect are deeply emotional. At Prosperity Attorneys,
         you will work with a qualified Family Lawyer who understands what you’re
         going through and will fight to protect your best interests. Many people hire a
          lawyer or a law firm with no prior experience as to how the legal system works.
           It is highly recommended to have a competent and experience lawyer from start
            of anything which need’s legal observation to the end so as to avoid emotionally
            and economic challenging.
`},

{
        service:"Intellectual Property",
        image:"interlectual property.jpeg",
        details:`
        The firm acts as a trademark agent responsible for trademark registration, trademark
        instaurations, merger, assignments, maintenance of trade and accommodations marks, prosecuting and forfending cases of breach of trademark rights. Forfending of copyright and prosecuting or bulwarking unlawful interference with copyright and other disputes arising in the perspicacious property law area. Advise on the way to forfend Industrial design and Patents and prosecuting or bulwarking unlawful interference with patent rights.
`},

{
        service:"Land law",
        image:"land.jpeg",
        details:`
        Land disposition  transactions that  include transfer of  right of occupancy,  leases and easements. Security documentation that includes mortgage, debenture, lien, discharge of charges, supervising sale as appointed managers. Managing the joint ventures in real estate development and or long lease relationship: preparing contracts and registering them. Land use transactions such as changing the use of land from commercial to residential and vice versa, registration and cancellation of bonds and rezoning and subdivision of properties. Defending parties in the courts of law including the District land and Housing Tribunal, the High Court to the Court of Appeal of Tanzania

`},

{
        service:"Litigation",
        image:"litigation.jpg",
        details:`
        So far we represent client in courts of law on the following issues: Land matters, Law of Tort, Labour issues, Insurance, Contracts, Banking and Financial, Intellectual property, Motor vehicle accident claims, Matrimonial Matters, Administration of estate and Constitutional and Human Rights Issues.

`}
]

export const aboutMissionAndVision = [
{title:"About us",path:"/about", description:`
Aqual Attorneys is found on the Principle of expert administrations to its customers of the most elevated standard and quality. Each entrepreneur or organization whatever their size, nature or structure needs a corporate affair and expert Legal consultant who comprehends Its business, it’s position and objective of the whole field, we can draw on the best corporate Legal practices and in addition skill and impression in addressing our customers’ needs.

Aqual Attorneys is an ultramodern legal Firm based in Tanzania, East and Central Africa having spectrum of cross borders practice that caters for local and multination corporations, financial institutions, government entities as well as private business individuals concerning their legal needs around the globe.

Our firm specializes in ensuring that businesses are in compliance with all areas of laws and particularly Employment and related laws, rules and regulations applicable in Tanzania. This aims at preventing employment related problems before they arise.
`},
{title:"Our vision",path:"/vision",  description:`
To be the premier law firm in East and Central Africa, offering the highest quality professional legal services to our clients timely and in high professional standards at affordable cost to achieve excellence and delight

`},
{title:"Our mission",path:"/mission",  description:`
Aqual Attorneys’ s mission is to take interest in our clients, understand their business objectives, meet and exceed their expectations. We therefore commit ourselves to offers
A competitive, commendable and timely capability in legal practice as regards the commercial and corporate practices
An in-depth advisory and representation capability in matters of regulatory framework, subsidies and taxes, corporate secretarial and finance issues, as well as Anti Money Laundering and Anti Bribery matters.

`}];
const HomePage = () => {
const [currentService, setCurrentService] = useState(0);
const [currentAmv, setCurrentAmv] = useState(0);
const [showAmv, setShowAmv] = useState(false);

const animateDownArrow = AnimateComponent({from:{y:0}, to:{y:10},loop:true, config:{duration:1000}})
const lineAnimation = AnimateComponent({from:{width:"20%"},to:{width:"50%"},config:{duration:2000}})
const heroTitleAnimation = AnimateComponent({from:{opacity:0,scale:0.8},to:{opacity:1,scale:1},config:{duration:1000}}) 
const waterAnimation = AnimateComponent({from:{x:300,opacity:0},delay:1500, to:{x:0,opacity:1}})
const animateServiceOut = AnimateComponent({from:{opacity:1},to:{opacity:0}})
const animateServiceIn = AnimateComponent({from:{opacity:0,scale:0.8},to:{opacity:1,scale:1},config:{duration:1000}})
const heroImages = ["why2.jpg","why.jpg"]
const from = { scale: 1000, opacity: 0 };
  const to = { scale: 1, opacity: 1 };

  const [styles, api] = useSprings(heroImages.length, index => ({
    ...from,
    config: { duration: 500,mass:1,velocity:200,precision:0.3 },
    delay: 0, // Add a delay to each animation
  }));
useEffect(() => {
   
    animateDownArrow.animate()
    animateServiceIn.animate()
    lineAnimation.animate()
    heroTitleAnimation.animate()
    waterAnimation.animate()
}, []);



const navigate = useNavigate()
    return (
        <div>
           <div className='' >
        <NavigationBar/>

            <Container >
                
               <Row >
                <Col md={{offset:0,span:9}}>
                    <Space/>
                 

                <Heading style={{textIndent:50,...heroTitleAnimation.styles}}  text={`Experience excellence in legal services with our premier East and Central African law firm`}/>
                 <animated.div className='bg-primary mt-3' style={{...lineAnimation.styles, height:3}}></animated.div>
                </Col>

                <Col className='d-none d-md-block'>
                    <Space/>
                    {/* <Space/> */}
                <animated.div style={waterAnimation.styles}>
                <Image style={{width:"100%",height:250, objectFit:'cover',borderRadius:50}} src='why2.jpg' fluid/>

                </animated.div>
                

                </Col>
               </Row>
        

    

              <Row>
                <Col className='text-end mt-5 d-none d-md-block'>
                <animated.div className='btn ms-auto d-flex justify-content-center align-items-center  bg-primary  ' style={{borderRadius:30,height:50,width:50,...animateDownArrow.styles}}>
                    <AiOutlineArrowDown className='' color='white'/>

                    </animated.div>
                  
                </Col>
              </Row>
              <Stack/>
             
               {/* <Separator/> */}
               <div id='about'></div>
            <Space/>
            
              <div style={{position:'relative'}}>
            
              <Stack id="amv">
               {
               aboutMissionAndVision.map((item,index)=>{
                    return <div 
                    onClick={()=>{
                        setCurrentAmv(index)
                        setShowAmv(true)
                        
                    }}
                    className='btn py-3 mb-2 px-3' style={{borderColor:mutedBackground,borderRadius:30}} >
                        <Stack direction='horizontal'>
                        <Paragraph text={item.title}/>
                         <AiOutlinePlus color={textColor} className='ms-auto'/>
                        </Stack>
                    </div>
                })
              }
              <Offcanvas placement='end'  className="" style={{backgroundColor:backgroundColor}} show={showAmv} onHide={()=>setShowAmv(false)}>
              <Space height={50}/>
                
                <Offcanvas.Header>
                    <div></div>
                    <AiOutlineClose onClick={()=>setShowAmv(false)} size={30} color={secondaryColor}/>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Heading2  text={aboutMissionAndVision[currentAmv].title}/>
                    <Paragraph className={`mt-4`} textIndent={50} text={aboutMissionAndVision[currentAmv].description}/>
                </Offcanvas.Body>
              </Offcanvas>
             
               </Stack>
              </div>
              
            <Space/>
            <div id='services'></div>
            <Heading fontSize={`12vw`} text={`Our services`}/>
            {/* <div className='bg-primary mt-3' style={{width:"20%",height:3}}></div> */}
            {/* <Space/> */}

            </Container>

            <Container fluid>
            {/* <div style={{height:100,width:"40%",backgroundSize:'cover',borderRadius backgroundImage:"url('aqual-output2.gif')"}} ></div> */}
            {/* <Space/> */}
            <Row className='d-flex align-items-center'>
                <Col className='d-none d-md-block' md={{offset:1,span:1}}>
                <div onClick={async ()=>{
                    let newService
                   
                        if(currentService < services.length-1){
                            newService = currentService+1;
   
                       }
                       else{
                            newService = 0
                       }
                    setCurrentService(newService)
                    animateServiceIn.animate()
                    

                    
                   

                }} className='btn  d-flex justify-content-center align-items-center  bg-primary  ' style={{borderRadius:30,height:50,width:50}}>
                    <AiOutlineArrowLeft className=' py-0 my-0' color='white'/>
                  
                    </div>
                </Col>
                <Col md="5" className='mt-3'>
                    <animated.div style={{...animateServiceIn.styles}}>
                    <Heading2 text={services[currentService].service}/>
                    <Paragraph  color={textColor} textIndent={50} className={`mt-2`}  text={services[currentService].details}/>
                    </animated.div>
                   
                </Col>
                <Col className='d-none d-md-block mt-3' >
                    <animated.div style={{...animateServiceIn.styles}}>
                    <Image fluid style={{height:250,width:"100%",borderRadius:300, objectFit:'cover'}} src={services[currentService].image} />

                    </animated.div>

                </Col>
                <Col className='d-block d-md-none mt-3' >
                <Image fluid style={{height:250,width:"100%",borderRadius:10, objectFit:'cover'}} src={services[currentService].image} />

                </Col>

            </Row>
            </Container>
            
            {/* <Separator/> */}
            <Space/>
            <Container id='why'>
            <Heading  text={`Why choose us ?`}/>
            <div className='d-none d-md-block'>
            <Space/>

            </div>
            <Row>
                <Col md={{offset:2,span:10}}>
                    {whyChooseUs.map((item)=>{
                        return <>
                        <Row className='mb-4'>
                            <Col md="3">
                        <Paragraph color={primaryColor} className={`mt-3`} text={item.why}/>
                            </Col>
                            <Col>
                        <Paragraph textIndent={50} className={`mt-3`} text={item.details} />

                            </Col>
                        </Row>
                        </>
                    })}
                </Col>
            </Row>
            </Container>
            <Space/>
              
          
            
           </div>
        </div>
    )
}

export default HomePage
