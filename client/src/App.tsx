import React, {useEffect} from 'react';
import Layout from "./layout/Layout";
import {fetchArtists} from "./store/action-creators/artist";
import {useAppDispatch} from "./hook/redux";

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchArtists())
    }, [])

  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
