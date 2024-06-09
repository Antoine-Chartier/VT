import AppLayout from '@/app/(site)/AppLayout'


export default function LayoutArticle({ children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <AppLayout>
      {children}
    </AppLayout>
  );
}
