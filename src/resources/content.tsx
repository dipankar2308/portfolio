import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Pravesha",
  lastName: "Jain",
  name: `Pravesha Jain`,
  role: "UX Lead",
  avatar: "/images/avatar.jpg",
  email: "pravesha.jain@gmail.com",
  location: "Asia/Kolkata",
  languages: [],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/pravesha-jain-hfi-cua%E2%84%A2-ab309b3a/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Enterprise UX · Research · Data Workflows · Strategy</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I design clarity into complex enterprise systems. <br/> I lead research-driven UX for engineering and data products — simplifying workflows, improving trust in modelled outputs, and aligning cross-functional teams to deliver measurable impact.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Pravesha is a Pune-based UX Lead with expertise in Enterprise UX, Research, and Data Workflows.
        Her mission is to design clarity into complex tools, ensuring users can trust, understand,
        and act on the systems they rely on to make critical decisions. She has led UX for 10+ products
        and interviewed 50+ users across engineering, SMEs, procurement, HR & finance.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SLB",
        timeframe: "Present",
        role: "UX Lead",
        achievements: [
          <>
            Led UX for 10+ products spanning engineering, data, procurement and operations tools.
          </>,
          <>
            Conducted research with 50+ users across engineering, SMEs, procurement, HR & finance.
          </>,
          <>
            Improved adoption, trust, and operational clarity across cross-functional roles.
          </>,
          <>
            Designed research-driven solutions that simplified workflows and improved trust in modelled outputs.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills & Expertise",
    skills: [
      {
        title: "UX Research & Strategy",
        description: (
          <>Led research-driven UX for enterprise products, conducting 50+ user interviews across diverse roles and functions.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Enterprise UX Design",
        description: (
          <>Designed clarity into complex systems for engineering, data, procurement & operations tools, improving trust and operational efficiency.</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Data Workflows & Product Strategy",
        description: (
          <>Simplified workflows and improved trust in modelled outputs, aligning cross-functional teams to deliver measurable impact.</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
