import "../styles/Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">

      <h2 className="projects-title">
        <span>03.</span> Projects
      </h2>

      {/* PROJECT 1 */}
      <div className="project-row">

        <div className="project-image">
          <img src="/voting.jpg" alt="Voting System" />
        </div>

        <div className="project-content">
          <h3>Smart & Secure Voting Management System</h3>

          <div className="project-box">
            <ul>
              <li>Secure voting using face & fingerprint verification.</li>
              <li>Prevents duplicate registrations using biometric validation.</li>
              <li>Includes registration, login, admin dashboard.</li>
              <li>Stores voter data securely using structured backend and encryption.</li>            </ul>
          </div>

          <div className="project-buttons">
            <a href="#"> Live Demo</a>
            <a href="https://github.com/SAGAR-MANAGULI">GitHub</a>
          </div>
        </div>

      </div>

      {/* PROJECT 2 */}
      <div className="project-row">

        <div className="project-image">
          <img src="/exam.jpg" alt="Exam Form" />
        </div>

        <div className="project-content">
          <h3>Online Exam Submission Form</h3>

          <div className="project-box">
            <ul>
              <li>Validates user input to avoid incomplete or incorrect submissions.</li>              <li>Prevents incomplete or incorrect submissions.</li>
              <li>Stores exam responses securely in the backend database.</li>
              <li>Provides a clean and user-friendly interface with error messages.</li>
              <li>Handles form submission efficiently using frontend-backend integration.</li>
            </ul>
          </div>

          <div className="project-buttons">
            <a href="#"> Live Demo</a>
            <a href="https://github.com/SAGAR-MANAGULI/exam_submission_form"> GitHub</a>
          </div>
        </div>

      </div>

      {/* PROJECT 3 */}
      <div className="project-row">

        <div className="project-image">
          <img src="/fitness.jpg" alt="Fitness App" />
        </div>

        <div className="project-content">
          <h3>Fitness Tracking App</h3>

          <div className="project-box">
            <ul>
              <li>Tracks workouts and daily activities.</li>
              <li>Calorie tracking & goal setting.</li>
              <li>Interactive UI for user engagement.</li>
              <li>Stores user progress history.</li>
            </ul>
          </div>

          <div className="project-buttons">
            <a href="https://nimble-mooncake-6a9601.netlify.app//"> Live Demo</a>
            <a href="https://github.com/SAGAR-MANAGULI/fitness-tracker-app">GitHub</a>
          </div>
        </div>

      </div>

      {/* PROJECT 4 */}
      <div className="project-row">

        <div className="project-image">
          <img src="/parking.jpg" alt="Parking System" />
        </div>

        <div className="project-content">
          <h3>Multiple Parking Management System</h3>

          <div className="project-box">
            <ul>
              <li>Real-time parking slot tracking.</li>
              <li>Vehicle entry/exit management.</li>
              <li>Admin dashboard for monitoring.</li>
              <li>Reduces manual work with automation.</li>
            </ul>
          </div>

          <div className="project-buttons">
            <a href="#">Live Demo</a>
            <a href="https://github.com/SAGAR-MANAGULI">GitHub</a>
          </div>
        </div>

      </div>

    </section>
  );
}