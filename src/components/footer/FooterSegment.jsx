import "./footer-segment.css";
import instagram from "../../assets/instagram.jpeg";
import telegram from "../../assets/telegram.jpeg";
import facebook from "../../assets/facebook.jpeg";
import linkedIn from "../../assets/linkedIn.jpeg";
function FooterSegment() {
  return (
    <div className="whats-next">
      <h1>What&#39;s next</h1>
      <p>
        Submit better job app --- 10x faster. AI cover letter generator, resume
        keyword checker, outreach message writer,and more.Powered by GPT
      </p>
      <button className="trial-click">Try for Free</button>
      <div className="footer-section">
        <div className="templates">
          <h3>Platform</h3>
          <ul>
            <li>Plans and Prices</li>
            <li>AI Create Letters</li>
            <li>AI Resume Checker</li>
            <li>Resume Templates</li>
            <li>Sell Templates</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="templates">
          <h3>Features</h3>
          <ul>
            <li>AI Cover Letter Creator</li>
            <li>Resume Keywords Optimizer</li>
            <li>ATS Resume Checker</li>
          </ul>
        </div>
        <div className="templates">
          <h3>Resources</h3>
          <ul>
            <li>4 AI Tools for Applying a Job</li>
            <li>How to optimize Resume keywords</li>
            <li>Why you should use Chat GPT for create Resume</li>
            <li>What should you include in a Cover Letter</li>
          </ul>
        </div>
        <div className="support">
          <p>Support</p>
          <p>support@gmail.com</p>
          <div className="icons">
            <img src={instagram.jpeg} alt="instagram" />
            <img src={facebook.jpeg} alt="facebook" />
            <img src={linkedIn.jpeg} alt="linkedIn" />
            <img src={telegram.jpeg} alt="telegram" />
          </div>
        </div>
      </div>

      <div className="copyright-section">
        <p>
          &#169; Copywriting &#124; All Rights Reserved &#124; Terms of Use
          &#124; Privacy
        </p>
      </div>
    </div>
  );
}
export default FooterSegment;
