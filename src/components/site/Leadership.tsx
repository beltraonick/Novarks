import { Reveal } from "./Reveal";

const people = [
  { name: "Nicollas Beltrão", role: "Co-Founder & CEO", initials: "NB" },
  { name: "Thomas Vidal", role: "Co-Founder & CTO", initials: "TV" },
];

export function Leadership() {
  return (
    <section id="about" className="py-28 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:px-10">
        <Reveal>
          <p className="eyebrow">Leadership</p>
          <h2 className="mt-6 max-w-sm text-2xl font-medium leading-tight tracking-[-0.03em] text-foreground sm:text-3xl">
            A small team building with intent.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {people.map((person) => (
              <li
                key={person.name}
                className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 bg-surface p-7"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border-strong text-sm font-medium tracking-wide text-muted-foreground">
                  {person.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-base font-medium text-foreground">
                    {person.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{person.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
