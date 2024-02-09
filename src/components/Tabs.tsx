import React from 'react';
import { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

let tabs: Tab[] = [
  { id: 'Abstract', label: 'Abstract' },
  { id: 'Stipple', label: 'Stipple' },
  { id: '3DICONS', label: '3DICONS' },
  { id: 'Dodles', label: 'Dodles' },
  { id: 'Icons8', label: 'Icons8' },
];
interface Tab {
  id: string;
  label: string;
}
export default function Tabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  let [content, setContent] = useState<ReactNode | null>(null);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab.id);

    // Set content based on the selected tab
    switch (tab.id) {
      case 'Abstract':
        setContent(<img src="/abstract.png" alt="me" />);
        break;
      case 'Stipple':
        setContent(<img src="/stipple.png" alt="me" />);
        break;
      case '3DICONS':
        setContent(<img src="/3dicons.png" alt="me" />);
        break;
      case 'Dodles':
        setContent(<img src="/dodles.png" alt="me" />);
        break;
      case 'Icons8':
        setContent(<img src="/icons8.png" alt="me" />);
        break;

      default:
        setContent('');
        break;
    }
  };
  useEffect(() => {
    const defaultTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];
    handleTabClick(defaultTab);
  }, [activeTab]);

  return (
    <section className="conatiner py-4 relative bg-[#f2f2f2] border-b-2 border-black">
      <div className=" mx-auto text-center px-20 py-6  sm:py-12 ">
        <h1 className="text-2xl font-extrabold sm:text-5xl">
          Free Illustration
          <strong className="font-extrabold text-[#a79bf2] sm:block"> For Your Next Project </strong>
        </h1>

        <p className="mt-4 sm:text-xl/relaxed text-xs">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>

        <div className=" my-4 z-20 relative group items-start justify-center md:justify-start flex flex-row">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={`${activeTab === tab.id ? '' : 'hover:text-black'} relative bg-[#D9D9D9] md:w-24 w-20  z-10 px-3 py-1.5 md:text-sm text-xs font-medium   transition `}
              style={{
                color: 'black',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {activeTab === tab.id && <motion.span layoutId="bubble" className="absolute inset-0 z-30 opacity-20  bg-[#3D3D3D]  mix-blend-difference" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />}
              {tab.label}
            </button>
          ))}
          <span className="absolute bottom-0 z-1  left-1 w-0 md:w-[480px] h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#3D3D3D] "></span>
        </div>

        <div className="mt-5 my-2 flex justify-center py-2 ">{content}</div>
      </div>
    </section>
  );
}
