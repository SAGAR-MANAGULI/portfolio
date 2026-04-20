import "../styles/Experience.css";
import { useEffect } from "react";

export default function Experience() {

  useEffect(() => {
    const cards = document.querySelectorAll(".exp-card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="experience-section" id="experience">

      <h2 className="exp-title">
        <span>04.</span> Experience
      </h2>

      <div className="exp-container">

        {/* CARD 1 */}
        <div className="exp-card">
          <h3>Full Stack Developer</h3>
          <ul>
            <li>Developed Smart & Secure Voting System using biometric authentication.</li>
            <li>Implemented secure login and duplicate prevention.</li>
            <li>Built full-stack architecture (frontend, backend, database).</li>
            <li>Focused on security and real-time validation.</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="exp-card">
          <h3>Problem Solving & DSA</h3>
          <ul>
            <li>Solved 50+ DSA problems improving logical thinking.</li>
            <li>Strong understanding of algorithms and optimization.</li>
            <li>Focused on writing clean and efficient code.</li>
          </ul>
        </div>

      </div>

    </section>
  );
}