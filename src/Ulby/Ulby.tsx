import { useUserStore } from './components/menu'
import {useEffect} from "react";
import '../App.css'

   
function Ulby() {
  // const {addUser, users}= useUsersStore()---минус такого подхода перерендер будет всегда даже если к примеру поменялся стейт не используемый в данном компоненте
const users = useUserStore(state=> state.users)
const addUser = useUserStore(state => state.addUser)
const fetchUsers = useUserStore(state=> state.fetchUsers)
useEffect(()=> {
  fetchUsers();
}, [])

const onBtnClick = () => {
  addUser("new User");
};
  return (
    <div>
      <h1>Зустанд от UlbyTV</h1>
     <h2>{users.map((item)=> <div key={item.id}>{item.id}{item.username}</div>)}</h2>
     <button onClick={onBtnClick}>create</button>
    </div>
    
  )
}

export default Ulby;
