import {useState} from "react"
const VirtualizedList = ({ height , width , list , itemHeight }) => {

    const [ indices , SetIndices  ] = useState([ 0 , Math.floor(height / itemHeight )   ])

const visibleList = list.slice(indices[0] , indices[1] + 1 )

const handleScroll = (e) => {
    const {scrollTop} = e.target
    console.log(scrollTop)
    const newStartIndex = Math.floor(scrollTop / itemHeight)
    const newEndIndex = newStartIndex + Math.floor(height  / itemHeight)
    SetIndices([newStartIndex , newEndIndex])
}

return (
    <div className="container"  onScroll={handleScroll} style={{ height , width , background:"grey",overflow:"auto"  }} > 
   <div style={{height:list.length * itemHeight,position:"relative"  }}  >
    { visibleList.map( (item , index) => { return  <div key={item}  style={{ 
    height:itemHeight,background:"Coral",borderTop:"5px solid grey",position:"absolute",top:(indices[0] + index ) * itemHeight ,width:"100%",textAlign:"center" 
}}  className="item"> {"Item" + item} </div>   }      )
 }
    </div>    
  
      </div>)}

export default VirtualizedList