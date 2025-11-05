import styles from './App.module.css'
import fotoPerfil from '../public/foto1.png'
import steamfoto from '../public/steam.png'
import logodiscord from '../public/discordlogo.jpg'
import gitfoto from '../public/githublogo.png'
import htmlfoto from '../public/HTML.png'
import cssfoto from '../public/css.png'
import javafoto from '../public/java.png'
import vitefoto from '../public/vite.png'
import reactfoto from '../public/react.png'
import vercelfoto from '../public/vercel.png'
function App() {

  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Home</a>
        <a href="#s2">Cards</a>
        <a href="#s3">Video</a>
        <a href="#s4">Contato</a>
      </nav>

      <main>
        <section className={styles.s1} id='s1'>
          <div className={styles.left}>
            <img className={styles.imgPerfil} src={fotoPerfil} alt="Foto perfil" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Victor :)</h2>
            <p className={styles.paragraph}>EU TENHO AUTISMO</p>
          </div>
        </section>

        <section className={styles.s2} id="s2">
          <h2 className={styles.tecTitle}>Tecnologias</h2>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <div className={styles.wrapCards}>

            <div className={styles.card}>
              <h3>HTML</h3>
              <img width={300} src={htmlfoto} alt="HTML" className={styles.img}/>
              <p>
                HTML é a sigla para Hypertext Markup Language (Linguagem de Marcação de Hipertexto) e é a linguagem de marcação padrão usada para criar e estruturar páginas da web.
              </p>
            </div>

            <div className={styles.card}>
              <h3>CSS</h3>
              <img width={300} src={cssfoto} alt="CSS" className={styles.img}/>
              <p>
                CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação visual de um documento escrito em linguagem de marcação como HTML.
              </p>
            </div>

            <div className={styles.card}>
              <h3>JavaScript</h3>
              <img width={300} src={javafoto} alt="JS" className={styles.img}/>
              <p>
                JavaScript é uma linguagem de programação leve, interpretada e versátil, usada para tornar páginas da web dinâmicas e interativas.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Vite</h3>
              <img width={300} src={vitefoto} alt="VITE" className={styles.img}/>
              <p>
                O Vite é um servidor de desenvolvimento local apoiado pela VoidZero Inc. Ele oferece suporte a TypeScript e JSX e usa Rollup e esbuild internamente para empacotamento.
              </p>
            </div>

            <div className={styles.card}>
              <h3>React</h3>
              <img width={300} src={reactfoto} alt="REACT" className={styles.img}/>
              <p>
                React é uma biblioteca JavaScript para construir interfaces de usuário (UIs) de forma eficiente, dividindo o trabalho em componentes reutilizáveis.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Vercel</h3>
              <img width={300} src={vercelfoto} alt="VERCEL" className={styles.img}/>
              <p>
                Vercel é uma plataforma de nuvem que ajuda desenvolvedores a construir e hospedar sites e aplicativos web de forma eficiente e escalável.
              </p>
            </div>

          </div>
        </section>


        <section id='s3'>
          <h2>sessao 3</h2>
        </section>

        <section id='s4'>
          <h2>sessao 4</h2>
        </section>
      </main>

      <footer className={styles.rodape}>
        <a href="https://steamcommunity.com/profiles/76561199065235739/" target='_blank'>
          <img width={50} src={steamfoto} alt="Steam" />
        </a>
        <a href="https://github.com/Victor16041" target='_blank'>
          <img width={50} src={gitfoto} alt="Github" />
        </a>
        <a href="https://discordapp.com/users/578944838368624660" target='_blank'>
          <img width={50} src={logodiscord} alt="Discord" />
        </a>
      </footer>
    </>
  )
}

export default App
