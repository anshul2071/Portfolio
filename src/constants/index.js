import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    jodifinder,
    threejs,
    logo,
    Ecommerce,
    portfolio,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Video Editor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "JodiFinder Webapp",
      description:
        "We developed a nearly functional JodiFinder web application as part of our college Minor Project. The app helps users find their soulmate by matching individuals of opposite genders based on filters such as age, gender, location, and education. Built using the MERN stack, we used React.js for the front-end, Node.js for the back-end, and MongoDB for the database.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },

        {
          name: "nodejs",
          color: "blue-text-gradient",
        },

        {
          name: "express",
          color: "green-text-gradient",
        },

      ],
      image: jodifinder,
      source_code_link: "https://github.com/anshul2071/JodiFinder",
    },
    {
      name: "Ecommerce Project",
      description:
        "Designed and developed the front-end for a dynamic web application using HTML, CSS, and JavaScript. The project includes responsive layouts, interactive navigation, and visually appealing pages such as home, shop, blog, about, and contact. While currently focused on front-end user experience, future plans involve integrating back-end functionality to enhance interactivity.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: Ecommerce,
      source_code_link: "https://github.com/anshul2071/Ecommerce_Project",
    },
    {
      name: "Portfolio",
      description:
        "This is a personal portfolio website where I share my details, including my professional background, skills, and projects. The website features an interactive design with a 3D model, providing a unique and modern touch. It is built using React.js and Three.js, ensuring a smooth and responsive user experience.                                                                                                                          ",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
        {
          name: "Three Js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind Css",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/anshul2071/Portfolio",
    },

    {
      name: "Video Editing",
      description:
        "I’ve done several anime recap projects, and I’ve gotten better at making smooth, engaging summaries. While I wouldn’t call myself an expert yet, I’ve built a style that works well and I believe I can deliver what your team is looking for. My passion for anime really helps me connect with the content and understand what viewers enjoy seeing in a recap. I even worked on a project where I had to recap documented archaeological sites, which was something new for me. It was a challenge, but it really helped me sharpen my attention to detail and adapt my editing style to different types of content.",
      tags: [
        {
          name: "Adobe Premiere Pro",
          color: "blue-text-gradient",
        },
        {
          name: "Wondershare Filmore",
          color: "green-text-gradient",
        },
        {
          name: "Davinci Resolve",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://www.upwork.com/freelancers/~01d2712401c3ab902f?p=1853352911744811008",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };