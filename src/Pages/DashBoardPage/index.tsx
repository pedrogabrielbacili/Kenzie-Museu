import { ListArts } from "../../components/Form/ListArts"
import { Header } from "../../components/HeaderDashBoard"
import { StylesCardArts } from "./styled"

export const DashBoardPage=()=>{

    return (
        <div>
        <Header/>
        <StylesCardArts>
            <ListArts/>
        </StylesCardArts>
        </div>
    )
}