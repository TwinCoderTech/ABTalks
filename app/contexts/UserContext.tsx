'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface UserData {
  name: string | null;
  email: string | null;
  image: string | null;
  streak: number;
}

interface UserContextType {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children, initialUser }: { children: React.ReactNode, initialUser: UserData }) {
  const [user, setUser] = useState<UserData>(initialUser);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      if (initialUser.email) {
        const savedUser = localStorage.getItem(`user_profile_${initialUser.email}`);
        if (savedUser) {
          const parsedUser = JSON.parse(savedUser);
          const savedAvatar = localStorage.getItem(`user_avatar_${initialUser.email}`);
          if (savedAvatar) {
            parsedUser.image = savedAvatar;
          }
          setUser(parsedUser);
        }
      }
    } catch (error) {
      console.error('Failed to parse user profile from localStorage:', error);
    }
    setIsLoaded(true);
  }, [initialUser.email]);

  useEffect(() => {
    if (isLoaded && user.email) {
      localStorage.setItem(`user_profile_${user.email}`, JSON.stringify(user));
    }
  }, [user, isLoaded]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}
