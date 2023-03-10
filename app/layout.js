import './globals.css';
import { font } from './font';

export const metadata = {
  title: 'Nestor Felipe',
  description: 'Software developer personal space',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.variable}>{children}</body>
    </html>
  );
}
