import React from "react";
import ApplyNowImage from "./assets/ApplyNow.png"; // Import the image file
import BgImage from "./assets/bg.png";
import Cad1 from "./assets/Candle.png"; 
import cad2 from "./assets/Candle(1).png";
import HeaderImage from "./assets/Logo3.png"; // Assuming this is the image you want to add below the header

const FinothonPage = () => {
  return (
    <div className="min-h-screen relative bg-[rgba(255,251,245,1)]">
      {/* Content Container */}
      <div className="pt-12 px-4 sm:px-12">
        {/* Header Section */}
        <h1 className="text-gray-600 mb-4 text-xl sm:text-2xl lg:text-3xl" style={{ fontFamily: "Montserrat", fontWeight: "400", textAlign: "left", color: "rgba(110, 115, 124, 1)" }}>
          The Ultimate Financial Analysis Challenge
        </h1>

        {/* FINOTHON Heading and Images */}
        <div className="flex items-center gap-4 mb-6">
  <h2
    style={{
      fontSize: "10vw",
      fontWeight: "700",
      lineHeight: "1.2",
      textAlign: "left",
      color: "rgba(3, 98, 76, 1)"
    }}
  >
    FINOTHON
  </h2>

  {/* Images Next to FINOTHON */}
  <div className="flex gap-2">
  <img
    src={cad2}
    alt="Candle 1"
    className="w-[30px] h-[102px] mt-12 sm:w-[20px] sm:h-[80px] md:w-[30px] md:h-[102px]" // Adjust the size for different screen sizes
  />

  <img
    src={Cad1}
    alt="Candle 2"
    className="w-[30px] h-[180px] sm:w-[20px] sm:h-[60px] md:w-[30px] md:h-[180px]" // Adjust the size for different screen sizes
  />
</div>

</div>


        <div className="flex items-center mb-4">
          <img src={HeaderImage} alt="Logo" className="w-[54px] h-[54px] mr-2" />
          <p className="text-gray-500 font-satoshi">Powered by TheWealthifyMe</p>
        </div>
        
        {/* Moved Paragraph Outside */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 sm:pl-8 sm:pr-12 sm:max-w-3xl md:text-xl md:pl-12 md:pr-20 md:max-w-4xl mx-auto" style={{ marginLeft: 'auto' }}>
          Finothon is not just a competition; it’s a journey into the fascinating world of data and finance. Participants will be challenged with real-world SMS and email datasets to analyze and craft detailed financial reports. Whether you’re a student, a budding analyst, or a seasoned data enthusiast, Finothon is your platform to shine.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full items-center sm:items-start">
          {/* Yellow Button */}
          <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition w-full sm:w-max">
            Registrations end soon. Hurry up and grab your spot!
          </button>

          {/* Green Buttons Container */}
          <div className="flex items-center gap-2 relative w-full sm:w-auto justify-center sm:justify-start">
            {/* Claim Button with Image */}
            <div className="relative">
              <button className="bg-[rgba(3,98,76,1)] text-white font-bold py-2 px-6 rounded hover:bg-[rgba(2,80,62,1)] transition">
                Claim your spot
              </button>

              <img
                src={ApplyNowImage} // Use imported image
                alt="Overlapping"
                className="absolute -top-12 sm:-top-16 -left-16 sm:left-0 w-[80px] h-[80px] sm:w-[195.79px] sm:h-[195.83px] z-10 hidden sm:block"
                style={{ transform: "rotate(359.5deg)" }} // Custom rotation
              />
            </div>

            {/* Small Symbol Button */}
            <button className="w-12 h-12 sm:w-10 sm:h-10 bg-[rgba(3,98,76,1)] text-white font-bold rounded flex items-center justify-center hover:bg-[rgba(2,80,62,1)] transition">
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="absolute bottom-[-180px] right-0 left-auto h-[400px] sm:h-[500px] md:h-[600px] mx-4 sm:mx-12">
        <img
          src={BgImage} // Use imported image
          alt="Background Chart"
          className="w-full h-full object-fill"
        />
      </div>
    </div>
  );
};

export default FinothonPage;
