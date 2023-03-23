import React from 'react';
import logo from './logo.svg';
import './App.css';
import teams from './CollegeBasketballTeams.json';

const Teams = teams['teams']

function Welcome(){
  return(<h1>Information about all the colleges in NCAA Basketball</h1>)
}

function Thanks(){
  return(<h3>Thank you for visiting our website.</h3>)
}

class Team extends React.Component <any,any>{
  render() {
    
    const oneTeam = this.props;
    
    return(
    <div className="Team">
        <br></br>
        <h2>{oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>Location: {oneTeam.city}, {oneTeam.state}</h3>
    </div>
    );
  }
}

function TeamList(){
  return(
  <div>
      {Teams.map(oneTeam => <Team {...oneTeam}/>)}
  </div>
  );
}

function App() {
  return (
  <div>
      <Welcome/>
      <TeamList/>
      <Thanks/>
  </div>
  );
}


export default App;
