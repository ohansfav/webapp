'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface ExtendedUser {
  id: string;
  email: string;
  name?: string | null;
  role?: string;
}

type AuthContextType = {
  user: ExtendedUser | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<ExtendedUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      setUser(session.user as ExtendedUser);
    } else {
      setUser(null);
    }
    setLoading(false);
  }, [session, status]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
