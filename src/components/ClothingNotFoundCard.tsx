import { NoSymbolIcon } from '@heroicons/react/24/solid';
import { ClothingColor, ClothingArticle } from '@/enums';

type ClothingNotFoundCardProps = {
  article: ClothingArticle;
  color?: ClothingColor;
};

export function ClothingNotFoundCard({
  article,
  color,
}: ClothingNotFoundCardProps) {
  return (
    <div className="bg-black text-white flex flex-col p-4 items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <NoSymbolIcon className="w-6 h-6" />
          <p className="text-sm font-bold uppercase">
            {article} not {color ? 'found' : 'selected'}
          </p>
        </div>
      </div>
      <p className="mt-4 text-neutral-500 text-sm text-center">
        {color
          ? `Could not find ${article.toLowerCase()} in ${color.toLowerCase()} for your style`
          : `If you want ${article === ClothingArticle.TOP ? 'a top' : article.toLowerCase()}, go back and select a color`}
      </p>
    </div>
  );
}
