'use client';

import React from 'react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
