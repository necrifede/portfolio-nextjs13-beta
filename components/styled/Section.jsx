export default function Section({ children }) {
  return (
    <section className="flex justify-center p-5 border border-dashed border-red-400 ">
      <div className="">{children}</div>
    </section>
  );
}
