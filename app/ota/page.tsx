"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const OTAPage = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      title: "Convenience",
      description:
        "OTA updates eliminate the need to visit a dealership. Everything is done remotely, directly from the connected car.",
      image: "/images/ota/convenience.png",
    },
    {
      title: "Evolution",
      description:
        "The car stays modern: new features, improved interface, and continuous adaptation to user needs.",
      image: "/images/ota/evolution.png",
    },
    {
      title: "Safety",
      description:
        "Updates quickly fix bugs and strengthen driver-assistance functions.",
      image: "/images/ota/safety.png",
    },
  ];

  const updateSteps = [
    {
      step: "Check your version first",
      description:
        "Go to Settings → System → General to see if your vehicle is up to date.",
      image: "/images/ota/step1.png",
    },
    {
      step: "Look for the download icon",
      description:
        "If an update is available, a little cloud icon will appear at the top left of your central screen.",
      image: "/images/ota/step2.png",
    },
    {
      step: "Download the update",
      description:
        "Tap the cloud to display a pop-up & start downloading — you can even do this while driving!",
      image: "/images/ota/step3.png",
    },
    {
      step: "Install the update",
      description:
        "Once the download is complete the cloud will appear in green, you'll need to park your vehicle to start the installation.",
      image: "/images/ota/step4.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80"></div>
        <div className="relative h-[50lvh] md:h-[70lvh] flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl lg:text-7xl uppercase tracking-wider font-bold mb-4">
              Over-The-Air Updates
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              What if your car evolves on its own?
            </p>
          </div>
        </div>
      </div>

      {/* What is OTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider">
              Your Leapmotor, Always Evolving
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              An Over-The-Air (OTA) update allows a car's software to be updated
              remotely, without visiting a dealership.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Connected vehicles receive updates via the internet, enabling
              manufacturers to fix bugs, enhance security, improve
              driver-assistance systems, and add new features.
            </p>
            <p className="text-gray-700 text-lg">
              This technology ensures that a vehicle evolves over time, stays
              compliant with the latest safety and software standards, and
              continuously adapts to the driver's needs. It's similar to how
              smartphones receive regular updates, but for your car, keeping it
              safer, more efficient, and always up to date.
            </p>
          </div>
          <div className="bg-gray-100 h-80 md:h-96 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src="/images/ota/hero.png"
              alt="OTA Updates"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-50 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-wider text-center">
            Why OTA Updates Matter
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-gray-200 h-48 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Update Section */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 uppercase tracking-wider text-center">
            Update Your Car
          </h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
            A brand-new LEAP OS is here to make your car even smarter and
            smoother to drive! Follow these quick steps to check, download, and
            install the update — it only takes a few minutes.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {updateSteps.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-black text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 uppercase">
                    {item.step}
                  </h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.step}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-wider">
            Keep Your Leapmotor Always Up to Date
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            With Over-the-Air updates, your Leapmotor never becomes obsolete. It
            updates automatically along your journey, so you don't need to visit
            a dealership.
          </p>
          <button className="bg-white text-black px-8 py-3 font-bold uppercase tracking-wider rounded hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default OTAPage;
