import { useState } from "react"

export const useCounter = (inicialValue = 10) => {
    const [counter, setCounter] = useState(inicialValue)
    
    const increment = (value = 1) => {
        setCounter( counter + value)
    }
    const decrease = (value = 1) => {
        if (counter === 0) return;
        setCounter( counter - value)
    }
    const reset = () => {
        setCounter(inicialValue)
    } 

    return {
        counter,
        increment,
        decrease,
        reset

    }
}