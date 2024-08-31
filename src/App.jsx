import Header from "./components/header/HeaderSegment";
import Job from "./components/job/JobApp";
import ServiceSegment from "./components/service/ServiceSegment";
import CoverSegment from "./components/cover/CoverLetter";
import FreeResume from "./components/free/FreeResume";
import FooterSegment from "./components/footer/FooterSegment";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Job />
      <ServiceSegment />
      <CoverSegment />
      <FreeResume />
      <FooterSegment />
    </div>
  );
}

export default App;
