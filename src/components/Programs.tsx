import { BookOpen, Users, Palette, Music, Globe, Calculator } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Core Academics',
      description: 'Comprehensive curriculum covering Mathematics, Science, English, and Nepali',
      color: 'bg-blue-100 text-blue-600',
      borderColor: 'border-blue-200',
    },
    {
      icon: Globe,
      title: 'Language Studies',
      description: 'Multilingual education with focus on Nepali, English, and Hindi',
      color: 'bg-emerald-100 text-emerald-600',
      borderColor: 'border-emerald-200',
    },
    {
      icon: Calculator,
      title: 'STEM Education',
      description: 'Hands-on learning in Science, Technology, Engineering, and Mathematics',
      color: 'bg-purple-100 text-purple-600',
      borderColor: 'border-purple-200',
    },
    {
      icon: Palette,
      title: 'Arts & Crafts',
      description: 'Creative expression through drawing, painting, and traditional Nepali art',
      color: 'bg-orange-100 text-orange-600',
      borderColor: 'border-orange-200',
    },
    {
      icon: Music,
      title: 'Music & Dance',
      description: 'Cultural education including traditional Nepali music and folk dances',
      color: 'bg-pink-100 text-pink-600',
      borderColor: 'border-pink-200',
    },
    {
      icon: Users,
      title: 'Physical Education',
      description: 'Sports activities and physical fitness programs for healthy development',
      color: 'bg-teal-100 text-teal-600',
      borderColor: 'border-teal-200',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A well-rounded curriculum designed to nurture every aspect of your child's development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border-2 ${program.borderColor} hover:shadow-2xl transition-all hover:-translate-y-2 duration-300`}
              >
                <div className={`w-16 h-16 ${program.color} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Accredited Curriculum</h3>
              <p className="text-emerald-50 text-lg leading-relaxed mb-6">
                Our programs follow the national education framework of Nepal, approved by the Ministry of Education,
                Science and Technology. We integrate modern teaching methodologies with traditional values to provide
                a world-class education.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-white/20 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Certified by Government of Nepal</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white/20 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Experienced and trained teaching staff</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-white/20 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Regular assessments and parent feedback</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8363026/pexels-photo-8363026.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students in classroom"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
