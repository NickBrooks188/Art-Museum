import { useParams, Navigate, Outlet } from "react-router-dom"
import ArtImageTile from "../ArtImageTile/ArtImageTile";

export default function GalleryView({ galleries }) {
    let { galleryId } = useParams()
    // console.log(galleryId)
    const gallery = galleries.find((element) => element.id == galleryId);
    console.log(gallery.objects)
    if (!gallery) {
        return (
            <Navigate to='/' replace={true} />
        )
    }
    return (
        <>
            <h2>{gallery.name}</h2>
            <ArtImageTile art={gallery.objects} />
            <Outlet />
        </>
    )
}