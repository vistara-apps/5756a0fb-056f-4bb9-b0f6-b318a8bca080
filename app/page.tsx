import { Dashboard } from '@/components/Dashboard';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-bg via-surface to-bg">
      <Header />
      <Dashboard />
    </main>
  );
}
