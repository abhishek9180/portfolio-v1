import { IconType } from "react-icons"
import {
  FaMapMarkerAlt,
  FaLanguage,
  FaUniversity,
  FaBuilding,
  FaTools,
  FaGithub,
  FaLinkedin,
  FaGoodreads,
  FaEnvelope,
  FaInstagram,
  FaReddit,
  FaDribbble,
  FaYoutube,
  FaStackOverflow,
} from "react-icons/fa"
import { FaBluesky, FaXTwitter } from "react-icons/fa6"

/**
 * Configuration for the home page intro section
 */
export const homeIntroConfig = {
  /**
   * Your full name (used in breadcrumbs, footer, and other places)
   */
  name: "Abhishek Jha",

  /**
   * Your short/first name (optional - used in "Hi, I'm..." greeting)
   * If not provided, the full name will be used
   */
  shortName: "Abhishek",

  /**
   * Introduction paragraphs (can be multiple)
   */
  introParagraphs: [
    "I am a Full-Stack Engineer with 10 years of experience specializing in web architecture, global-scale platforms, and production-ready generative AI integration. My background combines deep frontend engineering with zero-to-one cloud infrastructure design and team technical leadership.",
    "At Everest Engineering, I lead a pod of 6 developers as the team's technical anchor — architecting solutions across global e-commerce, cloud-native, and AI-powered platforms. I also drive technical interviewing and upskilling initiatives that raise engineering practices across the organization.",
  ],

  /**
   * Quick facts displayed as chips below your introduction
   * Fill in the fields below. Leave empty ("") to hide a fact.
   */
  facts: {
    company: "Everest Engineering",
    education: "B.Tech CSE, NM Institute of Engg & Tech",
    location: "Bangalore, India",
    languages: "EN / HI-IN",
    role: "Senior Full-Stack Engineer & Tech Lead",
  },

  /**
   * Additional custom facts to display below the predefined ones.
   * Add any extra facts you want to display with their icons.
   * You must use an icon from react-icons and provide its label.
   */
  additionalFacts: [] as Array<{ icon: IconType; label: string }>,

  /**
   * Number of work items to show in the preview sections on the home page.
   * Note that the actual number shown may be less if there aren't enough items.
   * If the actual number of items is larger than this, a "View All" link will be displayed.
   * This number must be a number greater than zero.
   */
  workItemsToShow: 3,

  /**
   * Number of projects to show in the preview sections on the home page.
   * Note that the actual number shown may be less if there aren't enough items.
   * If the actual number of items is larger than this, a "View All" link will be displayed.
   * This number must be a number greater than zero. We recommend keeping it low and
   * having a multiple of 2 for better grid layout (e.g., 2 or 4).
   */
  projectsToShow: 4,

  /**
   * Number of blog posts and projects to show in the preview sections on the home page.
   * Note that the actual number shown may be less if there aren't enough items.
   * If the actual number of items is larger than this, a "View All" link will be displayed.
   * This number must be a number greater than zero. We recommend keeping it low (=3) and
   * having a multiple of 3 for better grid layout.
   */
  blogPostsToShow: 3,
}

/**
 * A certification entry shown in the Certifications section on the home page.
 */
export interface Certification {
  name: string
  organization: string
  issueDate: string
  expirationDate?: string
  credentialId?: string
  credentialUrl?: string
}

/**
 * Professional certifications displayed on the home page.
 * Each entry maps to a certification from profile.md.
 */
export const certificationsConfig: Certification[] = [
  {
    name: "AWS Certified AI Practitioner",
    organization: "Amazon Web Services (AWS)",
    issueDate: "2026-01",
    expirationDate: "2029-01",
    credentialUrl:
      "https://www.credly.com/badges/553ece75-b6d1-40ec-b8c7-aa6c983ba646/linked_in_profile",
  },
  {
    name: "Google AI",
    organization: "Google",
    issueDate: "2026-04",
    credentialId: "3UK4LEZ95KQJ",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/3UK4LEZ95KQJ",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services (AWS)",
    issueDate: "2023-05",
    expirationDate: "2026-05",
    credentialUrl:
      "https://www.credly.com/badges/4db0bc12-4363-47b0-8cb7-e43f87ef90e7/linked_in_profile",
  },
]

/**
 * Configuration for pagination settings within the site.
 */
export const paginationConfig = {
  /**
   * Number of blog posts to show per page for "/blog" and "/blog?page=n" routes.
   * This number must be a number greater than zero.
   */
  blogPostsPerPage: 5,

  /**
   * Number of work items to show per page for "/work" and "/work?page=n" routes.
   * This number must be a number greater than zero.
   */
  workItemsPerPage: 6,

  /**
   * Number of projects to show per page for "/projects" and "/projects?page=n" routes.
   * This number must be a number greater than zero.
   */
  projectsPerPage: 6,
}

/**
 * Configuration for the footer
 */
export const footerConfig = {
  /**
   * Name displayed in the copyright notice
   */
  copyrightName: "Abhishek Jha",

  /**
   * Show version and attribution section
   * Set to true if you want to hide the "built by @alemoraru" attribution and version number.
   * By default, this is true to give credit to the template creator, but you can disable it if desired.
   */
  showVersionAndAttribution: true,

  /**
   * Social media links
   * Simply add your URLs below. Leave empty ("") to hide a social link.
   */
  socialLinks: {
    github: "https://github.com/abhishek9180",
    linkedin: "www.linkedin.com/in/abhishek-jha-a5a40097",
    goodreads: "",
    instagram: "",
    twitter: "",
    reddit: "",
    dribbble: "",
    youtube: "",
    bluesky: "",
    stackoverflow: "",
    email: "jha.abhishek9180@gmail.com",
  },
}

// USERS DO NOT NEED TO MODIFY BELOW THIS LINE
// YOU CAN, HOWEVER, EXTEND THE ICON MAPS IF NEEDED

/**
 * Internal mapping of predefined fact categories to their icons
 * This is used internally by the HomeContent component - users don't need to modify this
 */
export const factIconMap: Record<keyof typeof homeIntroConfig.facts, IconType> = {
  company: FaBuilding,
  education: FaUniversity,
  location: FaMapMarkerAlt,
  languages: FaLanguage,
  role: FaTools,
}

/**
 * Internal mapping of social platforms to their icons and labels
 * This is used internally by the Footer component - users don't need to modify this
 */
export const socialIconMap: Record<
  keyof typeof footerConfig.socialLinks,
  { icon: IconType; label: string }
> = {
  github: { icon: FaGithub, label: "GitHub" },
  linkedin: { icon: FaLinkedin, label: "LinkedIn" },
  goodreads: { icon: FaGoodreads, label: "GoodReads" },
  instagram: { icon: FaInstagram, label: "Instagram" },
  twitter: { icon: FaXTwitter, label: "X" },
  reddit: { icon: FaReddit, label: "Reddit" },
  dribbble: { icon: FaDribbble, label: "Dribbble" },
  youtube: { icon: FaYoutube, label: "YouTube" },
  bluesky: { icon: FaBluesky, label: "Bluesky" },
  stackoverflow: { icon: FaStackOverflow, label: "Stack Overflow" },
  email: { icon: FaEnvelope, label: "Email" },
}
