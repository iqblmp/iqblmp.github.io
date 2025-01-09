import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Blur from "./Blur";
import DownloadCV from "./DownloadCV";

import { RiBriefcase4Fill, RiTeamFill, RiTodoFill, RiArrowDownSLine } from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
    return (
        <div>
            <Blur />
            <section className=" pt-5 py-12 xl:py-24 h-[84vh] xl:pt-26 bg-no-repeat bg-bottom bg-transparent ">
                <div className="container mx-auto">
                    <div className="flex justify-between gap-x-8">
                        {/* text */}
                        <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
                            <h1 className="h1 mb-4">Hi, I'm Iqbal Mauludi Pratama</h1>
                            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
                                A passionate web developer dedicated to creating seamless digital experiences through clean code and innovative solutions. Let's build something great together!
                            </p>
                            {/* buttons */}
                            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                                <Link href="/contact">
                                    <Button className="gap-x-2">
                                        Contact Me <Send size={18} />
                                    </Button>
                                </Link>
                                <Button onClick={DownloadCV} variant="secondary" className="gap-x-2">
                                    Download CV <Download size={18} />
                                </Button>
                            </div>
                            {/** socials */}
                            <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" iconStyles="text-foreground text[22px] hover:text-primary transition-all" />
                        </div>
                        {/* image */}
                        <div className="hidden xl:flex relative">
                            {/* badge 1 */}
                            <Badge containerStyles="h-[60px] w-[180px] absolute top-[26%] -left-[4rem] " icon={<RiBriefcase4Fill className="text-foreground dark:text-background" />} endCountNum={2} badgeText="Year of Experience" />
                            {/* badge 2 */}
                            <Badge containerStyles="h-[60px] w-[180px] absolute top-[38%] -right-9  " icon={<RiTodoFill className="text-foreground dark:text-background" />} endCountNum={15} badgeText="Finished Project" />
                            {/* badge 3 */}
                            <Badge containerStyles="h-[60px] w-[195px] absolute top-[80%] -left-[1rem] " icon={<RiTeamFill className="text-foreground dark:text-background" />} endCountNum={2} badgeText="International Certification" />
                            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute z-20 -top-1 -right-2 "></div>
                            <DevImg containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom z-20" imgSrc="/hero/imp.png" />
                        </div>
                    </div>
                    {/** icon */}
                    <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                        <RiArrowDownSLine className="text-3xl text-primary" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
