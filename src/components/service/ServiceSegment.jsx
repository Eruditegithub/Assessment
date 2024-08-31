import "./service-segment.css";
function ServiceSegment() {
  return (
    <div className="service">
      <h2>Spend less time looking for work</h2>
      <p>We&#39;ll help you through the hardest part of your job search.</p>
      <button className="create-account">Create an Account</button>

      <div className="grid">
        <div className="card">
          <h3>Cover Letter</h3>
          <p>
            A cover letter is a document that accompanies a job application and
            is written to introduce the applicant to the employer.
          </p>
        </div>
        <div className="card">
          <h3>Resignation Letters</h3>
          <p>
            A resignation letter is a formal document that an employee writes to
            inform their employer of their decision to leave the company.
          </p>
        </div>
        <div className="card">
          <h3>Connection request</h3>
          <p>
            A connection request is a message sent on a social networking site,
            such as LinkedIn, requesting to connect with another user.
          </p>
        </div>
        <div className="card">
          <h3>Outreach Emails</h3>
          <p>
            Outreach emails are messages sent by individuals or businesses to
            introduce themselves, establish a connection, or propose a
            collaboration.
          </p>
        </div>
        <div className="card">
          <h3>Resume Optimization</h3>
          <p>
            Smart Personalization refers to the use of data and technology to
            deliver tailored experiences and content to individual customers or
            users.
          </p>
        </div>
        <div className="card">
          <h3>Resume Design</h3>
          <p>
            A resume scanner is a software application that uses optical
            character recognition (OCR) technology to extract and analyze data
            from resumes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceSegment;
