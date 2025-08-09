"use client";

import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Peercom</h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with peers and enhance your academic journey
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => window.location.href = '/auth/register'}
          >
            Get Started
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '/auth/login'}
          >
            Sign In
          </Button>
        </div>
      </div>
    </main>
  );
}
