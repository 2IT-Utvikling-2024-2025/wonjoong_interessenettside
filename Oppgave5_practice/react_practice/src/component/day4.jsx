//선생님 코드 = 퀴즈


import { useState } from "react"

export default function Day4() {


    const [answer, setAnswer] = useState('')
    const [radiobutton, setRadiobuttons] = useState(false)
  
    function updateAnswer(e) {
      setAnswer(e.target.value)
    }
  
    function updateradiobuttons(e) {
      setRadiobuttons(e.target.value)
    }
  
  
    function checkAnswer() {
      if (answer === 'Dynamittveien 25A') {
        alert('Riktig svar!')
      } else {
        alert('Feil svar')
      }
    }
  
    function checkRadio() {
      if (radiobutton == 677) {
        alert('Riktig svar!');
      } else {
        alert('Feil svar');
      }
    } 
    return (
      <>
        <div className='container'>
          <h1>Quiz om Drømtorp</h1>
  
          {/* First question */}
          <div className='question'> 
            <h2>Hva er adressen til Drømtorp Videregående Skole?</h2>
            <div className='answer'>
              <input 
                className="textfield" 
                onChange={updateAnswer} 
                placeholder="Skriv ditt svar her" 
              />
              <button className='button' onClick={checkAnswer}>
                Sjekk svaret
              </button>
            </div>
          </div>
  
          {/* Second question */}
          <div className='question'> 
            <h2>Hvor mange elever er det på Drømtorp VGS?</h2>
            <div className='answer'>
              <div className='radio-buttons'>
                <label>
                  <input 
                    type="radio"
                    value="750"
                    name="students" 
                    onChange={updateradiobuttons}  // Added onChange event
                  />
                  750
                </label>
                <label>
                  <input 
                    type="radio"
                    value="677" 
                    name="students" 
                    onChange={updateradiobuttons}  // Added onChange event
                  />
                  677
                </label>
                <label>
                  <input 
                    type="radio" 
                    value="710" 
                    name="students" 
                    onChange={updateradiobuttons}  // Added onChange event
                  />
                  710
                </label>
              </div>
              <button className='button' onClick={checkRadio}>
                Sjekk svaret
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }