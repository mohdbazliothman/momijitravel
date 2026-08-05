import "../globals.css";

export default function InternationalLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
