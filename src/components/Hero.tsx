import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/8466660/pexels-photo-8466660.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-blue-900/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <p className="text-white text-sm font-medium">Established 2010 • Kathmandu Valley, Nepal</p>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
          Balkanya Primary School
        </h1>

        <p className="text-xl sm:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto animate-slide-up-delay">
          Nurturing Young Minds, Building Bright Futures
        </p>

        <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto animate-slide-up-delay-2">
          A premier educational institution dedicated to providing quality education and holistic development
          for children in Nepal
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-3">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transform hover:scale-105 transition-all shadow-xl"
          >
            Enroll Now
          </button>
          <button
            onClick={scrollToAbout}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 border-2 border-white/30 transform hover:scale-105 transition-all"
          >
            Learn More
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.4s both;
        }
        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.6s both;
        }
        .animate-slide-up-delay-3 {
          animation: slide-up 0.8s ease-out 0.8s both;
        }
      `}</style>
    </section>
  );
}
