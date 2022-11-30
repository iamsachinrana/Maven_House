import React from "react";

import {FiArrowRight, FiArrowLeft, FiChevronRight} from 'react-icons/fi';
import { BiWalletAlt,BiPencil,BiTimeFive  } from "react-icons/bi";
import {FaFacebookF ,FaLinkedinIn,FaCircleNotch,FaSpinner} from 'react-icons/fa';
import {BsInfoCircle,BsArrowRightShort} from 'react-icons/bs';
import {
  AiOutlinePlus,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineInfoCircle,
  AiOutlineAlignRight
  
} from "react-icons/ai";
export const icons = {
  wallet: <BiWalletAlt />,
  search:<AiOutlineSearch/>,
  plus: <AiOutlinePlus />,
  facebook:<FaFacebookF/>,
  linkedin:<FaLinkedinIn/>,
  instagram: <AiOutlineInstagram />,
  twitter: <AiOutlineTwitter />,
  heart:<AiOutlineHeart />,
  leftarrow:<FiArrowLeft/>,
  rightarrow:<FiArrowRight/>,
  check:<AiOutlineCheck />,
  info:<BsInfoCircle/>,
  chevronright:<FiChevronRight/>,
  close:<AiOutlineClose />,
  info: <AiOutlineInfoCircle />,
  pencil: <BiPencil />,
  time: <BiTimeFive />,
  circlenotch:<FaCircleNotch />,
  spinner:<FaSpinner />,
  navbtn:<AiOutlineAlignRight />,
  arrowright:<BsArrowRightShort />
};
