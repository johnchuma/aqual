import React from 'react'
import { animated } from 'react-spring'
import { textColor } from '../utils/company_colors'
const Heading = ({fontWeight,fontSize,color,text,className,style}) => {
    return (
        <>
          <animated.div className={className+` d-none d-md-block `} style={{...style,fontWeight:fontWeight??900,fontFamily:"valeria", lineHeight:1.2, fontSize:fontSize??"4vw",color:color??textColor}}   
        dangerouslySetInnerHTML={{__html:text}}></animated.div>
          <animated.div className={className+` d-block d-md-none `} style={{...style,textIndent:0, fontWeight:fontWeight??700,fontFamily:"valeria", lineHeight:1.0, fontSize:fontSize??"9vw",color:color??textColor}}   
        dangerouslySetInnerHTML={{__html:text}}></animated.div>
        </>
      
    )
}

export default Heading
