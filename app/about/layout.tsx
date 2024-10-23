export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-background-stone flex flex-col items-center justify-center gap-4 pb-16">
      <div>{children}</div>
    </section>
  );
}
