
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
            <p>{title.slice(0, 20)}</p>
            <span>{artist.slice(0, 25)}...</span>
        </li>
    )
}