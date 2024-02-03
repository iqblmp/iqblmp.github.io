"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import React from "react";

const Form = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const response = await fetch("https://formspree.io/f/xayreegn", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });
        if (response.ok) {
            form.reset();
            alert("Thank you! Your message has been sent");
        } else {
            alert("An error occurred. Please try again");
        }
    };
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
            {/* input */}
            <div className="relative flex items-center">
                <Input type="text" id="name" name="name" placeholder="Name" required />
                <User className="absolute right-6" size={20} />
            </div>
            {/* input */}
            <div className="relative flex items-center">
                <Input type="email" id="email" name="email" placeholder="Email" required />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            {/* input */}
            <div className="relative flex items-center">
                <Textarea id="message" name="message" placeholder="Type a Message" required />
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>
            <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
                Send Message
                <ArrowRightIcon size={20} />
            </Button>
        </form>
    );
};

export default Form;
