import AppLayout from '@/components/AppLayout'


export default function LayoutArticle({ children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <AppLayout>
      {children}
    </AppLayout>
  );
}
