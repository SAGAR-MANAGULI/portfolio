import "../styles/Education.css";

export default function Education() {
  return (
    <section className="education-section" id="education">

      <h2 className="edu-title">
        <span>05.</span> Education
      </h2>

      <div className="edu-container">

        {/* BE */}
        <div className="edu-card">
          <div className="edu-icon"></div>

          <div>
            <h3>Bachelor of Engineering (ISE)</h3>
            <h4>BLDEA's V.P. Dr. P.G. Halakatti College of Engineering & Technology</h4>

            <p className="edu-inline">
              <span>CGPA: 8.2</span>
              <span className="divider">|</span>
              <span>2022 – 2026</span>
            </p>

          </div>
        </div>

        {/* PUC */}
        <div className="edu-card">
          <div className="edu-icon"></div>

          <div>
            <h3>Pre-University (PCMB)</h3>
            <h4>S.B. Arts and K.C.P. Science College, Vijayapura</h4>

            <p className="edu-inline">
              <span>PERSENTAGE: 90.7</span>
              <span className="divider">|</span>
              <span>2020 – 2022</span>
            </p>

          </div>
        </div>

        {/* 10th */}
        <div className="edu-card">
          <div className="edu-icon"></div>

          <div>
            <h3>SSLC (10th Standard)</h3>
            <h4>Shivasharane Hemareddy Mallamma High School</h4>


            <p className="edu-inline">
              <span>PERSENTAGE : 82</span>
              <span className="divider">|</span>
              <span>2019 – 2020</span>
            </p>


          </div>
        </div>

      </div>

    </section>
  );
}