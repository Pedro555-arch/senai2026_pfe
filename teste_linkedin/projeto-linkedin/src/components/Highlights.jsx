import './Highlights.css';

function Highlights() {
  return (
    <div className="highlights-section">
      <h2>Destaques</h2>
      
      <div className="highlights-grid">
        {/* Cartão 1 */}
        <div className="highlight-card">
          <div className="card-header">
            <span>Publicação</span>
            <p>Legenda da primeira publicação...</p>
          </div>
          <div className="card-image-placeholder">
            <span>💻 Código Java</span>
          </div>
          <div className="card-footer">
            <span>👍 124</span>
            <span>5 comentários</span>
          </div>
        </div>

        {/* Cartão 2 */}
        <div className="highlight-card">
          <div className="card-header">
            <span>Publicação</span>
            <p>Legenda da segunda publicação...</p>
          </div>
          <div className="card-image-placeholder">
            <span>💻 Código React</span>
          </div>
          <div className="card-footer">
            <span>👍 124</span>
            <span>5 comentários</span>
          </div>
        </div>

        {/* Cartão 3 */}
        <div className="highlight-card">
          <div className="card-header">
            <span>Publicação</span>
            <p>Legenda da terceira publicação...</p>
          </div>
          <div className="card-image-placeholder">
            <span>💻 Código Node</span>
          </div>
          <div className="card-footer">
            <span>👍 124</span>
            <span>5 comentários</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;