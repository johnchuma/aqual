import React from 'react'
import { animated } from 'react-spring'
import { textColor } from '../utils/company_colors'
const Heading2 = ({fontWeight,fontSize,color,text,className,...style}) => {
    return (
        <>
          <animated.div className={className+` d-none d-md-block `} style={{...style,fontWeight:fontWeight??900,fontFamily:"valeria", lineHeight:1.2, fontSize:fontSize??"2.5vw",color:color??textColor}}   
        dangerouslySetInnerHTML={{__html:text}}></animated.div>
          <animated.div className={className+` d-block d-md-none `} style={{textIndent:0, fontWeight:fontWeight??700,fontFamily:"valeria", lineHeight:1.0, fontSize:fontSize??"5vw",color:color??textColor}}   
        dangerouslySetInnerHTML={{__html:text}}></animated.div>
        </>
      
    )
}

export default Heading2