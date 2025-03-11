import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <section id="hero-section">
        <div className="container flex">
          <div id="motto" className="">
            <h1>Stay Informed, Stay Inspired</h1>
            <p>Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.</p>
          </div>
          <div id="hero-image">
            <img src="/assets/images/thedogdev-hero-image.jpg" alt="Hero image" />
          </div>
          <div id="author">
            <h2>-Author</h2>
            <h3>Thompson P.</h3>
            <p>
              I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy
              sharing insights on feline companionship and wellness.{" "}
            </p>
            <p>When i’m not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
