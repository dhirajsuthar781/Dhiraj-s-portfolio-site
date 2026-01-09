"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
     { name: "Homepage", href: "/dashboard" },
     { name: "Projects", href: "/dashboard/project" },
     { name: "Blog", href: "/dashboard/blog" },
];
export default function WrapperDashboard({ children }) {
     const pathname = usePathname();

     return (
          <div className="flex min-h-screen">
               {/* Sidebar */}
               <aside className="w-64  border-r border-[#e4e4e4]   p-3 py-8">
                    <nav className="space-y-2">
                         {links.map((link) => {
                              const isActive = pathname === link.href;
                              return (
                                   <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`block px-6 py-6  font-inter tracking-wide rounded-lg transition duration-300 text-[15px]  ${isActive ? " bg-[#ededed]   " : "  "
                                             }`}
                                   >
                                        {link.name}
                                   </Link>
                              );
                         })}
                    </nav>
               </aside>

               {/* Content Area */}
               <main className="flex-1 p-6">{children}</main>
          </div>
     )
}
