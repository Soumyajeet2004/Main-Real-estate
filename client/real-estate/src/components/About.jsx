import React, { useState } from "react";
import photo from '../assets/hh.jpg'

function About() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />

      <section
        className={`py-3 py-md-5 ${
          darkMode ? "bg-dark text-light" : "bg-light text-dark"
        }`}
        style={{
          transition: "all 0.3s ease",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          {/* Dark Mode Toggle */}
          <div className="d-flex justify-content-end mb-4">
            <button
              className={`btn ${
                darkMode ? "btn-outline-light" : "btn-outline-dark"
              }`}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>

          {/* About Company Section */}
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6 col-xl-5">
              <img
                className="img-fluid rounded shadow"
                src="https://cms-assets.themuse.com/media/lead/what-is-real-estate.png"
                alt="Real Estate"
              />
            </div>

            <div className="col-12 col-lg-6 col-xl-7">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="mb-3 fw-bold">Who Are We?</h2>
                  <p
                    className={`lead fs-5 mb-3 ${
                      darkMode ? "text-secondary" : "text-muted"
                    }`}
                  >
                    We are a passionate team of real estate agents, marketing
                    experts, and tech professionals who believe that buying,
                    selling, or renting property should be straightforward and
                    stress-free.
                  </p>

                  <h2 className="fw-bold">What We Do?</h2>
                  <ul className="mb-5">
                    <li>🏡 Help buyers find the perfect home</li>
                    <li>🏢 Connect sellers with qualified buyers</li>
                    <li>📍 Offer local market insights</li>
                    <li>
                      💼 Provide professional support for commercial and
                      residential real estate
                    </li>
                    <li>🌍 Serve [Location] and surrounding areas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Meet the Developer Section */}
          <div className="mt-5 pt-4 border-top">
            <div className="text-center">
              <img
                src={photo} // 🔹 replace with your photo
                alt="Developer"
                className="rounded-circle shadow mb-3"
                style={{ width: "130px", height: "130px", objectFit: "cover" }}
              />
              <h3 className="fw-bold">Soumyajeet Saha</h3>
              <p className={darkMode ? "text-secondary" : "text-muted"}>
                Full Stack Developer | Creator of this Website
              </p>

              <div className="d-flex justify-content-center gap-3 mt-2">
                <a
                  href="https://www.linkedin.com/in/soumyajeet-saha-2b281125a/" // 🔹 replace
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-sm ${
                    darkMode ? "btn-outline-light" : "btn-outline-dark"
                  }`}
                >
                  🔗 LinkedIn
                </a>
                <a
                  href="https://soumyajeet2004.github.io/port/" // 🔹 replace
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-sm ${
                    darkMode ? "btn-outline-light" : "btn-outline-dark"
                  }`}
                >
                  💻 Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
