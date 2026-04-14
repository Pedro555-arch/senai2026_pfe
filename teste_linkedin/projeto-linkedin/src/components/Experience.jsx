import './Experience.css';

function Experience() {
  return (
    <div className="experience-section">
      <h2>Experiências</h2>
      
      <div className="experience-item">
        {/* Quadrado que simula a logo da empresa */}
        <div className="company-logo"></div>
        
        <div className="experience-details">
          <h3>Empresa</h3>
          <p className="company-duration">1 a 7 m</p>
          
          {/* Container da linha do tempo dos cargos */}
          <div className="role-timeline">
            
            {/* Cargo 1 */}
            <div className="role">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
              <h4>Fullstack Developer</h4>
              <p className="role-type">Tempo integral</p>
              <p className="role-duration">jan de 2022 - o momento · 5 meses</p>
              <p className="role-location">Cidade, estado e país</p>
            </div>
            
            {/* Cargo 2 */}
            <div className="role">
              <div className="timeline-dot"></div>
              <div className="timeline-line"></div>
              <h4>Fullstack Developer (JR)</h4>
              <p className="role-type">Tempo integral</p>
              <p className="role-duration">jun de 2021 - jan de 2022 · 8 meses</p>
              <p className="role-location">Cidade, estado e país</p>
            </div>

            {/* Cargo 3 */}
            <div className="role">
              <div className="timeline-dot"></div>
              {/* O último item não precisa da tag da linha */}
              <h4>Front-end Developer</h4>
              <p className="role-type">Tempo integral</p>
              <p className="role-duration">jan de 2021 - jun de 2021 · 6 meses</p>
              <p className="role-location">Cidade, estado e país</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;