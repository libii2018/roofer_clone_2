import React from "react";

export default function Blog() {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 w-full h-fit border-b border-gray-200 dark:border-gray-600 lg:py-0 py-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://framerusercontent.com/images/ErSu0lDVH73VmxPaHDdCKNhteA.svg"
              className="h-12"
              alt="Flowbite Logo"
            />
          </a>
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
                <a
                  href="#"
                  className="block py-8 px-[22px] text-[14px] font-semibold text-[#34342b] rounded md:bg-transparent"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>
              <li className="cursor-pointer border-t-2 hover:border-[#e1a356] hover:bg-[#f4f4eb]">
                <a
                  href="#"
                  className="py-8 px-[22px] block w-full h-full text-[14px] font-semibold text-[#34342b] rounded"
                >
                  ABOUT
                </a>
              </li>
              <li className="cursor-pointer border-t-2 hover:border-[#e1a356] hover:bg-[#f4f4eb]">
                <a
                  href="#"
                  className="py-8 px-[22px] block w-full h-full text-[14px] font-semibold text-[#34342b] rounded"
                >
                  SERVICES
                </a>
              </li>
              <li className="cursor-pointer border-t-2 hover:border-[#e1a356] hover:bg-[#f4f4eb]">
                <a
                  href="#"
                  className="py-8 px-[22px] block w-full h-full text-[14px] font-semibold text-[#34342b] rounded"
                >
                  APPOINTMENT
                </a>
              </li>
              <li className="cursor-pointer border-t-2 hover:border-[#e1a356] hover:bg-[#f4f4eb]">
                <a
                  href="#"
                  className="py-8 px-[22px] block w-full h-full text-[14px] font-semibold text-[#34342b] rounded"
                >
                  CONTACT
                </a>
              </li>
              <li className="cursor-pointer border-t-2 hover:border-[#e1a356] hover:bg-[#f4f4eb]">
                <a
                  href="#"
                  className="py-8 px-[22px] block w-full h-full text-[14px] font-semibold text-[#34342b] rounded"
                >
                  BLOG
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="lg:pt-[84px] lg:pb-[111px] bg-white">
        <div className="flex flex-col items-center justify-center max-w-[1320px] px-5 mx-auto gap-[72px]">
          {/* Titre et texte au centre */}
          <div className="text-center flex flex-col gap-6 lg:p-0 p-5">
            <div>
              <h1 className="text-4xl font-bold text-[#34342b] mb-4 md:text-[80px] leading-[120%]">
                Our Blog
              </h1>
            </div>
            <div className="lg:w-[60%] w-full h-auto flex mx-auto">
              <p className="text-[18px] text-[#434338] leading-[170%]">
                We consider all the drivers of change gives you the blocks &
                components you need to change to create a truly professional
                website.
              </p>
            </div>
          </div>

          <div
            className="flex lg:flex-wrap flex-col justify-center gap-5 lg:grid lg:grid-cols-3 lg:grid-rows-2 md:grid md:grid-cols-2 md:grid-rows-3  w-full"
            style={{
              transform: "perspective(1200px)",
            }}
          >
            {/* Cartes alignées horizontalement */}
            <div className="flex flex-row justify-center gap-8">
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

            <div className="flex flex-row justify-center gap-8">
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

            <div className="flex flex-row justify-center gap-8">
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

            <div className="flex flex-row justify-center gap-8">
              <div className="rounded-lg overflow-hidden">
                <div className="flex flex-col w-full">
                  <img
                    src="https://framerusercontent.com/images/larG45DFTqyPrfUq76Dqrf487k.png"
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

            <div className="flex flex-row justify-center gap-8">
              <div className="rounded-lg overflow-hidden">
                <div className="flex flex-col w-full">
                  <img
                    src="https://framerusercontent.com/images/zyKQSCZIdHgQoxaQad7oCzHbsTc.png"
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

            <div className="flex flex-row justify-center gap-8">
              <div className="rounded-lg overflow-hidden">
                <div className="flex flex-col w-full">
                  <img
                    src="https://framerusercontent.com/images/K3RAwmzoQsENJxNg37FCQDHNuQ.png"
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