const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
    {
      name: "Sachin Kumar",
      position: "Software Engineer",
      photo: "https://r2.easyimg.io/kql325zse/whatsapp_image_2024-03-01_at_9.17.47_pm.jpeg",
      text: "I express my profound gratitude to our math teacher Santosh Sir, whose unwavering commitment to excellence has paved the way for an unparalleled educational journey. Without hesitation, I urge you to seize this remarkable opportunity to become part of our distinguished institution. My current standing is a testament to the exceptional mentorship and instruction I have received from him, and it fills me with immense pride. Embrace this transformative experience wholeheartedly it's a voyage filled with endless possibilities and profound growth ",
    },
    {
        name: "Deepak Kumar",
        position: "Economist researcher",
        photo: "https://r2.easyimg.io/1avcipx63/pic2.jpeg",
        text: "I want to express my sincere gratitude to Mr. Santosh Sir, the mathematics faculty, for their unwavering dedication and support throughout the year. Their tireless efforts in helping me build a strong foundation and addressing all my doubts have greatly contributed to my success and growth in life.",
    },
    {
      name: "Sumit Raj Srivastava",
      position: "Software Engineer @ TCS",
      photo: "https://r2.easyimg.io/8tdss6r6t/pic4.jpeg",
      text: "The guidance and encouragement I received from the faculty at Track played a pivotal role in my journey. Their unwavering support helped me excel in the JEE Exam. Today, as a Software Engineer at TCS, I continue to draw upon the foundation they provided me",
    },
    {
        name: "Ravi Kumar",
        position: "Research Scholar @ IIT-Patna & Software Engineer",
        photo: "https://r2.easyimg.io/ck0qd13wb/whatsapp_image_2024-03-01_at_9.15.36_pm.jpeg",
        text: " I extend my heartfelt gratitude to our head, Santosh Sir, for providing top-notch education. Undoubtedly, one of the finest faculty members in Patna, his exceptional teaching style and quality of education have played a significant role in shaping my journey. I take immense pride in the position I've attained today, a testament to the invaluable guidance and teachings I received from him.",
      },
  ];
  
 
let index = 1;

const updateTestimonial = () => {
  const { name, position, photo, text } = testimonials[index];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  index++;
  if (index > testimonials.length - 1) index = 0;
};

setInterval(updateTestimonial, 20000);
