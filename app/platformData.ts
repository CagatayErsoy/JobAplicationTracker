import { FaLinkedin, FaGlassMartiniAlt } from "react-icons/fa";
import { SiIndeed, SiYcombinator } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";

const platforms = [
  {
    platform: "LinkedIn",
    icon: FaLinkedin,
    applied: 0,
  },
  {
    platform: "LinkedIn Easy Apply",
    icon: CiLinkedin,
    applied: 0,
  },
  {
    platform: "Glassdoor",
    icon: FaGlassMartiniAlt, // No direct Glassdoor icon, using an alternative
    applied: 0,
  },
  {
    platform: "Indeed",
    icon: SiIndeed,
    applied: 0,
  },
  {
    platform: "WellFound",
    icon: MdWork, // No direct WellFound icon, using briefcase/work icon
    applied: 0,
  },
  {
    platform: "Y Combinator",
    icon: SiYcombinator,
    applied: 0,
  },
  {
    platform: "Others",
    icon: BsThreeDots, // Using three dots icon to represent "Others"
    applied: 0,
  },
];

export default platforms;
