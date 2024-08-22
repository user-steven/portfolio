import React from "react";
import { MagicButton } from "./ui/MagicButton";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  let dataEmail = "r2juaw10@duck.com";
  let dataSocialMedia = [
    {
      id: 1,
      img: "/git.svg",
      url: "https://github.com/user-steven",
    },
  ];

  try {
    const { email, socialMedia } = require("@/config/index");
    dataEmail = email || dataEmail;
    dataSocialMedia = socialMedia || dataSocialMedia;
  } catch (error) {
    console.error("Failed to load from index.js");
  }

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Looking for a{" "}
          <span className="text-purple">dedicated professional</span> to drive
          your team&apos;s success?
        </h1>
        <p className="dark:text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s connect today and discuss how I can bring value to your
          organization.
        </p>
        <a href={`mailto:${dataEmail}`}>
          <MagicButton
            title="Let's get in touch"
            icon={<MdEmail />}
            position="left"
          />
        </a>
      </div>
      <div className="flex items-center justify-center md:gap-3 gap-6 pt-20">
        {dataSocialMedia.map((profile) => (
          <a
            key={profile.id}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-100">
              <img src={profile.img} width={20} height={20} />
            </div>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
