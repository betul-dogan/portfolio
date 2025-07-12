const Hero = () => {
  return (
    <section id="anasayfa"
     className="relative w-full h-screen top-5  flex items-center justify-center overflow-hidden  ">

      {/* Arkaplan daireler */}
      <div className="absolute flex gap-1 sm:gap-7">
        <div className="w-50 h-50 bg-gray-300 shadow-2xl   rounded-full "
         data-aos="zoom-in"
      data-aos-delay="500"
        ></div>
        <div className="w-37 h-37 bg-gray-300 shadow-2xl rounded-full" data-aos="zoom-in"
      data-aos-delay="600"></div>
        <div className="w-28 h-28 bg-gray-300 shadow-2xl  rounded-full" data-aos="zoom-in"
      data-aos-delay="700"></div>
        <div className="w-18 h-18 bg-gray-300 shadow-2xl  rounded-full" data-aos="zoom-in"
      data-aos-delay="800"></div>
        <div className="w-12 h-12 bg-gray-300 shadow-2xl  rounded-full " data-aos="zoom-in"
      data-aos-delay="900"></div>
      </div>

      {/* Hero içeriği */}
      <div className="relative z-10 flex flex-col items-center">
        <img src="robot.png" alt="robot" className="h-80 mb-4" />
        <h1 className="text-4xl font-bold text-[#1f1d1b]"
         data-aos="fade-right"
      data-aos-delay="600"
        >Merhaba ben Betül.
          
        </h1>
        <h3 className="text-3xl text-[#ffa829] font-bold"
         data-aos="fade-left"
      data-aos-delay="600"
        >Frontend Developer</h3>
         {/* CV indir butonu */}
      <a
        href="/betulDogancv.pdf"
        download
        className="bg-amber-500 text-white px-8 py-2 rounded-lg shadow-lg hover:bg-amber-600 transition mt-3"
      >
        CV'mi İndir
      </a>
      </div>

      

    </section>
  );
}

export default Hero;
