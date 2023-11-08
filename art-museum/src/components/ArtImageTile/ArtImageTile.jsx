import { Link } from 'react-router-dom'

export default function ArtImageTile({ art }) {
    console.log(art)
    return (
        <>
            {
                art.map(item => (
                    <Link to={'art/' + item.id.toString()} key={item.id}>
                        <img src={item.primaryimageurl} />
                    </Link>
                ))
            }
        </>
    )
}