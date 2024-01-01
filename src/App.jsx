import "./App.css";
import Hero from "./components/Hero";
import information from "./content/information";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import Heading from "./components/Heading";
import projects from "./content/projects";
import Services from "./components/Services";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import blogPosts from "./content/blogPosts";
import ContactForm from "./components/ContactForm";
import BlogPost from "./components/BlogPost";
// import { Switch, Router, Route } from 'react-router-dom';
// import UniProject from "./components/UniProject.jsx";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Sport from "./components/Sport";

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>

    {/* <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<App/>}/>
          <Route path="/Sport" element={<Sport/>}/>
        </Routes>
      </BrowserRouter>
    </div> */}


      <Navbar
        firstName={information.userData.firstName}
        lastName={information.userData.lastName}
      />
      <Hero
        img={information.userData.img}
        description={information.userData.description}
        title={information.userData.title}
      />
      <div className="hr"></div>
      <br/>
<br id="services"/>
      
      <section>
        <Heading firstWord="my" secondWord="Services" />
<br/>
        <Services/>
      </section>

<br/>
<br id="projects"/>
<br/>
<br/>

      <div className="hr"></div>
      <section>
        <Heading firstWord="my" secondWord="Projects" />
        <motion.div
          className="project-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectCard
                name={project.name}
                img={project.img}
                description={project.description}
                source={project.sourceCode}
                preview={project.preview}
              />
            </div>
          ))}
        </motion.div>
      </section>
      
      <br id="blog"/>
      <br/>
      <br/>
      <br/>
      <section>
        <Heading firstWord="ex" secondWord="Activities" />
        <div className="posts">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              image={post.image}
              read={post.link}
              date={post.pubDate}
            />
          ))}
        </div>
        {/* <a className="cyber-scourge" href="https://blog.randiltharusha.me">
          View More Posts
        </a> */}
      </section>
      <br/>
      <br id="skills"/>
      <br/>
      <br/>
      {/* <section id="">
        <Heading firstWord="my" secondWord="Services" />
        <motion.div
          className="skill-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={skillVariants}>
              <Skill skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </section> */}
      
      <section id="contact">
        <Heading firstWord="Contact" secondWord="Me" />
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default App;
