import "./page.css";
import qs1 from "./img/quizlet-shortcut-1.png";
import qs2 from "./img/quizlet-shortcut-2.png";
import smartmouth from "./img/smartmouth.png";

const ProjectCard = (params) => {
  return (
    <div class="project-card col">
      <a href={params.link} target="_blank">
        <div
          className="project-card-img col"
          style={{
            background: `url(${params.img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="project-card-description">
            <h4>{params.title}</h4>
            <p>{params.description}</p>
            <p>
              <span>Skills Used: </span>
              {params.skills}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div class="w-100 row">
        <ProjectCard
          img={smartmouth}
          title="Smartmouth"
          description="A fast paced word game to play with friends"
          skills="HTML/CSS, JS, ReactJS, jQuery, Express, Socket.io"
          link="https://smartmouth.herokuapp.com/"
        />
        <ProjectCard
          img={qs1}
          title="Quizlet Shortcuts"
          description="A chromium extension for quizlet made to enhance your quizlet experience"
          skills="HTML/CSS, JS"
          link="https://github.com/krash3125/QuizletShortcuts"
        />
        <ProjectCard
          img={qs2}
          title="Smartmouth"
          description="A fast paced word game to play with friends"
          skills="HTML/CSS/JS, MongoDB"
          link="http://github.com/"
        />
      </div>
    </section>
  );
};

export default Projects;
