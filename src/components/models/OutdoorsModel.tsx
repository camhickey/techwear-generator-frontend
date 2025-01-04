import { ModelProps } from './type';

export function OutdoorsModel({
  headwearColor,
  onHeadwearColorChange,
  topColor,
  onTopColorChange,
  pantsColor,
  onPantsColorChange,
  footwearColor,
  onFootwearColorChange,
}: ModelProps) {
  return (
    <svg
      version="1.0"
      width="200"
      viewBox="0 0 470.000000 1000.000000"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)">
        <g className="outline">
          <path
            d="m 2293.5056,9718.5013 c -41,-5 -106,-18 -145,-30 -63,-19 -77,-28 -147,-99 -42,-43 -85,-97 -96,-121 -21,-49 -47,-193 -37,-209 4,-6 -3,-19 -15,-28 -22,-18 -22,-19 -6,-74 22,-75 20,-114 -5,-139 -25,-25 -19,-66 17,-120.0002 14,-20 24,-50 24,-70 0,-42 21,-74 61,-95 38,-19 34,-32 -22,-64 -24,-15 -49,-36 -54,-47 -6,-12 -31,-36 -55,-55 -60,-45 -62,-70 -10,-135 22,-28 40,-54 40,-58 0,-4 -17,-27 -39,-51 -31,-36 -39,-53 -44,-98 -9,-90 -48,-207 -72,-216 -35,-13 -208,-121 -248,-154 -99,-82 -130,-113 -159,-155 -33,-49 -127,-234 -158,-310 -10,-25 -34,-86 -55,-136 -33,-80 -38,-103 -45,-215 -5,-89 -13,-136 -25,-160 -16,-31 -33,-136 -39,-245 -2,-22 -10,-65 -19,-95 -12,-43 -17,-122 -22,-350 -7,-319 -9,-300 50,-459 15,-41 15,-47 -4,-105 -11,-33 -23,-90 -26,-126 -4,-36 -13,-105 -20,-155 -17,-109 -7,-204 26,-249 15,-20 25,-51 29,-95 7,-66 21,-114 43,-139 6,-8 12,-58 13,-120 2,-124 8,-172 28,-227 8,-22 18,-56 22,-75 3,-19 10,-41 15,-50 4,-8 21,-43 38,-77 31,-66 76,-113 108,-113 30,0 43,-19 33,-46 -6,-15 -6,-55 0,-101 6,-43 8,-91 5,-108 -2,-16 -7,-122 -10,-235 -3,-113 -12,-263 -19,-335 -12,-113 -10,-160 7,-166 1,0 40,-6 87,-12 l 85,-12 6,-52 c 4,-29 10,-61 14,-70 8,-19 21,-77 34,-160 5,-28 21,-81 35,-117 14,-35 26,-77 26,-93 0,-16 7,-39 16,-51 14,-21 14,-25 1,-40 -23,-27 -54,-104 -71,-181 -16,-69 -45,-140 -86,-211 -11,-19 -20,-53 -20,-75 0,-54 40,-135 79,-160 26,-17 31,-26 31,-58 0,-45 22,-92 50,-107 17,-9 19,-17 14,-48 -5,-31 -2,-41 20,-61 18,-17 31,-22 51,-17 29,7 45,-15 26,-38 -9,-10 -1,-28 33,-79 45,-67 52,-95 58,-232 2,-62 -11,-163 -23,-171 -5,-2 -16,-22 -25,-42 -10,-20 -38,-68 -63,-105 -97,-144.99998 -115,-196 -108,-310 3,-52 12,-98 20,-111 32,-48 194,-66 371,-41 72,10 108,21 149,44 59,34 67,45 67,97 0,19 4,34 9,34 5,0 26,15 45,34 30,28 36,40 36,75.00002 0,23 -11,68 -25,100 -13,33 -30,78.99998 -36,102.99998 -14,53 -21,265 -11,333 4,28 4,77 -1,110 -4,33 -10,85 -13,117 l -6,56 39,18 c 68,31 83,51 83,109 0,39 -6,61 -25,90 -15,20 -25,38 -23,39 2,1 22,8 46,16 24,7 45,18 49,23 19,31 -2,152 -31,177 -8,6 -42,12 -75,13 -34,1 -61,4 -61,7 0,3 7,27 15,54 8,27 15,61 15,76 0,14 13,53 29,86 15,32 32,75 36,94 4,19 20,63 36,98 16,34 29,72 29,83 0,12 -14,49 -31,83 l -32,61 -1,187 c -1,130 3,191 11,199 6,6 60,15 120,19 59,5 123,12 141,16 l 32,7 v -51 c 0,-39 -7,-62 -35,-108 -32,-53 -35,-64 -35,-138 -1,-45 -7,-99 -15,-121 -19,-52 -19,-107 1,-153 8,-20 20,-64 25,-96 21,-129 85,-249 157,-298 l 23,-16 -11,-160 c -11,-143 -11,-162 4,-184 21,-32 12,-79 -20,-109 -13,-12 -24,-28 -24,-35 0,-12 54,-56 82,-67 22,-8 49,-101 49,-164 0,-225 -3,-267 -22,-329 -18,-57 -18,-70 -7,-124 11,-53 10,-63.99998 -5,-88.99998 -12,-21 -17,-52 -17,-109 0,-78.00002 1,-82.00002 35,-118.00002 31,-33 34,-41 29,-75 -6,-36 -4,-41 49,-92 55,-52 57,-53 146,-66 183,-27 372,28 417,122 15,32 15,40 -6,128 -12,52 -30,103.00002 -40,114.00002 -18,19 -70,116 -70,129.99998 0,3 -13,26 -30,50 -56,82 -74,147 -74,280 0,68 5,142 12,170 7,28 15,77 18,110 4,51 9,63 32,80 15,11 37,30 50,43 l 23,22 -22,39 -22,39 22,42 c 11,22 21,50 21,61 0,12 14,37 31,57 26,29 30,40 25,68 -5,26 -1,41 25,77 43,61 36,96 -36,179 -49,56 -54,67 -61,124 -6,65 21,238 52,326 23,65 18,100 -19,144 -86,104 -88,188 -7,239 26,16 47,40 57,63 8,20 17,39 20,42 2,3 74,7 158,10 87,3 159,10 164,15 15,15 27,243 19,340 -4,44 -14,163 -23,265 -8,102 -20,215 -25,253 -6,37 -10,100 -10,140 0,39 -7,128 -16,196 -14,104 -15,140 -5,230 6,58 11,147 11,197 0,69 4,95 15,104 8,7 15,18 15,24 0,7 13,25 29,40 24,23 30,38 35,97 5,44 14,77 24,89 9,10 45,47 80,83 63,64 64,66 73,139 6,43 7,132 2,218 -10,189 -8,262 11,335 25,92 21,140 -19,234 -19,45 -35,89 -35,97 0,8 -9,40 -20,71 -11,32 -20,84 -20,118 -1,33 -8,87 -16,120 -9,33 -20,91 -24,128 -5,38 -18,97 -29,130 -11,34 -25,100 -31,147 -5,47 -16,110 -24,140 -33,123 -54,189 -73,231 -12,24 -35,78 -51,119 -76,191 -199,378 -285,432 -21,12 -70,44 -110,69 -40,26 -82,49 -94,53 -11,4 -42,29 -67,56 -43,46 -46,53 -48,107 0,32 -3,69 -4,83 -2,14 -6,58 -9,98 -9,115 -57,222 -109,242 -20,7 -19,9 9,19 59,22 75,35 100,77 21,36 25,55 25,128.0002 0,51 -4,88 -11,92 -7,4 -9,27 -4,69 6,57 4,64 -15,78 -21,14 -23,25 -25,129 -3,136 -12,169 -67,234 -60,71 -182,150 -268,172 -64,16 -212,22 -300,11 z"
            fill="#FCFFF7"
          />
        </g>

        <g
          id="footwear"
          className="hover:cursor-pointer"
          fill={footwearColor}
          onClick={onFootwearColorChange}
        >
          <path d="m 2989,1689 c 123,-16 131,-20 131,-69 0,-22 -4,-48 -9,-58 -16,-31 -32,-147 -31,-218 3,-77 19,-172 32,-180 4,-3 8,-16 8,-30 0,-14 11,-40 24,-57 13,-18 39,-61 57,-97 18,-36 41,-77 52,-91 10,-14 29,-67 41,-117 29,-111 24,-126 -54,-164 -76,-38 -149,-50 -250,-42 -102,8 -125,16 -168,57 -30,29 -32,34 -26,78 6,42 4,48 -17,60 -13,7 -29,19 -36,28 -15,21 -13,139 4,171 15,29 17,82 4,128 -7,23 -6,46 4,80 8,26 15,85 15,132 0,47 4,113 9,147 7,49 5,80 -10,149 -10,49 -19,92 -19,96 0,12 140,10 239,-3 z m -904,-86 c 4,-38 8,-167 9,-288 0,-121 5,-226 9,-233 5,-7 18,-56 29,-109 10,-54 23,-104 28,-112 12,-22 -6,-53 -45,-79 -30,-19 -35,-28 -35,-61 0,-72 -60,-99 -257,-113 -128,-10 -147,-9 -188,7 -55,21 -65,41 -65,133 0,48 6,78 20,105 11,20 20,43 20,51 0,8 29,54 65,102 36,48 65,92 65,99 0,6 9,28 20,50 11,22 20,51 20,66 0,15 4,38 9,51 13,35 -6,222 -26,261 -10,19 -27,50 -37,70 -11,20 -17,39 -14,42 3,3 70,8 149,11 79,3 146,8 148,10 2,2 19,4 37,4 h 32 z" />
        </g>

        <g
          id="pants"
          className="hover:cursor-pointer"
          fill={pantsColor}
          onClick={onPantsColorChange}
        >
          <path d="m 3290,3251 c 0,-11 -23,-36 -55,-60 -35,-26 -56,-50 -57,-64 -7,-91 18,-171 66,-216 30,-28 33,-60 12,-123 -26,-77 -56,-249 -56,-317 0,-67 9,-89 53,-136 41,-42 77,-99 77,-119 0,-12 -14,-38 -31,-59 -25,-30 -30,-45 -26,-70 3,-24 -2,-40 -23,-67 -15,-19 -29,-46 -32,-60 -3,-14 -14,-46 -24,-72 -18,-46 -18,-49 -1,-78 l 18,-30 -33,-29 c -38,-35 -51,-36 -173,-16 -103,17 -271,20 -280,5 -9,-14 -28,-13 -50,3 -17,13 -17,15 4,43 31,42 38,99 16,124 -17,18 -17,30 -5,181 l 13,162 -56,51 c -59,55 -95,121 -116,217 -7,30 -21,84 -32,120 -21,72 -24,111 -10,138 6,10 15,64 20,121 10,90 15,110 47,161 29,48 34,64 29,93 -14,75 -22,72 243,80 130,5 282,14 337,21 55,7 106,13 113,14 6,0 12,-7 12,-18 z m -1400,-71 h 285 l 1,-198 c 1,-196 1,-199 28,-244 44,-75 43,-78 -64,-348 -17,-41 -30,-86 -30,-99 0,-14 -10,-54 -22,-89 -29,-87 -23,-96 78,-102 73,-5 79,-7 85,-30 14,-49 10,-80 -8,-80 -10,0 -37,-9 -60,-20 -51,-23 -56,-50 -17,-91 18,-18 28,-42 31,-73 5,-42 3,-46 -26,-64 -33,-20 -84,-26 -337,-38 l -130,-6 -18,27 c -16,24 -22,26 -53,20 l -35,-6 6,33 c 13,64 12,72 -9,76 -50,10 -73,59 -44,96 17,22 18,26 3,40 -8,9 -23,16 -33,16 -18,0 -46,27 -74,72 -23,37 -22,103 2,137 32,44 71,142 86,211 18,83 50,157 75,170 25,14 25,41 0,73 -11,14 -20,35 -20,47 0,12 -15,67 -34,123 -19,56 -38,125 -41,152 -4,28 -13,68 -20,90 -7,22 -15,58 -18,79 l -6,39 67,-7 c 37,-3 195,-6 352,-6 z" />
        </g>

        <g
          id="top"
          className="hover:cursor-pointer"
          fill={topColor}
          onClick={onTopColorChange}
        >
          <path d="m 2027,8563 c 14,-27 15,-41 6,-95 -19,-106 1,-176 97,-337 27,-46 31,-63 28,-106 -3,-50 -1,-54 60,-133 35,-45 66,-82 69,-82 4,0 30,16 60,37 35,24 53,43 53,57 2,74 21,228 35,266 8,25 30,68 49,95 54,82 96,151 96,159 0,4 22,35 50,69 53,65 181,167 210,167 29,0 57,-92 74,-237 9,-73 16,-150 16,-171 0,-35 7,-47 55,-96 30,-31 81,-70 113,-86 163,-87 211,-125 289,-228 26,-34 111,-201 143,-282 12,-30 33,-79 46,-108 14,-30 29,-75 36,-100 6,-26 17,-63 24,-82 18,-47 31,-110 39,-195 4,-38 14,-92 22,-120 24,-80 42,-159 38,-166 -3,-3 4,-41 14,-85 10,-43 21,-116 24,-161 4,-46 13,-96 22,-112 8,-17 15,-38 15,-48 0,-11 16,-57 35,-103 36,-89 43,-147 25,-210 -25,-87 -30,-161 -19,-302 6,-79 7,-183 3,-233 -6,-88 -7,-90 -47,-130 -97,-95 -127,-137 -127,-178 0,-57 -20,-116 -42,-122 -10,-4 -18,-13 -18,-21 0,-15 -20,-19 -36,-6 -29,26 -127,54 -206,59 l -87,6 6,71 c 3,39 9,86 14,105 6,24 4,42 -6,62 -8,15 -15,33 -15,39 0,6 -11,27 -24,48 -32,51 -29,113 8,169 28,42 28,44 16,110 -6,38 -20,100 -31,139 -11,41 -19,106 -20,155 0,59 -6,97 -20,128 -22,51 -43,162 -36,196 2,14 1,123 -3,243 -4,119 -4,262 1,317 10,135 2,215 -22,215 -10,0 -20,-4 -23,-9 -4,-5 -6,-103 -6,-218 1,-114 1,-307 1,-428 0,-171 3,-226 15,-249 8,-16 14,-35 14,-43 0,-7 7,-25 16,-39 12,-18 15,-37 11,-72 -6,-47 7,-137 38,-262 31,-127 31,-136 -4,-175 -27,-31 -31,-43 -31,-91 0,-41 7,-70 26,-108 50,-97 52,-102 41,-121 -5,-10 -11,-66 -12,-124 -3,-106 -5,-115 -33,-181 -65,-155 -73,-184 -79,-305 -7,-140 0,-165 48,-165 50,0 81,43 102,139 21,94 41,104 43,21 1,-54 -18,-100 -112,-267 -30,-53 -33,-67 -26,-95 l 9,-33 69,3 c 52,2 78,8 105,26 25,17 40,21 52,15 33,-19 68,16 118,120 l 26,53 7,-38 c 3,-22 8,-79 11,-129 16,-261 37,-529 48,-595 12,-75 17,-423 6,-434 -3,-3 -95,-10 -205,-16 -109,-5 -273,-16 -364,-25 -91,-8 -214,-14 -275,-15 -60,0 -162,-5 -225,-11 -63,-5 -140,-12 -170,-14 -30,-2 -93,-8 -140,-14 -150,-17 -430,-22 -615,-11 -99,6 -189,12 -200,14 -11,2 -52,7 -92,11 -71,7 -72,8 -67,34 31,179 42,403 35,755 -2,120 -1,128 16,121 24,-11 93,-16 121,-10 35,8 29,53 -18,116 -60,82 -107,182 -121,260 -17,96 -2,109 41,34 18,-31 50,-74 71,-96 32,-33 45,-39 79,-39 34,0 42,4 52,26 19,42 -24,202 -79,292 -24,39 -48,72 -51,72 -4,0 -13,9 -20,21 -11,17 -11,24 -1,36 9,10 13,59 14,156 1,78 5,150 9,160 6,13 2,28 -14,48 -20,28 -20,32 -6,48 31,34 31,78 2,120 -26,37 -27,41 -15,83 7,23 21,57 31,73 10,17 18,39 18,49 0,11 7,27 15,36 25,28 47,130 47,215 0,67 3,85 22,110 12,17 36,66 54,111 29,74 31,90 31,201 0,88 -3,125 -14,139 -28,38 -37,3 -39,-143 -2,-150 1,-140 -85,-298 -19,-34 -21,-50 -16,-101 6,-63 -10,-133 -54,-229 -22,-46 -37,-88 -59,-162 -15,-52 -15,-53 12,-92 30,-43 29,-59 -5,-115 -24,-39 -24,-41 2,-67 18,-18 19,-24 9,-49 -8,-20 -9,-34 -1,-48 7,-13 8,-29 2,-44 -5,-13 -7,-53 -4,-89 l 5,-64 -113,-1 c -80,-1 -127,-6 -158,-18 -41,-15 -45,-15 -57,1 -14,19 -20,45 -28,131 -4,36 -13,62 -29,82 -33,39 -41,125 -22,243 8,51 20,124 25,162 6,39 18,91 26,116 15,48 12,83 -12,129 -7,14 -21,50 -31,80 -16,49 -18,86 -15,338 3,209 7,296 18,335 16,56 30,145 40,241 3,33 12,78 20,100 27,72 34,109 34,187 0,76 8,112 38,179 25,57 93,222 111,270 36,100 86,176 166,255 82,81 249,195 323,220 34,12 38,18 63,96 15,46 31,110 34,144 5,45 14,67 33,88 14,15 31,27 39,27 7,0 17,8 22,19 9,15 1,32 -39,89 -28,39 -50,75 -50,79 0,5 25,23 55,41 32,19 55,40 55,50 0,9 17,26 38,37 l 37,20 8,-35 c 4,-19 15,-49 24,-67 z" />
        </g>

        <g className="skin" fill="#DCAB6B">
          <path d="m 2470,9035 c 85,-9 225,-17 310,-19 l 155,-1 1,-40 c 1,-51 -15,-123 -34,-152 -8,-13 -33,-28 -56,-35 -56,-16 -66,-25 -66,-62 0,-28 -9,-38 -63,-79 -35,-25 -83,-67 -106,-92 -23,-25 -44,-45 -48,-45 -4,0 -26,-10 -51,-21 -38,-19 -56,-21 -150,-17 -88,4 -118,10 -172,33 -116,51 -134,71 -143,166 -5,52 -27,83 -78,109 -33,17 -37,24 -42,70 -4,34 -15,61 -32,81 -30,36 -31,58 -6,90 18,24 21,24 222,27 142,3 251,-1 359,-13 z m -354,-543 c 5,-5 40,-22 79,-38 64,-27 79,-29 197,-29 71,0 128,-2 128,-3 0,-11 -73,-132 -86,-143 -31,-26 -54,-91 -69,-195 -8,-59 -15,-125 -15,-145 0,-32 -5,-41 -29,-53 -28,-15 -29,-15 -70,36 -36,45 -41,57 -41,102 0,37 -9,67 -31,111 -91,174 -99,195 -99,249 0,61 9,116 19,116 4,0 11,-4 17,-8 z m 1401,-3436 58,-24 3,-89 c 5,-151 -12,-265 -57,-381 -52,-135 -65,-156 -90,-140 -16,10 -25,7 -55,-15 -25,-19 -42,-26 -59,-22 -15,4 -28,1 -36,-9 -8,-9 -20,-16 -28,-16 -21,0 -9,42 27,100 81,130 93,166 90,260 -2,71 -18,100 -55,100 -43,0 -64,-30 -82,-115 -9,-44 -21,-86 -26,-92 -29,-39 -41,15 -27,120 14,102 38,180 86,281 l 38,79 77,-6 c 48,-4 100,-16 136,-31 z M 1344,4854 c 99,-111 129,-163 158,-275 34,-137 2,-141 -83,-11 -62,94 -77,112 -99,112 -50,0 -70,-79 -47,-180 22,-91 47,-144 106,-224 28,-38 49,-71 47,-73 -2,-3 -14,0 -26,7 -11,6 -30,8 -41,5 -14,-5 -37,4 -75,29 -29,20 -60,36 -68,36 -30,0 -83,123 -111,255 -10,44 -21,90 -26,103 -14,36 -11,175 4,196 16,22 103,44 180,45 50,1 61,-2 81,-25 z" />
        </g>

        <g
          id="headwear"
          className="hover:cursor-pointer"
          fill={headwearColor}
          onClick={onHeadwearColorChange}
        >
          <path d="m 2624,9648 c 135,-61 213,-122 236,-183 7,-16 13,-81 14,-144 l 3,-113 -81,6 c -45,3 -137,11 -206,17 -156,14 -174,14 -451,17 l -227,2 5,68 c 11,135 105,273 221,323 52,23 160,36 306,38 103,1 113,-1 180,-31 z m -39,-469 c 189,-13 314,-26 321,-33 7,-6 9,-27 7,-48 -5,-34 -8,-38 -37,-40 -58,-3 -170,3 -331,18 -89,8 -268,16 -398,18 -131,2 -239,5 -241,7 -2,2 -6,25 -9,52 l -7,47 h 193 c 105,0 332,-9 502,-21 z" />
        </g>
      </g>
    </svg>
  );
}
