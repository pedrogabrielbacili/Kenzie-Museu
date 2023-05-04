import { ListArts } from "../../components/Form/ListArts"
import { StyleHeaderDashbaord } from "../../components/HeaderDashBoard"
import { StylesCardArts } from "./styled"

export const DashBoardPage=()=>{

    return (
        <div>
            <StyleHeaderDashbaord/>
            <StylesCardArts>
                <ListArts/>
            </StylesCardArts>
        </div>
    )
}