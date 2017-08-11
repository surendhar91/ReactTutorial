import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import Comment from './Comment.jsx'
class App extends React.Component {
    render() {
        return (<div><Header/><Main/></div>)
    }
}
class Header extends React.Component{
    render(){
        return (
          <header><nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/roster">Roster</Link></li>
                  <li><Link to="/schedule">Schedule</Link></li>
              </ul>
          </nav></header>
        );
    }
}
class Main extends React.Component {
    render(){
        // let Comment = "<Comment />";
        return (
            <main>
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    <Route path="/roster" component={Roster}/>
                    <Route path="/schedule" component={Schedule}/>
                </Switch>
            </main>
        )
    }
}
const PlayerAPI = {
    players: [
        { number: 1, name: "Ben Blocker", position: "G" },
        { number: 2, name: "Dave Defender", position: "D" },
        { number: 3, name: "Sam Sweeper", position: "D" },
        { number: 4, name: "Matt Midfielder", position: "M" },
        { number: 5, name: "William Winger", position: "M" },
        { number: 6, name: "Fillipe Forward", position: "F" }
    ],
    all: function() { return this.players},
    get: function(id) {
        // const isPlayer = p => p.number === id
        return this.players.find((p)=>p.number===id);//is player
    }
}
const Roster = ()=>(
    <div>
    <Switch>
        <Route exact path="/roster" component={FullRoster}/>
        <Route path="/roster/:number" component={Player}/>
    </Switch>
    </div>
)
const FullRoster = ()=>(
    <div>
        <ul>
            {
                PlayerAPI.all().map(p => (
                    <li key={p.number}>
                        <Link to={`/roster/${p.number}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)
const Player = (props) => {
    const player = PlayerAPI.get(
        //get the object params from match.
        parseInt(props.match.params.number, 10)
    )
    console.log(player);
    if (!player) {
        return <div>Sorry, but the player was not found</div>
    }
    return (
        <div>
            <h1>{player.name} (#{player.number})</h1>
            <h2>Position: {player.position}</h2>
            <Link to='/roster'>Back</Link>
        </div>
    )
}
const Home = ()=>(
    <div>
        <h1>Welcome to the Tornadoes website!</h1>
    </div>
)
const Schedule = ()=>(
    <div>
        <ul>
            <li>6/5 @ Evergreens</li>
            <li>6/8 vs Kickers</li>
            <li>6/14 @ United</li>
        </ul>
    </div>
)
export default App;

