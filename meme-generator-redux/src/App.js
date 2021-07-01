import React from 'react';
import MemeForm from './MemeForm';
import {useSelector, useDispatch} from 'react-redux';
import Meme from './Meme';

function App() {
  const memes = useSelector(state => state.memes);

  const dispatch = useDispatch();

  const addMeme = (newMeme) => {
    dispatch({type: "add_meme", payload: newMeme});
  }

  const deleteMeme = (id) => {
    dispatch({type: "delete_meme", payload: id});
  }

  const memesComps = memes.map(
    meme => (
      <Meme
        id={meme.id} 
        key={meme.id}
        topText={meme.topText}
        bottomText={meme.bottomText}
        url={meme.url}
        deleteMeme={() => deleteMeme(meme.id)}
      />
    )
  );

  return (
    <div className="App">
      <MemeForm addMeme={addMeme}/>
      <hr />
      {memesComps}
    </div>
  );
}

export default App;
