import "./header-segment.css";
const HeaderSegment = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="post">PostJob</div>
        <nav className="nav">
          <span className="list">AI Cover Letter Generator</span>
          <span className="list">Resume Templates</span>
          <span className="list">Pricing</span>
        </nav>
        <div className="buttons">
          <button className="btn-signin">Sign In</button>
          <button className="btn-signup">Get Started</button>
        </div>
      </header>

      <section className="win">
        <h1>Win your dream with PostJob</h1>
        <p>
          Submit better job app --- 10px faster. AI cover letter generator,
          resume keyword checker, outreach message writer,and more. Powered by
          GPT
        </p>
        <div className="email-form">
          <input type="email" placeholder="Your Email" />
          <button type="submit">Start For Free</button>
        </div>
      </section>
      <section className="features">
        <div className="feature-box">
          <h3>AI Cover Letter Generator</h3>
          <p>
            The AI Cover Letter Generator is a tool that uses artificial
            intelligence algorithms to create personalized cover letters for job
            applicants.
          </p>
        </div>
        <div className="feature-box">
          <h3>Smart Personalization</h3>
          <p>
            Smart Personalization refers to the use of data and technology to
            deliver tailored experiences and content to individual customers or
            users.
          </p>
        </div>
        <div className="feature-box">
          <h3>Resume Scanner</h3>
          <p>
            A resume scanner is a software application that uses optical
            character recognition (OCR) technology to extract and analyze data
            from resumes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeaderSegment;
