import React from 'react'

const marqueeItems = [
    'Branding',
    'Website Development',
    'Mobile App Development',
    'Digital Marketing',
    'Website Design'
]

const tagList = ['Branding', 'Design']

function Mastery() {
    return (
        <div className="text-white">
            {/* Scrolling Banner */}
            <div className="overflow-hidden border-b border-[#333] bg-[#1a1a1a] py-[15px]">
                <div className="flex whitespace-nowrap [animation:scroll_30s_linear_infinite]">
                    {marqueeItems.concat(marqueeItems).map((item, index) => (
                        <span
                            key={`${item}-${index}`}
                            className="inline-flex items-center px-[30px] text-[14px] font-medium uppercase tracking-[1px] after:ml-[30px] after:text-[20px] after:text-[#ff6600] after:content-['•']"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Main Content Section */}
            <div className="mx-auto my-[80px] max-w-[1400px] px-[40px]">
                <div className="grid gap-[40px] md:grid-cols-2 md:gap-[80px]">
                    {/* Left Side - Stats Card */}
                    <div className="relative overflow-hidden rounded-[30px] border border-[#f8f8f8] bg-[linear-gradient(135deg,#1a1a1a_0%,#0f0f0f_100%)] px-[40px] py-10 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[0_0px_60px_rgba(255,102,0,0.26)]">
                        <div className="text-[80px] font-bold tracking-[2px] text-[#ff6600]">220+</div>
                        <div className="md:w-3/4">
                            <p className="text-[15px] leading-[1.8] text-[#999]">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                        </div>
                        {/* Animated Chart Bars */}
                        <div className="absolute bottom-[50px] right-[40px] flex h-[120px] w-[100px] items-end gap-[15px]">
                            <div className="h-[60%] flex-1 rounded-[8px] bg-[linear-gradient(180deg,#666_0%,#333_100%)] transition-[height] duration-300 hover:h-[105%]"></div>
                            <div className="h-full flex-1 rounded-[8px] bg-[linear-gradient(180deg,#ff6600_0%,#cc5200_100%)] transition-[height] duration-300 hover:h-[135%]"></div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
                            <div>
                                <h1 className="text-[40px] font-normal leading-[1.2] md:text-[60px]">
                                    Mastery of Creative Innovation
                                </h1>
                                <a
                                    href="#"
                                    className="mt-5 inline-block rounded-[30px] bg-[#ff6600] px-[40px] py-[15px] text-[14px] font-semibold tracking-[1px] text-white transition-all duration-300 hover:translate-x-[5px] hover:bg-[#ff8833] hover:text-black hover:shadow-[0_10px_30px_rgba(255,102,0,0.27)]"
                                >
                                    Read More
                                </a>
                            </div>
                            <div className="max-w-xl">
                                <div className="mb-[30px] flex flex-wrap gap-[15px]">
                                    {tagList.map((tag) => (
                                        <div
                                            key={tag}
                                            className="rounded-[30px] border border-[#444] px-[30px] py-[12px] text-[13px] uppercase tracking-[1px] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#ff6600] hover:bg-[#ff6600]"
                                        >
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[15px] leading-[1.8] text-[#999]">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less here, content "here", making it look like readable English.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Discount Form Section */}
            <div className="mx-auto my-[80px] max-w-[1400px] px-[40px]">
                <h2 className="text-[50px] font-bold text-[#ff6600]">Get 60% OFF</h2>
                <div className="mt-8 grid gap-5 md:[grid-template-columns:repeat(3,_minmax(0,_1fr))_0.8fr]">
                    <input
                        type="text"
                        placeholder="Name"
                        className="rounded-[15px] border border-white bg-[#1a1a1a] px-[25px] py-[20px] text-[15px] text-white placeholder:text-[#666] transition-all duration-300 focus:border-[#ff6600] focus:shadow-[0_0_20px_rgba(255,102,0,0.3)] focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="rounded-[15px] border border-white bg-[#1a1a1a] px-[25px] py-[20px] text-[15px] text-white placeholder:text-[#666] transition-all duration-300 focus:border-[#ff6600] focus:shadow-[0_0_20px_rgba(255,102,0,0.3)] focus:outline-none"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="rounded-[15px] border border-white bg-[#1a1a1a] px-[25px] py-[20px] text-[15px] text-white placeholder:text-[#666] transition-all duration-300 focus:border-[#ff6600] focus:shadow-[0_0_20px_rgba(255,102,0,0.3)] focus:outline-none"
                    />
                    <button className="rounded-[15px] bg-[#ff6600] px-[40px] py-[20px] text-[15px] font-semibold uppercase tracking-[1px] text-white transition-all duration-300 hover:-translate-y-[3px] hover:bg-[#ff8833] hover:shadow-[0_10px_30px_rgba(255,102,0,0.5)]">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Mastery