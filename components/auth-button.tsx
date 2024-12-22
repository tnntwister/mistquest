"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { signIn, signUp, signOut } from '@/lib/supabase/auth';
import { useAuth } from '@/hooks/use-auth';
import { z } from 'zod';

const authSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export function AuthButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const { toast } = useToast();
  const { user } = useAuth();

  const validateForm = () => {
    try {
      authSchema.parse({ email, password });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: { email?: string; password?: string } = {};
        error.errors.forEach((err) => {
          if (err.path[0] === 'email' || err.path[0] === 'password') {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSignIn = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    const { error } = await signIn(email, password);
    setIsLoading(false);
    
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } else {
      setIsOpen(false);
      toast({
        title: "Success",
        description: "Successfully signed in"
      });
    }
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    const { error } = await signUp(email, password);
    setIsLoading(false);
    
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    } else {
      setIsOpen(false);
      toast({
        title: "Success",
        description: "Check your email to confirm your account"
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

  return (
    <>
      {user ? (
        <Button variant="ghost" onClick={handleSignOut}>
          Sign Out
        </Button>
      ) : (
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          Sign In
        </Button>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign In to Your Account</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password}</p>
              )}
            </div>
            <div className="flex space-x-2 pt-4">
              <Button 
                className="flex-1" 
                onClick={handleSignIn}
                disabled={isLoading}
              >
                Sign In
              </Button>
              <Button 
                className="flex-1" 
                variant="outline" 
                onClick={handleSignUp}
                disabled={isLoading}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}