export const skinColors = [
  {hex: "#f5d0c5", name: "unbleached silk"},
  {hex: "#f3e9dc", name: "linen"},
  {hex: "#c08552", name: "raw sienna"},
  {hex: "#5e3023", name: "liver"},
  {hex: "#895737", name: "russet"},
  {hex: "#dab49d", name: "tumbleweed"}
];

export default function ConvertSkinCode(hexCode) {
    for(var skinKey in skinColors) {
      if(hexCode === skinColors[skinKey].hex) {
        return skinColors[skinKey].name;
      }
    }
  }
  