import { Heart, Target, Eye, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Fostering empathy and kindness in every student',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in education',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'Preparing students for a bright future',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Building character through honest values',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Our School
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Students learning"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-xl shadow-xl">
              <p className="text-4xl font-bold">14+</p>
              <p className="text-sm">Years of Excellence</p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Welcome to Balkanya Primary School
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Located in the heart of Nepal, Balkanya Primary School has been a beacon of quality education
              since 2010. We are committed to providing a nurturing environment where young minds can grow,
              explore, and achieve their full potential.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our dedicated team of experienced teachers uses innovative teaching methods combined with
              traditional values to ensure that every child receives personalized attention and care.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in holistic development, focusing not just on academic excellence but also on
              character building, creativity, and social responsibility.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 duration-300"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{value.title}</h4>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
