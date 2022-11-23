import React from 'react'
import { useState } from 'react'
function Announcement() {
  const [announcement, SetAnnouncement] = useState(true)
  
  return (
    <div class="relative bg-black px-4 py-3 pr-14 text-white">
      <p class="text-left text-2xl font-medium sm:text-center">
        We stand with 🏳️‍🌈🏳️‍⚧️
      </p>

      <button
        aria-label="Close"
        class="absolute top-1/2 right-4 -translate-y-1/2 rounded-lg bg-red-600 p-1 transition hover:bg-red-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

  )
}

export default Announcement