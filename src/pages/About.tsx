import { Carousel } from '../components/Carousel';
import { useNavigate } from 'react-router';

type StyleSectionProps = {
  title: string;
  description: string;
  images: string[];
  link: string;
};

function StyleSection({ title, description, images, link }: StyleSectionProps) {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h1 className="text-white text-2xl font-medium uppercase text-left border-b-[1px] border-neutral-400 border-solid">
        {title}
      </h1>
      <p className="text-neutral-400 text-left mt-4 h-60 overflow-scroll">
        {description}
      </p>
      <Carousel images={images} />
      <button
        onClick={() => navigate(link)}
        className="mt-5 p-2 w-full text-white border-white border-solid border-2 group-hover:opacity-100 hover:text-orange-500 hover:border-orange-500 transform duration-500"
      >
        EXPLORE
      </button>
    </div>
  );
}

export function About() {
  return (
    <div className="bg-black min-h-screen gap-2">
      <div className="grid md:grid-cols-4 md:grid-rows-1 grid-col-1 grid-rows-4">
        <StyleSection
          title="Urban"
          description="The urban substyle is likely the most recognizable substyle, mainly because it is the most direct descendent of original techwear fashion. Urban techwear contextualizes the aesthetics of other clothing for an urban environment. If this sounds vague, that's because it is; typically, if techwear does not obviously fit into another category, it's a safe bet it could belong to this substyle."
          images={[
            '/slides/urban/1.jpg',
            '/slides/urban/2.jpg',
            '/slides/urban/3.png',
          ]}
          link="/urban"
        />
        <StyleSection
          title="Grayman"
          description='As the name implies, the grayman substyle is a minimalistic style that emphasizes simplicity, clean lines, and a sense of modernity. The name "grayman" references the idea of a person who blends into their surroundings and peers, which is why the style may seem not as outwardly expressive.'
          images={[
            '/slides/grayman/1.jpg',
            '/slides/grayman/2.jpg',
            '/slides/grayman/3.jpg',
          ]}
          link="/grayman"
        />
        <StyleSection
          title="Cyberpunk"
          description="The cyberpunk substyle is a maximalist style that combines futuristic elements with punk, goth, and industrial aesthetics. It tends to abandon functionality for more outrageous and stylish elements. It is the foil to the grayman substyle."
          images={[
            '/slides/cyberpunk/1.jpg',
            '/slides/cyberpunk/2.jpg',
            '/slides/cyberpunk/3.jpg',
          ]}
          link="/cyberpunk"
        />
        <StyleSection
          title="Outdoors"
          description="The outdoors substyle is one that typically emphasizes functonality, particularly when exposed to the elements, over expressions in style. It could be most similarly compared to the fashion trends borne from outdoor activities like hiking and adventuring."
          images={[
            '/slides/outdoors/1.png',
            '/slides/outdoors/2.jpg',
            '/slides/outdoors/3.png',
          ]}
          link="/outdoors"
        />
      </div>
    </div>
  );
}
