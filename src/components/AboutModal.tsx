import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { CustomModal } from '@components/CustomModal';
import { Button } from '@/components/Button';

type AboutModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const styles = [
    {
      name: 'URBAN',
      description:
        "The urban substyle is likely the most recognizable substyle, mainly because it is the most direct descendent of original techwear fashion. Urban techwear contextualizes the aesthetics of other clothing for an urban environment. If this sounds vague, that's because it is; typically, if techwear does not obviously fit into another category, it's a safe bet it could belong to this substyle.",
      images: [
        '/slides/urban/1.jpg',
        '/slides/urban/2.jpg',
        '/slides/urban/3.png',
      ],
    },
    {
      name: 'GRAYMAN',
      description:
        'As the name implies, the grayman substyle is a minimalistic style that emphasizes simplicity, clean lines, and a sense of modernity. The name "grayman" references the idea of a person who blends into their surroundings and peers, which is why the style may seem not as outwardly expressive.',
      images: [
        '/slides/grayman/1.jpg',
        '/slides/grayman/2.jpg',
        '/slides/grayman/3.jpg',
      ],
    },
    {
      name: 'CYBERPUNK',
      description:
        'The cyberpunk substyle is a maximalist style that combines futuristic elements with punk, goth, and industrial aesthetics. It tends to abandon functionality for more outrageous and stylish elements. It is the foil to the grayman substyle.',
      images: [
        '/slides/cyberpunk/1.jpg',
        '/slides/cyberpunk/2.jpg',
        '/slides/cyberpunk/3.jpg',
      ],
    },
    {
      name: 'OUTDOORS',
      description:
        'The outdoors substyle is one that typically emphasizes functonality, particularly when exposed to the elements, over expressions in style. It could be most similarly compared to the fashion trends borne from outdoor activities like hiking and adventuring.',
      images: [
        '/slides/outdoors/1.png',
        '/slides/outdoors/2.jpg',
        '/slides/outdoors/3.png',
      ],
    },
  ];
  return (
    <CustomModal
      large
      isOpen={isOpen}
      onClose={onClose}
      title="ABOUT THE STYLES"
    >
      <TabGroup>
        <TabList className="flex md:flex-row flex-col gap-4">
          {styles.map(({ name }, index) => (
            <Tab
              key={index}
              className="py-1 px-3 text-neutral-400 data-[selected]:text-orange-500 hover:text-white duration-300"
            >
              {name}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-3">
          {styles.map(({ description, images }, index) => (
            <TabPanel key={index}>
              <p className="text-neutral-400 text-sm mb-4 md:h-20">
                {description}
              </p>
              <div className="grid md:grid-cols-3 grid-cols-1 justify-items-center gap-4">
                {images.map((image, index) => (
                  <img
                    className="w-72 h-96 object-cover"
                    key={index}
                    src={image}
                    alt=""
                  />
                ))}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
      <Button variant="secondary" onClick={onClose}>
        CLOSE
      </Button>
    </CustomModal>
  );
}
