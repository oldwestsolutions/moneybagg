import { Profile as ProfileType } from '../types';
import LinkCard from './LinkCard';

interface ProfileProps {
  profile: ProfileType;
}

export default function Profile({ profile }: ProfileProps) {
  return (
    <div
      className="min-h-screen flex flex-col items-center py-12 px-4 relative overflow-hidden"
      style={{ backgroundColor: profile.theme.backgroundColor }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full opacity-50 blur-3xl" />
      </div>

      <div className="w-full max-w-md mx-auto text-center mb-12 relative z-10">
        <div className="relative inline-block">
          <img
            src={profile.avatarUrl}
            alt={profile.displayName}
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
          />
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white" />
        </div>
        <h1
          className="text-3xl font-bold mb-3 gradient-text"
        >
          {profile.displayName}
        </h1>
        <p
          className="text-lg mb-8 text-gray-600"
        >
          {profile.bio}
        </p>
        <div className="flex gap-4 justify-center mb-8">
          <button className="button-primary">
            Connect
          </button>
          <button className="button-secondary">
            Share Profile
          </button>
        </div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {profile.links.map((link) => (
          <LinkCard
            key={link.id}
            link={link}
            theme={profile.theme}
          />
        ))}
      </div>

      <footer className="mt-12 text-center text-sm text-gray-500 relative z-10">
        <p>© 2024 {profile.displayName}. All rights reserved.</p>
      </footer>
    </div>
  );
} 