import { useState, useEffect } from "react";
import { Building2, Factory, Cpu, MessageSquareQuote } from "lucide-react";


const testimonialsData = [
  { 
    id: 1, 
    icon: Building2, 
    title: "Agri Development Office, Satna", 
    description: "Harsh Enterprises has been a reliable partner for high-quality seedling trays. Their products have significantly improved nursery efficiency and plant survival rates." 
  },
  { 
    id: 2, 
    icon: Cpu, 
    title: "TFP Agro Technologies, Satna", 
    description: "The consistency and durability of HIPS rolls supplied by Harsh Enterprises are excellent. Their modern manufacturing standards truly reflect in product performance." 
  },
  { 
    id: 3, 
    icon: Factory, 
    title: "Agro Processing Unit Team", 
    description: "We are impressed with the quality control and timely delivery. The cocopeat and seedling trays meet our operational needs perfectly." 
  },
  { 
    id: 4, 
    icon: Building2, 
    title: "GreenGrow Nursery Solutions", 
    description: "Their seedling trays have helped us achieve uniform plant growth. The team is professional, responsive, and understands agricultural requirements deeply." 
  },
  { 
    id: 5, 
    icon: Factory, 
    title: "Krushi Manufacturing Pvt. Ltd.", 
    description: "From product strength to packaging quality, everything reflects excellence. Harsh Enterprises has become our trusted supplier for agricultural inputs." 
  },
];



const TestimonialCard = ({ testimonial }) => {
  const Icon = testimonial.icon;
  return (
    
    <div className="bg-linear-to-br from-green-900/50 to-green-900/50  rounded-2xl p-6 md:p-8  w-full max-w-75 mx-auto shrink-0">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-transparent flex items-center justify-center border-4 border-secondary shadow-lg">
          <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="text-white text-xl md:text-2xl font-bold text-center mb-2 line-clamp-2">{testimonial.title}</h3>
     
      <p className="text-white text-center leading-relaxed italic text-sm md:text-base pb-5 line-clamp-3">{testimonial.description}</p>
    </div>
  );
};

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const maxIndex = Math.max(0, testimonialsData.length - visibleCards);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev =>
        prev < maxIndex ? prev + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div className="py-10  overflow-hidden"
     >
      <div className="max-w-7xl mx-auto">
        
        

        <div className="relative">
          <div className="overflow-hidden  ">
            <div
              className="flex    transition-transform duration-500 "
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {testimonialsData.map(testimonial => (
                
                //  THE FIX: WRAPPER ADDED HERE 
                <div
                  key={testimonial.id}
                  className="w-full shrink-0 sm:w-[50%] md:w-[50%] lg:w-[33.33%]"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>

              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-secondary/20" : "w-3 bg-primary/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
