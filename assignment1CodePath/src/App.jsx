import './App.css';
import CardGrid from './components/CardGrid'

const App = () => {

  return (
    <div className="App">
      <img src='https://i.pinimg.com/originals/0b/e4/34/0be434363f41a0afc7198af8922cc62f.png' alt='Purple Flower Illustration' id='mainFlower'></img>
      <h1>Women in Computing Resources</h1>
      <CardGrid />
    </div>
  )
}

export default App