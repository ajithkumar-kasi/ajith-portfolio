import React from "react";
import { Icon } from "@iconify/react";

export const SocialMedia = () => {
  const socialMedia = [
    {
      id: 1,
      title: "LinkedIn",
      src: "mdi:linkedin",
      url: "https://www.linkedin.com/in/ajithkumar-kasi/",
    },
    {
      id: 2,
      title: "Github",
      src: "mdi:github",
      url: "https://github.com/ajithkumar-kasi",
    },
    {
      id: 3,
      title: "Facebook",
      src: "ic:sharp-facebook",
      url: "https://www.facebook.com/aijithkumar.k.9/",
    },
    {
      id: 4,
      title: "Instagram",
      src: "lets-icons:insta",
      url: "https://www.instagram.com/ajith.ak555/",
    },
  ];
  return (
    <div className="flex gap-2">
      {socialMedia.map((dt) => {
        return (
          <a key={dt.id} href={dt.url} target="_blank">
            <Icon
              icon={dt.src}
              width={20}
              height={20}
              className="hover:scale-150"
            />
          </a>
        );
      })}
    </div>
  );
};
