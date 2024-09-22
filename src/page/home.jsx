import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

import { teamMembers } from "./data";
import { porto } from "./data";

import cvFile from "./image/cvmahes.pdf";

import mahes from "./image/mahes.jpg";


const Home = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    // Ganti dengan nomor WhatsApp tujuan
    const phoneNumber = "6289608322921";

    // Membuat URL deep link ke WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    // Buka URL deep link untuk mengirim pesan via WhatsApp
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white">
      {/* MENU UTAMA */}
      <section id="home-section" className="bg-white">
        <div className="max-w-6xl px-6 pb-5 mx-auto">
          <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-gray-600 -z-10 md:h-96 rounded-2xl"></div>

            <div className="w-full p-6 bg-gray-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
              
              <img
  className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[30rem] lg:w-[25rem] md:rounded-2xl"
  src={mahes}
  alt="Client smiling and looking at the camera"
/>


              <div className="md:mx-6">
                <div>
                  <p className="text-2xl lg:text-3xl pb-1 font-medium tracking-tight text-white">
                    Mahesawara Kamil Muttohar
                  </p>

                  <p className="text-blue-200 text-xl font-semibold">
                    <TypeAnimation
                      sequence={[
                        "UI UX Designer",
                        500,
                        "Custom Logo Designer",
                        500,
                        "Graphic Designer",
                        500,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />{" "}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white md:text-md">
                Saya siswa SMK yang bersemangat dalam desain, 
                menciptakan karya grafis inovatif dan menarik.
                </p>

                <div className="button block lg:flex pt-4">
                  <div className="button1">
                    <button className="px-6 py-3 lg:w-40 mt-3 w-full font-normal rounded-full bg-white hover:bg-slate-200 text-black bg-gradient-to-br from-sky-800 via-cyan-700 to-white-200">
                      <a
                        href="#portofolio-section"
                        className="no-underline text-white"
                      >
                        Portfolio
                      </a>
                    </button>
                  </div>

                  <div
                    class=" btn-4 font-normal w-full lg:w-40 lg:ml-5"
                    data-tooltip="Size: 747Kb"
                  >
                    <div class="button-wrapper">
                      <div class="text">Download CV</div>
                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          role="img"
                          width="2em"
                          height="2em"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <a
                      href={cvFile}
                      download="CV Maheswara Kamil.pdf"
                      className="download-link"
                    >
                      {" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>

      <section id="skills-section" className="relative pb-10 pt-16">
        {/* Section Content */}
        <div className="container px-6 pb-10 mx-auto">
          <h1 className="text-2xl font-bold text-center text- capitalize lg:text-3xl text-gray-900">
            Skill
          </h1>
          <p className="max-w-2xl font-semibold mx-auto my-4 text-center text-gray-900">
          Saya ahli dalam desain grafis, UI/UX, dan memiliki kreativitas tinggi dalam menciptakan visual menarik dan fungsional.
          </p>

          <div className="grid grid-cols-1 gap-5 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-slate-100 flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-lg shadow-md hover:border-transparent group hover:bg-gray-600 "
              >
                <img
                  className="object-cover w-auto h-32"
                  src={member.image}
                  alt={member.name}
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize group-hover:text-white">
                  {member.name}
                </h1>

                <a
                  href={member.url}
                  className="hover:underline mt-2 text-gray-500 capitalize group-hover:text-gray-300 text-center"
                >
                  {member.desc}
                </a>
              </div>

            ))}
          </div>
        </div>
      </section>


      <section id="project-section" class="bg-white">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Portfolio
        </h1>

        <p class="mt-4 text-center text-gray-500 ">
        Proyek desain ini mengedepankan kreativitas dan detail, menggabungkan estetika modern dengan fungsi, menghasilkan pengalaman visual yang memukau dan efektif.        </p>

        <div className="grid grid-cols-2 gap-6 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
  {porto.map((item, index) => (
    <div
      key={index}
      className="overflow-hidden bg-cover rounded-lg cursor-pointer group"
      style={{
        backgroundImage: `url(${item.image})`,
      }}
    >
      <div className="flex flex-col justify-center w-full h-50 md:h-70 lg:h-80 px-6 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white capitalize">
          {item.name}
        </h2>
        <p className="mt-2 text-sm md:text-base lg:text-lg tracking-wider text-blue-400">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>



    </div>
</section>

      {/* CONTACT */}
      <section id="contact-section" class="bg-white ">
        <div class="container px-12 pb-12 pt-5 rounded-2xl mb-12 mx-auto bg-gray-700">
          <div class="lg:flex lg:items-center lg:-mx-6">
            <div class="lg:w-1/2 lg:mx-6">
              <h1 class="text-xl font-semibold text-white lg:text-3xl">
                Contact us for more info
              </h1>

              <div class="mt-3 space-y-8 md:mt-3">
                <p class="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span class="mx-2 text-gray-200">
                  Jl. Danau Ranau Raya G-5 E-34 Kel.Sawojajar Kec.Kedungkandang - Kota Malang
                  </span>
                </p>

                <p class="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-2 text-blue-500 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span class="mx-2 text-gray-200">+62-896-0832-2921</span>
                </p>

                <p class="flex items-start -mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 mx-2 text-blue-500 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span class="mx-2 text-gray-200">nerofortee@gmail.com</span>
                </p>
              </div>

              <div class="mt-6 w-80 md:mt-8">
                <h3 class="text-gray-200 ">Follow us</h3>





                <div class="flex mt-4 -mx-1.5 ">
                
                {/* Figma */}
              <a
                href="https://www.figma.com/design/kvCccaBxtWdOkRqIFvgBSN/Untitled?node-id=0-1&t=5aYwnXBWEDX66mEM-1"
                className="mx-2 mt-1"
                aria-label="Github"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-6 w-6  text-gray-200 transition-colors duration-300 transform hover:text-blue-500'>
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5M12 2h3.5a3.5 3.5 0 1 1 0 7H12z"/>
                <path d="M12 12.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 1 1-7 0m-7 7A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0m0-7A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5"/></g></svg>

              </a>


                  {/* Whatsapp */}
              <a
                href="https://wa.me/6282131211769"
                className="mx-2"
                aria-label="WA"
              >
                <svg
                  class="h-7 w-7 text-gray-200 transition-colors duration-300 transform hover:text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </a>

{/* INSTAGRAM */}
                  <a
                    class="mx-1.5  text-gray-200 transition-colors duration-300 transform hover:text-blue-500"
                    href="https://www.instagram.com/maheswarakamil_/"
                  >
                    <svg
                      class="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>

                </div>
              </div>
            </div>

            <div class="mt-8 lg:w-1/2 lg:mx-6">
              <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50">
                <h1 class="text-lg font-medium text-gray-700">
                  What do you want to ask
                </h1>

                <form onSubmit={sendToWhatsApp} className="mt-6">
      <div className="flex-1">
        <label className="block mb-2 text-sm text-gray-600 ">Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          required
        />
      </div>

      <div className="flex-1 mt-6">
        <label className="block mb-2 text-sm text-gray-600">Email address</label>
        <input
          type="email"
          placeholder="johndoe@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          required
        />
      </div>

      <div className="w-full mt-6">
        <label className="block mb-2 text-sm text-gray-600">Message</label>
        <textarea
          className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      >
        Send via WhatsApp
      </button>
    </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
