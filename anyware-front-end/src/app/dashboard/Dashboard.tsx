import React from 'react'
import SideNavbar from './SideNavbar'
import TopNavbar from './TopNavbar'
import MainContent from './MainContent'


function Dashboard() {
  return (
    <div>
      <div className="flex h-screen bg-[#f1f5f9]" dir="ltr">
        {/* Fixed Sidebar */}
          <SideNavbar/>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <TopNavbar/>
          <span className="flex items-center">
            <span className="h-px flex-1 bg-[#b8cee5]"></span>
          </span>
        <span className="flex items-center">
          <span className="h-px flex-1 bg-[#b8cee5]"></span>
        </span>
          <div className='flex'>
              <MainContent/>
            </div>
         </div>
    </div>
    </div>
  )
}

export default Dashboard
