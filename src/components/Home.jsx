import "../styles/Home.css";

function Home() {
  return (
    <section className="home">

      {/* LEFT */}
      <div className="home-left">
        <h4>Hello, It's Me</h4>
        <br/>

        <h1>
          Sagar Mallikarjun <br /> Managuli
        </h1>

        <br />

        <br />

        <h3>
          I'm a <span>Full Stack Developer</span>, Problem Solver, DSA Enthusiast
        </h3>

        <p>
         Aspiring Software Engineer with strong expertise in full-stack development,
          a solid foundation in Data Structures and Algorithms, and a growing interest in AI-driven solutions.
           Passionate about building scalable, efficient, and real-world applications.
        </p>
      </div>

      {/* RIGHT */}
      <div className="home-right">
        <div className="image-box">
          <img src="/profile.jpg" alt="Sagar" />
        </div>
      </div>

    </section>
  );
}

export default Home;