import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import EducationExperience from "./components/EducationExperience";
import CurrentlyLearning from "./components/CurrentlyLearning";
import Projects from "./components/Projects";
import InterestAreas from "./components/InterestAreas";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Introduction />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Skills />
          <EducationExperience />
        </div>
        <CurrentlyLearning />
        <Projects />
        <InterestAreas />
      </main>
      <Footer />
    </div>
  );
}
