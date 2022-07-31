import { useAuth } from '../Hook/useAuth'
import Login from './Login'
import Board from './Board'
import ListProvider from '../Contexts/ListContext'


export default function Kanban(){

    const {user} = useAuth()
    document.body.style.backgroundImage = "linear-gradient(90deg, rgba(26,188,156,1) 0%, rgba(52,152,219,1) 52%, rgba(0,212,255,1) 100%)"

    return (
        
        <div>
            {
                user ? 
                
                <ListProvider><Board /></ListProvider>
                
                : <Login />
            }
        </div>
    );
}