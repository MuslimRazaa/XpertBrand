import CircleArrow from "./CircleArrow";

type MeetTeamLinkProps = {
  label?: string;
  href?: string;
};

export function MeetTeamLink({
  label = "Meet the team",
  href = "#team",
}: MeetTeamLinkProps) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white focus-visible:text-white focus-visible:outline-none"
    >
      <span className="link-underline">{label}</span>
      <span className="relative inline-flex overflow-hidden">
        <CircleArrow className="h-3 w-3 text-white/70 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1" />
        <CircleArrow className="absolute left-0 top-0 h-3 w-3 text-white transition-transform duration-500 translate-y-full -translate-x-full group-hover:translate-x-0 group-hover:translate-y-0 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0" />
      </span>
    </a>
  );
}

export default MeetTeamLink;
