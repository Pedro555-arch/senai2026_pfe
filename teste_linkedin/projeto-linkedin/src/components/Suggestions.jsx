import './Suggestions.css';

function Suggestions() {
  const perfis = [1, 2]; // Define quantos itens aparecem

  return (
    <div className="suggestions-section">
      <h2>Pessoas que talvez você conheça</h2>
      
      {perfis.map((item) => (
        <div key={item} className="suggestion-item">
          <div className="suggestion-header">
            <div className="suggestion-avatar"></div>
            <div className="suggestion-info">
              <h3>Nome e sobrenome</h3>
              <p>Título, cargo e tecnologias. Lorem Ipsum Dolor sit Amet</p>
            </div>
          </div>
          <button className="connect-btn">Conectar</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;