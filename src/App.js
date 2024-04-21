import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});


  async function handleSearch() {
    //14403430/json/

    if (input === '') {
      alert("Preencha algum CEP!")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      console.log(response.data)
      setInput("");
      setCep(response.data);
    } catch {
      alert('Ops erro ao buscar');
      setInput("")
    }
  }

  return (
    <div className="container">
      <h1 className="title"> Busca CEP </h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu CEP..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span> {cep.logradouro}</span>
          {cep.complemento !== "" && <span> Complemento: {cep.complemento} </span>}
          <span> Bairro: {cep.bairro}</span>
          <span> Cidade: {cep.localidade} - {cep.uf}</span>
        </main>
      )}

    </div>
  );
}

export default App;
