import React from 'react'
import { textColor } from '../utils/company_colors'
import { animated } from 'react-spring'

const Paragraph = ({fontWeight,fontSize,color,text,className,textIndent,style}) => {
    return (
        <div>
        <animated.div className={className+` d-none d-md-block `} style={{...style,fontWeight:fontWeight??300,textIndent:textIndent??0, lineHeight:1.3,fontFamily:"valeria", fontSize:fontSize??"1.3vw",color:color??textColor}} dangerouslySetInnerHTML={{__html:text}}  ></animated.div>
        <animated.div className={className+` d-block d-md-none `} style={{...style,fontWeight:fontWeight??300,textIndent:textIndent??0, lineHeight:1,fontFamily:"valeria", fontSize:fontSize??"4vw",color:color??textColor}} dangerouslySetInnerHTML={{__html:text}} ></animated.div>
        </div>
    )
}

export default Paragraph
