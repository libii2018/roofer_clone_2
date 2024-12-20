// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 w-full h-fit border-b border-gray-200 dark:border-gray-600 lg:py-0 py-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://framerusercontent.com/images/ErSu0lDVH73VmxPaHDdCKNhteA.svg"
              className="h-12"
              alt="Flowbite Logo"
            />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button className="lg:flex hidden bg-[#e1a356] p-[14px] group text-white text-[16px] font-bold rounded-md shadow-[0_4px_0_rgba(0,0,0,0.1)] hover:bg-white hover:text-[#e1a356]">
              <div className="flex flex-row gap-3">
                <div className="w-[24px] h-[24px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="#fff"
                    className="hover:group-hover:text-[#e1a356]"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <p>Book A Free Consultation</p>
              </div>
            </button>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="cursor-pointer border-t-2 hover:border-[#e1a356] hover:bg-[#f4f4eb]">
                <Link
                  href="/"
                  className="block py-8 px-[22px] text-[14px] font-semibold text-[#34342b] rounded md:bg-transparent"
                >
                  HOME
                </Link>
              </li>
              <li className="cursor-pointer border-t-2 hover:border-[#e1a356] hover:bg-[#f4f4eb]">
                <Link
                  href="/about"
                  className="py-8 px-[22px] block w-full h-full text-[14px] font-semibold text-[#34342b] rounded"
                >
                  ABOUT
                </Link>
              </li>
              <li className="cursor-pointer border-t-2 hover:border-[#e1a356] hover:bg-[#f4f4eb]">
                <Link
                  href="/services"
                  className="py-8 px-[22px] block w-full h-full text-[14px] font-semibold text-[#34342b] rounded"
                >
                  SERVICES
                </Link>
              </li>
              <li className="cursor-pointer border-t-2 hover:border-[#e1a356] hover:bg-[#f4f4eb]">
                <Link
                  href="/appointment"
                  className="py-8 px-[22px] block w-full h-full text-[14px] font-semibold text-[#34342b] rounded"
                >
                  APPOINTMENT
                </Link>
              </li>
              <li className="cursor-pointer border-t-2 hover:border-[#e1a356] hover:bg-[#f4f4eb]">
                <Link
                  href="/contact"
                  className="py-8 px-[22px] block w-full h-full text-[14px] font-semibold text-[#34342b] rounded"
                >
                  CONTACT
                </Link>
              </li>
              <li className="cursor-pointer border-t-2 hover:border-[#e1a356] hover:bg-[#f4f4eb]">
                <Link
                  href="/blog"
                  className="py-8 px-[22px] block w-full h-full text-[14px] font-semibold text-[#34342b] rounded"
                >
                  BLOG
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="relative flex items-center justify-center lg:h-[125vh] bg-cover bg-center overflow-hidden bg-gradient-59 h-auto lg:py-0 py-8">
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <div className="h-[1185px] absolute lg:right-[-974px] right-[-294px] top-[-60px] w-[160%] aspect-[1.7822784810126582/1]">
          <div className="absolute inset-0">
            <img
              src="https://framerusercontent.com/images/jtCsMyNN1Bz507p4JRtk26iOSA.png"
              alt=""
              className="w-full h-full object-center object-contain"
            />
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-white lg:w-[1320px] lg:text-left text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-[110px] font-bold mb-4 md:leading-[110px]">
              Roofing Service in West London.
            </h1>
            <p className="text-lg md:text-[22px] mb-6">
              From handling insurance communications to coordinating with
              trusted and vetted contractors are taken care of.
            </p>
            <div className="flex lg:flex-row flex-col gap-6 lg:items-start items-center  space-x-4">
              <button className="bg-[#e1a356] px-[30] py-[26px] text-white text-[18px] font-bold rounded-md shadow-[0_4px_0_rgba(0,0,0,0.1)] hover:bg-white hover:text-[#e1a356]">
                <div className="flex flex-row gap-3">
                  <div className="w-[24px] h-[24px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#fff"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <p>Book A Free Consultation</p>
                </div>
              </button>
              <button className="px-[30] py-[26px] bg-transparent border-2 border-white text-[18px] font-bold text-white hover:bg-white hover:text-black rounded-lg">
                Explore Our Services
              </button>
            </div>
            <div className="flex items-center space-x-4 px-6 py-4 rounded-lg max-w-fit mt-8 w-full">
              {/* Section des avatars */}
              <div className="flex -space-x-4">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="User 1"
                  className="w-12 h-12 object-cover rounded-full border-4 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt="User 2"
                  className="w-12 h-12 object-cover rounded-full border-4 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/3.jpg"
                  alt="User 3"
                  className="w-12 h-12 object-cover rounded-full border-4 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/4.jpg"
                  alt="User 4"
                  className="w-12 h-12 object-cover rounded-full border-4 border-white"
                />
              </div>

              {/* Section du texte */}
              <div>
                <p className="text-3xl font-bold text-white">
                  1550<span className="text-white">+</span>
                </p>
                <p className="text-lg text-white">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-[#f4f4eb] flex items-start justify-center py-16 lg:pt-[140px] lg:pb-[99px]">
        <div className="max-w-[1320px] flex flex-col lg:flex-row items-start gap-28 relative">
          {/* Section de l'image */}
          <div
            className="lg:w-[45%] w-full lg:h-[584px] h-[297px] aspect-[1.0171232876712328/1] relative overflow-hidden rounded-[16px]"
            style={{
              transform: "perspective(1200px)",
            }}
          >
            <div className="absolute inset-0">
              <img
                src="https://framerusercontent.com/images/X35cosIbFTbHj0jVoH8ZChcxp1Y.jpg"
                alt="Roofing Service"
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          {/* Section du contenu */}
          <div className="lg:w-[49%] flex flex-col items-start justify-start w-full lg:px-0 text-center lg:text-left">
            <h2 className="text-4xl md:text-[64px] md:leading-[70px] leading-[130%] font-bold text-[#434338] mb-6">
              Reasons to choose <br /> our roofing services.
            </h2>
            <p className="text-[#434338] font-normal leading-[170%] text-lg lg:text-[18px]  mb-9">
              We have been installing boilers and heating systems for over 10
              years and we are proud to say we are experts in this field. We
              have a team of skilled & qualified members.
            </p>
            <ul className="space-y-4 text-left w-full lg:mx-0 ml-1 lg:pr-0 pr-6">
              <li className="flex items-start">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[18px] leading-[170%]">
                    <span className="text-[#434338] font-bold">
                      Affordable Prices:{" "}
                    </span>
                    From free inspections, claim assistance, Roof replacements
                    and home upgrades.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[18px] leading-[170%]">
                    <span className="text-[#434338] font-bold">
                      Expert Engineers:{" "}
                    </span>
                    Our experienced, knowledgeable team is here to guide you
                    through every step of the process.
                  </p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[18px] leading-[170%]">
                    <span className="text-[#434338] font-bold">
                      Quality Materials:{" "}
                    </span>
                    We understand the importance of protecting your family and
                    investment, and we treat with care.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-[#f4f4eb] lg:pt-4 lg:pb-[108px]">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mx-auto px-5 max-w-[1320px] ">
          <div className="md:w-[42%] flex flex-col lg:items-start items-center justify-start lg:text-left text-center gap-[40px]">
            <div className="flex flex-col items-start justify-start gap-6">
              <div className="flex flex-col">
                <h1 className="text-4xl md:text-[64px] md:leading-[120%] font-bold text-[#434338]">
                  Professional and quality roofing services.
                </h1>
              </div>
              <div className="flex flex-col">
                <p className="text-[#434338] font-normal lg:text-[18px] leading-[170%]">
                  Our company provides all types of roof repairs, both
                  residential and commercial, regardless of the damage level. We
                  also offer partial tile replacement.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <button className="bg-[#e1a356] px-[30] py-[26px] text-[#434338] text-[18px] font-bold rounded-md shadow-[0_4px_0_rgba(0,0,0,0.1)]">
                View All Services
              </button>
            </div>
          </div>

          <div className="md:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col lg:items-start items-center p-4 bg-[#f4f4eb] gap-6">
              <div className="flex flex-col items-start justify-start w-[32px] h-[32px]">
                <img
                  src="https://framerusercontent.com/images/3Whfnk9xeYHuThItMxHsLozr8.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3 lg:w-[241px]">
                <h3 className="text-xl lg:text-[24px] lg:font-bold text-center lg:text-left font-semibold text-[#434338] leading-[130%]">
                  Free Inspection
                </h3>
                <p className="text-[#434338] text-base text-center lg:text-left ">
                  Our team is experienced in handling everything repairs.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:items-start items-center p-4 bg-[#f4f4eb] gap-6">
              <div className="flex flex-col items-start justify-start w-[32px] h-[32px]">
                <img
                  src="https://framerusercontent.com/images/9sseofjvdoSNGw1OrsPwt7bA0U.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3 lg:w-[241px]">
                <h3 className="text-xl lg:text-[24px] lg:font-bold text-center lg:text-left font-semibold text-[#434338] leading-[130%]">
                  Commercial Roofing
                </h3>
                <p className="text-[#434338] text-base text-center lg:text-left ">
                  Our team is experienced in handling everything repairs.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:items-start items-center p-4 bg-[#f4f4eb] gap-6">
              <div className="flex flex-col items-start justify-start w-[32px] h-[32px]">
                <img
                  src="https://framerusercontent.com/images/9XCWyPMau9AXyyigKsiuVZ8HPHU.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3 lg:w-[241px]">
                <h3 className="text-xl lg:text-[24px] lg:font-bold text-center lg:text-left font-semibold text-[#434338] leading-[130%]">
                  Roof Replacement
                </h3>
                <p className="text-[#434338] text-base text-center lg:text-left ">
                  Our team is experienced in handling everything repairs.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:items-start items-center p-4 bg-[#f4f4eb] gap-6">
              <div className="flex flex-col items-start justify-start w-[32px] h-[32px]">
                <img
                  src="https://framerusercontent.com/images/Ud21hKV9z8wiv761kEzRt0eRJt4.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3 lg:w-[241px]">
                <h3 className="text-xl lg:text-[24px] lg:font-bold text-center lg:text-left font-semibold text-[#34342b]">
                  Solar Panels
                </h3>
                <p className="text-[#34342b] text-base text-center lg:text-left">
                  Our team is experienced in handling everything repairs.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:items-start items-center p-4 bg-[#f4f4eb] gap-6">
              <div className="flex flex-col items-start justify-start w-[32px] h-[32px]">
                <img
                  src="https://framerusercontent.com/images/VFZFNgIwxUJUbwpWBZ5Su9gY.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3 lg:w-[241px]">
                <h3 className="text-xl lg:text-[24px] lg:font-bold text-center lg:text-left font-semibold text-[#434338] leading-[130%]">
                  Damage Repairs
                </h3>
                <p className="text-[#434338] text-base text-center lg:text-left ">
                  Our team is experienced in handling everything repairs.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:items-start items-center p-4 bg-[#f4f4eb] gap-6">
              <div className="flex flex-col items-start justify-start w-[32px] h-[32px]">
                <img
                  src="https://framerusercontent.com/images/VFZFNgIwxUJUbwpWBZ5Su9gY.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-3 lg:w-[241px]">
                <h3 className="text-xl lg:text-[24px] lg:font-bold text-center lg:text-left font-semibold text-[#434338] leading-[130%]">
                  Roof Renovation
                </h3>
                <p className="text-[#434338] text-base text-center lg:text-left ">
                  Our team is experienced in handling everything repairs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col bg-white lg:py-[130px]">
        <div className="flex flex-col md:flex-row items-start justify-between md:gap-16 gap-10 mx-auto px-5 max-w-[1320px] ">
          <div className="flex-none lg:h-[719px] h-fit overflow-visible relative md:w-[49%] perspective-[1200px]">
            <div className="hidden lg:flex relative w-full h-[719px] mx-auto">
              <div className="absolute left-[37px] top-0 lg:w-[493px] aspect-[1.0138/1] rounded-[8px] h-[291px] overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/F8yQnLxSgV6sGiAZYpzI5Ig8yk.png"
                  alt="Roofing work"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-[114px] right-0 w-[294px] h-[290px] aspect-[1.013793103448276 / 1] rounded-lg overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/FZtkK4swt3f1cwHBUp9PKWoIw.jpg"
                  alt="Builder working"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-[310px] h-[404px] aspect-[.7673267326732673 / 1] rounded-lg overflow-hidden">
                <img
                  src="https://framerusercontent.com/images/YgaKaFYWYN4WRjhYhtOpYEgZSnk.jpg"
                  alt="House roofing"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute lg:h-[180px] lg:w-[196px] top-[222px] left-[258px] w-[213px] h-[213px] aspect-[1.088/1] bg-[#5f5f57] text-white text-center rounded-2xl border-4 border-[#e1a356] z-10 flex flex-col items-center justify-center"
                style={{
                  transform:
                    "perspective(1200px) translateX(0px) translateY(0px) scale(1.37719) rotate(0deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)",
                }}
              >
                <h2 className="text-5xl md:text-[80px] text-[#434338] font-bold leading-none">
                  25
                </h2>
                <p className="text-sm md:text-[18px] text-[#434338] w-[108px] font-semibold mt-2 leading-[25px]">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-[46%] flex flex-col lg:items-start items-center lg:justify-start justify-center">
            {/* Titre principal */}
            <h1 className="text-4xl text-[#34342b] lg:text-left text-center md:text-[64px] md:leading-[120%] font-bold mb-6">
              Taking care of the <br className="md:hidden" /> roof of your
              house.
            </h1>

            {/* Paragraphe d'introduction */}
            <p className="text-[#434338] text-[18px] font-normal lg:text-left text-center text-lg mb-12 leading-[170%]">
              Your building is your most important asset. Make sure it's
              protected. Storm damage can be latent, causing problems that
              plague you for years to come and we may have a solution to save
              you.
            </p>

            {/* Liste des éléments */}
            <div className="flex flex-col items-start gap-6 h-fit justify-start overflow-visible p-0 relative w-full">
              <div
                className="flex flex-row items-start gap-6 h-fit justify-start overflow-visible p-0 relative w-full"
                style={{
                  transform: "perspective(1200px)",
                }}
              >
                <div className="flex flex-row gap-[10px] justify-center items-center bg-[#5f5f57] size-[70px] p-0 rounded-[100%] border-[3px] border-[#e1a356]">
                  <p className="text-[40px] text-[#434338] font-bold leading-[115%] p-0">
                    1
                  </p>
                </div>
                <div className="flex flex-col gap-3 overflow-visible p-0 flex-grow flex-shrink-0 basis-0">
                  <div className="flex flex-col justify-center flex-grow">
                    <h4 className="text-2xl text-[#434338] font-bold leading-[130%]">
                      Solutions
                    </h4>
                  </div>
                  <div className="flex flex-col justify-center flex-grow">
                    <p className="text-base text-[#434338] font-normal leading-[170%]">
                      We’ll ensure that you focus on the opportunities that
                      maximize competitive advantage.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-row items-start gap-6 h-fit justify-start overflow-visible p-0 relative w-full"
                style={{
                  transform: "perspective(1200px)",
                }}
              >
                <div className="flex flex-row gap-[10px] justify-center items-center bg-[#5f5f57] size-[70px] p-0 rounded-[100%] border-[3px] border-[#e1a356]">
                  <p className="text-[40px] text-[#434338] font-bold leading-[115%] p-0">
                    2
                  </p>
                </div>
                <div className="flex flex-col gap-3 overflow-visible p-0 flex-grow flex-shrink-0 basis-0">
                  <div className="flex flex-col justify-center flex-grow">
                    <h4 className="text-2xl text-[#434338] font-bold leading-[130%]">
                      Commercial Services
                    </h4>
                  </div>
                  <div className="flex flex-col justify-center flex-grow">
                    <p className="text-base text-[#434338] font-normal leading-[170%]">
                      We’ll ensure that you focus on the opportunities that
                      maximize competitive advantage.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-row items-start gap-6 h-fit justify-start overflow-visible p-0 relative w-full"
                style={{
                  transform: "perspective(1200px)",
                }}
              >
                <div className="flex flex-row gap-[10px] justify-center items-center bg-[#5f5f57] size-[70px] p-0 rounded-[100%] border-[3px] border-[#e1a356]">
                  <p className="text-[40px] text-[#434338] font-bold leading-[115%] p-0">
                    3
                  </p>
                </div>
                <div className="flex flex-col gap-3 overflow-visible p-0 flex-grow flex-shrink-0 basis-0">
                  <div className="flex flex-col justify-center flex-grow">
                    <h4 className="text-2xl text-[#434338] font-bold leading-[130%]">
                      Supervision
                    </h4>
                  </div>
                  <div className="flex flex-col justify-center flex-grow">
                    <p className="text-base text-[#434338] font-normal leading-[170%]">
                      We’ll ensure that you focus on the opportunities that
                      maximize competitive advantage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col flex-nowrap items-center justify-center gap-5 overflow-hidden h-min lg:py-[122px] lg:pb-[532px] px-5 pb-[220px] pt-[30px] relative">
        <div className="absolute inset-0">
          <img
            src="https://framerusercontent.com/images/tlFFcOfsDQeOVLdn0rGQStmqCsk.png"
            alt=""
            className="block w-full h-full rounded-inherit object-cover object-center"
          />
        </div>
        <div className="flex flex-none flex-col flex-nowrap items-center justify-center gap-2 h-min max-w-[1320px] w-full overflow-visible lg:px-5 relative">
          <div className="flex flex-none flex-col flex-nowrap items-center justify-center gap-2 h-min w-full overflow-visible lg:px-5 relative">
            <div className="flex flex-none lg:flex-row flex-col flex-nowrap items-end justify-between h-min w-full overflow-visible p-0 relative">
              <div className="flex flex-col justify-between lg:w-[56%] w-full lg:mb-0 mb-10">
                <h2 className="text-4xl md:text-[64px] lg:text-left text-center md:leading-[70px] font-bold text-[#434338] mb-6">
                  Are you ready to get your roofing service?
                </h2>
                <p className="text-[#434338] text-lg lg:text-[18px] lg:text-left text-center leading-[30px]">
                  Our company provides all types of roof repairs, both
                  residential and commercial, regardless of the damage level. We
                  also offer partial tile replacement.
                </p>
              </div>
              <div className="flex flex-col lg:items-end mx-auto lg:mx-0 justify-end">
                <button className="bg-[#606057] px-[30] py-[26px] text-[#434338] text-[18px] font-bold rounded-md shadow-[0_4px_0_rgba(0,0,0,0.1)]">
                  <div className="flex flex-row gap-3">
                    <div className="w-[24px] h-[24px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="#fff"
                        className="hover:group-hover:text-[#e1a356]"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <p>Book A Free Consultation</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[-182px] right-[-433px] lg:bottom-[-605px] bottom-[-350px] aspect-[1.97] flex-none">
          <img
            src="https://framerusercontent.com/images/P7264pyjJIDEL91YOP40xlA3fro.png"
            alt=""
            className="block w-full h-full rounded-inherit object-cover object-center"
          />
        </div>
      </section>
      <section className="bg-[#f4f4eb] lg:pt-[130px] lg:pb-[140px] py-20">
        <div className="flex flex-col items-center justify-center max-w-[1320px] gap-[70px] mx-auto lg:px-0 px-5">
          <div className="flex lg:flex-row flex-col lg:items-end items-center lg:justify-between justify-center w-full">
            {/* En-tête de la section */}
            <div className="lg:w-[59%] w-full gap-4">
              <h2 className="text-4xl md:text-[64px] md:leading-[120%] lg:text-left text-center font-bold text-[#34342b] mb-6">
                See what our clients say
              </h2>
              <p className="text-[#434338] lg:text-lg text-center leading-[170%] lg:text-left text-[18px]">
                We proudly employ the Industries most dedicated individuals, who
                are all professionally trained to Roofing service standards for
                the customers.
              </p>
            </div>

            {/* Évaluation et statistiques */}
            <div className="flex lg:w-[28%] w-full flex-row lg:justify-end lg:items-end justify-center items-center mb-8">
              <div className="flex flex-col mt-auto">
                <div className="h-[20px] w-[140px]">
                  <div className="flex text-yellow-500 text-8xl lg:text-lg lg:ml-3">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
                <div className="flex flex-col shrink-0 h-auto w-auto">
                  <p className="text-[104px] font-bold leading-[105%] text-[#434338]">
                    597
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-start mt-auto flex-grow flex-shrink-0 basis-0 h-auto">
                <p className="text-[#34342b] text-base font-semibold leading-[170%]">
                  customers have given ratings for support
                </p>
              </div>
            </div>
          </div>

          {/* Conteneur des témoignages */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Témoignage 1 */}
            <div className="bg-white flex flex-col items-start justify-start rounded-2xl shadow-lg p-10 flex-1 lg:w-[50%] gap-[30px]">
              <div className="flex items-center lg:flex-row flex-col justify-between w-full">
                <div className="flex flex-row items-center lg:justify-between justify-center gap-4">
                  <img
                    src="https://framerusercontent.com/images/cDioZKgHfk2VzE66TBcoAGajTQ.png"
                    alt="Chieko Chute"
                    className="w-[70px] h-[70px] rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-[#434338] leading-[170%]">
                      Chieko Chute
                    </h4>
                    <p className="text-[#434338] font-normal text-base leading-[170%]">
                      Managing Director
                    </p>
                  </div>
                </div>

                <div className="flex flex-col h-[40px] w-[54px] relative">
                  <div className="absolute inset-0">
                    <img
                      src="https://framerusercontent.com/images/muAfHkIgMElCoKVd440z4fs6BGI.svg"
                      alt=""
                      className="block w-full h-full rounded-inherit object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[#434338] text-[18px] font-normal leading-[170%]">
                  I have worked with Roofing for years and they have
                  consistently done great work not only for me, but now for many
                  of my clients. I would not hesitate to recommend them.
                </p>
              </div>
            </div>

            {/* Témoignage 2 */}
            <div className="bg-white flex flex-col items-start justify-start rounded-2xl shadow-lg p-10 flex-1 lg:w-[50%] gap-[30px]">
              <div className="flex items-center lg:flex-row flex-col justify-between w-full">
                <div className="flex flex-row items-center lg:justify-between justify-center gap-4">
                  <img
                    src="https://framerusercontent.com/images/UsazcuY32OaGDvo4P5cEUW2EhZM.svg"
                    alt="Chieko Chute"
                    className="w-[70px] h-[70px] rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-[#434338] leading-[170%]">
                      Cyndy Lillibridge
                    </h4>
                    <p className="text-[#434338] font-normal text-base leading-[170%]">
                      Leader Designer
                    </p>
                  </div>
                </div>

                <div className="flex flex-col h-[40px] w-[54px] relative">
                  <div className="absolute inset-0">
                    <img
                      src="https://framerusercontent.com/images/muAfHkIgMElCoKVd440z4fs6BGI.svg"
                      alt=""
                      className="block w-full h-full rounded-inherit object-cover object-center"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[#434338] text-[18px] font-normal leading-[170%]">
                  I have worked with Roofing for years and they have
                  consistently done great work not only for me, but now for many
                  of my clients. I would not hesitate to recommend them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:pt-[84px] lg:pb-[111px] bg-white">
        <div className="flex flex-col items-center justify-center max-w-[1320px] px-5 mx-auto gap-[72px]">
          {/* Titre et texte au centre */}
          <div className="text-center flex flex-col gap-6 lg:p-0 p-5">
            <div>
              <h1 className="text-4xl font-bold text-[#34342b] mb-4 md:text-[64px] leading-[120%]">
                Our latest news
              </h1>
            </div>
            <div className="lg:w-[60%] w-full h-auto flex mx-auto">
              <p className="text-[18px] text-[#434338] leading-[170%]">
                Our customers are at the heart of our company, and with over 20
                years of experience in the industry we understand every articles
                in details.
              </p>
            </div>
          </div>

          <div
            className="flex lg:flex-row flex-col justify-center gap-[40px]"
            style={{
              transform: "perspective(1200px)",
            }}
          >
            {/* Cartes alignées horizontalement */}
            <div className="flex flex-row justify-center  w-full lg:w-[31%] gap-8">
              <div className="rounded-lg overflow-hidden">
                <div className="flex flex-col w-full">
                  <img
                    src="https://framerusercontent.com/images/9mSDjPF4BavLLgYkTAMXqvgvfc.png"
                    alt=""
                    className="w-full h-[240px] rounded-lg object-cover mb-4"
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <div>
                    <span className="text-base text-[#434338] font-bold text-[16px] leading-[170%]">
                      Finance
                    </span>
                  </div>
                  <div className="flex flex-col gap-[14px]">
                    <div>
                      <h3 className="font-semibold text-[24px] leading-[130%] text-[#434338]">
                        10 tips for managing your money in the new year
                      </h3>
                    </div>
                    <div>
                      <p className="text-base text-[#434338] font-semibold leading-[170%]">
                        August 28, 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center  w-full lg:w-[31%] gap-8">
              <div className="rounded-lg overflow-hidden">
                <div className="flex flex-col w-full">
                  <img
                    src="https://framerusercontent.com/images/eVWl1q9sWNQZc3f1xtIK1SvC9k.png"
                    alt=""
                    className="w-full h-[240px] rounded-lg object-cover mb-4"
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <div>
                    <span className="text-base text-[#434338] font-bold text-[16px] leading-[170%]">
                      Budget
                    </span>
                  </div>
                  <div className="flex flex-col gap-[14px]">
                    <div>
                      <h3 className="font-semibold text-[24px] leading-[130%] text-[#434338]">
                        The benefits of creating a budget and how to get started
                      </h3>
                    </div>
                    <div>
                      <p className="text-base text-[#434338] font-semibold leading-[170%]">
                        August 16, 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center  w-full lg:w-[31%] gap-8">
              <div className="rounded-lg overflow-hidden">
                <div className="flex flex-col w-full">
                  <img
                    src="https://framerusercontent.com/images/NYusHjAPpAzKKlQjM9k2lAe55mY.png"
                    alt=""
                    className="w-full h-[240px] rounded-lg object-cover mb-4"
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <div>
                    <span className="text-base text-[#434338] font-bold text-[16px] leading-[170%]">
                      Management
                    </span>
                  </div>
                  <div className="flex flex-col gap-[14px]">
                    <div>
                      <h3 className="font-semibold text-[24px] leading-[130%] text-[#434338]">
                        Why you should consider investing in the stock market
                      </h3>
                    </div>
                    <div>
                      <p className="text-base text-[#434338] font-semibold leading-[170%]">
                        August 3, 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 lg:py-16 py-5">
        <div className="flex flex-col items-center justify-center max-w-[1320px] mx-auto lg:p-0 p-5">
          {/* Titre et texte au centre */}
          <div className="text-center flex flex-col mb-12 gap-6">
            <h1 className="text-4xl font-bold text-[#34342b] mb-4 md:text-[64px]">
              Frequently asked questions.
            </h1>
            <div className="lg:w-[60%] w-full h-auto flex mx-auto">
              <p className="text-[16px] text-[#434338]">
                We offer a wide range of roofing services and products from
                trusted manufacturers. Our professional team provides renovation
                works of all levels.
              </p>
            </div>
          </div>
          {/* <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion> */}
        </div>
      </section>
      <footer className="flex flex-col flex-nowrap items-center justify-center gap-5 overflow-hidden py-[122px] pb-[132px] relative">
        <div className="absolute inset-0">
          <img
            src="https://framerusercontent.com/images/tlFFcOfsDQeOVLdn0rGQStmqCsk.png"
            alt=""
            className="block w-full h-full rounded-inherit object-cover object-center"
          />
        </div>
        <div className="flex flex-none lg:flex-col flex-nowrap items-center justify-center gap-2 h-min lg:max-w-[1320px] w-full overflow-visible px-5 relative">
          <div className="flex flex-none flex-col flex-nowrap items-center justify-center gap-2 h-min w-full overflow-visible px-0 relative">
            <div className="flex flex-none flex-col lg:flex-row flex-nowrap items-center justify-between h-min w-full overflow-visible p-0 relative mb-10">
              <div className="flex flex-col lg:justify-between lg:items-start items-center justify-center w-[216px] mb-10 lg:mb-0">
                <a
                  href="https://flowbite.com/"
                  className="flex lg:items-start items-center h-[90px] lg:w-[216px] w-full space-x-3 rtl:space-x-reverse"
                >
                  <img
                    src="https://framerusercontent.com/images/98yMav9J6nGw6CmCxbeLO1jLNOU.svg"
                    className="h-[90px] w-[216px]"
                    alt="Flowbite Logo"
                  />
                </a>
              </div>
              <div className="flex flex-col lg:w-[58%] w-full h-full lg:items-start lg:justify-start items-center justify-center">
                <p className="text-[#f4f4eb] lg:text-left text-center text-[18px]">
                  Welcome to a place of refinement and clean. This is Roofer, we
                  made for home and office cleaning easy for you.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col lg:items-end lg:justify-end items-center justify-center">
              <div className="py-10 lg:w-[768px] w-full pt-16 border-t-[1px] border-[#fff3]">
                <div className="lg:ml-[40px] ml-0 grid grid-cols-1 items-center md:grid-cols-3  gap-8">
                  {/* Colonne 1 */}
                  <div className="flex flex-col lg:items-start items-center w-full">
                    <h3 className="text-xl text-white text-[13px] opacity-80 font-semibold mb-4">
                      Our Services
                    </h3>
                    <ul className="space-y-3 text-center lg:text-left">
                      <li>
                        <a
                          href="#"
                          className="text-white text-[14px] font-semibold hover:text-gray-900"
                        >
                          Home Cleaning
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-white text-[14px] font-semibold hover:text-gray-900"
                        >
                          Window Cleaning
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-white text-[14px] font-semibold hover:text-gray-900"
                        >
                          Floor Cleaning
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-white text-[14px] font-semibold hover:text-gray-900"
                        >
                          Office Cleaning
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Colonne 2 */}
                  <div className="flex lg:items-start items-center flex-col">
                    <h3 className="text-xl text-white text-[13px] opacity-80 font-semibold mb-4">
                      Quick Links
                    </h3>
                    <ul className="space-y-3 text-center lg:text-left">
                      <li>
                        <a
                          href="#"
                          className="text-white text-[14px] font-semibold hover:text-gray-900"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-white text-[14px] font-semibold hover:text-gray-900"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-white text-[14px] font-semibold hover:text-gray-900"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-white text-[14px] font-semibold hover:text-gray-900"
                        >
                          Appointment
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Colonne 3 */}
                  <div className="flex flex-col">
                    <ul className="space-y-4 flex flex-col lg:items-start items-center text-center lg:text-left">
                      <li>
                        <span className="text-white text-[14px] font-semibold opacity-80">
                          Call us:
                        </span>{" "}
                        <br />
                        <a
                          href="tel:123-456-7890"
                          className="text-white text-[14px] font-semibold hover:text-gray-900"
                        >
                          123-456-7890
                        </a>
                      </li>
                      <li>
                        <span className="text-white text-[14px] font-semibold opacity-80">
                          E-mail:
                        </span>{" "}
                        <br />
                        <a
                          href="mailto:framerbite@gmail.com"
                          className="text-white text-[14px] font-semibold hover:text-gray-900"
                        >
                          framerbite@gmail.com
                        </a>
                      </li>
                      <li>
                        <span className="text-white text-[14px] font-semibold opacity-80">
                          Address:
                        </span>{" "}
                        <br />
                        <p className="text-white text-[14px] font-semibold">
                          Amedee 4401 Waldeck Street, <br />
                          Nashville, TX 76051
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex absolute lg:left-[-412px] transform rotate-[-1deg] lg:bottom-[-92px] h-[546px] w-[1173px] aspect-[2.147810218978102/1] flex-none">
          <img
            src="https://framerusercontent.com/images/qlhIPe0aJp0BkXxx2TdwRpUVo.png"
            alt=""
            className="block w-full h-full rounded-inherit object-cover object-center"
          />
        </div>
      </footer>
    </>
  );
}
