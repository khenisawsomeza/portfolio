"use client";

import { NavItem } from "@/data/home";

type FloatingNavProps = {
  items: NavItem[];
  show: boolean;
};

export function FloatingNav({ items, show }: FloatingNavProps) {
  return (
    <div
      className={`fixed left-1/2 top-6 z-50 -translate-x-1/2 transition-all duration-500 ease-out ${
        show
          ? "translate-y-0 opacity-100"
          : "-translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-[#0c0f16]/85 px-3 py-1.5 text-sm shadow-2xl shadow-black/40 backdrop-blur-lg">
        {items.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="rounded-full px-3 py-1 text-[13px] font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            style={{
              animation: show ? `fadeInUp 0.5s ease-out ${index * 50}ms both` : "none",
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
