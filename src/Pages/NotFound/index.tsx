import imgNot from"../../assets/imgNotFOund.svg"
import { StyleNotFound } from "../../styles/pageNotFound"

export const NotFoundPage = () => {
    return(
        <StyleNotFound>
            <img src={imgNot} alt="Not found" />
            <h2>PÁGINA NÃO ENCONTRADA</h2>
        </StyleNotFound>
    )
}