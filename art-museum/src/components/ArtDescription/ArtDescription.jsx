import { Link, useParams } from "react-router-dom"
export default function ArtDescription({ galleries }) {
    const { galleryId, artId } = useParams()
    const gallery = galleries.find((element) => element.id == galleryId);
    const art = gallery.objects.find((element) => element.id = artId)
    console.log(art.images)
    return (
        <>
            <Link to={'../'} >Back to Gallary</Link>
            <Link to={art.url.toString()} >
                <h2>{art.title}</h2>
            </Link>
            <p>{art.description}</p>
            <p>{art.credit}</p>
            <p>{art.technique}</p>
            {
                art.images.map(item => (
                    <img src={item.baseimageurl.toString()} key={item.imageid}>
                    </img>
                ))}
        </>
    )
}