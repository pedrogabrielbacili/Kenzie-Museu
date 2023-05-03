
interface ICardProps{
    img:string;
    title:string;
    artist:string;
    id:number;
}
export const CardArts=({img,title, artist, id }:ICardProps)=>{
    return(
        <li key={id}>
            <img src={img} alt={title} />
            <p>{title}</p>
            <span>{artist}</span>
        </li>
    )
}