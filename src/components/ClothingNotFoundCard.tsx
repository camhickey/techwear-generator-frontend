import { NoSymbolIcon } from '@heroicons/react/24/solid';

type ClothingNotFoundCardProps = {
  description: string;
};

export function ClothingNotFoundCard({
  description,
}: ClothingNotFoundCardProps) {
  return (
    <div className="bg-black text-white flex flex-col p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <NoSymbolIcon className="w-6 h-6" />
          <div className="text-md font-bold">Clothing not found</div>
        </div>
      </div>
      <div className="mt-4 text-neutral-500 text-sm">{description}</div>
    </div>
  );
}
