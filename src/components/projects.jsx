import "../page.css";
import quizletshortcuts from "../img/quizlet-shortcut-4.png";
import smartmouth from "../img/smartmouth.png";
import anagram from "../img/anagrams-android-app.png";
import chess from "../img/chess.png";
import pcq from "../img/pcq.png";

const ProjectCard = (params) => {
  return (
    <div class="project-card col-md">
      <a href={params.link} target="_blank" rel="noreferrer">
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
    <section id="projects" className="projects container-fluid">
      <div>
        <div class="w-100 row">
          <ProjectCard
            img={smartmouth}
            title="Smartmouth"
            description="A fast paced word game to play with friends"
            skills="HTML/CSS, JS, ReactJS, jQuery, Socket.io"
            link="https://github.com/krash3125/SmartMouth"
          />
          <ProjectCard
            img={quizletshortcuts}
            title="Quizlet Shortcuts"
            description="A chromium extension for quizlet made to enhance your quizlet experience"
            skills="HTML/CSS, JS"
            link="https://github.com/krash3125/QuizletShortcuts"
          />
          <ProjectCard
            img={anagram}
            title="Anagram App"
            description="An android anagrams mobile game to develop word literacy"
            skills="Java, XML, AndroidStudios"
            link="https://github.com/krash3125/Anagrams"
          />
        </div>
        <div class="w-100 row mt-4">
          <div class="col-md-4 mx-auto">
            <ProjectCard
              img={chess}
              title="Chess"
              description="A Java application developed to play among friends"
              skills="Java, JSwing"
              link="https://github.com/krash3125/Chess"
            />
          </div>
          <div class="col-md-4 mx-auto">
            <ProjectCard
              img={pcq}
              title="Private Clinic Queue (In Development)"
              description="A doctor/patient service in which small clinics can easily manage patients in an organized and quick manner"
              skills="HTML/CSS, JS, Mongoose, BcryptJS, Passport, JWT, Axois"
              link="https://github.com/krash3125/pcq3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
