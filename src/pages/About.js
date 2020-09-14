import React from "react";
import image from "../assets/about.jpg";

export default function About() {
  return (
    <section className="section about-section">
      <div className="about-first">
        <img src={image} alt="about company" />
      </div>

      <div className="about-second">
        <h1 className="section-title">about us</h1>
        <p>
          Over 22 million IT professionals, small businesses, local governments,
          students, engineers, programmers, makers, tech enthusiasts, gamers,
          computer product and electronic device customers have relied on Micro
          Center for their communication and information technology support
          needs since 1979. Micro Center provides the essential services and
          technology to support the health, safety, and welfare of our
          communities.
        </p>
        <p>
          JP Gaming is among the nation's leading information technology,
          communications, and electronic device suppliers, operating twenty-five
          large stores in major markets nationwide. Founded in 1979 in Columbus,
          Ohio, Micro Center has grown steadily and profitably. Our stores are
          designed to supply the needs of a wide variety of consumers – from
          small businesses to local schools - with well-trained associates who
          offer information technology solutions.
        </p>
      </div>
    </section>
  );
}
