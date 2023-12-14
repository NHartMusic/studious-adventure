
import { Albums23ref } from '../../data/firebase'
import * as React from 'react'
import CustomizedAccordion from '../../UI/Accordion'
import { ListWrapper } from './styles'

import {
  onSnapshot,
  query,
} from 'firebase/firestore'

interface Album {
    id: string,
    Album_Name: string
    Artist_Name: string
}
    
function List() {
  const [albums, setAlbums] = React.useState<Album[]>([]);

 // Realtime collection data
 React.useEffect(() => {
  const q = query(Albums23ref);

  const unsubscribe = onSnapshot(q, (snapshot) => {
    let albumsData: Album[] = [];

    snapshot.docs.forEach((doc) => {
      albumsData.push({ ...doc.data(), id: doc.id } as Album);
    });

    setAlbums(albumsData);
    console.log(albumsData)
  });

  // Cleanup the subscription when the component unmounts
  return () => unsubscribe();
}, []); // The empty dependency array ensures the effect runs only once after the initial render
  
  return (
    <>
      <ListWrapper>
        {albums.map((album) => (
          <li key={album.id}>
            <CustomizedAccordion accordionData={[
              { title: album.Album_Name, 
                content:
                  <ul>
                    <li>Total Spend 2021: {album.Album_Name}</li>
                    <li>Spend Ranking 2021: {album.Artist_Name}</li> 
                  </ul> 
                },
            ]}/>
          </li>
        ))}
      </ListWrapper>
    </>
  )
}

export default List
