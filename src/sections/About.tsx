import{ SectionHeader } from "@/components/SectionHeader";
import{ Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NodeIcon from "@/assets/icons/nodejs.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";

const toolboxItems = [
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },

]

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
      eyebrow="About Me"
      title="A Glimpse Into My World"
      description="Learn more about who I am,what I do, and my journey so far." />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>Explore the Technologies and Tools I use to craft exceptional digital experiences.</p>
          </div>
          <div>
            {toolboxItems.map(
              item => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              )
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
