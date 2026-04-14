import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar-section">
      <h2>As pessoas também viram</h2>
      
      {/* Perfil 1 */}
      <div className="sidebar-item">
        <div className="sidebar-avatar"></div>
        <div className="sidebar-info">
          <h3>Nome da Pessoa</h3>
          <p>Desenvolvedora Front-end | React | UI/UX</p>
          <button className="connect-btn">Enviar Mensagem</button>
        </div>
      </div>

      {/* Perfil 2 */}
      <div className="sidebar-item">
        <div className="sidebar-avatar"></div>
        <div className="sidebar-info">
          <h3>Outra Pessoa</h3>
          <p>Engenheiro de Software Sênior</p>
          <button className="connect-btn">Enviar Mensagem</button>
        </div>
      </div>

      {/* Perfil 3 */}
      <div className="sidebar-item">
        <div className="sidebar-avatar"></div>
        <div className="sidebar-info">
          <h3>Mais uma Pessoa</h3>
          <p>Product Manager</p>
          <button className="connect-btn">Enviar Mensagem</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;