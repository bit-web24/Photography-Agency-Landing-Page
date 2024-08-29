import * as React from "react";
import { cn } from "@/lib/utils";
import { Headline, CardTitle, CardDescription } from "@/components/ui/WorkCard";
import { MdArrowBack, MdArrowForward, MdArrowForwardIos, MdArrowRight, MdArrowRightAlt, MdSkipNext } from "react-icons/md";
import { awardsData } from "../../constants";

const Award = () => {
    return (
        <section className="bg-[#1C1A1F] pt-10 text-white mt-20">
            <CardDescription className="py-4 text-[#808080]">(04) <br /> Awards</CardDescription>
            <div className="flex flex-col lg:flex-row justify-end items-start mb-12">
                <div className="max-w-xl">
                    <Headline className="text-left">
                        <span className="text-white font-bold">Award</span> is a pixel that <span className="text-white font-bold">reflecting</span> our ongoing <span className="text-white font-bold">dedication</span> to innovation and excellence
                    </Headline>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-14">
                <div className="flex flex-col lg:w-3/5">
                    {awardsData.map((award, index) => (
                        <div key={index} className="group relative">
                            <hr className="absolute top-0 left-0 right-0 border-t border-[#363733] transition-colors duration-200 group-hover:border-transparent" />
                            <div className="p-4 rounded-lg cursor-pointer transition-colors text-[#808080] hover:bg-[#363733] h-28">
                                <div className="flex flex-row justify-between items-center">
                                    <p className="text-2xl font-bold">{award.year}</p>
                                    <p className="text-2xl w-2/5">{award.title}</p>
                                    <button className="w-10 h-10 flex items-center justify-center border border-[#808080] rounded-full group-hover:bg-white group-hover:border-white transition-all duration-200">
                                        <MdArrowForward size={24} className="text-[#808080] group-hover:text-black group-hover:rotate-[-45deg] transition-all duration-200" />
                                    </button>
                                </div>
                            </div>
                            <hr className="absolute bottom-0 left-0 right-0 border-t border-[#363733] group-hover:border-transparent transition-colors duration-200" />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:w-1/2 mt-6 lg:mt-0 text-left">
                    <img
                        src="/card/afternoon.jpg"
                        alt="A Quiet Afternoon in the Countryside"
                        className="w-full h-1/2 rounded-2xl mx-auto"
                    />
                    <CardTitle className="py-4">A Quiet Afternoon in the Countryside</CardTitle>
                    <CardDescription className="text-[#808080]">
                        As the sun gently descends in the western sky, casting a warm golden glow upon the rolling hills and meadows, the countryside settles into a tranquil serenity.
                    </CardDescription>
                </div>
            </div>
        </section>
    );
};


export default Award;