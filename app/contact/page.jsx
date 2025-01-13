import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
// components
import Form from "@/components/Form";
import Blur from "@/components/Blur";
const Contact = () => {
    return (
        <section>
            <Blur />
            <div className="container mx-auto">
                {/* teks dan ilustrasi */}
                <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
                    {/* text */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-x-3 text-primary text-lg mb-4">
                            <span className="w-[12px] h-[2px] bg-primary"></span>
                            learn to rest, no to quit!
                        </div>
                        <h1 className="h1 max-w-3xl mb-8">Let’s Build Something Amazing Together</h1>
                        <p className="subtitle max-w-7xl">
                            I’m always excited to collaborate on innovative projects, whether it’s a full-scale application, a sleek website, or something entirely unique. Feel free to reach out, and let’s create something extraordinary.
                        </p>
                    </div>

                    {/* illustratiuon */}
                </div>
                {/* info text & form */}
                <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
                    {/* info */}
                    <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
                        {/* mail */}
                        <div className="flex items-center gap-x-8">
                            <MailIcon size={18} className="text-primary" />
                            <div>iqbalmauludipratama019@gmail.com</div>
                        </div>
                        {/* address */}
                        <div className="flex items-center gap-x-8">
                            <HomeIcon size={18} className="text-primary" />
                            <div>Brebes, Central Java, Indonesia</div>
                        </div>
                        {/* telepon */}
                        <div className="flex items-center gap-x-8">
                            <PhoneCall size={18} className="text-primary" />
                            <div>+62 858 6656 5760</div>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </section>
    );
};

export default Contact;

{
    /* <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div> */
}
