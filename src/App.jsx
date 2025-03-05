
import { useState } from 'react'; 
import arrayPhrases from './utils/phrases.json'; 
import getRandom from './services/getRandom';
import Button from './components/Button';
import PhraseCard from './components/PhraseCard';
import { img1, img2, img3, img4 } from './assets'
import './index.css';


const colors = ['#00ffff', '#dc83fff5', '#5c5cfc', '#bb068e'];
const arrayImages = [img1, img2, img3, img4];

function App() {

  const [phrase, setPhrase] = useState(getRandom(arrayPhrases)); 
  const [image, setImage] = useState(getRandom(arrayImages));

  const changePhrase = () => {
    setPhrase(getRandom(arrayPhrases))
    setImage(getRandom(arrayImages))
  }

  return (
    <div className="container" style={{ backgroundImage: `url('${image}')` }}>
      <h1 className='app__title'>Galleta de la fortuna</h1>
      <PhraseCard
        phrase={phrase.phrase}
        author={phrase.author}
       /> 
      <Button handlePhrase={changePhrase}>
        Probar mi suerte
      </Button>
    </div>
       
  )
}
 
export default App;