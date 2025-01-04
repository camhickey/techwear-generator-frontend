import { NoSymbolIcon } from '@heroicons/react/24/solid';

type ClothingNotFoundCardProps = {
  title: string;
  description: string;
};

export function ClothingNotFoundCard({
  title,
  description,
}: ClothingNotFoundCardProps) {
  return (
    <div className="bg-black text-white flex flex-col p-4">
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <NoSymbolIcon className="w-6 h-6" />
          <p className="text-md font-bold">{title}</p>
        </div>
      </div>
      <p className="mt-4 text-neutral-500 text-sm text-center">{description}</p>
    </div>
  );
}
