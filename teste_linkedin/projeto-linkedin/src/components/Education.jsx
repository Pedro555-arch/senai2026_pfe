import './Education.css';

function Education() {
  return (
    <div className="education-section">
      <h2>Formação académica</h2>
      
      <div className="education-item">
        <div className="school-logo"></div>
        <div className="education-details">
          <h3>Nome da Instituição de Ensino</h3>
          <p className="degree">Bacharelado, Ciência da Computação</p>
          <p className="edu-duration">2018 - 2022</p>
        </div>
      </div>

      <div className="education-item">
        <div className="school-logo"></div>
        <div className="education-details">
          <h3>Escola de Tecnologia</h3>
          <p className="degree">Bootcamp Fullstack Developer</p>
          <p className="edu-duration">2021 - 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Education;