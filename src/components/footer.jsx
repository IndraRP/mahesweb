import React from 'react'
import Logo from "../page/image/logo.png";

const footer = () => {
  return (
<footer className="bg-gray-900">
  <div className="container px-6 py-8 mx-auto">
    <div className="flex flex-col items-center text-center">
      <a href="/home-section" className='flex items-center'>
        <img
          className="w-auto h-16"
          src={Logo}
          alt=""
        />
        <h1 className='font-bold text-white pt-3 from-neutral-800'>Maheswara</h1>
      </a>

      <p className="max-w-xl mx-auto mt-4 text-gray-400">
      click "View Demo" to see all my portfolios and click "Get Started" to start my chat
      </p>

      <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
      <button
  onClick={() => window.open("https://www.figma.com/design/kvCccaBxtWdOkRqIFvgBSN/Untitled?node-id=70-2029&node-type=FRAME", "_blank")} // Membuka link di tab baru
  className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 border-gray-400 text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40"
>
  <svg
    className="w-5 h-5 mx-1"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z"
      fill="currentColor"
    ></path>
  </svg>
  <span className="mx-1">View Demo</span>
</button>


        <button 
        onClick={() => window.open("https://wa.me/6289608322921", "_blank")}
        className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Get started
        </button>
      </div>
    </div>

    <hr className="my-10 border-gray-200 dark:border-gray-700" />

    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
      <p className="text-sm text-gray-500">© Copyright 2021. All Rights Reserved.</p>

      <div 
      className="flex -mx-2 mt-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/maheswarakamil_/"
                className="mx-2"
                aria-label="Instagram"
              >
                <svg
                  class="h-6 w-6 text-blue-500"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <rect x="4" y="4" width="16" height="16" rx="4" />{" "}
                  <circle cx="12" cy="12" r="3" />{" "}
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
              </a>

              {/* Figma */}
              <a
                href="https://www.figma.com/design/kvCccaBxtWdOkRqIFvgBSN/Untitled?node-id=0-1&t=5aYwnXBWEDX66mEM-1"
                className="mx-2"
                aria-label="Github"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-5 w-5 text-blue-500'>
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5M12 2h3.5a3.5 3.5 0 1 1 0 7H12z"/>
                <path d="M12 12.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 1 1-7 0m-7 7A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0m0-7A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5"/></g></svg>

              </a>

              {/* Whatsapp */}
              <a
                href="https://wa.me/6289608322921"
                className="mx-2"
                aria-label="WA"
              >
                <svg
                  class="h-6 w-6 text-blue-500"
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

              {/* Email */}
            </div>
    </div>
  </div>
</footer>
  )
}

export default footer