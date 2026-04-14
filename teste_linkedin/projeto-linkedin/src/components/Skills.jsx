import './Skills.css';

function Skills() {
  const skillsList = [
    "React.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "CSS / Styled Components",
    "Node.js",
    "Git & GitHub"
  ];

  return (
    <div className="skills-section">
      <h2>Competências</h2>
      
      <div className="skills-list">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3>{skill}</h3>
            <p>10 recomendações</p>
            <hr />
          </div>
        ))}
      </div>
      
      <button className="show-all-btn">Exibir todas as competências</button>
    </div>
  );
}

export default Skills;