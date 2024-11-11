import { useState } from "react"

export default function Tommer(){

    const[tall,setTall]=useState(0)
    const[result,setResult]=useState(0)

    const handleMultiply = (e) => {
        e.preventDefault()
        setResult(tall / 2.54); 
      };


    return( 
        <>
        
            <form onSubmit={handleMultiply}>
                <label>
                    <input
                    type="text" 
                    value={tall}
                    onChange={(e) => setTall(Number(e.target.value))}
                    />Cm

                    <input type="submit" value={"next"} 
                    className="submit"
                    />

                

                </label>
            </form>
            <h2>{result}</h2>
        </>
    )
} 