import { useState } from "react"

export default function Partall() {

    const [tall, setTall] = useState(0)
    const [result, setResult] = useState("")

    const handleMultiply = (e) => {
        e.preventDefault()
        if (tall === null || Number.isNaN(tall)) {
            setResult("Ugyldig tall")
        } else if (tall % 2 === 1) {
            setResult("partall")
        } else {
            setResult("oddetall")
        }

      };



    return (
        <>
            <form onSubmit={handleMultiply}>
                <label>
                    <input
                        type="text"
                        value={tall}
                        onChange={(e) => setTall(Number(e.target.value))}
                    />

                    <input type="submit" value={"next"}
                    className="submit"
                    />

                </label>
            </form>
            <h2>{result}</h2>
        </>
    )
}
