// Forwarded props: any extra props (like id or className) are collected
// in ...props and spread onto the <section> element.
export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
