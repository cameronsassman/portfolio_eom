// Get HTML containers to add elements to
let slidesContainer = document.getElementById("carousel-container");
let bulletsContainer = document.getElementById("carousel-bullets");

// Content for slides
let slideContent = [
  {
    title: "Godwin Dzvapadsva",
    subtitle: "Head of Curriculum and Learning",
    description:
      "I am confident that Cameron can meet your expectations. I recommend him",
    image: "./assets/images/testimonial/godwin.jpeg",
  },
  {
    title: "Robyn Harris",
    subtitle: "Peer",
    description:
      "Cameron is an  exceptional college who has proven to work well, both alone and within a team. He is always prepared for a challenge and will courageously work his way through obstacles in his way.",
    image: "./assets/images/testimonial/robyn.jpg",
  },
  {
    title: "Ethan Lesch",
    subtitle: "Peer",
    description:
      "Cameron is a hard working person he enjoys the excitement of working with people around him and individually he tries hes best to make sure that he accounts everything to suit him in the best way possible",
    image: "./assets/images/testimonial/ethan.JPG",
  },
  {
    title: "Zoe Engel",
    subtitle: "Peer",
    description:
      "Cameron is a very determined and passionate individual, he always strives to do his best when it comes to his work and projects. I find him to be very reliable and I am confident that he will perform well with any company. ",
    image: "./assets/images/testimonial/zoe.jpg",
  },
  {
    title: "Victor Turinayo",
    subtitle: "Peer",
    description:
      "Cameron Sassman is a well reserved individual. Ever since the beginning of the Bootcamp he has been very determined to go beyond the average standards. Constantly looking to advance himself and his work with a ' never - say-diev' attitude.",
    image: "./assets/images/testimonial/victor.JPG",
  },
];
let totalSlides = slideContent.length;

// Function to create bullets
function createBullet(index) {
  // Create button to be clicked on and add attributes
  let bulletButton = document.createElement("button");
  bulletButton.classList.add("carousel-bullet");
  bulletButton.setAttribute("onclick", `bulletSlider(${index})`);

  // Create bullet with active classes
  let bullet = document.createElement("i");
  bullet.classList.add("fas");
  bullet.classList.add("fa-circle");
  if (index == 0) bullet.classList.add("active");

  // Add bullet to bulletButton
  bulletButton.appendChild(bullet);

  // Add bulletButton to buttonContainer
  bulletsContainer.appendChild(bulletButton);
}

// Function to create slides
function createSlide(slide, index) {
  // Create slide container
  let slideWrapper = document.createElement("div");
  slideWrapper.classList.add("carousel-slide");
  if (index == 0) slideWrapper.classList.add("active");

  // Create content for slide
  let slideImage = document.createElement("img");
  slideImage.src = slide.image;

  let slideHeading = document.createElement("h2");
  slideHeading.innerHTML = slide.title;

  let slideSubtitle = document.createElement("h4");
  slideSubtitle.innerHTML = slide.subtitle;

  let slideDescription = document.createElement("p");
  slideDescription.innerHTML = slide.description;

  // Build slide
  slideWrapper.appendChild(slideImage);
  slideWrapper.appendChild(slideHeading);
  slideWrapper.appendChild(slideSubtitle);
  slideWrapper.appendChild(slideDescription);

  // Add slide to container
  slidesContainer.appendChild(slideWrapper);
}

// Initialize Carousel
slideContent.forEach((slide, index) => {
  createBullet(index);
  createSlide(slide, index);
});

let bulletSlider = (index) => {
  let bullets = document.getElementsByClassName("fa-circle");
  for (let i = 0; i < totalSlides; i++) {
    if (index === i) {
      bullets[i].classList.add("active");
      slides[i].classList.add("active");
    } else {
      bullets[i].classList.remove("active");
      slides[i].classList.remove("active");
    }
  }
};

let changeSlide = (toSlide) => {
  let bullets = document.getElementsByClassName("fa-circle");
  let slides = document.getElementsByClassName("carousel-slide");
  for (let i = 0; i < totalSlides; i++) {
    if (slides[i].classList.contains("active")) {
      let endOfArray = i + toSlide > totalSlides - 1 ? true : false;
      let beginningOfArray = i + toSlide < 0 ? true : false;
      slides[i].classList.remove("active");
      bullets[i].classList.remove("active");
      if (endOfArray) {
        slides[0].classList.add("active");
        bullets[0].classList.add("active");
      } else if (beginningOfArray) {
        bullets[totalSlides - 1].classList.add("active");
        slides[totalSlides - 1].classList.add("active");
      } else {
        bullets[i + toSlide].classList.add("active");
        slides[i + toSlide].classList.add("active");
      }
      break;
    }
  }
};
