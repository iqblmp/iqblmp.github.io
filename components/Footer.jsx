import Socials from "./Socials";

const Footer = () => {
    return (
        <footer className="bg-secondary py-6">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-between">
                    {/* socials */}
                    <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-3" iconStyles="text-primary  text-[20px] hover:text-white dark:hover:text-primary trasition-all" />
                    <div className="text-slate-400">Copyright &copy; Iqbal Mauludi Pratama. All rights reserved</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
