import './styles/sass/App.scss';
import { instagramDatabase } from './firebase';

// Add the push function to our list of Firebase module imports:
import { ref, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';

import { GiChopsticks } from "react-icons/gi";


function App() {

  const [dataBase, setDataBase] = useState([]);

  useEffect(() => {
    const allData = ref(instagramDatabase, "data/");
    onValue(allData, (snapshot) => {
      const data = snapshot.val();
      const newArr = [];
      if (data !== null) {
        for (let i in data) {
          newArr.push(
            {
              post: data[i]
            }
          );
        }
      }
      setDataBase(newArr);
    })
  }, [])


  console.log(dataBase);
  console.log(instagramDatabase);
  // console.log(allData);

  return (
    <div className="App">

      <header className="App-header">
        <h1>Chops<GiChopsticks /></h1>
      </header>

      <main>
        {dataBase.map((info) => {
          return (
            <div className='wrapper post-container parent' key={info.post.id}>
              {info.post.children.data.map((img) => {
                return (
                  <div className='image-container' key={img.id}>
                    <img src={img.media_url} alt="ig-img" />
                  </div>
                )
              })}
              
                
              <div className="image-container child">

                <img src={info.post.children.data[0].media_url} alt="portrait-of-a-server" />

              </div>
              <div className="caption-container">
                <p>
                  {info.post.caption}
                </p>
              </div>
              
              
            </div>
          )
        })}
      </main>

      <footer>
        <p>Copyright and Images by Imtiaz Rashid</p>
      </footer>

    </div>
  );
}

export default App;


// pseudo code 

// create components
// get data from firebase
// map each individual element on to a state
  // sort data based on
    // children > data > every child > id & media_url (also their id as keys)
    // caption
    // id as key
    // results based on #facesoffood
// output info on page 
// sort information based on user selection
// have a grid layout for the images

