import "../styles/Skills.css";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">

      <h2 className="skills-title">
        <span>02.</span> Skills & Tech
      </h2>

      <div className="skills-container">

        {/* Languages */}
        <div className="skill-card">
          <h3>Languages</h3>
          <br />



          <div className="tags">
            <span>C</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>Python</span>
          </div>
        </div>

        {/* Frameworks */}
        <div className="skill-card">
          <h3> Frameworks</h3>


          <br />

          <div className="tags">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Flask</span>
            <span>Express.js </span>

          </div>
        </div>



        {/* Databases */}
        <div className="skill-card">
          <h3> Databases</h3>


          <br />
          <div className="tags">
            <span>MongoDB</span>
            <span>MySQL</span>
            <span>PostgreSQL</span>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3> Tools & Platforms</h3>

          <br />


          <div className="tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>Postman</span>
            <span>Thunder Client</span>
            <span>VS Code</span>
            <span >MongoDB Compass</span>

            <span >MongoDB Atlas</span>
          </div>
        </div>

      </div>

    </section>
  );
}