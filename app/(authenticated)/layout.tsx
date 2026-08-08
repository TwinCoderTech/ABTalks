import { getCurrentUser } from '@/actions/userActions';
import { UserProvider } from '@/app/contexts/UserContext';
import { redirect } from 'next/navigation';

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  if (!user) redirect('/login');

  return (
    <UserProvider initialUser={{ name: user.name, email: user.email, image: user.image, streak: user.streak || 13 }}>
      {children}
    </UserProvider>
  );
}
