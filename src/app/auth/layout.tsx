import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication - Peercom",
  description: "Authentication pages for Peercom platform",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex justify-center">
            <span className="text-2xl font-bold text-gray-900">Peercom</span>
          </Link>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Connect. Learn. Grow.
          </h2>
        </div>
        {children}
      </div>
    </div>
  );
}
