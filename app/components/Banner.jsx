import React from 'react'
import ViewWorkButton from './header/ViewWorkButton'
import MeetTeamLink from './header/MeetTeamLink'
import BannerImageTab from './header/BannerImageTab'

function Banner() {
  return (
    <div>
      <div className="relative mt-40 h-[70vh] w-full bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat text-white">
        <div className="-translate-y-[15px] px-[230px]">
          <h4 className="text-lg font-normal">Hello, we’re XpertWeb Studio 👋</h4>
          <h2 className="mt-4 text-[48px] font-normal leading-[47px]">
            Web design & <br /> branding for growing <br /> businesses.
          </h2>
          <div className="mt-8 flex gap-5">
            <ViewWorkButton label="See Our Work" />
            <MeetTeamLink />
          </div>
        </div>

        <div className="absolute bottom-[10px] right-[10px]">
          <BannerImageTab />
        </div>
      </div>
    </div>
  )
}

export default Banner