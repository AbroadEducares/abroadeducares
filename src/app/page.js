"use client"
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function HomePage() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome, {user ? user : 'Guest'}!</h1>
      {/* Other content */}
    </div>
  );
}
