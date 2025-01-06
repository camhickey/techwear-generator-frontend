type ColorPickerProps = {
  colors: string[];
  onChange: (color: string) => void;
};

export function ColorPicker({ colors, onChange }: ColorPickerProps) {
  return (
    <div className="flex flex-col gap-5">
      {colors.map((color) => (
        <div
          key={color}
          className="w-10 h-10 rounded-full hover:cursor-pointer border-2 border-solid border-black hover:border-orange-500"
          style={{ backgroundColor: color }}
          onClick={() => onChange(color)}
        />
      ))}
    </div>
  );
}
