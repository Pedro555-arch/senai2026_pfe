// importação do CSS correto
import 'bootstrap/dist/css/bootstrap.min.css';
// importação do JS corrigida (mudou de /css/ para /js/)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Rotas from './routes'; 

function App() {
  return (
    <>
      <Rotas />
    </>
  )
}

export default App