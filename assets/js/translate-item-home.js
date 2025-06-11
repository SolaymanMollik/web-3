// const translations = {
//   bn: {
//     home: 'হোম',
//     business: 'আমাদের সাথে ব্যবসা করুন',
//     about: 'আমাদের সম্পর্কে',
//     qr_campaign: 'QR ক্যাম্পেইন',
//     campaign: 'ক্যাম্পেইন',
//     dealer: 'ডিলার',
//     contact: 'যোগাযোগ',
//     become_dealer: 'ডিলার হতে চান',
//     hero_title: 'প্রতিটি ফোঁটায় বিশুদ্ধ সতেজতা',
//     m_msg: 'আশায় প্রজ্জ্বলিত একটি আত্মা',
//     m_msg_2:
//       'আমরা আমাদের যাত্রা শুরু করেছি এক সাহসী লক্ষ্য নিয়ে — একটি যুব বিপ্লব ঘটাতে। যা দেশের অর্থনীতিকে শক্তিশালী করবে, জনগণকে উন্নীত করবে এবং দৈনন্দিন জীবনে আস্থা ও উৎকর্ষতার প্রতীক হয়ে উঠবে।',
//     m_name: 'সোলায়মান',
//     m_title: 'ব্যবস্থাপনা পরিচালক',
//     rev_title_1: 'আমরা একটি যুব ',
//     rev_title_2: 'বিপ্লব ঘটাতে চাই',
//     rev_des:
//       'আমাদের লক্ষ্য হলো আগামী প্রজন্মকে দক্ষতা, সুযোগ এবং মানসিকতা দিয়ে শক্তিশালী করা যাতে তারা জাতিকে পরিবর্তন করতে পারে।',
//     mission_title: 'আমাদের মিশন ও ভিশন',
//     mission_h: 'আমাদের মিশন',
//     vission_h: 'আমাদের ভিশন',
//     mission_des:
//       'উচ্চমানের, উদ্ভাবনী ও টেকসই পণ্য সরবরাহ করা যা মানুষের দৈনন্দিন জীবনকে উন্নত করে এবং দেশের অর্থনীতিতে ইতিবাচক অবদান রাখে।',
//     vision_des:
//       'বৃদ্ধিকে অনুপ্রাণিত করে, শিল্পকে বিপ্লবী করে এবং জনগণকে ক্ষমতায়িত করে একটি উজ্জ্বল ভবিষ্যতের জন্য গ্লোবাল মানের এক আস্থার প্রতীক হয়ে উঠা।',
//     con_sec_title: 'যোগাযোগ করুন',
//     contact_sec_des:
//       'আমরা একটি চটপটে (agile) পদ্ধতিতে ধারণা যাচাই করি এবং বারবার আপনার শ্রোতার প্রয়োজনের সাথে সংযুক্ত হই।',
//   },
//   en: {
//     home: 'Home',
//     business: 'Business with us',
//     about: 'About Us',
//     qr_campaign: 'Qr-campaign',
//     campaign: 'Campaign',
//     dealer: 'Dealer',
//     contact: 'Contact',
//     become_dealer: 'Become a dealer',
//     hero_title: 'Pure Refreshment In Every Drop',
//     m_msg: 'A soul fueled by hope',
//     m_msg_2:
//       'We embark on our journey with a bold vision — to ignite a youth revolution. One that empowers the nation’s economy, uplifts its people, and stands as a symbol of trust and excellence in everyday life.',
//     m_name: 'Solayman',
//     m_title: 'Managing Director',
//     rev_title_1: 'We Want to Make a ',
//     rev_title_2: 'Youth Revolution',
//     rev_des:
//       'Our goal is to empower the next generation with skills, opportunities, and a mindset to change the nation.',
//     mission_title: 'Our Mission & Vision',
//     mission_h: 'Our Mission',
//     vission_h: 'Our Vision',
//     mission_des:
//       'To provide high-quality, innovative, and sustainable products that enhance everyday life while contributing positively to the nation’s economy.',
//     vision_des:
//       'To become a global standard in quality and trust by inspiring growth, revolutionizing industries, and empowering communities for a brighter future.',
//     con_sec_title: 'Contact Us',
//     contact_sec_des:
//       'We use an agile approach to test assumptions and connect with the needs of your audience early and often.',
//   },
// };

// function setLanguage(lang) {
//   localStorage.setItem('lang', lang);
//   translatePage(lang);
// }

// function translatePage(lang) {
//   const elements = document.querySelectorAll('[data-i18n]');
//   elements.forEach((el) => {
//     const key = el.getAttribute('data-i18n');
//     if (translations[lang] && translations[lang][key]) {
//       el.textContent = translations[lang][key];
//     }
//   });
// }

// // প্রথমবার পেজ লোড হলে লোকালস্টোরেজ থেকে ভাষা লোড করা হবে
// document.addEventListener('DOMContentLoaded', () => {
//   const lang = localStorage.getItem('lang') || 'en';
//   translatePage(lang);
// });
