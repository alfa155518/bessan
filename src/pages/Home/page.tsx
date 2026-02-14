import Hero from "./Hero";
import About from "./About";
import Statistics from "./Statistics";
import ProjectsAndPrograms from "./ProjectsAndPrograms";
import HomeNews from "./HomeNews";
import HomePartners from "./HomePartners";


export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Statistics />
            <ProjectsAndPrograms />
            <HomeNews />
            <HomePartners />
        </div>
    )
}