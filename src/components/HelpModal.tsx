import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router';

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HelpModal({ isOpen, onClose }: HelpModalProps) {
  const navigate = useNavigate();
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 overflow-y-auto p-4">
        <DialogPanel
          transition
          className="space-y-4 bg-black border-solid border-neutral-400 border-2 p-12 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <DialogTitle className="text-lg font-bold uppercase text-white">
            FAQs
          </DialogTitle>
          <Disclosure as="div" className="p-6" defaultOpen>
            <DisclosureButton className="group flex w-full items-center justify-between">
              <p className="font-medium text-white text-left">
                How do I use this site?
              </p>
              <ChevronDownIcon className="size-5 fill-white group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-neutral-400">
              <p>
                The goal of this site is to help you build a techwear outfit
                based on your preferences. On your screen is the outline of a
                model representing the &quot;style&quot; of techwear you chose
                (urban, grayman, cyberpunk, outdoors). Each model has four
                parts: headwear, top, pants, and footwear. You can click on
                these parts of the model to select the color you want for each
                part. To change the color you apply to the clothing, use the
                color picker to the left.
              </p>
              <p>
                Once you&apos;ve colored the model, click on the GET OUTFIT
                button. This will generate a random outfit based on your
                selections and give you a link to the clothing. You can click
                the NEW OUTFIT button to generate a new outfit based on your
                previous selections, or close out and change your selections.
              </p>
            </DisclosurePanel>
          </Disclosure>
          <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <p className="font-medium text-white text-left">
                What are these &quot;styles&quot;? (urban, grayman, cyberpunk,
                outdoors)
              </p>
              <ChevronDownIcon className="size-5 fill-white group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-neutral-400">
              <p>
                These styles you see are subsets of techwear fashion culture. If
                you want a more detailed explanation on what makes each style
                unique,{' '}
                <button
                  className="font-bold text-white hover:cursor-pointer"
                  onClick={() => navigate('/about')}
                >
                  click here.
                </button>{' '}
                That said, whichever page you create your outfit on will
                influence the types of clothing you get in your outfit. For
                example, an outfit created on the &quot;urban&quot; page will
                have different clothing than one created on the
                &quot;outdoors&quot; page.
              </p>
            </DisclosurePanel>
          </Disclosure>
          <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <p className="font-medium text-white text-left">
                Why did a card not show up when I made my outfit?
              </p>
              <ChevronDownIcon className="size-5 fill-white group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-neutral-400">
              Right now, the database holding the clothing may not have entries
              for every combination of color, style, and article of clothing. If
              you got a card saying &quot;Clothing not found&quot;, then this is
              the case for your selection. The database will be updated in the
              future, so this issue will hopefully be fixed.
            </DisclosurePanel>
          </Disclosure>
          <button className="text-sm uppercase text-white" onClick={onClose}>
            CLOSE
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
