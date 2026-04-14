import './Navbar.css';
// REMOVEMOS a linha que importava a imagem (pode apagar ou comentar)

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Voltamos a usar a tag strong com o texto "in" */}
        <strong className="logo">in</strong>
        
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Pesquisar" />
        </div>
      </div>

      <div className="navbar-right">
        <div className="nav-item">🏠<span>Início</span></div>
        <div className="nav-item">👥<span>Minha rede</span></div>
        <div className="nav-item">💼<span>Vagas</span></div>
        <div className="nav-item">💬<span>Mensagens</span></div>
        <div className="nav-item">🔔<span>Notificações</span></div>
        <div className="nav-item grid-icon">🔲<span>Soluções</span></div>
      </div>
    </nav>
  );
}

export default Navbar;