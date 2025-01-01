import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLocation, useNavigate } from 'react-router';

export function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const navigation = [
    { name: 'HOME', href: '/', current: location.pathname === '/' },
    { name: 'URBAN', href: '/urban', current: location.pathname === '/urban' },
    {
      name: 'GREYMAN',
      href: '/greyman',
      current: location.pathname === '/greyman',
    },
    {
      name: 'CYBERPUNK',
      href: '/cyberpunk',
      current: location.pathname === '/cyberpunk',
    },
    {
      name: 'OUTDOORS',
      href: '/outdoors',
      current: location.pathname === '/outdoors',
    },
    { name: 'ABOUT', href: '/about', current: location.pathname === '/about' },
  ];
  return (
    <Disclosure as="nav" className="bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:text-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          {/* Desktop menu */}
          <div className="mx-auto flex sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => navigate(item.href)}
                    aria-current={item.current ? 'page' : undefined}
                    className={`px-3 py-2 text-sm font-medium ${item.current ? 'text-white border-b-white border-b-2 border-b-solid' : 'text-neutral-400 hover:border-b-neutral-400 hover:border-b-2 hover:border-b-solid'}`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="button"
              onClick={() => navigate(item.href)}
              aria-current={item.current ? 'page' : undefined}
              className={`block px-3 py-2 text-base font-medium ${item.current ? 'text-white' : 'text-neutral-400'}`}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
