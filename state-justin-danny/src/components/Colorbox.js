// import React, { useState } from "react"

// const Colorbox = () => {
//     const colorNames = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
//     const [color, setColor] = useState(0)
// //     const handleClick = () => {    
// //     }
// //     return(
// //         <>
// //            <div onClick={handleClick} className="box">
// //                 {color}
// //            </div>
// //         </>
// //     )
// // }
//     const getNextColor = () => {
//         setColor((prevIndex) => (prevIndex + 1) % colorNames.length)
//     }
// }

// return (
//     <div style={{
//         width: '200px',
//         height: '200px',
//         border: '2px solid black',
//         backgroundColor: colorNames[color],
//         display: 'flex',
//         alignItems: 'center',
//         fontSize: '24px',
//         fontWeight: 'bold'
//     }}
//     onClick={getNextColor}
//     >
//         {colorNames[color]}
//     </div>
// )

// export default Colorbox

// // setColor(color ++)
//         // if (color === 0){
//         //      return colors[1]
//         // // } else if(color === 1) {
//         // //     return [i + color]
//         // // } else if(color === 2) {
//         // //     return [i + color]
//         // // } else if (color === 3) {
//         // //     return [i + color]
//         // // } else if (color === 4) {
//         // //     return color === 0
//         // }

//     // const colorWheel = (colors) => {
//     //     if (color === 0){
//     //         return [i]
//     //     } else if(color === 1) {
//     //         return [i + color]
//     //     } else if(color === 2) {
//     //         return [i + color]
//     //     } else if (color === 3) {
//     //         return [i + color]
//     //     }
//     // }
import React, { useState } from 'react';

const Colorbox = () => {
  const colorNames = ["white", "red", "orange", "yellow", "green", "blue", "purple", "pink"]
  const [currentColorIndex, setCurrentColorIndex] = useState(0)
  const getNextColor = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colorNames.length)
  }
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        border: '2px solid black',
        backgroundColor: colorNames[currentColorIndex],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
      }}
      onClick={getNextColor}
    >
      {colorNames[currentColorIndex]}
    </div>
  )
}
export default Colorbox