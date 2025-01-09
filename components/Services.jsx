import { GanttChartSquare, Blocks, Gem, Code, Server, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: "Web Design",
        description: "Create visually appealing and user-friendly designs that focus on intuitive user experience (UX) and high-quality aesthetics, tailored to your brand's needs.",
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: "Web Development",
        description: "Build responsive and performant websites with cutting-edge technologies like React, Next.js, and more. I ensure fast load times and a seamless user experience across all devices.",
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: "App Development",
        description: "Develop dynamic web and mobile applications with modern frameworks and tools, providing feature-rich, cross-platform solutions tailored to your business goals.",
    },
    {
        icon: <Code size={72} strokeWidth={0.8} />,
        title: "Front-End Development",
        description: "Specializing in HTML, CSS, JavaScript, and frameworks like React.js, I focus on creating interactive, visually stunning front-end experiences that are optimized for performance.",
    },
    {
        icon: <Server size={72} strokeWidth={0.8} />,
        title: "Back-End Development",
        description: "Design and implement robust server-side solutions using Node.js, Express, and databases like MongoDB, ensuring secure, scalable, and efficient web applications.",
    },
    {
        icon: <Smartphone size={72} strokeWidth={0.8} />,
        title: "Responsive Web Design",
        description: "Optimize websites for various screen sizes and devices, ensuring your site looks great and functions flawlessly across desktops, tablets, and smartphones.",
    },
];

const Services = () => {
    return (
        <section className="mb-12 xl:mb-20">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
                {/* grid items */}
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-16 xl:gap-x-8">
                    {servicesData.map((item, index) => {
                        return (
                            <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
                                <CardHeader className="text-primary absolute -top-[60px]">
                                    <div className="w-[140px] h-[80px] dark:bg-background flex justify-center items-center">{item.icon}</div>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardTitle className="mb-4">{item.title}</CardTitle>
                                    <CardDescription className="text-lg">{item.description}</CardDescription>
                                </CardContent>
                                <CardFooter />
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
