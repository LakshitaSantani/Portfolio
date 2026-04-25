import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    if (translateX <= 0) return;

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[

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
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Impact</h4>
                <p>{project.tools}</p>
              </div>
              <a href={project.link || "#"} target="_blank" className="work-image-container" style={{ display: "block", aspectRatio: "16/9", position: "relative", width: "100%", height: "100%" }}>
                <WorkImage image={project.image || "/images/placeholder.webp"} alt={project.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
