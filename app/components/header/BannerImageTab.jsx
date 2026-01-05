import React from 'react'

function BannerImageTab() {
    return (
        <div>
            <div className="group relative h-[150px] w-[90vw] max-w-[360px] cursor-pointer overflow-hidden rounded-[45px] bg-[linear-gradient(135deg,#1e1e1e_0%,#2d2d2d_100%)] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)] md:h-[90px] md:w-[320px]">
                <div className="relative flex h-full w-full items-center px-5">
                    <div className="absolute left-3 z-20 h-[110px] w-[110px] overflow-hidden rounded-full border-2 border-[#c49b63] bg-black transition-[left] duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:left-[calc(100%-130px)] md:h-[66px] md:w-[66px] md:group-hover:left-[242px]">
                        <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Alex" />
                    </div>
                    <div className="ml-[130px] flex-1 transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:-translate-x-[75px] md:ml-[85px]">
                        <h1 className="text-[28px] font-light tracking-[1px] text-white md:text-[20px]">Hear From Alex</h1>
                        <p className="text-[14px] font-light tracking-[0.5px] text-[#c49b63] md:text-[10px]">Co-Founder Of XpertWebStudio</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerImageTab