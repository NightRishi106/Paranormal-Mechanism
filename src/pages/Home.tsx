import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

let videoPlayedThisSession = false;

export default function Home() {
  const [hasPlayed] = useState(videoPlayedThisSession);

  useEffect(() => {
    videoPlayedThisSession = true;
  }, []);

  return (
    <div className="relative overflow-hidden selection:bg-[#ba060a] selection:text-white pb-0">
      
      {/* Header Section */}	
      <header className="full-width px-5 md:px-[50px] py-[50px] text-center">	
        <div className="flex flex-wrap justify-center items-center gap-y-6">

          <div className="w-full md:w-3/12 flex justify-center md:justify-start md:pl-12 lg:pl-24">
            <div className="pt-[30px] md:pt-0 max-w-[55%] md:max-w-full">
              <img src="https://paranormalmechanism.com/images/logo.webp" alt="Logo" className="max-w-full" />
            </div>
          </div>		
        
          <div className="w-full md:w-9/12 flex justify-center">
            <div className="horror-eye-wrapper max-w-[700px] w-full aspect-[16/8] relative">
              {!hasPlayed ? (
                <video 
                  autoPlay 
                  muted 
                  playsInline
                  className="horror-video-target w-full h-full object-cover object-top"
                  poster="https://paranormalmechanism.com/images/Eye-BG.webp"
                >
                  <source src="/eye-opening.mp4" type="video/mp4" />
                  <img 
                    src="https://paranormalmechanism.com/images/Eye-BG.webp" 
                    alt="Paranormal Mechanism" 
                    className="w-full h-full object-cover" 
                  />
                </video>
              ) : (
                <img 
                  src="https://paranormalmechanism.com/images/Eye-BG.webp" 
                  alt="Paranormal Mechanism" 
                  className="w-full h-full object-cover object-top" 
                />
              )}
            </div>
          </div>
          
          <div className="w-full text-center mt-6 md:mt-[30px] pt-[25px] md:pt-[50px] lg:pt-[30px]">
            <Link 
              to="/request-investigation" 
              className="btn-bg inline-block text-white text-[28px] sm:text-[35px] font-semibold py-[10px] px-[20px] sm:px-[35px] hover:text-[#175cff] transition-all"
            >
              Book Investigation
            </Link>
          </div>
        
        </div>		
      </header>

      <main className="w-full">	

        {/* Section One */}
        <section className="w-full px-5 md:px-[50px] py-[50px] overflow-hidden">
          <div className="flex flex-wrap justify-center">	
          
            <div className="w-full xl:w-9/12 mb-[35px] px-0 md:px-3 text-center">
              <h2 className="title-decoration text-[37px] md:text-[42px] lg:text-[50px] leading-[52px] md:leading-[54px] lg:leading-[60px] font-bold">
                Featured Cases
              </h2>
            </div>
            
            <div className="w-full md:w-4/12 mb-[30px] border-b border-[#ba060a] md:border-0 pb-2 md:pb-0 text-center group cursor-pointer">
              <div className="mb-[2px] relative overflow-hidden shadow-[0_60px_20px_rgba(0,0,0,0.01)] inline-block w-full">
                <img src="https://paranormalmechanism.com/images/haunted-images-1.webp" alt="Burari Case" className="w-full grayscale-0 group-hover:grayscale transition-all duration-300 transform scale-[1.01] group-hover:scale-110" />
              </div>
              <div className="p-2.5">
                <h3 className="text-[31px] md:text-[35px] lg:text-[38px] leading-[44px] font-semibold mb-2.5 text-white">Burari Case</h3>
                <h4 className="text-[25px] leading-[40px] font-normal text-white">Truth or Ritual?</h4>
              </div>
            </div>

            <div className="w-full md:w-4/12 mb-[30px] border-b border-[#ba060a] md:border-0 pb-2 md:pb-0 text-center group cursor-pointer">
              <div className="mb-[2px] relative overflow-hidden shadow-[0_60px_20px_rgba(0,0,0,0.01)] inline-block w-full">
                <img src="https://paranormalmechanism.com/images/haunted-images-2.webp" alt="Haunted Locations" className="w-full grayscale-0 group-hover:grayscale transition-all duration-300 transform scale-[1.01] group-hover:scale-110" />
              </div>
              <div className="p-2.5">
                <h3 className="text-[31px] md:text-[35px] lg:text-[38px] leading-[44px] font-semibold mb-2.5 text-white">Haunted Locations</h3>
                <h4 className="text-[25px] leading-[40px] font-normal text-white">Real Encounters</h4>
              </div>
            </div>

            <div className="w-full md:w-4/12 mb-[30px] border-b border-[#ba060a] md:border-0 pb-2 md:pb-0 text-center group cursor-pointer">
              <div className="mb-[2px] relative overflow-hidden shadow-[0_60px_20px_rgba(0,0,0,0.01)] inline-block w-full">
                <img src="https://paranormalmechanism.com/images/haunted-images-3.webp" alt="Shmashan Experiment" className="w-full grayscale-0 group-hover:grayscale transition-all duration-300 transform scale-[1.01] group-hover:scale-110" />
              </div>
              <div className="p-2.5">
                <h3 className="text-[31px] md:text-[35px] lg:text-[38px] leading-[44px] font-semibold mb-2.5 text-white">Shmashan Experiment</h3>
                <h4 className="text-[25px] leading-[40px] font-normal text-white">Dark Reality</h4>
              </div>
            </div>

          </div>
        </section>

        {/* Section Two */}
        <section className="w-full text-center relative py-[50px] pb-0">
          <div className="flex flex-wrap justify-center">	

            <div className="w-full xl:w-9/12 mb-[35px] px-0 md:px-3 text-center">
              <h2 className="title-decoration text-[37px] md:text-[42px] lg:text-[50px] leading-[52px] md:leading-[54px] lg:leading-[60px] font-bold">
                Real Evidence
              </h2>
            </div>			
              
            <div className="w-full lg:w-7/12 px-5 md:px-[50px] lg:pl-[115px] pt-10 lg:pt-[150px] text-center lg:text-left flex flex-col items-center lg:items-start text-white">
              <div className="w-full">
                <h1 className="text-[40px] md:text-[50px] lg:text-[60px] leading-[52px] md:leading-[68px] lg:leading-[75px] font-medium text-white">Ram Ashok Kumar</h1>
                <p className="text-[21px] mt-2 mb-4">Paranormal Investigator & Tantra Practitioner Since 2003.</p>
                <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-semibold pt-2.5 text-white">" डर के पीछे हमेशा सच छुपा होता है "</h3>			
              </div>
              <div className="pt-10 md:pt-[50px] lg:pt-[150px] inline-block">
                <Link 
                  to="/request-investigation" 
                  className="btn-bg inline-block text-white text-[27px] sm:text-[35px] font-semibold py-[10px] px-[20px] sm:px-[35px] hover:text-[#175cff] transition-all"
                >
                  Start Investigation
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-5/12 text-center lg:text-right mt-10 lg:mt-0 px-5 md:px-[50px] lg:px-0">
              <div className="inline-block max-w-full">
                <img src="https://paranormalmechanism.com/images/men-img.webp" alt="Ram Ashok Kumar" className="max-w-full inline-block align-bottom" />
              </div>
            </div>		
            
          </div>
        </section>
        
      </main>

      {/* Footer Section */} 
      <footer className="w-full lg:absolute bottom-0 left-0 lg:pl-[100px] text-[#b3a7ac] text-center lg:text-left pt-10 lg:pt-0 pb-6 lg:pb-0 px-5 md:px-[25px]"> 
        <p className="text-[16px] md:text-[18px] leading-[23px] md:leading-[28px]">
          © 2026 Paranormal Mechanism | Investigation the Unknown | All Rights Reserved. 
        </p>
      </footer>

    </div>
  );
}
