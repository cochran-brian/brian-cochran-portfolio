export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex items-baseline gap-4">
      <span className="font-mono text-sm text-pen">{index}</span>
      <h2 className="scribble text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      <div className="h-px flex-1 self-center border-t border-dashed border-line" />
    </div>
  );
}
