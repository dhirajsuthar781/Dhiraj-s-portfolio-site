import { Geist, Inter, Manrope, Nunito } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
})


export const metadata = {
  // 1. Primary SEO Tags (Title and Description)
  title: {
    default: "Dhiraj Suthar | Full-Stack Developer & Frontend Specialist",
    template: "%s | Dhiraj Suthar", // Template for other pages to append the main title
  },
  description:
    "Full-Stack Developer skilled in Next.js, React, Node.js, and modern web technologies. Explore my portfolio, projects, and expertise in building scalable and performant web applications.",

  // 2. Keywords (for general context, less critical for ranking but good practice)
  keywords: [
    "Dhiraj Suthar",
    "Fullstack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "Web Developer Portfolio",
    "JavaScript",
    "TypeScript",
  ],

  // 3. Author and Publisher
  authors: [{ name: "Dhiraj Suthar" }],
  creator: "Dhiraj Suthar",
  publisher: "Dhiraj Suthar", // Optional: Can be used for your personal brand

  // 4. Canonical URL Base (Crucial for avoiding duplicate content issues)
  // ** IMPORTANT: Replace with your actual domain **
  metadataBase: new URL("https://dhiraj-s-protfolio.vercel.app/"),

  // 5. Robots Tag (Tells search engines how to crawl your site)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1, // Allow all video previews
      'max-image-preview': 'large', // Use large image previews
      'max-snippet': -1, // No limit on text snippet length
    },
  },

   
};

 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}    ${inter.variable} ${manrope.variable} ${nunito.variable}  antialiased`}
      >

        {children}
      </body>
    </html>
  );
}
