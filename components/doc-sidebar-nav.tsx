'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = {
  title: string
  href: string
  description?: string
}

type NavSection = {
  title: string
  slug: string
  items: NavItem[]
}

export function DocSidebarNav({ navigation }: { navigation: NavSection[] }) {
  const pathname = usePathname()

  return (
    <nav className="space-y-6">
      <div>
        <Link 
          href="/the-missing-5th-edition"
          className="text-lg font-semibold text-white hover:text-gray-300"
        >
          The Missing 5th Edition
        </Link>
      </div>

      {navigation.map((section) => (
        <div key={section.slug}>
          <h2 className="mb-2 text-lg font-semibold text-white">{section.title}</h2>
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-1 ${
                    pathname === item.href 
                      ? "text-white" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
} 