export const clothingColors = [
  {hex: "#181818", name: "black"},
  {hex: "#5e5e5e", name: "grey"},
  {hex: "#dbdbdb", name: "white"},
  {hex: "#342a1c", name: "brown"},
  {hex: "#26341c", name: "green"},
  {hex: "#1e2e54", name: "blue"},
];

export default function ConvertClothingCode(hexCode) {

    for(var colorKey in clothingColors) {
      if(hexCode === clothingColors[colorKey].hex) {
        return clothingColors[colorKey].name;
      }
    }
  }
  