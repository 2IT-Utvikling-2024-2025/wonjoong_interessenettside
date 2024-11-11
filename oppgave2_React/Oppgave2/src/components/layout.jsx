import {Outlet,Link} from 'react-router-dom'
import './CSS/layout.css'

export default function Layout(){

    return(


        <>
        
        <nav>

            <ul>

                <li>
                    <Link className='link' to="/"> Home </Link> 
                    
                </li>
                <li>
                    <Link className='link' to="/about"> About </Link>    

                </li>
                <li>
                    <Link className='link' to="/profil"> My profil </Link>    
                    
                </li>
                
                <li>
                    <Link className='link' to="/tommer"> tommer kalkuratul </Link>    
                    
                </li>
        

            </ul>

        </nav>
        </>
    )
}