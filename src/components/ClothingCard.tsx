export interface ClothingCardProps {
  name: string;
  price: number;
  image: string;
  link: string;
  onRefresh: () => void;
  isLoading?: boolean;
}

export function ClothingCard({
  name,
  price,
  image,
  link,
  onRefresh,
  isLoading,
}: ClothingCardProps) {
  return (
    <div className="relative flex flex-col text-gray-700 bg-black bg-clip-border">
      <div
        className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} relative mx-4 mt-4 overflow-hidden text-gray-700 bg-black bg-clip-border h-96`}
      >
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gray-200 rounded-full border-t-transparent animate-spin" />
          </div>
        ) : (
          <img
            src={image}
            alt=""
            className="object-cover w-full h-full text-center"
          />
        )}
      </div>
      <div className="p-6">
        <p
          className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} text-center text-sm text-neutral-200 font-bold`}
        >
          {isLoading ? 'LOADING' : name.toUpperCase()}
        </p>
        <p
          className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} text-center text-neutral-200`}
        >
          {isLoading ? '...' : `$${price / 100}`}
        </p>
      </div>
      <div className="flex flex-row">
        <button
          onClick={() => window.open(link, '_blank')}
          className="align-middle select-none font-bold text-center text-xs py-3 px-6 block w-full text-neutral-200"
        >
          BUY NOW
        </button>
        <button
          onClick={onRefresh}
          className="align-middle select-none font-bold text-center text-xs py-3 px-6 block w-full text-neutral-200"
        >
          NEW CLOTHING
        </button>
      </div>
    </div>
  );
}
