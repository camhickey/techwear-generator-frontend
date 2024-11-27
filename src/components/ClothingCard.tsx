export interface ClothingCardProps {
  name: string;
  price: number;
  image: string;
  link: string;
}

export function ClothingCard({ name, price, image, link }: ClothingCardProps) {
  return (
    <div className="border-solid border-black border-2 container mx-auto max-w-sm w-full p-4 sm:w-1/2">
      <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
        <div className="prod-title">
          <p className="text-2xl uppercase text-gray-900 font-bold">{name}</p>
        </div>
        <div className="prod-img">
          <img
            src={image}
            alt="product"
            className="w-full object-cover object-center"
          />
        </div>
        <div className="prod-info grid gap-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
            <p className="font-bold text-xl">$ {price / 100}</p>
            <button
              className="px-6 py-2 transition ease-in duration-200 uppercase hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
              onClick={() => window.open(link, '_blank')}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
