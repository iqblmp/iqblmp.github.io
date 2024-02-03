"use client";

import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
    {
        avatar: "/reviews/avatar-5.png",
        name: "Pipit Novita",
        job: "Enterpreneur",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis officiis veniam totam quae ullam quidem",
    },
    {
        avatar: "/reviews/avatar-5.png",
        name: "Vika Jolekha",
        job: "Wedding Decoration",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis officiis veniam totam quae ullam quidem",
    },
    {
        avatar: "/reviews/avatar-5.png",
        name: "Raidi Sugandi",
        job: "Manager",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis officiis veniam totam quae ullam quidem",
    },
    {
        avatar: "/reviews/avatar-5.png",
        name: "Sakhyatul Apriliani",
        job: "Graphic Designer",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis officiis veniam totam quae ullam quidem",
    },
    {
        avatar: "/reviews/avatar-5.png",
        name: "Iqbal Pratama",
        job: "Web Developer",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis officiis veniam totam quae ullam quidem",
    },
    {
        avatar: "/reviews/avatar-5.png",
        name: "Kaji Doeng",
        job: "Influencer",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis officiis veniam totam quae ullam quidem",
    },
];

const Reviews = () => {
    return (
        <section className="mb-12 xl:mb-32">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
                {/* slider */}
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1400: { slidesPerView: 3 },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    className="h-[350px]"
                >
                    {reviewsData.map((person, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                                    <CardHeader className="p-0 mb-10">
                                        <div className="flex items-center gap-x-4">
                                            {/* image */}
                                            <Image src={person.avatar} width={70} height={70} alt="" priority />
                                            {/* name */}
                                            <div className="flex flex-col">
                                                <CardTitle>{person.name}</CardTitle>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardDescription className="text-lg text-muted-foreground">{person.review}</CardDescription>
                                </Card>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;
