import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Amaya Kumarasiri",
    position: "Associate UI/UX,QA @ AKH IT Solutions",
    text: "Janethra is a true frontend wizard. His work on our project was outstanding. He not only delivered a beautiful design but also ensured a seamless user experience. Highly recommended!",
    avatar: memojiAvatar4,
  },
  {
    name: "Praveen Kakulandala",
    position: "Undergraduate @ NSBM",
    text: "Hey Janethra 😊, it was such a pleasure working with you! Your support and great ideas made everything smoother and fun. Really hope we get to collaborate again soon! 🤝✨",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <SectionHeader
        eyebrow="Happy Thoughts!"
        title="What Collaborators Say About Me"
        description="Do not just take my word for it. Hear directly from the people who have trusted me to bring their ideas to life."
      />
      <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {[...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.name}
                  className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                >
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="max-h-full"
                      />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/40">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 md:text-base text-sm">
                    {testimonial.text}
                  </p>
                </Card>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
