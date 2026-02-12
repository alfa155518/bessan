import Hero from "./Hero";
import About from "./About";
import Statistics from "./Statistics";
import ProjectsAndPrograms from "./ProjectsAndPrograms";

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Statistics />
            <ProjectsAndPrograms />
        </div>
    )
}