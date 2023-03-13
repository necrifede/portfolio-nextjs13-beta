export default function Section({ children }) {
  // border border-dashed border-red-400
  return (
    <section className="flex justify-center mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-36 text-lg">
      <div className="">{children}</div>
    </section>
  );
}
