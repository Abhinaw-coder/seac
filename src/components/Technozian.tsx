import React, { useState } from 'react';
import { Zap, Calendar, MapPin, Trophy, Users, Sparkles, ArrowRight } from 'lucide-react';
import EventDetailModal from './EventDetailModal';

const Technozian: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const technozianEvents = [
    {
      id: 't1',
      title: 'Robotics Championship',
      description: 'Design, build, and compete with your autonomous robots in thrilling challenges.',
      category: 'Competition',
      icon: '🤖',
      prize: '₹50,000',
    },
    {
      id: 't2',
      title: 'Coding Marathon',
      description: '24-hour hackathon to solve real-world problems with innovative tech solutions.',
      category: 'Hackathon',
      icon: '💻',
      prize: '₹75,000',
    },
    {
      id: 't3',
      title: 'Tech Talk Series',
      description: 'Industry experts share insights on AI, IoT, and emerging technologies.',
      category: 'Workshop',
      icon: '🎤',
      prize: 'Certificates',
    },
    {
      id: 't4',
      title: 'Innovation Showcase',
      description: 'Present your groundbreaking projects to investors and industry leaders.',
      category: 'Exhibition',
      icon: '💡',
      prize: '₹1,00,000',
    },
    {
      id: 't5',
      title: 'Gaming Arena',
      description: 'E-sports tournaments featuring popular games with exciting prizes.',
      category: 'Gaming',
      icon: '🎮',
      prize: '₹30,000',
    },
    {
      id: 't6',
      title: 'Circuit Debugging',
      description: 'Test your electronics skills by identifying and fixing circuit faults.',
      category: 'Competition',
      icon: '⚡',
      prize: '₹25,000',
    },
  ];

  return (
    <section id="technozian" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-lg shadow-blue-500/50">
              <Zap className="h-5 w-5 text-yellow-300 animate-pulse" />
              <span className="text-white font-bold text-sm tracking-wider">THE BIGGEST TECH EVENT</span>
              <Zap className="h-5 w-5 text-yellow-300 animate-pulse" />
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide text-gray-900 dark:text-white"
              style={{
                fontFamily: "'Bitcount Prop Double Ink', system-ui",
                fontOpticalSizing: 'auto',
                fontWeight: 700,
                fontStyle: 'normal'
              }}
            >
              TECHNOZIAN
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Our college's most <span className="text-cyan-600 dark:text-cyan-400 font-bold">energetic</span> and <span className="text-blue-600 dark:text-blue-400 font-bold">electrifying</span> tech festival
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              <div className="text-left">
                <div className="text-sm text-gray-600 dark:text-gray-400">Event Date</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">March 15-17, 2026</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <div className="text-left">
                <div className="text-sm text-gray-600 dark:text-gray-400">Expected Participants</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">5000+ Students</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Trophy className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              <div className="text-left">
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Prize Pool</div>
                <div className="text-lg font-bold text-gray-900 dark:text-white">₹5,00,000+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Poster/Banner */}
        <div className="mb-16 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          <div className="relative bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl overflow-hidden border border-blue-200 dark:border-blue-500/30 shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

            <div className="relative p-12 md:p-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 dark:bg-cyan-500/20 border border-cyan-300 dark:border-cyan-500/30 rounded-full mb-6">
                    <Sparkles className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-cyan-700 dark:text-cyan-400 text-sm font-semibold">FLAGSHIP EVENT</span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
                    Innovation Meets
                    <span className="block text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text">
                      Inspiration
                    </span>
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                    Three days of non-stop innovation, competition, and celebration. Experience cutting-edge technology,
                    compete in thrilling challenges, and network with industry leaders.
                  </p>

                  <a href="#technozian-register" className="group/btn flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl font-bold text-white shadow-lg shadow-blue-500/50 transition-all duration-300 transform md:hover:scale-105">
                    Register Now
                    <ArrowRight className="h-5 w-5 md:group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Technozian Event"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl transform rotate-12">
                    <div className="text-center">
                      <div className="text-2xl font-black text-slate-900">NEW</div>
                      <div className="text-xs font-bold text-slate-900">2026</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Featured <span className="text-cyan-600 dark:text-cyan-400">Events</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technozianEvents.map((event, index) => (
              <div
                key={event.id}
                className="group relative bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 hover:border-cyan-500/50 transition-all duration-500 md:transform md:hover:-translate-y-2 md:hover:shadow-2xl md:hover:shadow-cyan-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-600/0 md:group-hover:from-blue-600/5 md:group-hover:to-cyan-600/5 rounded-2xl transition-all duration-500"></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{event.icon}</div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-500/20 border border-blue-300 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
                      {event.category}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 md:group-hover:text-cyan-600 dark:md:group-hover:text-cyan-400 transition-colors">
                    {event.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                      <span className="text-gray-900 dark:text-white font-bold">{event.prize}</span>
                    </div>
                    <button
                      onClick={() => setSelectedEvent({
                        ...event,
                        date: '2026-03-15',
                        time: '10:00 AM',
                        location: 'Main Campus - Event Hall',
                        description: event.description,
                        longDescription: event.description + ' Join us for an exciting experience with hands-on activities, expert guidance, and amazing prizes!',
                        members: ['Tech Team Lead', 'Event Coordinator', 'Volunteer Staff'],
                        poc: 'Event Manager',
                        formLink: 'https://forms.google.com/technozian-registration',
                      })}
                      className="text-cyan-600 dark:text-cyan-400 font-semibold hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors flex items-center gap-1 group/arrow"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 md:group-hover/arrow:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>

      <EventDetailModal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        event={selectedEvent || {
          title: '',
          description: '',
          date: '',
          time: '',
          location: '',
        }}
      />
    </section>
  );
};

export default Technozian;
