import { AuthTest } from '@/components/auth-test';

export default function TestPage() {
  return (
    <div className="container mx-auto max-w-md">
      <h1 className="text-2xl font-bold mb-4">Auth Test</h1>
      <AuthTest />
    </div>
  );
}