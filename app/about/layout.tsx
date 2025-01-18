export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" flex flex-col items-center justify-center gap-4 pb-16 bg-background-stone bg-[url('/noise1.svg')] bg-cover bg-center bg-fixed">
      <div>{children}</div>
    </section>
  );
}
