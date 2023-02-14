import { useEffect, useState } from 'react'
import './App.css'
import { CardDev } from './components/CardDev/CardDev'
import { Cards } from './components/Cards/Cards'
import { CardUserInfo } from './components/CardUserInfo/CardUserInfo'
import { FormSearchUser } from './components/FormSearchUser/FormSearchUser'

export interface handleUserDataInterface{
  userName: string | null
  userPower: number | null
}

function App() {
  const userNone:handleUserDataInterface = {userName:'',userPower:null}
  const [userData,setUserData] = useState<handleUserDataInterface[]>([])
  const [inputValue, setInputValue] = useState('')

  const selectTeam = (handleUser: handleUserDataInterface) => {
    if (userData.length < 5){
      setUserData([...userData,{userName: handleUser.userName,userPower: handleUser.userPower}])
    } else{
      alert("Não é possível adicionar mais Devs, todos os espaços foram ocupados!")
    }
    return undefined
  }
  const clearTeam = () => {
    setUserData([])
  }
  const removeUser = (user: handleUserDataInterface) => {
    const userToRemove = userData.map(item => item)
    const indexUserToRemove = userToRemove.indexOf(user)
    userToRemove.splice(indexUserToRemove,1)
    setUserData(userToRemove)
  }
  return (
    <>
      <header>
        <h1 className="h1-header"> Monte seu time de devs por usuários do GitHub</h1>
        <FormSearchUser setInput={setInputValue}/>
      </header>
      <aside>
        <Cards clearTeam={clearTeam}>
          { userData[0] ? <CardDev classString="dev-1" userData={userData[0]} removeUser={removeUser}/> : <CardDev classString='dev-1' userData={userNone} removeUser={removeUser}/>}
          { userData[1] ? <CardDev classString="dev-2" userData={userData[1]} removeUser={removeUser}/> : <CardDev classString='dev-2' userData={userNone} removeUser={removeUser}/>}
          { userData[2] ? <CardDev classString="dev-3" userData={userData[2]} removeUser={removeUser}/> : <CardDev classString='dev-3' userData={userNone} removeUser={removeUser}/>}
          { userData[3] ? <CardDev classString="dev-4" userData={userData[3]} removeUser={removeUser}/> : <CardDev classString='dev-4' userData={userNone} removeUser={removeUser}/>}
          { userData[4] ? <CardDev classString="dev-5" userData={userData[4]} removeUser={removeUser}/> : <CardDev classString='dev-5' userData={userNone} removeUser={removeUser}/>}
        </Cards>
      </aside>
      <div className="main-content">
        <CardUserInfo selectTeam={selectTeam} inputValue={inputValue}/>
      </div>
    </>
  )
}

export default App
