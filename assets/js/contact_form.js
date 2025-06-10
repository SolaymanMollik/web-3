let the_contact_div = document.getElementById("contact_sec_container");

the_contact_div.innerHTML = `

  <!-- Hero Section with Background Image -->
  <section class="relative bg-cover bg-center bg-no-repeat" style="background-image: url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7');">
    <div class="absolute inset-0 bg-black opacity-70"></div>
    <div class="relative z-10 max-w-4xl mx-auto py-20 text-center">
      <h1 class="text-4xl font-bold mb-4 text-white">Contact Us</h1>
      <p class="text-gray-300 max-w-2xl mx-auto">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="bg-gray-900 py-10">
    <div class="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg">
      <form>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-300">First Name</label>
            <input type="text" class="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500" placeholder="Abdur" />
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-300">Last Name</label>
            <input type="text" class="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500" placeholder="Rahman" />
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
            <input type="email" class="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500" placeholder="name@example.com" />
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-300">Phone Number</label>
            <input type="tel" class="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500" placeholder="+88 015 1234 5678" />
          </div>
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
          <textarea rows="5" class="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500" placeholder="Leave a comment..."></textarea>
        </div>
        <p class="text-sm text-gray-400 mb-4">By submitting this form you agree to our <a href="#" class="text-blue-400 hover:underline">terms and conditions</a> and our <a href="#" class="text-blue-400 hover:underline">privacy policy</a>.</p>
        <button type="submit" class="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">Send message</button>
      </form>
    </div>
  </section>

  <!-- Bottom Info Cards -->
  <section class="bg-gray-900 py-12">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <div class="text-3xl mb-2">📧</div>
        <h3 class="text-xl font-semibold mb-1 text-white">Email us:</h3>
        <p class="text-gray-400 text-sm mb-1">Email us for general queries, including marketing and partnership opportunities.</p>
        <a href="mailto:hello@flowbite.com" class="text-blue-400 hover:underline">hello@flowbite.com</a>
      </div>
      <div>
        <div class="text-3xl mb-2">📞</div>
        <h3 class="text-xl font-semibold mb-1 text-white">Call us:</h3>
        <p class="text-gray-400 text-sm mb-1">Call us to speak to a member of our team. We are always happy to help.</p>
        <a href="tel:+16467865060" class="text-blue-400 hover:underline">+1 (646) 786-5060</a>
      </div>
      <div>
        <div class="text-3xl mb-2">🛠️</div>
        <h3 class="text-xl font-semibold mb-1 text-white">Support</h3>
        <p class="text-gray-400 text-sm mb-2">Email us for general queries, including marketing and partnership opportunities.</p>
        <a href="#" class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm">Support center</a>
      </div>
    </div>
  </section>

`