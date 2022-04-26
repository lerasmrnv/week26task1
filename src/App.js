import React from 'react';
import './App.css';
import './components/styles/normalize.css';
import './components/styles/style.css';
import Hero from './components/jsx/hero';
import heroes from './components/heroes';


class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1 className='title'>Галерея крутейших супергероев Marvel</h1>
        {
          heroes.map((hero) =>
          <Hero name={hero.name}  universe={hero.universe} alterEgo={hero.alterEgo} typeOfActivity={hero.typeOfActivity} friends={hero.friends} superpowers={hero.superpowers} image={hero.image} moreDetailed={hero.moreDetailed}></Hero>
          )
        }
      </div>
    )
  }
} 

export default App;
