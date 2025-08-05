import React, { useEffect, useState } from 'react'

const UseDebounce = ( value , time) => {
    const [debounceValue , setDebounceValue] = useState(value)
    useEffect(()=>{
        let handler = setTimeout(() => {
            setDebounceValue(value)
            
        }, time)

        return()=>{
            clearTimeout(handler)
        }
        
    })
  return debounceValue
}

export default UseDebounce




// import React, { useEffect, useState } from 'react'

// const UseDebounce = (value, delay) => {
// const [debounceValue, setDebounceValue ] = useState("")

// useEffect(()=>{
//     const handler = setTimeout(()=>{
//         setDebounceValue(value)
//     }, delay)

//     return()=>{
//         clearTimeout(handler)
//     }
// })

// return debounceValue
// }

// export default UseDebounce
