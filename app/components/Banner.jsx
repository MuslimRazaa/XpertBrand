import React from 'react'
import ViewWorkButton from './header/ViewWorkButton'
import MeetTeamLink from './header/MeetTeamLink'
import BannerImageTab from './header/BannerImageTab'

function Banner() {
  return (
    <div>
        <div className="banner-main-div">
            <div className="banner-content">
                <h4>Hello, we’re XpertWeb Studio 👋</h4>
                <h2>Web design & <br></br> branding for growing <br></br>businesses.</h2>
                <div className="banner-buttons">
                    <ViewWorkButton label='See Our Work'/>
                    <MeetTeamLink />
                </div>
            </div>

            <div className="hover-tab-main">
              <BannerImageTab />
            </div>
        </div>
    </div>
  )
}

export default Banner