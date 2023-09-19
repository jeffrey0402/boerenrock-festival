import { Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const menuItems: MenuItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Info",
    href: "/info",
  },
  {
    name: "Tickets",
    href: "/tickets",
  },
  {
    name: "Line-up",
    href: "/line-up",
  },
  {
    name: "Sign up for cross",
    href: "/cross-signup",
  },
]

interface MenuItem {
  name: string
  href: string
}

export default function NavBar() {
  return (
    <>
      <DesktopNav />
      <Menu as="nav" className="sm:hidden">
        {({ open }) => (
          <div className='fixed z-10'>
            <div className={`${open && "bg-white border-b-2 rounded-t-md"} w-64`}>
              <Menu.Button>
                {() => open ? (
                  <XMarkIcon className="h-10 w-10 m-4 text-black" />
                ) :
                  (
                    <Bars3Icon className="h-10 w-10 m-4 text-white" />
                  )
                }
              </Menu.Button>
            </div>
            <Menu.Items className="flex flex-col bg-white px-4 rounded-b-md gap-2 py-4 w-64">
              {menuItems.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <a
                      className={`text-xl ${active && 'bg-violet-500'}`}
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </div>
        )}
      </Menu>
    </>
  )
}

function DesktopNav() {
  return (
    <div className='hidden sm:block'>
      <nav
        className="flex justify-around w-full h-24 bg-gradient-to-t from-transparent to-black"
      >
        <img
          className="h-20 pt-4 md:block"
          src="logo.png"
          alt="het logo van boerenrock een ronde rand waarin je een uitsnijde van het hoofd van scheel kijkende bruine stier met roze zakdoek om zijn nek ziet die de stier legt zijn tanden bloot en hij kijkt alsof hij klaar staat om te vechten en te feesten."
        />
        <ul className="flex justify-between gap-16">
          <li className="text-white pt-8 text-xl font-semibold">
            <a href="/">Home</a>
          </li>
          <li className="text-white pt-8 text-xl font-semibold">
            <a href="/about">Tickets</a>
          </li>
          <li className="text-white pt-8 text-xl font-semibold">
            <a href="/info">Info</a>
          </li>
          <li className="text-white pt-8 text-xl font-semibold">
            <a href="/artiesten">Line-up</a>
          </li>
          <li className="text-white pt-8 text-xl font-semibold">
            <a href="/inschrijven">inschrijven</a>
          </li>
        </ul>
        <img
          className="h-20 pt-4 sm:block"
          src="accessibility.svg"
          alt="Accessibility logo"
        />
      </nav>
    </div>)
}