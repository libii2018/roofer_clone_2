import React from "react";

export default function Service() {
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
      <section className="flex flex-col items-center justify-center py-5 gap-5 w-full bg-white lg:pt-[87px]">
        <div className="flex flex-col items-center justify-center w-full px-3 lg:max-w-[1320px] gap-[10px] lg:gap-[60px]">
          <div className="flex flex-col items-start justify-start w-full lg:px-0 text-center lg:text-center">
            <div className="w-[56%] flex mx-auto">
              <h2 className="text-[35px] lg:text-[80px] text-center w-full md:text-[64px] md:leading-[70px] leading-[110%] font-bold text-[#34342b] mb-6">
                Offering best roofing services
              </h2>
            </div>
            <div className="w-[50%] flex mx-auto">
              <p className="text-[#434338] text-center font-normal leading-[170%] text-lg lg:text-[19px] mb-9">
                We consider all the drivers of change gives you the blocks &
                components you need to change to create a truly professional
                website.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center py-5 gap-5 w-full bg-white lg:pb-[100px]">
        <div className="flex flex-wrap flex-grow lg:grid lg:grid-cols-3 lg:grid-rows-2 flex-shrink-0 basis-0 items-center justify-center w-full px-5 lg:max-w-[1320px] gap-[24px] lg:gap-6">
          <div className="flex flex-col lg:items-start items-center w-full pt-[36px] px-10 pb-[35px] md:flex-row bg-white rounded-[8px] border-[1px] gap-[30px]">
            <div className="flex flex-col items-start justify-start w-[50px] h-[50px]">
              <img
                src="https://framerusercontent.com/images/3Whfnk9xeYHuThItMxHsLozr8.svg"
                alt=""
                className="w-full w-full"
              />
            </div>
            <div className="flex flex-col gap-8 lg:w-[241px]">
              <div className="w-full flex flex-col gap-3">
                <div className="w-full">
                  <h3 className="text-[24px] lg:font-bold text-center lg:text-left font-semibold text-[#34342b] leading-[130%]">
                    Free Inspection
                  </h3>
                </div>
                <div className="w-full">
                  <p className="text-[#34342b] text-base text-center lg:text-left leading-[170%]">
                    Just provide us the timing and we all will set our schedule.{" "}
                  </p>
                </div>
              </div>
              <div className="w-full flex items-start">
                <a
                  href="#"
                  className="flex flex-row items-center justify-center"
                >
                  <div className="w-full flex flex-row items-center justify-center gap-[10px]">
                    <p className="text-[#606057] text-base text-center font-semibold lg:text-left leading-[170%]">
                      Learn More
                    </p>
                    <div className="w-[20px] h-[22px] aspect-[1.0434782608695652/1]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="#606057"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-full h-full"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:items-start items-center w-full pt-[36px] px-10 pb-[35px] md:flex-row bg-white rounded-[8px] border-[1px] gap-[30px]">
            <div className="flex flex-col items-start justify-start w-[50px] h-[50px]">
              <img
                src="https://framerusercontent.com/images/9sseofjvdoSNGw1OrsPwt7bA0U.svg"
                alt=""
                className="w-full w-full"
              />
            </div>
            <div className="flex flex-col gap-8 lg:w-[241px]">
              <div className="w-full flex flex-col gap-3">
                <div className="w-full">
                  <h3 className="text-xl lg:text-[24px] lg:font-bold text-center lg:text-left font-semibold text-[#34342b] leading-[130%]">
                    Commercial Roofing
                  </h3>
                </div>
                <div className="w-full">
                  <p className="text-[#34342b] text-base text-center lg:text-left leading-[170%]">
                    Just provide us the timing and we all will set our schedule.
                  </p>
                </div>
              </div>
              <div className="w-full flex items-start">
                <a
                  href="#"
                  className="flex flex-row items-center justify-center"
                >
                  <div className="w-full flex flex-row items-center justify-center gap-[10px]">
                    <p className="text-[#606057] text-base text-center font-semibold lg:text-left leading-[170%]">
                      Learn More
                    </p>
                    <div className="w-[20px] h-[22px] aspect-[1.0434782608695652/1]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="#606057"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-full h-full"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:items-start items-center w-full pt-[36px] px-10 pb-[35px] md:flex-row bg-white rounded-[8px] border-[1px] gap-[30px]">
            <div className="flex flex-col items-start justify-start w-[50px] h-[50px]">
              <img
                src="https://framerusercontent.com/images/Ud21hKV9z8wiv761kEzRt0eRJt4.svg"
                alt=""
                className="w-full w-full"
              />
            </div>
            <div className="flex flex-col gap-8 lg:w-[241px]">
              <div className="w-full flex flex-col gap-3">
                <div className="w-full">
                  <h3 className="text-xl lg:text-[24px] lg:font-bold text-center lg:text-left font-semibold text-[#34342b] leading-[130%]">
                    Solar Panels{" "}
                  </h3>
                </div>
                <div className="w-full">
                  <p className="text-[#34342b] text-base text-center lg:text-left leading-[170%]">
                    Just provide us the timing and we all will set our schedule.
                  </p>
                </div>
              </div>
              <div className="w-full flex items-start">
                <a
                  href="#"
                  className="flex flex-row items-center justify-center"
                >
                  <div className="w-full flex flex-row items-center justify-center gap-[10px]">
                    <p className="text-[#606057] text-base text-center font-semibold lg:text-left leading-[170%]">
                      Learn More
                    </p>
                    <div className="w-[20px] h-[22px] aspect-[1.0434782608695652/1]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="#606057"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-full h-full"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:items-start items-center w-full pt-[36px] px-10 pb-[35px] md:flex-row bg-white rounded-[8px] border-[1px] gap-[30px]">
            <div className="flex flex-col items-start justify-start w-[50px] h-[50px]">
              <img
                src="https://framerusercontent.com/images/9XCWyPMau9AXyyigKsiuVZ8HPHU.svg"
                alt=""
                className="w-full w-full"
              />
            </div>
            <div className="flex flex-col gap-8 lg:w-[241px]">
              <div className="w-full flex flex-col gap-3">
                <div className="w-full">
                  <h3 className="text-xl lg:text-[24px] lg:font-bold text-center lg:text-left font-semibold text-[#34342b] leading-[130%]">
                    Roof Replacement{" "}
                  </h3>
                </div>
                <div className="w-full">
                  <p className="text-[#34342b] text-base text-center lg:text-left leading-[170%]">
                    Just provide us the timing and we all will set our schedule.
                  </p>
                </div>
              </div>
              <div className="w-full flex items-start">
                <a
                  href="#"
                  className="flex flex-row items-center justify-center"
                >
                  <div className="w-full flex flex-row items-center justify-center gap-[10px]">
                    <p className="text-[#606057] text-base text-center font-semibold lg:text-left leading-[170%]">
                      Learn More
                    </p>
                    <div className="w-[20px] h-[22px] aspect-[1.0434782608695652/1]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="#606057"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-full h-full"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:items-start items-center w-full pt-[36px] px-10 pb-[35px] md:flex-row bg-white rounded-[8px] border-[1px] gap-[30px]">
            <div className="flex flex-col items-start justify-start w-[50px] h-[50px]">
              <img
                src="https://framerusercontent.com/images/VFZFNgIwxUJUbwpWBZ5Su9gY.svg"
                alt=""
                className="w-full w-full"
              />
            </div>
            <div className="flex flex-col gap-8 lg:w-[241px]">
              <div className="w-full flex flex-col gap-3">
                <div className="w-full">
                  <h3 className="text-xl lg:text-[24px] lg:font-bold text-center lg:text-left font-semibold text-[#34342b] leading-[130%]">
                    Solar Panels{" "}
                  </h3>
                </div>
                <div className="w-full">
                  <p className="text-[#34342b] text-base text-center lg:text-left leading-[170%]">
                    Just provide us the timing and we all will set our schedule.{" "}
                  </p>
                </div>
              </div>
              <div className="w-full flex items-start">
                <a
                  href="#"
                  className="flex flex-row items-center justify-center"
                >
                  <div className="w-full flex flex-row items-center justify-center gap-[10px]">
                    <p className="text-[#606057] text-base text-center font-semibold lg:text-left leading-[170%]">
                      Learn More
                    </p>
                    <div className="w-[20px] h-[22px] aspect-[1.0434782608695652/1]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="#606057"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-full h-full"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:items-start items-center w-full pt-[36px] px-10 pb-[35px] md:flex-row bg-white rounded-[8px] border-[1px] gap-[30px]">
            <div className="flex flex-col items-start justify-start w-[50px] h-[50px]">
              <img
                src="https://framerusercontent.com/images/h2oDGruHsEqE4iNvDE1Oo3wRJlE.svg"
                alt=""
                className="w-full w-full"
              />
            </div>
            <div className="flex flex-col gap-8 lg:w-[241px]">
              <div className="w-full flex flex-col gap-3">
                <div className="w-full">
                  <h3 className="text-xl lg:text-[24px] lg:font-bold text-center lg:text-left font-semibold text-[#34342b] leading-[130%]">
                    Roof Renovation{" "}
                  </h3>
                </div>
                <div className="w-full">
                  <p className="text-[#34342b] text-base text-center lg:text-left leading-[170%]">
                    Just provide us the timing and we all will set our schedule.{" "}
                  </p>
                </div>
              </div>
              <div className="w-full flex items-start">
                <a
                  href="#"
                  className="flex flex-row items-center justify-center"
                >
                  <div className="w-full flex flex-row items-center justify-center gap-[10px]">
                    <p className="text-[#606057] text-base text-center font-semibold lg:text-left leading-[170%]">
                      Learn More
                    </p>
                    <div className="w-[20px] h-[22px] aspect-[1.0434782608695652/1]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="#606057"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="w-full h-full"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
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
      <section className="flex flex-col items-center justify-center lg:pt-[110px] lg:pb-[132px] p-5">
        <div className="flex flex-col items-start justify-start w-full lg:px-0 text-center lg:text-center">
          <div className="w-[56%] flex mx-auto">
            <h2 className="text-[35px] lg:text-[64px] text-center w-full md:text-[64px] md:leading-[70px] leading-[110%] font-bold text-[#34342b] mb-6">
              Our pricing plans
            </h2>
          </div>
          <div className="w-[50%] flex mx-auto">
            <p className="text-[#434338] text-center font-normal leading-[170%] text-lg lg:text-[19px] mb-9">
              Roofing has an unknown printer took a galley of type and scrambled
              it to make type specimen book. It has survived not only five
              centuries.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:max-w-[1320px] items-center justify-center gap-10 w-full">
          <div className="flex flex-col lg:w-[31%] items-center justify-center w-full pb-[35px] gap-[35px] rounded-[12px] border-[1px] overflow-hidden">
            <div className="flex flex-col items-center justify-center w-full bg-[#34342b] h-fit pt-[40px] pb-[36px]">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="w-full">
                  <p className="text-base font-bold leading-[170%] text-white text-center">
                    RESIDENTIAL
                  </p>
                </div>
                <div className="w-full">
                  <h2 className="text-[64px] font-bold leading-[170%] text-white text-center">
                    $199
                  </h2>
                </div>
              </div>
              <div className="w-full">
                <p className="text-[16px] font-normal leading-[170%] text-white text-center">
                  Per Month
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full px-10 gap-4">
              <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[16px] leading-[170%]">
                    Maintenance of fences
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[16px] leading-[170%]">
                    Checking electrical wiring
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[16px] leading-[170%]">
                    Staff training
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[16px] leading-[170%]">
                    Basic widget customization
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[16px] leading-[170%]">
                    Configuring access systems
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-6 lg:items-start items-center">
              <button className="bg-[#e1a356] px-[30] py-[26px] text-white text-[18px] font-bold rounded-md shadow-[0_4px_0_rgba(0,0,0,0.1)] hover:bg-white hover:text-[#e1a356]">
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
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <p>Book This Service</p>
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:w-[31%] items-center justify-center w-full pb-[35px] gap-[35px] rounded-[12px] border-[1px] overflow-hidden">
            <div className="flex flex-col items-center justify-center w-full bg-[#34342b] h-fit pt-[40px] pb-[36px]">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="w-full">
                  <p className="text-base font-bold leading-[170%] text-white text-center">
                    RESIDENTIAL
                  </p>
                </div>
                <div className="w-full">
                  <h2 className="text-[64px] font-bold leading-[170%] text-white text-center">
                    $199
                  </h2>
                </div>
              </div>
              <div className="w-full">
                <p className="text-[16px] font-normal leading-[170%] text-white text-center">
                  Per Month
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full px-10 gap-4">
              <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[16px] leading-[170%]">
                    Maintenance of fences
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[16px] leading-[170%]">
                    Checking electrical wiring
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[16px] leading-[170%]">
                    Staff training
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[16px] leading-[170%]">
                    Basic widget customization
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[16px] leading-[170%]">
                    Configuring access systems
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-6 lg:items-start items-center">
              <button className="bg-[#e1a356] px-[30] py-[26px] text-white text-[18px] font-bold rounded-md shadow-[0_4px_0_rgba(0,0,0,0.1)] hover:bg-white hover:text-[#e1a356]">
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
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <p>Book This Service</p>
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:w-[31%] items-center justify-center w-full pb-[35px] gap-[35px] rounded-[12px] border-[1px] overflow-hidden">
            <div className="flex flex-col items-center justify-center w-full bg-[#34342b] h-fit pt-[40px] pb-[36px]">
              <div className="flex flex-col items-center justify-center w-full">
                <div className="w-full">
                  <p className="text-base font-bold leading-[170%] text-white text-center">
                    RESIDENTIAL
                  </p>
                </div>
                <div className="w-full">
                  <h2 className="text-[64px] font-bold leading-[170%] text-white text-center">
                    $199
                  </h2>
                </div>
              </div>
              <div className="w-full">
                <p className="text-[16px] font-normal leading-[170%] text-white text-center">
                  Per Month
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center w-full px-10 gap-4">
              <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[16px] leading-[170%]">
                    Maintenance of fences
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[16px] leading-[170%]">
                    Checking electrical wiring
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[16px] leading-[170%]">
                    Staff training
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[16px] leading-[170%]">
                    Basic widget customization
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-row items-center justify-center h-5 w-6 overflow-hidden">
                  <img
                    src="https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-normal text-[#34342b] text-[16px] leading-[170%]">
                    Configuring access systems
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-6 lg:items-start items-center">
              <button className="bg-[#e1a356] px-[30] py-[26px] text-white text-[18px] font-bold rounded-md shadow-[0_4px_0_rgba(0,0,0,0.1)] hover:bg-white hover:text-[#e1a356]">
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
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <p>Book This Service</p>
                </div>
              </button>
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
