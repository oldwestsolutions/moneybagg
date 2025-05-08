import { Link } from '../types';

interface LinkCardProps {
  link: Link;
  theme: {
    buttonColor: string;
    buttonTextColor: string;
  };
}

export default function LinkCard({ link, theme }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-md mx-auto mb-4 card-hover"
      style={{
        backgroundColor: theme.buttonColor,
        color: theme.buttonTextColor,
      }}
    >
      <div className="p-5 rounded-xl shadow-lg flex items-center justify-between glass-effect">
        <div className="flex items-center gap-3">
          {link.icon && (
            <span className="text-2xl">{link.icon}</span>
          )}
          <span className="font-semibold text-lg">{link.title}</span>
        </div>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </a>
  );
} 