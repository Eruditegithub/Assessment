import "./cover-letter.css";

const CoverLetter = () => {
  return (
    <section className="cover-letters">
      <div className="generator">
        <img />
        <h2>Free AI cover letter generator powered by GPT</h2>
        <p>
          A free AI cover letter generator powered by GPT is a tool that uses
          artificial intelligence and natural language processing to help job
          seekers create customized and effective cover letters.
        </p>
        <button className="generator-button">Try For Free Now</button>
      </div>
      <div className="generator">
        <img />

        <h2>Optimize the Keywords in your resume</h2>
        <p>
          By optimizing keywords in your resume, you can increase your chances
          of getting noticed by recruiters and landing interviews for the jobs
          you want.
        </p>
        <button className="generator-button">Optimize your Resume</button>
      </div>
    </section>
  );
};
export default CoverLetter;
