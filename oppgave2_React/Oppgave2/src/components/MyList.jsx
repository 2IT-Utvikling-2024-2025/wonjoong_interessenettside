import { useState } from "react"



const mylist=[
    {title:'Bana', id: 1},
    {title:'Eple', id: 2},
    {title:'Pare', id: 3}
   
    
]

export default function MyList(){
    const[vote,setVote] = useState(0)
function handleClick(){
    setVote(vote +1)

}

    const ListItems = mylist.map(item=>
        <li key= {item.id}>
            {item.title}
            <VoteButton vote={vote} onClick ={handleClick}> </VoteButton>
            
    

        </li>

    )


    return(


        <>
        
        
        <h1>MyList</h1>
        <ul>{ListItems}</ul>
        </>
    )
       
        
    
}

function VoteButton({vote,onClick}){
    


    return(

        <button onClick={onClick}>
            Voted {vote} times

        </button>
        

    )


}