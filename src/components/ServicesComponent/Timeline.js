import React from "react";

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
    <section className="bg-gray-800 py-[8rem]">

<div className="text-center">
            <h4 className="text-white uppercase font-regular text-md">
            Services
            </h4>

            <h3 className="text-[2.2rem] text-white lg:text-[2.6rem] font-light">
            Comprehensive solutions for
             
            </h3>
            <h3 className="font-black text-white lg:leading-none text-[2rem] lg:text-[2.6rem]">
            your financial and academic needs
              </h3>
          </div>
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent w-[90%] md:w-[90%] xl:w-[85%] mx-auto mt-10">
        
  
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active ">
      
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            
        </div>
      
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  p-4 border-[0.1px] border-gray-700  hover:border-blue-700 hover:text-white text-blue-700 transition-all duration-300">
            <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-xl text-blue-700 ">Forex Services</div>
            </div>
            <p className="text-sm mb-5 text-white">
            Offering seamless and competitive foreign exchange solutions for all your international financial needs. Our experts ensure secure, transparent, and efficient currency exchanges for students and professionals alike.
        </p>
        </div>
    </div>
    

    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
     
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
           
        </div>
     
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">Order Shipped</div>
                <time className=" font-medium text-indigo-500">09/06/2023</time>
            </div>
            <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
        </div>
    </div>
    
    
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
           
        </div>
        
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">In Transit</div>
                <time className=" font-medium text-indigo-500">10/06/2023</time>
            </div>
            <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
        </div>
    </div>
    
  
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
           
        </div>
      
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">Out of Delivery</div>
                <time className=" font-medium text-indigo-500">12/06/2023</time>
            </div>
            <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
        </div>
    </div>
    

    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
            </svg>
        </div>
      
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-slate-900">Delivered</div>
                <time className=" font-medium text-amber-500">Exp. 12/08/2023</time>
            </div>
            <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</div>
        </div>
    </div>

</div>
</section>
  );
};

export default Timeline;
