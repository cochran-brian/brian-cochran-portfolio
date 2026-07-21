export default function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex items-baseline gap-4">
      <span className="font-mono text-sm text-ember">{index}</span>
      <h2 className="text-2xl font-medium tracking-tight text-cream sm:text-3xl">
        {title}
      </h2>
      <div className="h-px flex-1 self-center bg-line" />
    </div>
  );
}
