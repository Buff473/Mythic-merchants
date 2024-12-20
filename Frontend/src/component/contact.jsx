import React from 'react'

export const contact = () => {
  return (
    <footer id="contact" className='text-center p-5 bg-[#111] text-sm text-[#aaa]'>

    <p>&copy; 2024 The Mythic Merchants | All Rights Reserved</p>
    <p>Contact us: <a href="mailto:contact@mythicmerchants.com" className='text-[#ffcc00] no-underline hover:underline'>contact@mythicmerchants.com</a></p>

      <h1 className='text-4xl text-white mb-10 mt-5'>Send a message</h1>

      <form
        action="https://formspree.io/f/xpwzynpr"
        method="POST"
        className="mt-4 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">


        {/* Name and Email Section */}
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-[#aaa] mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full p-2 rounded bg-[#222] text-[#ddd] border border-[#333]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[#aaa] mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full p-2 rounded bg-[#222] text-[#ddd] border border-[#333]"
            />
          </div>
        </div>

        {/* Message Section */}
        <div>
          <label htmlFor="message" className="block text-[#aaa] mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="8"
            required
            className="w-full h-[120px] p-2 rounded bg-[#222] text-[#ddd] border border-[#333]"
          ></textarea>
        </div>

        {/* Submit Button (Spans Both Columns) */}
        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-[250px] my-5 p-2 rounded bg-[#ffcc00] text-[#111] font-bold hover:bg-[#e6b800]"
          >
            Send Message
          </button>
        </div>
      </form>
</footer>

  );
};

export default contact;