
import { Albums23ref } from '../../../../data/firebase'
import * as React from 'react'
import CustomizedAccordion from '../../../../UI/Accordion'
import { ListWrapper } from '../../../Music/styles'

import {
  onSnapshot,
  query,
} from 'firebase/firestore'

interface Album {
  id: string
  Ranking: number
  Album_Name: string
  Artist_Name: string
  Album_Review: string
}

function Albums2023List() {
  const [albums, setAlbums] = React.useState<Album[]>([])

  // Realtime collection data
  React.useEffect(() => {
    const q = query(Albums23ref)

    const unsubscribe = onSnapshot(q, (snapshot) => {
      let albumsData: Album[] = []

      snapshot.docs.forEach((doc) => {
        albumsData.push({ ...doc.data(), id: doc.id } as Album)
      });

      // Sort the albumsData based on the 'Ranking' property
      albumsData.sort((a, b) => a.Ranking - b.Ranking)

      setAlbums(albumsData)
      console.log(albumsData)
    })

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe()
  }, []) // The empty dependency array ensures the effect runs only once after the initial render

  return (
    <>
      <ListWrapper>
        {albums.map((album) => (
          <li key={album.id}>
            <CustomizedAccordion
              accordionData={[
                {
                  title: album.Album_Name + ' - ' + album.Artist_Name,
                  content: (
                   <div>
                      <h3>{album.Album_Name} - {album.Artist_Name}</h3>
                      <p>{album.Album_Review}</p>
                   </div>
                  ),
                  ranking: album.Ranking // Pass the 'Ranking' property to the accordion
                }
              ]}
            />
          </li>
        ))}
      </ListWrapper>
    </>
  )
}

export default Albums2023List 
