// import { ThemeProvider } from "@/app/providers/theme-provider"

import Footer from "@/components/shared/footer";

export const metadata = {
  title: "Course Learning Platform",
  description: "A platform for online courses and learning",
  generator: "Analytix-hive",
};

export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}
