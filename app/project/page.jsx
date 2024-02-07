"use client";
import React, { useState } from "react";
import Blur from "@/components/Blur";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
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
    {
        image: "https://placehold.co/247x250.jpg",
        category: "Front-End",
        name: "SMK Mutubumi Website",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perspiciatis amet inventore cupiditate.",
        link: "/",
        github: "",
    },
];

// remove category duplicates
const uniqueCategories = ["all projects", ...new Set(projectData.map((item) => item.category))];

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState("all projects");

    const filteredProjects = projectData.filter((project) => {
        // jika kategori 'all projects' maka return projects, else filter by category
        return category === "all projects" ? project : project.category === category;
    });

    return (
        <section className="min-h-screen pt-12">
            <Blur />
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
                {/* tabs */}
                <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                    <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
                        {categories.map((category, index) => {
                            return (
                                <TabsTrigger onClick={() => setCategory(category)} value={category} key={index} className="capitalize w-[162px] md:w-auto">
                                    {category}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                    {/* tabs content */}
                    <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {filteredProjects.map((project, index) => {
                            return (
                                <TabsContent value={category} key={index}>
                                    <ProjectCard project={project} />
                                </TabsContent>
                            );
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default Projects;
