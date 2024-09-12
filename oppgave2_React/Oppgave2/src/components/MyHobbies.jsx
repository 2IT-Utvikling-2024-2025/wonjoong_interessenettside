import { useState } from 'react'
import './CSS/MyHobbies.css'


const hobbies = [
    {title:"utvikling", isFavore: true, upVote : 0 , id:1 },
    {title:"gaming", isFavore: false, upVote : 0 , id:2 }

]


export default function MyHobbies() {

    
    const listitems = hobbies.map(hobby=>
    <li key={hobby.id} style= { {color: hobby.isFavore ?'magenta' : 'white' } }>
        {hobby.title}
        <VoteButton></VoteButton>
    </li>




    )
    return(
        <> 
            <h1 className= 'header'> Wonjoong Lee </h1> 
            <ul>{listitems}</ul>       
        </>
    )
}



function VoteButton() {

    const [vote, setVote] = useState(0)

    function handleClick() {

        setVote(vote+1)

    }
    
    return(

        <button className = 'button' onClick = {handleClick}>
            Voted {vote} times

        </button>
    )
}