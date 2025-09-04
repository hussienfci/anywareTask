"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse, 
  faCalendarDays, 
  faBook, 
  faGraduationCap, 
  faArrowTrendUp, 
  faBullhorn,
  faBars,
  faXmark,
  faChevronLeft,
  faUser,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { icon: faHouse, label: 'Dashboard' },
    { icon: faCalendarDays, label: 'Schedule' },
    { icon: faBook, label: 'Courses' },
    { icon: faGraduationCap, label: 'Gradebook' },
    { icon: faArrowTrendUp, label: 'Performance' },
    { icon: faBullhorn, label: 'Announcement' }
  ];

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className={`fixed top-4 z-50 md:hidden bg-blue-600 text-white p-2 rounded-md ${isOpen ? 'left-56' : 'left-4'} transition-all duration-300`}
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </button>

      {/* Overlay for mobile */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed md:relative top-0 left-0 lg:h-185 md:h-163 h-full bg-gradient-to-b from-[#154c79] to-[#2596be]  text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 z-40 w-64`}>
        <div className="p-5  flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold">Coligo</h1>
         
          </div>
        </div>
        
        <nav className="mt-15">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index} className="px-5 py-2">
                <button
                  onClick={() => setActiveItem(item.label)}
                  className={`flex items-center w-full p-3 rounded-lg transition-colors ${activeItem === item.label ? 'bg-white  text-blue-400' : 'text-blue-200 hover:bg-blue-700'}`}
                >
                  <FontAwesomeIcon icon={item.icon} className="w-5 h-5 mr-3" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 w-full p-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-600  flex items-center justify-center">
            <FontAwesomeIcon icon={faRightFromBracket} />
            </div>
            <a href="/Home">
                <div className="ml-3">
                <p className="text-sm font-medium">Log-out</p>
                </div>
            </a>
          </div>
        </div>
      </div>

      {/* Collapsed sidebar for desktop when closed */}
      {/* {!isOpen && !isMobile && (
        <div className="relative h-full bg-blue-800 text-white w-16 flex flex-col items-center py-4 z-30">
          <button onClick={() => setIsOpen(true)} className="mb-6 text-blue-300 hover:text-white">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <nav className="flex-1">
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <li key={index} className="flex justify-center">
                  <button
                    onClick={() => setActiveItem(item.label)}
                    className={`p-3 rounded-lg transition-colors ${activeItem === item.label ? 'bg-blue-900 text-white' : 'text-blue-200 hover:bg-blue-700'}`}
                    title={item.label}
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <FontAwesomeIcon icon={faRightFromBracket} />
            </div>
            </div>
        </div>
      )} */}
    </>
  );
};

export default SideNavbar;