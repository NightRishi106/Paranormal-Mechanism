import { useState } from 'react';
import { Upload, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InvestigationRequest() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedType || !selectedLevel) {
      alert("Please select Investigation Type and Disturbance Level.");
      return;
    }
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
    }, 3500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-[#ba060a] selection:text-white">
      {/* Subtle fog/smoke effect using radial gradients */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ba060a]/40 via-[#000000]/70 to-[#000000]/90 pointer-events-none z-0 mix-blend-overlay"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-5 py-10 md:py-20">
        
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-[#ba060a] hover:text-[#ff1a1f] transition-colors mb-12 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-[45px] md:text-[60px] lg:text-[75px] leading-[47px] md:leading-tight font-bold text-[#ba060a] tracking-widest mb-4" style={{ textShadow: '0 0 40px rgba(186, 6, 10, 0.6)' }}>
            Request Investigation
          </h1>
          <p className="text-[#b3a7ac] text-lg md:text-2xl font-light italic mt-4 max-w-3xl mx-auto" style={{ marginLeft: '100px', marginRight: '10px', paddingTop: '30px', paddingLeft: '0px', paddingBottom: '30px' }}>
            "Every report is reviewed confidentially before intervention. The unknown requires precision."
          </p>
        </div>

        {formState === 'idle' && (
          <form onSubmit={handleFormSubmit} className="bg-[#050000]/80 border border-[#ba060a]/30 p-8 md:p-14 rounded-2xl backdrop-blur-xl shadow-[0_0_100px_rgba(20,0,0,1)] text-left relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ba060a] to-transparent opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ba060a] to-transparent opacity-50"></div>
            
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col space-y-3">
                <label className="text-xs text-[#b3a7ac] uppercase tracking-[0.2em] font-semibold flex items-center gap-2"><i className="fa-solid fa-user text-[#ba060a]"></i> Full Name</label>
                <input required type="text" placeholder="Enter your name" className="w-full bg-[#0a0000] border-b border-[#330000] px-4 py-3 text-gray-200 placeholder-gray-700 focus:outline-none focus:border-[#ba060a] transition-all duration-300 focus:bg-[#0f0000] focus:shadow-[0_4px_20px_-10px_rgba(186,6,10,0.3)]" />
              </div>
              <div className="flex flex-col space-y-3">
                <label className="text-xs text-[#b3a7ac] uppercase tracking-[0.2em] font-semibold flex items-center gap-2"><i className="fa-solid fa-envelope text-[#ba060a]"></i> Email Address</label>
                <input required type="email" placeholder="investigation@email.com" className="w-full bg-[#0a0000] border-b border-[#330000] px-4 py-3 text-gray-200 placeholder-gray-700 focus:outline-none focus:border-[#ba060a] transition-all duration-300 focus:bg-[#0f0000] focus:shadow-[0_4px_20px_-10px_rgba(186,6,10,0.3)]" />
              </div>
              <div className="flex flex-col space-y-3 md:col-span-2">
                <label className="text-xs text-[#b3a7ac] uppercase tracking-[0.2em] font-semibold flex items-center gap-2"><i className="fa-solid fa-phone text-[#ba060a]"></i> Phone Number</label>
                <input required type="tel" placeholder="Enter contact number" className="w-full bg-[#0a0000] border-b border-[#330000] px-4 py-3 text-gray-200 placeholder-gray-700 focus:outline-none focus:border-[#ba060a] transition-all duration-300 focus:bg-[#0f0000] focus:shadow-[0_4px_20px_-10px_rgba(186,6,10,0.3)]" />
              </div>
            </div>

            {/* Investigation Type */}
            <div className="mb-10">
              <label className="text-xs text-[#b3a7ac] uppercase tracking-[0.2em] font-semibold block mb-5 border-b border-[#330000] pb-2">Investigation Type</label>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {name: 'Haunted House', icon: 'fa-house-chimney-crack'}, 
                  {name: 'Black Magic', icon: 'fa-star-of-david'}, 
                  {name: 'Shadow Presence', icon: 'fa-eye'}, 
                  {name: 'Paranormal Activity', icon: 'fa-ghost'}, 
                  {name: 'Energy Cleansing', icon: 'fa-wind'}, 
                  {name: 'Unknown Disturbance', icon: 'fa-triangle-exclamation'}
                ].map(type => (
                  <div key={type.name} onClick={() => setSelectedType(type.name)} className={`cursor-pointer border border-[#330000] p-5 rounded-lg flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 ${selectedType === type.name ? 'bg-[rgba(186,6,10,0.1)] border-[#ba060a] shadow-[0_0_20px_rgba(186,6,10,0.2)]' : 'bg-[#080000] hover:border-[#ba060a]/50 hover:bg-[#0f0000]'}`}>
                    <i className={`fa-solid ${type.icon} text-2xl mb-3 ${selectedType === type.name ? 'text-[#ff1a1f] drop-shadow-[0_0_8px_rgba(255,26,31,0.8)]' : 'text-[#550000] drop-shadow-[0_0_5px_rgba(85,0,0,0.8)]'}`}></i>
                    <span className={`text-sm ${selectedType === type.name ? 'text-[#ff4d4d]' : 'text-[#b3a7ac]'}`}>{type.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disturbance Level */}
            <div className="mb-10">
              <label className="text-xs text-[#b3a7ac] uppercase tracking-[0.2em] font-semibold block mb-5 border-b border-[#330000] pb-2">Disturbance Level</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Mild', 'Repeated Activity', 'Dangerous', 'Critical'].map(level => (
                  <div key={level} onClick={() => setSelectedLevel(level)} className={`cursor-pointer border py-4 px-2 rounded text-center transition-all duration-300 ${selectedLevel === level ? 'bg-gradient-to-t from-[#ba060a] to-[#7a0000] border-[#ff1a1f] text-white shadow-[0_0_25px_rgba(186,6,10,0.6)] font-bold scale-105' : 'bg-[#080000] border-[#330000] text-[#b3a7ac] hover:border-[#ba060a]/50'}`}>
                    <span className="text-[11px] uppercase tracking-[0.15em]">{level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Incident Description */}
            <div className="mb-10">
              <label className="text-xs text-[#b3a7ac] uppercase tracking-[0.2em] font-semibold flex items-center gap-2 mb-4"><i className="fa-solid fa-file-signature text-[#ba060a]"></i> Incident Description</label>
              <textarea required rows={5} placeholder="Describe the activity, experiences, sounds, sightings, or disturbances..." className="w-full bg-[#0a0000] border border-[#330000] rounded-lg p-5 text-gray-200 placeholder-gray-700 focus:outline-none focus:border-[#ba060a] transition-all duration-300 focus:bg-[#0f0000] focus:shadow-[0_4px_20px_-10px_rgba(186,6,10,0.3)] resize-none"></textarea>
            </div>

            {/* Address, Date, Time */}
            <div className="mb-10">
              <label className="text-xs text-[#b3a7ac] uppercase tracking-[0.2em] font-semibold flex items-center gap-2 mb-4"><i className="fa-solid fa-map-location-dot text-[#ba060a]"></i> Investigation Address</label>
              <textarea required rows={2} placeholder="Enter investigation location..." className="w-full bg-[#0a0000] border border-[#330000] rounded-lg p-5 text-gray-200 placeholder-gray-700 focus:outline-none focus:border-[#ba060a] transition-all duration-300 focus:bg-[#0f0000] focus:shadow-[0_4px_20px_-10px_rgba(186,6,10,0.3)] resize-none mb-8"></textarea>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col space-y-3">
                  <label className="text-xs text-[#b3a7ac] uppercase tracking-[0.2em] font-semibold flex items-center gap-2"><i className="fa-solid fa-calendar-days text-[#ba060a]"></i> Preferred Date</label>
                  <input required type="date" className="w-full bg-[#0a0000] border-b border-[#330000] px-4 py-3 text-gray-200 focus:outline-none focus:border-[#ba060a] transition-all duration-300 focus:bg-[#0f0000] [color-scheme:dark]" />
                </div>
                <div className="flex flex-col space-y-3">
                  <label className="text-xs text-[#b3a7ac] uppercase tracking-[0.2em] font-semibold flex items-center gap-2"><i className="fa-solid fa-clock text-[#ba060a]"></i> Preferred Time</label>
                  <input required type="time" className="w-full bg-[#0a0000] border-b border-[#330000] px-4 py-3 text-gray-200 focus:outline-none focus:border-[#ba060a] transition-all duration-300 focus:bg-[#0f0000] [color-scheme:dark]" />
                </div>
              </div>
            </div>

            {/* Evidence Upload */}
            <div className="mb-12">
              <label className="text-xs text-[#b3a7ac] uppercase tracking-[0.2em] font-semibold flex items-center gap-2 mb-2"><i className="fa-solid fa-upload text-[#ba060a]"></i> Upload Evidence</label>
              <p className="text-[13px] text-[#ff4d4d] mb-4 italic mt-1 opacity-80">Unexplained recordings are often the most valuable.</p>
              <div className="w-full border-2 border-dashed border-[#330000] hover:border-[#ba060a] bg-[rgba(10,0,0,0.5)] rounded-lg p-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group hover:bg-[#0f0000]">
                <Upload className="w-12 h-12 text-[#ba060a]/50 group-hover:text-[#ba060a] mb-4 transition-colors" />
                <span className="text-[#b3a7ac] group-hover:text-gray-200 text-lg uppercase tracking-widest font-light">Click or drag files here</span>
                <span className="text-sm text-gray-600 mt-2 font-mono">Images, Audio, Video</span>
                <input type="file" className="hidden" multiple accept="image/*,video/*,audio/*" />
              </div>
            </div>

            {/* Consent */}
            <div className="mb-10 flex items-center space-x-4 bg-[#0a0000] p-5 rounded-lg border border-[#330000]">
              <input required type="checkbox" id="consent" className="w-6 h-6 accent-[#ba060a] cursor-pointer" />
              <label htmlFor="consent" className="text-gray-300 text-sm cursor-pointer select-none">I confirm the information provided is truthful.</label>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-[#5a0000] via-[#ba060a] to-[#5a0000] hover:from-[#ba060a] hover:via-[#ff1a1f] hover:to-[#ba060a] bg-[length:200%_auto] text-white uppercase tracking-[0.3em] font-bold py-6 rounded shadow-[0_0_30px_rgba(186,6,10,0.5)] hover:shadow-[0_0_50px_rgba(186,6,10,0.9)] transition-all duration-500 border border-[#ff4d4d]/40 relative overflow-hidden group">
              <span className="relative z-10 text-xl">Open Case File</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
          </form>
        )}

        {formState === 'loading' && (
          <div className="bg-[#050000]/90 border border-[#ba060a]/40 px-10 py-24 rounded-2xl backdrop-blur-md shadow-[0_0_120px_rgba(186,6,10,0.8)] flex flex-col items-center justify-center min-h-[500px] animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 bg-[#020000] opacity-20 mix-blend-overlay"></div>
            <div className="w-24 h-24 border-[6px] border-t-[#ff1a1f] border-r-transparent border-b-[#5a0000] border-l-transparent rounded-full animate-spin mb-8 shadow-[0_0_30px_#ba060a]"></div>
            <h3 className="text-3xl font-bold text-[#ff1a1f] tracking-[0.3em] uppercase mb-4" style={{ textShadow: '0 0 20px rgba(255, 26, 31, 0.8)' }}>Transmitting Data</h3>
            <p className="text-[#b3a7ac] italic text-xl tracking-wider">Encrypting case file...</p>
          </div>
        )}

        {formState === 'success' && (
          <div className="bg-[#050000]/90 border border-green-900/50 px-10 py-24 rounded-2xl backdrop-blur-md shadow-[0_0_100px_rgba(0,100,0,0.3)] flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden">
            <div className="w-28 h-28 bg-green-900/20 border border-green-500/50 rounded-full flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(0,255,0,0.2)]">
              <i className="fa-solid fa-check text-5xl text-green-500 drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]"></i>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-200 tracking-widest mb-6 uppercase text-center">Case Registered.</h3>
            <p className="text-[#b3a7ac] text-xl mb-12 text-center italic">An investigator will contact you after review.</p>
            <button onClick={() => setFormState('idle')} className="text-[#ba060a] hover:text-[#ff1a1f] uppercase tracking-[0.3em] font-bold text-sm border-b-2 border-transparent hover:border-[#ff1a1f] transition-all pb-1">Return to Safe Zone</button>
          </div>
        )}
      </div>
    </div>
  );
}
