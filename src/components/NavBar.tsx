import { useAuth } from '@/useAuth';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLocation, useNavigate } from 'react-router';
import { AboutModal } from './AboutModal';
import { useState } from 'react';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const navigation = [
    {
      name: 'URBAN',
      onClick: () => navigate('/urban'),
      current: location.pathname === '/urban',
    },
    {
      name: 'GRAYMAN',
      onClick: () => navigate('/grayman'),
      current: location.pathname === '/grayman',
    },
    {
      name: 'CYBERPUNK',
      onClick: () => navigate('/cyberpunk'),
      current: location.pathname === '/cyberpunk',
    },
    {
      name: 'OUTDOORS',
      onClick: () => navigate('/outdoors'),
      current: location.pathname === '/outdoors',
    },
    {
      name: isAuthenticated ? 'ACCOUNT' : 'LOGIN',
      onClick: () =>
        isAuthenticated ? navigate('/account') : navigate('/login'),
      current: location.pathname === '/account',
    },
    {
      name: isAuthenticated ? 'MY OUTFITS' : 'REGISTER',
      onClick: () =>
        isAuthenticated ? navigate('/outfits') : navigate('/register'),
      current: location.pathname === '/outfits',
    },
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
              <div className="flex space-x-4 items-center">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={item.onClick}
                    aria-current={item.current ? 'page' : undefined}
                    className={`px-3 py-2 text-sm font-bold duration-300 ${item.current ? 'text-orange-500' : 'text-neutral-400 hover:text-white'}`}
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
              onClick={item.onClick}
              aria-current={item.current ? 'page' : undefined}
              className={`block px-3 py-2 text-base ${item.current ? 'text-white' : 'text-neutral-400'}`}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
      <AboutModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Disclosure>
  );
}
