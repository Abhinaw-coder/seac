import React from 'react';
import { X, Calendar, Clock, MapPin, Users, User, ExternalLink } from 'lucide-react';

interface EventDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image_url?: string;
    members?: string[];
    poc?: string;
    formLink?: string;
    longDescription?: string;
  };
}

const EventDetailModal: React.FC<EventDetailModalProps> = ({ isOpen, onClose, event }) => {
  if (!isOpen) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-4 float-right mr-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 z-10"
          aria-label="Close modal"
        >
          <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>

        {event.image_url && (
          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
            <img
              src={event.image_url}
              alt={event.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">
                {event.title}
              </h2>
              <p className="text-blue-200 text-sm font-medium">Detailed Event Information</p>
            </div>
          </div>
        )}

        <div className="p-6 md:p-10">
          {!event.image_url && (
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6">
              {event.title}
            </h2>
          )}

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/40">
                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Event Date</div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">{formatDate(event.date)}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl border border-cyan-100 dark:border-cyan-800">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-900/40">
                <Clock className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Time</div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">{event.time}</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/40">
                <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Location</div>
                <div className="text-sm font-bold text-gray-900 dark:text-white">{event.location}</div>
              </div>
            </div>

            {event.poc && (
              <div className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/40">
                  <User className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Point of Contact</div>
                  <div className="text-sm font-bold text-gray-900 dark:text-white">{event.poc}</div>
                </div>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About This Event</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              {event.longDescription || event.description}
            </p>
          </div>

          {event.members && event.members.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Team Members Involved
              </h3>
              <div className="flex flex-wrap gap-3">
                {event.members.map((member, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border border-blue-200 dark:border-blue-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>
          )}

          {event.formLink && (
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-l-4 border-orange-500 p-6 rounded-lg mb-8">
              <h4 className="text-lg font-bold text-orange-900 dark:text-orange-200 mb-2">
                Registration Required
              </h4>
              <p className="text-orange-800 dark:text-orange-300 mb-4">
                Don't miss out! Fill the registration form to secure your spot at this amazing event.
              </p>
              <a
                href={event.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Register Now
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default EventDetailModal;
