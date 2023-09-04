import { Metadata } from "next";

export const metadata: Metadata = {
  title: "View detail blog",
  description: "Hoc Nextjs13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
