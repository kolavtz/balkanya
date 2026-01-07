import { Library, FlaskConical, Computer, TreePine, Bus, Utensils } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      icon: Library,
      title: 'Library',
      description: 'Well-stocked library with thousands of books in multiple languages',
      image: 'https://images.pexels.com/photos/2898170/pexels-photo-2898170.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: FlaskConical,
      title: 'Science Lab',
      description: 'Modern laboratory for hands-on science experiments',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Computer,
      title: 'Computer Lab',
      description: 'State-of-the-art computer facilities with internet access',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: TreePine,
      title: 'Playground',
      description: 'Spacious outdoor area for sports and recreational activities',
      image: 'https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Bus,
      title: 'Transportation',
      description: 'Safe and reliable school bus service covering major routes',
      image: 'https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      icon: Utensils,
      title: 'Cafeteria',
      description: 'Hygienic cafeteria serving nutritious meals and snacks',
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            World-Class Facilities
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern infrastructure and amenities to support comprehensive learning and development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{facility.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-emerald-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Safe & Secure Environment</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Your child's safety is our top priority. Our campus features comprehensive security measures
              including CCTV surveillance, trained security personnel, and strict visitor protocols.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Security</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-emerald-600 mb-2">CCTV</div>
              <div className="text-gray-700 font-medium">Monitoring</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-emerald-600 mb-2">First Aid</div>
              <div className="text-gray-700 font-medium">Medical Care</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-emerald-600 mb-2">Trained</div>
              <div className="text-gray-700 font-medium">Staff</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
