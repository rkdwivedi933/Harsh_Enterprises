import React from "react";
import TestimonialsCarousel from "../home/TestimonialsCarousel";




const TrustPage = () => {
  return (
    
    <section
    
      className="relative w-full min-h-screen text-white flex items-center justify-center px-6 md:px-16 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1664297428995-652ccd707f77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
        
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-full max-w-6xl">
        <TestimonialsCarousel/>
      </div>
    </section>
  );
};

export default TrustPage;