// const testimonials = [
//   {
//     name: "Rahim Uddin",
//     text: "Amazing quality water, fast delivery. Highly recommend!",
//     img: "assets/img/customer1.jpg"
//   },
//   {
//     name: "Fatema Khatun",
//     text: "Close bottled water keeps me refreshed all day long.",
//     img: "assets/img/customer2.jpg"
//   },
//   {
//     name: "Karim Ali",
//     text: "Excellent taste and very affordable prices.",
//     img: "assets/img/customer3.jpg"
//   },
//   {
//     name: "Sonia Rahman",
//     text: "The best water brand I've used, love the packaging too!",
//     img: "assets/img/customer4.jpg"
//   }
// ];

// const slider = document.querySelector(".testimonial-slider");

// testimonials.forEach(customer => {
//   const card = document.createElement("div");
//   card.classList.add("testimonial-card");

//   const img = document.createElement("img");
//   img.src = customer.img;
//   img.alt = `Photo of ${customer.name}`;

//   // ইমেজ না থাকলে ডিফল্ট ইমেজ
//   img.onerror = () => {
//     img.src = "assets/img/customar-img/customar.png";
//   };

//   const name = document.createElement("div");
//   name.className = "name";
//   name.textContent = customer.name;

//   const text = document.createElement("div");
//   text.className = "text";
//   text.textContent = customer.text;

//   card.appendChild(img);
//   card.appendChild(name);
//   card.appendChild(text);

//   slider.appendChild(card);
// });

// // ড্র্যাগ স্ক্রোলিং

// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener("mousedown", (e) => {
//   isDown = true;
//   slider.classList.add("active");
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener("mouseleave", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });

// slider.addEventListener("mouseup", () => {
//   isDown = false;
//   slider.classList.remove("active");
// });

// slider.addEventListener("mousemove", (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 2; // scroll speed
//   slider.scrollLeft = scrollLeft - walk;
// });

// // টাচ সাপোর্ট

// slider.addEventListener("touchstart", (e) => {
//   startX = e.touches[0].pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener("touchmove", (e) => {
//   e.preventDefault();
//   const x = e.touches[0].pageX - slider.offsetLeft;
//   const walk = (x - startX) * 2;
//   slider.scrollLeft = scrollLeft - walk;
// });
