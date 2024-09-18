export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col justify-center gap-4 py-8 md:py-6 lg:items-start">
      <div className="max-w-xxl w-full mx-auto lg:mx-0">{children}</div>
    </section>
  );
}
