'use client';

import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center">
        <span className="text-white font-bold text-lg">M</span>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Moneyba.gg</span>
    </Link>
  );
} 