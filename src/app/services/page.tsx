"use client"
import React, {useState, useEffect} from "react";
import ServicesHero from '../../components/services/ServicesHero'
import ProjectSection from '../../components/services/Project'
import "../../styles/Services.css";
import Navigation from "../../components/Navigation";
import Loading from "../loadingscreen/page";

const ParentComponent: React.FC<{}> = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Set to 1 seconds

    return () => clearTimeout(timer);
  }, []);

    return (
    <>
      {loading && <Loading />} {/* This will render the Loading component over the content */}
      <main className={`services bg-[#000] h-screen p-0 ${loading ? 'opacity-0' : 'opacity-1'} relative w-full`}>
    <Navigation page="services"/>
      <section className="h-screen">
          <ServicesHero />
         <ProjectSection/>
      </section>
    </main>
    </>
  )
}
export default ParentComponent;