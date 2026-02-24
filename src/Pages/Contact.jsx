import React from "react";
import ContactSection from "../Components/ContactSection/ContactSection ";

const Contact = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-2xl font-bold mb-6">About Us</h1>
        <div className="flex flex-col gap-5 mb-6">
          <p>
            In 2018, a small idea sparked a bold vision—to make travel
            effortless, joyful, and unforgettable for everyone. This vision
            brought TripNext to life, a name now synonymous with smart,
            seamless, and reliable travel experiences. Imagine a company where
            every challenge transforms into an opportunity to innovate, create,
            and inspire. Today, this spirit drives our rapid growth, connecting
            travelers across Asia, with operations in Bangladesh, India, and
            Singapore, and expanding to serve global travelers with ease and
            efficiency.
          </p>

          <p>
            TripNext isn’t just about growth—it’s about making a real impact.
            We’ve built a platform that empowers travelers to explore the world
            confidently and effortlessly. Our mission is simple: to make travel
            stress-free, transparent, and accessible to everyone. Whether you
            need expert guidance, personalized recommendations, or assistance at
            any hour, our 24/7 support via chat, email, and hotline ensures your
            journey is smooth from start to finish.
          </p>
          <p>
            At TripNext, innovation, technology, and creativity are at the core
            of everything we do. Our intuitive platform simplifies travel
            planning with real-time pricing, exclusive deals, and tailor-made
            itineraries. From flights and hotels to custom tours, visa services,
            and local experiences, we open the door to limitless travel
            possibilities. Our dedicated team of travel enthusiasts, tech
            innovators, and customer advocates is committed to redefining how
            people travel. Every feature we create, every service we offer, and
            every solution we deliver is designed to make your experience
            seamless, memorable, and truly extraordinary.
          </p>
          <p>
            As one of Bangladesh’s leading travel technology platforms, TripNext
            is not just helping people travel—it’s helping people live their
            dreams. Because we believe dreams aren’t just meant to be
            imagined—they’re meant to be explored, experienced, and shared.
            Together, let’s make every journey a story worth telling, a memory
            worth keeping, and an adventure worth sharing. If you want, I can
            also make a slightly shorter, punchy version for your website banner
            or hero section so it hooks the visitor immediately. Do you want me
            to do that next?
          </p>
        </div>
        <ContactSection />
        <div className="flex flex-col gap-2 mb-6">
          <h1 className="text-2xl font-bold mb-6">Governance and Compliance</h1>
          <p>
            TripNest Limited is a global enterprise, governed by the Singapore
            Travel Agents Act 1975 and Singapore Travel Agents Regulations 2017.
            All services are operated under the laws of Singapore, ensuring
            compliance and transparency across its platforms.
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Contact;
