import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Full Stack Blog Application",
    desc: "A dynamic and fully responsive blog platform built with a modern tech stack, featuring user authentication, post creation, editing, and deletion capabilities. It includes a sleek, intuitive UI and a powerful backend to manage content efficiently. Designed for scalability and performance, this application ensures a seamless reading and writing experience for users.  ",
    link: "/",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "School Management System",
    desc: "A streamlined web app for managing student enrollment, teacher administration, class scheduling, and attendance tracking with efficient data management and role-based access.  ",
    link: "/",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Real-time Chat Application",
    desc: "A responsive and fast messaging app built with React and Firebase, featuring real-time messaging, user authentication, and seamless data synchronization for instant communication.  ",
    link: "/",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Social Media Project",
    desc: "A responsive social media front-end built with HTML and CSS, featuring a sleek dark and light mode toggle. Designed with a modern layout and optimized for various screen sizes, ensuring a smooth and visually appealing user experience.   ",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "A modern and responsive portfolio built with Next.js, Framer Motion, and Tailwind CSS. Showcases smooth animations, fast performance, and a sleek, minimalist design for an engaging user experience.  ",
    link: "/",
  },
  {
    id: 5,
    img: "/p6.png",
    title: "Animated Portfolio Website using three.js",
    desc: "A visually engaging and interactive portfolio built with React, Framer Motion, and Three.js. Features smooth animations, 3D elements, and a responsive design, creating a dynamic and immersive user experience.",
    link: "/",
  },

];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;
