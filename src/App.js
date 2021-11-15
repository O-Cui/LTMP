import React, {useState} from 'react';
import axios from 'axios';
function App() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = " api key goes here "

  function searchForPlayer(event){
      console.log("ASDADSAD");
      var API_String = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY;
      axios.get(API_String).then(function (response){
        setPlayerData(response.data);
      }).catch(function(error){
        console.log(error);
      });
  }
  console.log(playerData);

  return (
    <div className="App"> 
      <div className="container">
        <input type="text" onChange={e => setSearchText(e.target.value)}></input>
        <button onClick={e => searchForPlayer(e)}> Search for player</button>
      </div>
      {JSON.stringify(playerData) !== '{}' ?
        <>
          <p> {playerData.summonerLevel}</p>
          <img width="100" height="100" src={"http://ddragon.leagueoflegends.com/cdn/11.22.1/img/profileicon/" + playerData.profileIconId + ".png"}></img>
        </>
        :
        <>
          <p> No</p>
        </>
      
      }
    </div>
  );
  
}

export default App;
