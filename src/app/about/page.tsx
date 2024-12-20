import Link from "next/link";
import React from "react";

export default function About() {
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
      <header className="flex flex-col items-center overflow-hidden w-full relative lg:py-[30px] lg:pt-[100px] lg:pb-[86px]">
        <div className="flex flex-col-reverse lg:flex-row justify-between h-fit max-w-[1320px] relative w-full lg:px-5 gap-20">
          <div className="flex flex-col items-center justify-center gap-[30px] lg:px-0 px-5 w-full p-0 lg:w-[49%]">
            <div className="flex flex-col items-center justify-center gap-[30px] w-full p-0">
              <div className="flex w-full">
                <h2 className="text-[#34342b] lg:text-left text-center lg:text-[64px] text-[36px] font-bold leading-[115%]">
                  Roofer Story
                </h2>
              </div>
              <div className="flex w-full">
                <p className="text-[#434338] lg:text-left text-center text-[18px] font-semibold leading-[170%]">
                  We are extremely excited to be consecutively awarded 3 years
                  on three bestrated.com as one of the top 3 best rated roofing
                  contractors.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-[20px] w-[97%]">
              <div className="flex w-full">
                <p className="text-[#434338] lg:text-left text-center text-[16px] font-normal leading-[170%]">
                  If you decide to make a claim through your insurance, we can
                  assist to make the process as simple as possible. We can help
                  with the initial valuation of the cost of repair and carry out
                  the repair once approved.
                </p>
              </div>
              <div className="flex w-full">
                <p className="text-[#434338] lg:text-left text-center text-[16px] font-normal leading-[170%]">
                  As a local business that cares about our community, we are
                  dedicated to providing the best possible service and are
                  incredible proud of our craft. If you decide to make a claim
                  through your insurance, we can assist to make the process as
                  simple as possible.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-row items-center justify-center w-[619px] p-0 h-[550px]"
            style={{
              transform: "perspective(1200px)",
            }}
          >
            <div className="absolute right-0 top-0 lg:w-[89%] aspect-[1.06796/1] rounded-[11px]">
              <img
                src="https://framerusercontent.com/images/YgaKaFYWYN4WRjhYhtOpYEgZSnk.jpg"
                alt=""
                className="block w-full h-full object-center object-cover rounded-[11px]"
              />
              <div
                className="absolute lg:left-[-32px] lg:bottom-[-11px] lg:w-[32%] lg:h-[145px] left-[40px] bottom-[24px] lg:right-[288px] w-[24%] h-[129px] aspect-[1.088/1] bg-[#5f5f57] text-white text-center rounded-2xl border-4 border-[#e1a356] z-10 flex flex-col items-center justify-center"
                style={{
                  transform:
                    "perspective(1200px) translateX(0px) translateY(0px) scale(1.37719) rotate(0deg) rotateX(0deg) rotateY(0deg) skewX(0deg) skewY(0deg) translateZ(0px)",
                }}
              >
                <h2 className="text-[61.56px] text-white lg: font-bold leading-[60%]">
                  25
                </h2>
                <p className="text-[15.7px] text-white w-[108px] font-semibold mt-2 leading-[100%]">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="flex flex-col items-center lg:justify-end overflow-hidden w-full lg:h-[560px] relative py-[30px]">
        <div className="lg:flex absolute hidden inset-0">
          <img
            src="https://framerusercontent.com/images/LGEf4uYwDGw2QJvby956AZRhVj0.png"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center h-fit max-w-[1320px] relative w-full px-5 gap-[30px] lg:flex-row z-20">
          <div className="flex flex-col items-start justify-cente px-5 lg:px-0 bg-[#34342b] rounded-[16px] lg:w-[32%] lg:flex-row">
            <div
              className="flex flex-col w-full p-10 h-auto"
              style={{
                transform: "perspective(1200px)",
              }}
            >
              <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start w-full gap-[30px] lg:flex-row">
                <div className="flex items-center justify-center w-[60px] h-[60px] relative">
                  <img
                    src="https://framerusercontent.com/images/osSwqN4kffF25Vj5qd7yMU2I.svg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-center flex-grow flex-shrink-0 basis-0 gap-3">
                  <div className="w-full">
                    <h4 className="text-[24px] lg:text-left text-center text-[#434338] lg:text-white font-bold leading-[130%]">
                      Our Mission
                    </h4>
                  </div>
                  <div className="w-full">
                    <p className="text-[16px] lg:text-left text-center text-[#434338] lg:text-white font-normal leading-[170%]">
                      Roofing mission refers to all the specific goals and
                      objectives that company aims to finish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-cente px-5 lg:px-0 bg-[#34342b]  rounded-[16px] lg:w-[32%] lg:flex-row">
            <div
              className="flex flex-col w-full p-10 h-auto"
              style={{
                transform: "perspective(1200px)",
              }}
            >
              <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start w-full gap-[30px] lg:flex-row">
                <div className="flex items-center justify-center w-[60px] h-[60px]">
                  <img
                    src="https://framerusercontent.com/images/0X9nB8Xzw4LG99kNtDo7GpVYnkw.svg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-center flex-grow flex-shrink-0 basis-0 gap-3">
                  <div className="w-full">
                    <h4 className="text-[24px] lg:text-left text-center text-[#434338] lg:text-white font-bold leading-[130%]">
                      Our Mission
                    </h4>
                  </div>
                  <div className="w-full">
                    <p className="text-[16px] lg:text-left text-center text-[#434338] lg:text-white font-normal leading-[170%]">
                      Roofing mission refers to all the specific goals and
                      objectives that company aims to finish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-cente lg:px-0 px-5 bg-[#34342b] rounded-[16px] lg:w-[32%] lg:flex-row">
            <div
              className="flex flex-col w-full p-10 h-auto"
              style={{
                transform: "perspective(1200px)",
              }}
            >
              <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start w-full gap-[30px] lg:flex-row">
                <div className="flex items-center justify-center w-[64px] h-[64px]">
                  <img
                    src="https://framerusercontent.com/images/iLIZaxOMYeKHYs86v28iJnUxs4.svg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-center flex-grow flex-shrink-0 basis-0 justify-center gap-3">
                  <div className="w-full">
                    <h4 className="text-[24px] lg:text-left text-center text-[#434338] lg:text-white  font-bold leading-[130%]">
                      Trusted Services
                    </h4>
                  </div>
                  <div className="w-full">
                    <p className="text-[16px] lg:text-left text-center text-[#434338] lg:text-white font-normal leading-[170%]">
                      Roofing mission refers to all the specific goals and
                      objectives that company aims to finish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="lg:flex hidden flex-col items-center justify-center bottom-0 p-0 h-[321px] w-[111%] absolute"
          style={{
            background:
              "linear-gradient(0.000002761690112151882deg, #ffffff 22.39583283662796%, rgba(255, 255, 255, 0) 100%)",
          }}
        ></div>
      </section>

      <section className="bg-white flex items-start justify-center py-16 lg:pt-[140px] lg:pb-[99px]">
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
                src="https://framerusercontent.com/images/67rLhx5nPruXxtB4PO8ogK0WE.png"
                alt="Roofing Service"
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          {/* Section du contenu */}
          <div className="lg:w-[51%] flex flex-col items-start justify-start w-full lg:px-0 text-center lg:text-left">
            <h2 className="text-[36px] md:text-[64px] md:leading-[70px] leading-[110%] font-bold text-[#434338] mb-6">
              We are on a mission.
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
                      Better Roofs::{" "}
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

      <section className="flex flex-col items-center justify-center py-[30px] gap-5 w-full bg-[#f4f4eb] lg:pt-[87px] lg:pb-[122px]">
        <div className="flex flex-col items-center justify-center w-full px-5 lg:max-w-[1320px] gap-[10px] lg:gap-[60px]">
          <div className="lg:w-[49%] flex flex-col items-start justify-start w-full lg:px-0 text-center lg:text-left">
            <h2 className="text-[36px] text-center w-full md:text-[64px] md:leading-[70px] leading-[110%] font-bold text-[#434338] mb-6">
              Our latest news
            </h2>
            <p className="text-[#434338] text-center font-normal leading-[170%] text-lg lg:text-[18px] mb-9">
              Our customers are at the heart of our company, and with over 20
              years of experience in the industry we understand every articles
              in details.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-[30px]">
            <div className="flex flex-col items-center justify-center w-full rounded-[8px] overflow-hidden gap-4 pb-10 bg-white">
              <div className="flex flex-col items-center justify-center w-full gap-[36px]">
                <div className="w-full h-[265px]">
                  <img
                    src="https://framerusercontent.com/images/rGtGNJRR76hQjjj8paHHzasq1Zg.png?scale-down-to=512"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-center w-full gap-[10px]">
                  <div className="w-full">
                    <p className="text-[#34342b] text-[20px] text-center font-bold leading-[170%]">
                      Tony Williamson
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[#34342b] text-[16px] text-center font-normal leading-[170%]">
                      Founder/Founding Partner
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-row items-center justify-center w-full gap-[30px]">
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </div>
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full rounded-[8px] overflow-hidden gap-4 pb-10 bg-white">
              <div className="flex flex-col items-center justify-center w-full gap-[36px]">
                <div className="w-full h-[265px]">
                  <img
                    src="https://framerusercontent.com/images/n2PNgSZiJ0PmINm0unnYB0Z4eE.png"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-center w-full gap-[10px]">
                  <div className="w-full">
                    <p className="text-[#34342b] text-[20px] text-center font-bold leading-[170%]">
                      Emily Haden
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[#34342b] text-[16px] text-center font-normal leading-[170%]">
                      Founder/Founding Partner
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-row items-center justify-center w-full gap-[30px]">
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </div>
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full rounded-[8px] overflow-hidden gap-4 pb-10 bg-white">
              <div className="flex flex-col items-center justify-center w-full gap-[36px]">
                <div className="w-full h-[265px]">
                  <img
                    src="https://framerusercontent.com/images/BnOKDozoanOlAlMlJVhGwOPPfU.png"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-center w-full gap-[10px]">
                  <div className="w-full">
                    <p className="text-[#34342b] text-[20px] text-center font-bold leading-[170%]">
                      Mercedes Wallace
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[#34342b] text-[16px] text-center font-normal leading-[170%]">
                      Founder/Founding Partner
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-row items-center justify-center w-full gap-[30px]">
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </div>
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full rounded-[8px] overflow-hidden gap-4 pb-10 bg-white">
              <div className="flex flex-col items-center justify-center w-full gap-[36px]">
                <div className="w-full h-[265px]">
                  <img
                    src="https://framerusercontent.com/images/Jjhh57Qo2OC7r73dz8SUXQ0Hs.png"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="flex flex-col items-center justify-center w-full gap-[10px]">
                  <div className="w-full">
                    <p className="text-[#34342b] text-[20px] text-center font-bold leading-[170%]">
                      Jhon Dou{" "}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-[#34342b] text-[16px] text-center font-normal leading-[170%]">
                      Founder/Founding Partner
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-row items-center justify-center w-full gap-[30px]">
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </div>
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div className="w-[15px] h-[15px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ee5622"
                      stroke-width="2"
                      stroke-linecap="round"
                      className="w-full h-full object-center object-cover"
                      stroke-linejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
