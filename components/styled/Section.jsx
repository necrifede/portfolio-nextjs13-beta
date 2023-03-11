export default function Section({ children }) {
  // border border-dashed border-red-400
  return (
    <section className="flex justify-center mx-6 mt-28 text-lg">
      <div className="">{children}</div>
    </section>
  );
}
