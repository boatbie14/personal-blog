function HeroSection() {
  return (
    <section id="hero-section" className="w-full py-10 md:py-20">
      <div className="container flex flex-col gap-[40px] md:gap-[60px] md:flex-row">
        <div id="motto" className="md:w-1/3 md:flex md:flex-col md:justify-center">
          <h1 className="text-[40px] md:text-[56px] poppins-semibold text-center md:text-right pb-4">Stay Informed, Stay Inspired</h1>
          <p className="text-center md:text-right">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.
          </p>
        </div>
        <div id="hero-image" className="h-[470px] md:h-[530px] overflow-hidden md:w-1/3">
          <img src="/assets/images/thedogdev-hero-image.jpg" className="w-auto h-full object-cover rounded-2xl" alt="Hero image" />
        </div>
        <div id="author" className="md:w-1/3 md:flex md:flex-col md:justify-center">
          <h2 className="text-xs text-[#75716B] font-medium pb-3">-Author</h2>
          <h3 className="text-2xl font-semibold pb-4">Kittiphat</h3>
          <p>
            I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy
            sharing insights on feline companionship and wellness.
          </p>
          <br />
          <p>When i’m not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes.</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
