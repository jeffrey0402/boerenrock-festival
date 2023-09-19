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
    <Menu>
      {({ open }) => (
        <>
        <div className={`${open && "bg-white border-b-2 rounded-t-md"} w-48`}>
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
          <Menu.Items className="flex flex-col bg-white px-4 rounded-b-md gap-2 py-4 w-48">
            {menuItems.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <a
                    className={`${active && 'bg-blue-500'}`}
                    href={item.href}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </>
      )}
    </Menu>
  )
}