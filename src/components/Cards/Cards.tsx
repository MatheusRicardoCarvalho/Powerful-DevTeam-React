import { CardDev } from "../CardDev/CardDev"
import "./card.css"
interface Props{
    children: React.ReactNode
    clearTeam: () => void
}
export const Cards = (props: Props) => {
    return (
        <>
            <div className="dev-team">
                <div className="dev-team-header">
                    <h1 className="h1-aside">Dev Team</h1>
                    <button className="clear" type="button" onClick={() => props.clearTeam()}>Clear</button>
                </div>

                {props.children}
            </div>
        </>
    )
}