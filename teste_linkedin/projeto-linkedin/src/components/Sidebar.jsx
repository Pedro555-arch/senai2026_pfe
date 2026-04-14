import './Sidebar.css';

function Sidebar() {
  const pessoas = [
    { nome: "Nome da Pessoa", cargo: "Desenvolvedora Front-end | React | UI/UX" },
    { nome: "Outra Pessoa", cargo: "Engenheiro de Software Sênior" },
    { nome: "Mais uma Pessoa", cargo: "Product Manager" }
  ];

  return (
    <div className="sidebar-section">
      <h2>As pessoas também viram</h2>
      {pessoas.map((p, index) => (
        <div key={index} className="sidebar-item">
          <div className="sidebar-header">
            <div className="sidebar-avatar"></div>
            <div className="sidebar-info">
              <h3>{p.nome}</h3>
              <p>{p.cargo}</p>
            </div>
          </div>
          <button className="message-btn">Enviar Mensagem</button>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;