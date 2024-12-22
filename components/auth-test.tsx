"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { signIn, signUp, signOut } from '@/lib/supabase/auth';
import { useAuth } from '@/hooks/use-auth';

export function AuthTest() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const { user, loading } = useAuth();

  const handleSignUp = async () => {
    const { error } = await signUp(email, password);
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Check your email to confirm your account"
      });
    }
  };

  const handleSignIn = async () => {
    const { error } = await signIn(email, password);
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Successfully signed in"
      });
    }
  };

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4 p-4">
      {user ? (
        <div className="space-y-4">
          <p>Logged in as: {user.email}</p>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </div>
      ) : (
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="space-x-2">
            <Button onClick={handleSignIn}>Sign In</Button>
            <Button variant="outline" onClick={handleSignUp}>Sign Up</Button>
          </div>
        </div>
      )}
    </div>
  );
}