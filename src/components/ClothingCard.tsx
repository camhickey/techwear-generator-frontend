export interface ClothingCardProps {
  name: string;
  price: number;
  image: string;
  link: string;
  onRefresh: () => void;
}

export function ClothingCard({
  name,
  price,
  image,
  link,
  onRefresh,
}: ClothingCardProps) {
  return (
    <div className="relative flex flex-col text-gray-700 bg-black bg-clip-border">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full text-center"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-sm antialiased font-medium leading-relaxed text-neutral-200">
            {name.toUpperCase()}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-neutral-200">
            ${price / 100}
          </p>
        </div>
      </div>
      <div className="p-6 flex flex-row">
        <button
          onClick={() => window.open(link, '_blank')}
          className="align-middle select-none font-sans font-bold text-center text-xs py-3 px-6 block w-full text-neutral-200"
          type="button"
        >
          BUY NOW
        </button>
        <button
          onClick={onRefresh}
          className="align-middle select-none font-sans font-bold text-center text-xs py-3 px-6 block w-full text-neutral-200"
        >
          REFRESH
        </button>
      </div>
    </div>
  );
}
