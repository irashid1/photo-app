import './styles/sass/App.scss';

import GetImages from './components/GetImages';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <h1>Photo App</h1>
      </header>

      <main>
        <GetImages />
      </main>

      <footer>
       
      </footer>

    </div>
  );
}

export default App;


// pseudo code 

// create components
// get data from the instagram api 
// output info on page 
// sort information based on user selection
// have a grid layout for the images
