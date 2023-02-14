import "@/styles/globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="EN">
      <body className="text-white">{children}</body>
    </html>
  );
}
