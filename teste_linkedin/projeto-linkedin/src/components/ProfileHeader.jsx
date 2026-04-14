import './ProfileHeader.css';
import heroImg from '../assets/hero.png'; 
// ADICIONE ESTA LINHA ABAIXO (importando a foto que você acabou de salvar)
import perfilImg from '../assets/perfil.jpg'; 

function ProfileHeader() {
  return (
    <div className="profile-header">
      {/* Imagem de Capa */}
      <img src={heroImg} alt="Capa do perfil" className="cover-photo" />
      
      <div className="profile-info">
        {/* Foto de Perfil */}
        <div className="profile-picture-container">
          {/* TROCAMOS a antiga div vazia pela tag <img> abaixo */}
          <img src={perfilImg} alt="Foto de Perfil Aleatória" className="profile-picture" />
        </div>
        
        {/* Textos e Informações */}
        <div className="profile-text">
          <h1>Nome Sobrenome</h1>
          <h2>Desenvolvedor | HTML | CSS | Typescript | Node</h2>
          <p className="location">
            Cidade, estado e país · <a href="#">Informações de contato</a>
          </p>
          <p className="connections">??? seguidores · ??? conexões</p>
          
          {/* Botões */}
          <div className="profile-buttons">
            <button className="btn-primary">Mensagem</button>
            <button className="btn-secondary">Mais</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;