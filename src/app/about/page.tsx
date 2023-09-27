import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About FitLord Exercises</h1>
      <p className="about-text">
        Welcome to our FitLord Exercise Website, your online fitness hub! We're
        here to help you move, sweat, and thrive. Get ready to discover
        exercises that will improve your physical and mental wellbeing.
      </p>
      <p className="about-text">
        Our mission is simple: to inspire and empower you to lead a healthier,
        happier life through fitness.
      </p>
      <p className="about-text">
        We believe that exercise is not just about achieving physical strength;
        it's about cultivating mental resilience and a deep sense of well-being.
      </p>
      <p className="about-text">
        Join us today and let's make every day an active adventure!
      </p>
      <p className="about-text">
        Visit <Link href="https://thecodinglord.com.ng/post/how-to-create-a-fitness-app-with-nextjs-and-typescript">thecodinglord.com.ng</Link> to learn how to create
        yours!
      </p>
    </div>
  );
};

export default About;
