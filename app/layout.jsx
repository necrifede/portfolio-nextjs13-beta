import './globals.css';
import { font } from './font';
import AnalyticsWrapper from '@/components/Analytics';

export const metadata = {
  title: 'Nestor Felipe',
  description: 'Software developer personal space',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.variable} `}>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
