import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-6xl font-black text-center text-red-500 mb-8"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
            textShadow: '3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 0px 0px 10px #ff0000',
            letterSpacing: '0.1em'
          }}>
        ABOUT
      </h1>
      
      <img 
        src="/images/IMG_0507.jpeg" 
        alt="John Williams - Soul Saturation" 
        className="w-96 h-96 object-cover rounded-lg shadow-lg mb-8" 
      />
      
      <div className="max-w-4xl text-center">
        <p className="text-lg leading-relaxed mb-6 text-red-800">
          Soul Saturation is a DJ and producer project made by John Williams. John Williams has been making music for ten years now, though his path to electronic music was not direct—for years before this transformation, he had served as a drummer in the clubs and venues of downtown Nashville, night after night watching other men command the stage while he remained fixed behind his kit, a servant to rhythms he did not create.
        </p>
        
        <p className="text-lg leading-relaxed mb-6 text-red-800">
          It was in those dark hours, surrounded by the relentless pulse of bass and the hypnotic repetition of four-on-the-floor beats, that Williams began to understand something fundamental about the nature of club music—that it was not entertainment but ritual, not performance but communion with something deeper and more primal than the sanitized melodies that filled Nashville's honky-tonk establishments during daylight hours.
        </p>
        
        <p className="text-lg leading-relaxed mb-6 text-red-800">
          The Soul Saturation project emerged from this realization, focused entirely on tech house and dark house—music designed not for passive listening but for the specific environment of the club, where strobing lights and compressed air create a psychological state unlike any other. These are tracks built for spaces where normal social conventions dissolve, where the only truth is the beat and the only law is the relentless forward motion of the bassline.
        </p>
        
        <p className="text-lg leading-relaxed text-red-800">
          Williams approaches each composition with the methodical precision of a man who understands that club music is fundamentally different from all other forms—it must function as both individual track and part of a larger sonic architecture, each element calculated to maintain the psychological tension necessary to keep bodies moving in the darkness, minds suspended in that peculiar state between consciousness and surrender that defines the true club experience.
        </p>
      </div>
    </div>
  );
}