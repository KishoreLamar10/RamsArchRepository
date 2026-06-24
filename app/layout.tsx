import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Raamprakash Kalaiyarasan — Architectural Portfolio',
  description: 'Architecture portfolio of Raamprakash Kalaiyarasan, featuring selected works in computational design, 3D visualization, commercial developments, and residential execution.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
