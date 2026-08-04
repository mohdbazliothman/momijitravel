import "../globals.css";

export default function DefaultLayout({ children }) {
  return (
    <html lang="ms-MY">
      <body>{children}</body>
    </html>
  );
}
