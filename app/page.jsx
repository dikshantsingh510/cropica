"use client";
import Marquee from "react-fast-marquee";
import ServicesText from "../components/ServicesText";
import HeroSection from "../components/HeroSection";
import Faq from "../components/Faq";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee
        pauseOnHover
        autoFill
        className="font-medium text-5xl text-accent font-bricolage_gratesque h-28 bg-bg_secondary mb-20"
      >
        Empowering Farmers with Real-Time Market Insights.{" "}
      </Marquee>
      <ServicesText />

      <div className="my-50 min-w-screen h-56 relative">
        <div className="marquee_width absolute -translate-x-10 rotate-6">
          <Marquee
            pauseOnHover
            autoFill
            direction="right"
            className="font-medium text-5xl text-accent font-bricolage_gratesque h-28 bg-bg_secondary mb-20"
          >
            Agra Aligarh Ambedkarnagar Amethi Amroha Auraiya Ayodhya Azamgarh
            Badaun Baghpat Bahraich Ballia Balrampur Banda Barabanki Bareilly
            Basti Bhadohi(Sant Ravi Nagar) Bijnor Bulandshahar Chandauli
            Chitrakut Deoria Etah Etawah Farukhabad Fatehpur Firozabad Gautam
            Budh Nagar Ghaziabad Ghazipur Gonda Gorakhpur Hamirpur Hapur Hardoi
            Hathras Jalaun (Orai) Jaunpur Jhansi Kannuj Kanpur Kanpur Dehat
            Kasganj Kaushambi Khiri (Lakhimpur) Kushinagar Lakhimpur Lalitpur
            Lucknow Maharajganj Mahoba Mainpuri Mathura Mau(Maunathbhanjan)
            Meerut Mirzapur Muzaffarnagar Pillibhit Pratapgarh Prayagraj
            Raebarelli Rampur Saharanpur Sambhal Sant Kabir Nagar Shahjahanpur
            Shamli Shravasti Siddharth Nagar Sitapur Sonbhadra Unnao Varanasi{" "}
          </Marquee>
        </div>
        <div className="marquee_width absolute -translate-x-10 -rotate-6">
          <Marquee
            pauseOnHover
            autoFill
            className="font-medium text-5xl text-bg_secondary font-bricolage_gratesque h-28 bg-accent mb-20"
          >
            Wheat Rice Maize Millets Gram Pea Arhar Moong Rajma Mustard Groundnut
            Sesame Linseed Guava Banana Papaya Onion Tomato Green Peas Cabbage
            Carrot Spinach Brinjal Pumpkin Chili Turmeric Garlic {" "}
          </Marquee>
        </div>
      </div>

      <Faq />
      <Contact />
    </>
  );
}
