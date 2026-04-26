import "./styles/Work.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Caraveal",
    category: "Agentic storefronts in 60 seconds",
    tools: "Make any Shopify store transactable through AI agents.\nBuilt on the Universal Commerce Protocol.",
    link: "https://github.com/SK-AIPM404/ucp-agentic-commerce",
    image: "/images/44f274a88bbe65a0e447106e0cbd241954cea6f6_2_690x362.jpeg"
  },
  {
    name: "GEO Audit",
    category: "Find out if AI search can see your site",
    tools: "GEO/SEO audit for ecommerce brands.",
    link: "https://github.com/SK-AIPM404/geo-audit",
    image: "/images/nexus_ai_dashboard.png"
  },
  {
    name: "Subagent system",
    category: "8 agents that run my PM work",
    tools: "Claude Code. Meeting notes, research, specs, sprint planning, comms.",
    link: "https://github.com/SK-AIPM404",
    image: "/images/AI-Workflow-Automation.jpg"
  },
  {
    name: "PIM",
    category: "Product information management for D2C",
    tools: "TypeScript. Early take.",
    link: "https://github.com/SK-AIPM404/PIM",
    image: "/images/what-is-a-pim.png"
  }
];

const Work = () => {
  useGSAP(() => {
    const box = document.getElementsByClassName("work-box");
    if (!box.length) return;
    
    // The width of the first 4 items perfectly measures the distance to seamlessly loop 
    const runWidth = box[0].getBoundingClientRect().width * projects.length;

    gsap.to(".work-flex", {
      x: -runWidth,
      ease: "none",
      duration: 30, // Adjust this to change the speed of the continuous scroll
      repeat: -1,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex" style={{ width: "max-content" }}>
          {[...projects, ...projects].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{(index % projects.length) + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Impact</h4>
                <p>{project.tools}</p>
              </div>
              <a href={project.link || "#"} className="view-on-github-btn" target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
