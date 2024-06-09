'use client'; // Importante para identificar que este é um client component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getUser, signOut } from '../actions';

interface User {
  id: string;
  email: string;
}

export default function AuthButton() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const fetchedUser = await getUser();
      if (fetchedUser) {
        setUser(fetchedUser);
      } else {
        setUser(null);
      }
      console.log(fetchedUser);
    }

    fetchUser();
  }, []);

  const handleLogout = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    await signOut();
    setUser(null);
  };

  return user ? (
    <div className="flex items-center gap-4">
      <form onSubmit={handleLogout}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
    >
      Login
    </Link>
  );
}
