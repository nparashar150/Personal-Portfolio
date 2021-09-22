import React, { useState } from "react";
import {
  NavWrapper,
  NavLinks,
  NavElements,
  NavSocialIcons,
  NavImage,
  NavMobile,
  NavMobileBar,
} from "./NavElements";
import { Link } from "react-router-dom";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { AiOutlineAlignRight } from "@react-icons/all-files/ai/AiOutlineAlignRight";

const Nav = () => {
  let [toggleNav, setToggleNav] = useState(true);

  const showHide = {
    display: toggleNav ? "flex" : "none",
    transition: "all 0.75s ease-in-out",
  };

  return (
    <>
      <NavWrapper>
        <NavMobileBar>
          <AiOutlineAlignRight
            onClick={() => setToggleNav(!toggleNav)}
            size="2rem"
          ></AiOutlineAlignRight>
          <NavImage to="/">
            <svg
              width="211"
              height="280"
              viewBox="0 0 211 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="211" height="280" />
              <path d="M0.5 101.5L20.5 122.009V263H0.5V101.5Z" />
              <path d="M60.1421 124L63.9592 156.101L173.5 265.642L201.563 265.421L60.1421 124Z" />
              <path d="M1.5 263L13.6551 243H101.5V263H1.5Z" />
              <path d="M83 173L103 183.94V263H83L83 173Z" />
              <path d="M210.063 179.063L190.063 158.554V17.5635H210.063V179.063Z" />
              <path d="M152.421 155.563L148.604 123.462L39.2843 14.1421H11L152.421 155.563Z" />
              <path d="M210 17.5L197.845 37L110 37V17L210 17.5Z" />
              <path d="M129.563 107.563L109.563 96.6239L110 17L129.563 17.5635L129.563 107.563Z" />
            </svg>
          </NavImage>
        </NavMobileBar>
        <NavElements style={ showHide } >
          <NavMobile>
            <AiOutlineClose
              onClick={() => setToggleNav(!toggleNav)}
            ></AiOutlineClose>
          </NavMobile>
          <NavImage to="/">
            <svg
              width="211"
              height="280"
              viewBox="0 0 211 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="211" height="280" />
              <path d="M0.5 101.5L20.5 122.009V263H0.5V101.5Z" />
              <path d="M60.1421 124L63.9592 156.101L173.5 265.642L201.563 265.421L60.1421 124Z" />
              <path d="M1.5 263L13.6551 243H101.5V263H1.5Z" />
              <path d="M83 173L103 183.94V263H83L83 173Z" />
              <path d="M210.063 179.063L190.063 158.554V17.5635H210.063V179.063Z" />
              <path d="M152.421 155.563L148.604 123.462L39.2843 14.1421H11L152.421 155.563Z" />
              <path d="M210 17.5L197.845 37L110 37V17L210 17.5Z" />
              <path d="M129.563 107.563L109.563 96.6239L110 17L129.563 17.5635L129.563 107.563Z" />
            </svg>
          </NavImage>
          <NavLinks>
            <Link to="/about">About</Link>
          </NavLinks>
          <NavLinks>
            <Link to="/skill">My Skill</Link>
          </NavLinks>
          <NavLinks>
            <Link to="/projects">Projects</Link>
          </NavLinks>
          <NavLinks>
            <Link to="/contact">Contact</Link>
          </NavLinks>
          <NavSocialIcons>
            <a
              href="https://github.com/nparashar150"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <FaGithub size="1.5rem"></FaGithub>
            </a>
            <a
              href="https://instagram.com/nparashar150_"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size="1.5rem"></FaInstagram>
            </a>
            <a
              href="https:/t.me/nparashar150"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <FaTelegram size="1.5rem"></FaTelegram>
            </a>
          </NavSocialIcons>
        </NavElements>
      </NavWrapper>
    </>
  );
};

export default Nav;
