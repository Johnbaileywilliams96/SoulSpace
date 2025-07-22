import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Full-screen background image */}
      <img 
        src="/images/foggy-weather-5268337_1280.jpg" 
        alt="Foggy Background" 
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />
      
      {/* Content on top */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Semi-transparent overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Content */}
        <div className="relative z-20 flex flex-col min-h-screen">
          <div className="flex justify-center pt-16 pb-8">
            <h1 className="text-6xl font-black text-center text-red-500 tracking-widest drop-shadow-2xl"
                style={{
                  fontFamily: '"Times New Roman", Times, serif',
                  textShadow: '3px 3px 0px #000',
                  letterSpacing: '0.1em'
                }}>
              SOUL SATURATION
            </h1>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <Link href={`/Events`}>
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-lg">
                Events
              </button>
            </Link>

            <Link href={`https://open.spotify.com/artist/7z529bqQyJFGNNEkgvu3b1`}>
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-lg">
                Spotify
              </button>
            </Link>

            <Link href={`/Apparel`}>
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-lg">
                Apparel 
              </button>
            </Link>

            <Link href={`/About`}>
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-lg">
                About 
              </button>
            </Link>

            <Link href={`https://www.instagram.com/soul_saturation_music/`}>
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-md transition-colors shadow-lg">
                Instagram 
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
