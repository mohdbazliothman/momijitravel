import "./globals.css";

export const metadata = {
  title: "Momiji Travel & Tours | Muslim-Friendly Travel Packages",
  description:
    "Momiji Travel & Tours Sdn Bhd offers Muslim-friendly travel packages for families, private groups, schools and companies. Licensed MOTAC L/N 12842, based in Melaka.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
