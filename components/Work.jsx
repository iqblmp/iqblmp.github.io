"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
    {
        image: "/work/sims-ppob.png",
        category: "Full-Stack",
        name: "SIMS PPOB",
        description: "This website is created for my portfolio purposes. This project is built using React.js with the Next.js framework.",
        link: "https://simsppob-iqbalmauludipratama.vercel.app",
        github: "https://github.com/iqblmp/SIMS-PPOB--Iqbal-Mauludi-Pratama-",
    },
    {
        image: "/work/smart-platform-v2.png",
        category: "Front-End",
        name: "Smart Platform 5 V2",
        description: "This website is created for my portfolio purposes. This project is built using React.js with the Next.js framework.",
        link: "#",
        github: "#",
    },
    {
        image: "/work/mutubumi-evoting.png",
        category: "Full-Stack",
        name: "SMK Muhammadiyah Bumiayu e-Voting",
        description: "This website is created for my portfolio purposes. This project is built using React.js with the Next.js framework.",
        link: "https://iqbalmp.vercel.app",
        github: "https://iqblmp.github.io",
    },
    {
        image: "/work/erecruitment-bulog.png",
        category: "Front-End",
        name: "e-Recruitment Perum BULOG",
        description: "This website is created for my portfolio purposes. This project is built using React.js with the Next.js framework.",
        link: "https://iqbalmp.vercel.app",
        github: "https://iqblmp.github.io",
    },
    {
        image: "/work/smart-platform-v1.png",
        category: "Front-End",
        name: "Smart Platform 5 V1",
        description: "This website is created for my portfolio purposes. This project is built using React.js with the Next.js framework.",
        link: "#",
        github: "#",
    },
    {
        image: "/work/iqb.png",
        category: "Full-Stack",
        name: "Iqbalmp's Portfolio",
        description: "This website is created for my portfolio purposes. This project is built using React.js with the Next.js framework.",
        link: "https://iqbalmp.vercel.app",
        github: "https://iqblmp.github.io",
    },
    {
        image: "/work/iqb.png",
        category: "Full-Stack",
        name: "Iqbalmp's Portfolio",
        description: "This website is created for my portfolio purposes. This project is built using React.js with the Next.js framework.",
        link: "https://iqbalmp.vercel.app",
        github: "https://iqblmp.github.io",
    },
    {
        image: "/work/iqb.png",
        category: "Full-Stack",
        name: "Iqbalmp's Portfolio",
        description: "This website is created for my portfolio purposes. This project is built using React.js with the Next.js framework.",
        link: "https://iqbalmp.vercel.app",
        github: "https://iqblmp.github.io",
    },
    {
        image: "/work/iqb.png",
        category: "Full-Stack",
        name: "Iqbalmp's Portfolio",
        description: "This website is created for my portfolio purposes. This project is built using React.js with the Next.js framework.",
        link: "https://iqbalmp.vercel.app",
        github: "https://iqblmp.github.io",
    },
    {
        image: "/work/iqb.png",
        category: "Full-Stack",
        name: "Iqbalmp's Portfolio",
        description: "This website is created for my portfolio purposes. This project is built using React.js with the Next.js framework.",
        link: "https://iqbalmp.vercel.app",
        github: "https://iqblmp.github.io",
    },
    {
        image: "https://placehold.co/247x250.jpg",
        category: "Back-End",
        name: "CRUD Database",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis amet inventore cupiditate.",
        link: "/",
        github: "",
    },
    {
        image: "https://placehold.co/247x250.jpg",
        category: "Full-Stack",
        name: "Kalijurang Profile and Population",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis amet inventore cupiditate.",
        link: "/",
        github: "",
    },
    {
        image: "https://placehold.co/247x250.jpg",
        category: "Full-Stack",
        name: "Thriftclock Manager",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis amet inventore cupiditate.",
        link: "/",
        github: "",
    },
    {
        image: "https://placehold.co/247x250.jpg",
        category: "Back-End",
        name: "CodeIgniter Project",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis amet inventore cupiditate.",
        link: "/",
        github: "",
    },
    {
        image: "https://placehold.co/247x250.jpg",
        category: "Front-End",
        name: "Kalijurang Office Profile",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis amet inventore cupiditate.",
        link: "/",
        github: "",
    },
    {
        image: "https://placehold.co/247x250.jpg",
        category: "Back-End",
        name: "Students Information",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis amet inventore cupiditate.",
        link: "/",
        github: "",
    },
    {
        image: "https://placehold.co/247x250.jpg",
        category: "Front-End",
        name: "SMK Mutubumi Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis amet inventore cupiditate.",
        link: "/",
        github: "",
    },
];

const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-32">
            <div className="container mx-auto">
                {/* text */}
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Lastest Project</h2>
                    <p className="subtitle mb-8">Take a look at my recent work, where I combine creativity with cutting-edge web technologies to deliver seamless user experiences.</p>{" "}
                    <Link href="/project">
                        <Button>All Project</Button>
                    </Link>
                </div>
                {/* slider */}
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 } }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}>
                        {/* hanya menampilkan slider 4 project pertama */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Work;
