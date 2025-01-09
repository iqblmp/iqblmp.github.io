import { Button } from "./ui/button";
import Link from "next/link";

const Cta = () => {
    return (
        <section className="py-12 bg-[#d3d9e1]  dark:bg-secondary/40">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold text-primary max-w-xl mb-6 px-8 leading-tight">Ready to bring your vision to life? Let’s create something amazing together!</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 px-8">Whether it's a website, app, or digital experience, I’m here to help you every step of the way.</p>
                    <Link href="/contact">
                        <Button className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">Let’s Get Started</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cta;
