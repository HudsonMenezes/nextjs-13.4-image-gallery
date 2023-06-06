import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import { Container, SSRProvider } from "../components/bootstrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJS 13.4 Image Gallery",
  description: "Tutorial Project by Coding in Flow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <SSRProvider>
          <main>
            <Container>{children}</Container>
          </main>
        </SSRProvider>
      </body>
    </html>
  );
}
