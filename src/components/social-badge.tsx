import { cn } from "@/lib/utils";
import Link from "next/link";

type SocialBadgeProps = {
  icon: React.ReactNode;
  href: string;
  name: string;
};

export const SocialBadge = (props: SocialBadgeProps) => {
  const { icon, href, name } = props;
  return (
    <Link href={href} target="_blank" className="cursor-pointer">
      <div
        className={cn(
          "flex h-8 w-fit cursor-pointer items-center space-x-2 rounded-xl border border-[#3f3f3f] bg-[#151515] px-2 py-1 text-sm",
          //hover
          "hover:border-[#595959] hover:bg-[#3f3f3f]",
        )}
      >
        {icon}
        <span className="font-bold">{name}</span>
      </div>
    </Link>
  );
};
