import { SetStateAction, useEffect, useState } from "react"
import { handleUserDataInterface as userDataInterface } from "../../App"
interface Props {
    selectTeam: (handleUser: userDataInterface) => React.MouseEventHandler<HTMLButtonElement> | undefined
    inputValue: string
}
interface userData {
    name: string | null,
    avatar_url: string,
    followers: number,
    public_repos: number,
    public_gists: number
}

export const CardUserInfo = (props: Props) => {
    const [userData, setUserData] = useState<userData>({
        name: null,
        avatar_url: '',
        followers: 0,
        public_repos: 0,
        public_gists: 0
    })

    function powerUser() {
        const power_user = Math.round((userData.public_repos * 1) + (userData.followers * 0.4) + (userData.public_gists * 0.3))
        return power_user;
    }
    const handleUser: userDataInterface = {
        userName: userData.name,
        userPower: powerUser()
    }
    useEffect(() => {
        getUserData()
    }, [props.inputValue])
    async function getUserData() {
        try {
            let user = await fetch(`https://api.github.com/users/${props.inputValue}`)
                .then(response => response.json());

            setUserData(
                {
                    name: user.name,
                    avatar_url: user.avatar_url,
                    followers: user.followers,
                    public_repos: user.public_repos,
                    public_gists: user.public_gists
                }
            )
        } catch (e) {
            return "Não foi possível concluir a busca"
        }
    }


    return (
        <>
            {userData.name ?
                <div className="user-github">
                    
                    <h2 className="h2-user-github">{userData.name}</h2>
                    <img className="avatar-photo" src={userData.avatar_url}></img>
                    <div className="user-github-info">
                        <span>{userData.followers} followers</span>
                        <span>{userData.public_repos} repositórios publicados</span>
                    </div>
                    <button id="add-button" onClick={() => props.selectTeam(handleUser)}>+</button>
                </div>
                : <p className="p-title">Nenhum usuário encontrado :(</p>
            }
        </>
    )
}