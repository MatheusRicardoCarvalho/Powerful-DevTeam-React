import { handleUserDataInterface } from "../../App"
import "./cardDev.css"
interface Props{
    classString: string
    userData: handleUserDataInterface
    removeUser: (removeUser:handleUserDataInterface) => void
}

export const  CardDev = (props: Props) => {
    return(
        <>
        <div className={props.classString+' card-dev'}>
            <p>{props.userData.userName}</p>
            { props.userData.userPower === null ? null : <p>Poder de desenvolvimento do dev: {props.userData.userPower}</p>}
            {props.userData.userPower === null ? null : <button className="remover" onClick={() => props.removeUser(props.userData)}>Remover</button>}

        </div>
        </>
    )
}