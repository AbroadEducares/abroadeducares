import React from "react";
import { FaMoneyBillWave,FaFileAlt,FaGraduationCap   } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      title: "Title of section 1",
      date: "Jan 14",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde.",
      icon: "📷",
    },
    {
      id: 2,
      title: "Title of section 2",
      date: "Jan 18",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde.",
      icon: "🎬",
    },
    {
      id: 3,
      title: "Title of section 3",
      date: "Jan 24",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus.",
      icon: "📷",
    },
    {
      id: 4,
      title: "Title of section 4",
      date: "Feb 14",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde.",
      icon: "📍",
    },
  ];

  return (
 <>
      <div className="text-center">
        <h4 className="text-white uppercase font-regular text-md"> Forex Services</h4>

        <h3 className="text-[2.2rem] text-white lg:text-[2.6rem] font-light">
        Reliable and efficient solutions for
        </h3>
        <h3 className="font-black text-white lg:leading-none text-[2rem] lg:text-[2.6rem]">
        all your currency exchange needs
        </h3>
      </div>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent w-[90%] md:w-[90%] xl:w-[85%] mx-auto mt-10">
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active ">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-700 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <FaMoneyBillWave />
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 border-[0.1px] border-gray-700  hover:border-blue-700 hover:text-white text-blue-700 transition-all duration-300">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-xl text-blue-700 ">
              Student Fees
              </div>
            </div>
            <p className="text-sm mb-5 text-white">
            Simplify the process of paying international tuition fees. Our service ensures fast, reliable transfers with minimal fees, helping students focus on their education without financial worries.
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-700 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <FaFileAlt />
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 border-[0.1px] border-gray-700  hover:border-blue-700 hover:text-white text-blue-700 transition-all duration-300">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-xl text-blue-700 ">
              GIC (Guaranteed Investment Certificate)
              </div>
            </div>
            <p className="text-sm mb-5 text-white">
            Providing GIC services to help international students meet financial requirements for visas. We offer safe, trusted investment options with guaranteed returns for future security.
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-700 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <BsBank2 />
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 border-[0.1px] border-gray-700  hover:border-blue-700 hover:text-white text-blue-700 transition-all duration-300">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-xl text-blue-700 ">
              Block Account
              </div>
            </div>
            <p className="text-sm mb-5 text-white">
            Specializing in setting up block accounts for students moving to specific countries. We ensure all financial prerequisites for visa applications are met in a secure and timely manner.
            </p>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-blue-700 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
          <FaGraduationCap />
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 border-[0.1px] border-gray-700  hover:border-blue-700 hover:text-white text-blue-700 transition-all duration-300">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-xl text-blue-700 ">
              Funding by Parent Overseas
              </div>
            </div>
            <p className="text-sm mb-5 text-white">
            Easily manage and transfer funds for students studying abroad with our secure, streamlined services. We ensure quick, hassle-free transfers so parents can support their children's education without the complexities of international banking.
            </p>
          </div>
        </div>

      
      </div>
</>
  );
};

export default Timeline;
