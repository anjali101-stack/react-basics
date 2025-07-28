import React, { useEffect, useState } from 'react'

const UseDebounce = (value, delay) => {
const [debounceValue, setDebounceValue ] = useState("")

useEffect(()=>{
    const handler = setTimeout(()=>{
        setDebounceValue(value)
    }, delay)

    return()=>{
        clearTimeout(handler)
    }
})

return debounceValue
}

export default UseDebounce
