import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">

      <h2 className="about-title">
        <span>01.</span> About Me
      </h2>

      <div className="about-container">

        {/* LEFT */}
        <div className="about-text">
          <h3>Full Stack Developer & Problem Solver</h3>

          <br/>

          <p>
            I am an aspiring Software Engineer with strong expertise in MERN stack 
            development, building scalable and efficient web applications.
          </p>
          <br/>


          <p>
            I have a solid foundation in Data Structures and Algorithms, enabling 
            me to solve problems efficiently and logically.
          </p>

          <br/>

          <p>
            I also explore Artificial Intelligence using Python, focusing on 
            intelligent and data-driven solutions.
          </p>
          <br/>

        </div>

        {/* RIGHT */}
        <div className="about-cards">

          <div className="card">
            <h4>MERN Stack</h4>
            <p>MongoDB, Express, React, Node.js</p>
          </div>

          <div className="card">
            <h4>DSA</h4>
            <p>Strong problem-solving and algorithmic thinking</p>
          </div>

          <div className="card">
            <h4>AI & Python</h4>
            <p>Machine learning and intelligent systems</p>
          </div>

          <div className="card">
            <h4>Backend</h4>
            <p>APIs, server logic, scalability</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;