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
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import bookImage from "@/assets/images/book-cover.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";


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

];

const hobbies = [
  {
    title: 'Music',
    emoji: '🎵',
  },
  {
    title: 'Travelling',
    emoji: '✈️',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
  },
  {
    title: 'Photography',
    emoji: '📷',
  },
  {
    title: 'Writing',
    emoji: '✍️',
  },
  {
    title: 'Swimming',
    emoji: ' 🏊',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
  },

]

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
      <SectionHeader
      eyebrow="About Me"
      title="A Glimpse Into My World"
      description="Learn more about who I am,what I do, and my journey so far." />
      <div className="mt-20">
        <Card className="h-[320px]">
          <CardHeader
            title="My Reads"
            description="Explore the books Shaping my perspectives"
          />
          <div className="w-40 mx-auto mt-8">
            <Image src={bookImage} alt="Book Cover" />
          </div>
        </Card>.0z
        <Card className="h-[320px] p-0">
          <CardHeader
            title="My Toolbox"
            description="Explore the tools and technologies I use"
          />
          <ToolboxItems items={toolboxItems} />
          <ToolboxItems items={toolboxItems} />
        </Card>
        <Card>
          <CardHeader
            title="Beyond the Code"
            description="Explore my interests and hobbies beyond the digital realm"
          />
          <div>
            {hobbies.map((hobby) => (
              <div key={hobby.title}>
                <span>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <Image src={mapImage} alt="map" />
          <Image src={smileEmoji} alt="smile" />
        </Card>
      </div>
    </div>
  </div>
  );
};
