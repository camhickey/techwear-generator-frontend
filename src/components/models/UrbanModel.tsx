import { ModelProps } from './type';
import {
  BG_COLOR,
  SKIN_COLOR,
  OUTLINE_COLOR,
} from '@/components/models/colors';

export function UrbanModel({
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
      viewBox="0 0 370.000000 1000.000000"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)">
        <g id="outline">
          <path
            d="m 1882,9347.9187 c -72,-9 -111,-18 -179,-43 -108,-40 -206,-235.0004 -206,-411.0004 0,-76 -2,-84 -26,-107 -24,-22 -26,-29 -21,-79 3,-31 17,-80 32,-110 34,-71 37,-83 36,-155 -1,-47 -7,-68 -27,-97 -17,-25 -24,-43 -19,-57 5,-16 2,-21 -13,-21 -27,0 -38,-17 -46,-68 -8,-51 -50,-99 -117,-132 -24,-12 -58,-33 -76,-46 -17,-13 -36,-24 -40,-24 -15,0 -80,-73 -98,-110 -29,-57 -62,-90 -184,-186 -76,-59 -132,-111 -161,-152 -169,-231 -190,-263 -190,-290 0,-16 -6,-50 -14,-76 -10,-33 -13,-79 -9,-164 5,-119 1,-149 -36,-254 -18,-53 -20,-82 -19,-339 0,-194 -3,-284 -11,-292 -6,-6 -11,-22 -11,-35 0,-13 -5,-32 -10,-42 -6,-10 -13,-70 -16,-132 l -6,-113 60,-120 c 59,-116 130,-221 175,-258 12,-9 51,-32 86,-50 54,-27 71,-43 119,-112 30,-44 71,-96 90,-115 19,-19 42,-51 53,-71 10,-20 29,-49 42,-65 46,-55 49,-69 28,-111 -10,-21 -27,-86 -36,-145 -16,-101 -16,-119 0,-300 19,-215 19,-230 5,-517 -7,-129 -15,-215 -24,-235 -31,-72 -45,-125 -50,-201 -3,-44 -8,-112 -12,-152 -4,-44 -2,-83 5,-104 11,-32 0,-100 -21,-124 -17,-19 -8,-76 18,-115 20,-29 24,-43 16,-53 -13,-16 -38,-90 -47,-140 -4,-28 -2,-46 10,-64 15,-23 15,-26 -1,-38 -17,-12 -17,-19 -7,-67 7,-36 8,-85 2,-153 -5,-55 -7,-118 -4,-140 28,-253 39,-310 62,-333 13,-13 23,-33 23,-45 0,-13 16,-101 36,-197 19,-96 36,-184 36,-195 0,-11 9,-72 20,-135 23,-132 21,-230 -5,-258 -24,-26 -21,-41 8,-52 20,-8 25,-16 23,-37 -3,-24 1,-28 24,-31 26,-3 28,-6 28,-52 0,-57.00003 -7,-80.00003 -25,-80.00003 -8,0 -16,-17 -20,-41 -7,-42 -26,-100 -69,-208 -52,-130.99999 -44,-225.99999 22,-259.99999 20,-11 48,-30 62,-43 27,-26 68,-51 120,-74 19,-9 55,-28 80,-44 25,-15 88,-43 140,-62 l 95,-33 h 215 c 190,0 219,2 243,18 22,14 27,25 27,57 0,53 -11,78 -59,130 -22,25 -41,48 -41,52 0,3 -38,50 -85,104 -47,54 -85,101.99999 -85,105.99999 0,13 46,9 143,-12.99999 50,-12 124,-27 162,-34 69,-12 253,-85 265,-105 13,-22 156,-41 315,-43 183,-2 244,12 271,64 27,53 19,88 -32,135.99999 -26,24 -51,43 -56,43 -5,0 -25,12 -45,28 -20,15 -66,43 -102,63 -52,28 -71,45 -89,80 -33,62 -49,77 -117,111 -68,33.00003 -115,74.00003 -115,99.00003 0,22 -65,79 -89,79 -37,0 -44,25 -37,118 13,149 15,160 29,189 16,33 31,99 53,238 8,55 24,140 34,189 11,49 27,141 36,205 9,63 20,124 25,133 5,10 14,96 20,190 6,103 16,189 25,212 11,28 12,42 4,51 -8,10 -7,16 2,24 65,52 98,87 103,110 3,16 17,43 30,61 13,18 21,38 17,44 -10,16 -3,122 13,196 8,36 26,128 41,205 15,77 40,181 56,230 44,138 50,184 37,323 -9,93 -9,144 0,215 7,50 16,207 21,347 11,288 14,310 42,310 11,0 33,14 50,31 30,29 31,32 25,99 -3,37 -11,86 -18,108 -11,38 -10,43 26,100 40,65 64,124 65,159 0,13 -15,40 -33,60 -23,26 -39,58 -49,103 -21,84 -35,120 -48,120 -5,0 -10,4 -10,9 0,5 -5,22 -11,38 -25,59 -60,158 -60,168 0,6 3,49 8,96 5,47 5,101 0,120 -4,19 -10,124 -14,234 l -5,200 35,32 c 49,44 53,76 22,158 -14,37 -25,82 -25,100 0,38 -32,116 -56,136 -14,11 -15,26 -9,92 4,47 3,83 -3,90 -6,7 -15,48 -22,91 -6,44 -15,89 -20,100 -4,12 -13,41 -20,66 -25,90 -80,231 -100,257 -11,14 -20,31 -20,38 0,18 -27,38 -110,81 -103,53 -103,53 -69,92 16,18 29,41 29,52 0,32 -19,70 -37,77 -35,12 -53,46 -53,101 0,59 -20,115 -45,129 -15,9 -9,24 53,134 39,69 83,160 97,204 l 27,79 -20,17 c -20,15 -20,22 -12,112 5,53 7,103 4,110 -3,9 9,21 33,32 39,19 135,96 185,150 67,73 15,150 -132,195 -25,7 -49,17.0004 -54,22.0004 -6,4 -15,8 -22,8 -6,0 -31,19 -55,43 -63,60 -106,96 -142,117 -58,33 -240,53 -362,40 z"
            fill={OUTLINE_COLOR}
          />
        </g>

        <g
          id="footwear"
          className="hover:cursor-pointer"
          fill={footwearColor ?? BG_COLOR}
          onClick={onFootwearColorChange}
        >
          <path d="m 2232,1291 c -3,-120 6,-147 55,-167 48,-20 73,-42 73,-65 0,-20 78,-88 136,-117 23,-12 53,-35 65,-52 59,-77 91,-108 136,-130 26,-13 71,-41 100,-62 29,-21 55,-38 60,-38 4,0 22,-14 40,-32 66,-64 37,-111 -79,-129 -77,-13 -57,-13 -218,0 -145,11 -170,19 -370,108 -30,14 -77,28 -105,33 -27,5 -70,14 -95,20 -25,7 -92,19 -149,27 -97,14 -106,18 -140,52 l -37,37 28,44 c 34,53 65,134 79,204 14,71 29,106 45,106 16,0 17,6 45,151 l 22,116 156,-4 156,-4 z m -733,-205 c 6,-25 11,-59 11,-76 0,-27 13,-44 75,-104 63,-60 75,-77 75,-104 0,-26 11,-44 55,-87 30,-31 55,-60 55,-65 0,-17 67,-114 100,-145 18,-16 57,-62 86,-102 30,-39 58,-75 64,-78 12,-7 13,-55 2,-72 -16,-26 -69,-33 -234,-33 -169,0 -171,0 -277,36 -58,19 -122,45 -141,58 -19,12 -51,28 -70,36 -42,16 -140,79 -140,89 0,4 -12,14 -27,22 -42,21 -49,31 -56,76 -8,49 25,169 74,265 5,9 12,36 15,58 4,23 17,57 30,76 18,26 24,49 24,87 v 53 l 88,17 c 48,10 94,22 102,27 8,6 29,10 46,10 29,0 33,-4 43,-44 z" />
        </g>

        <g id="gap" fill={BG_COLOR}>
          <path d="m 1821,3473 c 37,-61 49,-92 74,-193 13,-52 26,-102 30,-112 4,-11 -6,-30 -29,-56 -40,-44 -43,-57 -19,-84 14,-15 14,-22 4,-42 -9,-15 -11,-41 -7,-72 3,-27 6,-79 5,-116 0,-65 1,-68 26,-78 24,-9 25,-12 14,-27 -19,-23 -27,-555 -8,-589 9,-17 10,-63 4,-181 -4,-87 -7,-170 -6,-186 1,-15 -3,-56 -9,-90 -6,-34 -15,-125 -20,-202 -12,-164 -36,-274 -69,-308 -15,-17 -29,-54 -41,-112 -11,-47 -31,-108 -46,-135 l -26,-48 -73,76 c -69,72 -73,78 -78,132 -4,31 -13,70 -22,86 -8,16 -15,50 -15,76 0,26 -7,73 -16,105 -9,35 -17,117 -20,208 -2,83 -9,167 -16,188 -9,28 -8,59 1,130 7,50 15,214 17,362 3,149 7,279 9,291 3,12 34,54 71,95 64,72 65,74 59,116 -9,65 -1,79 58,99 29,9 58,21 65,27 18,14 15,51 -7,71 -16,14 -17,22 -8,46 8,22 8,45 -1,88 -7,32 -9,81 -6,108 7,63 44,234 54,255 5,9 11,37 15,63 4,25 9,46 10,46 2,0 13,-17 26,-37 z" />
        </g>

        <g
          id="pants"
          className="hover:cursor-pointer"
          fill={pantsColor ?? BG_COLOR}
          onClick={onPantsColorChange}
        >
          <path d="m 2877,4963 c -4,-3 -3,-11 2,-17 13,-17 22,-119 11,-136 -5,-8 -29,-20 -52,-25 -51,-13 -45,14 -53,-265 -3,-113 -13,-279 -22,-369 -14,-140 -14,-184 -4,-300 l 12,-136 -39,-120 c -22,-66 -52,-190 -66,-275 -15,-85 -31,-163 -36,-172 -14,-26 -31,-185 -24,-223 5,-27 2,-35 -15,-44 -12,-7 -21,-17 -21,-23 0,-24 -42,-98 -56,-98 -8,0 -24,-10 -35,-21 -16,-16 -20,-29 -16,-54 4,-25 1,-38 -15,-52 -16,-14 -19,-26 -14,-54 8,-50 -11,-329 -24,-344 -5,-6 -17,-61 -26,-121 -9,-60 -31,-190 -49,-289 -19,-99 -39,-214 -46,-255 -14,-92 -31,-128 -65,-136 -26,-7 -291,0 -299,7 -2,2 0,42 5,89 5,47 14,192 21,322 10,191 10,250 0,305 -17,90 -12,496 7,515 18,18 15,33 -12,65 -19,23 -24,44 -30,125 -7,91 -6,99 14,120 26,29 23,62 -7,66 -30,4 -29,8 8,50 34,38 33,28 6,189 -9,58 -27,109 -57,169 l -43,86 27,86 c 23,75 25,88 12,100 -39,40 -76,-37 -139,-289 -14,-53 -29,-105 -35,-116 -23,-41 -34,-193 -21,-274 12,-75 11,-88 -13,-120 -9,-13 -8,-20 5,-33 8,-9 20,-16 26,-16 19,0 12,-16 -11,-28 -13,-6 -40,-17 -62,-24 -45,-15 -60,-44 -53,-100 6,-42 -20,-86 -94,-163 l -38,-40 -4,-245 c -2,-135 -10,-321 -17,-413 -10,-124 -10,-173 -2,-190 6,-12 14,-89 16,-172 7,-197 9,-209 24,-228 8,-9 12,-33 10,-58 -4,-50 -1,-49 -168,-79 -132,-25 -130,-25 -130,5 0,14 -7,28 -15,31 -8,4 -13,9 -11,13 2,3 9,41 15,83 8,60 8,86 -3,124 -8,27 -17,83 -20,124 -4,41 -13,100 -20,130 -8,30 -19,80 -25,110 -5,30 -15,82 -22,115 -6,33 -14,79 -19,103 -4,24 -17,56 -29,72 -28,38 -41,150 -50,425 -6,168 -5,212 6,221 17,15 17,65 -2,91 -13,19 -13,25 0,57 8,19 15,46 15,59 0,13 7,32 15,43 23,30 19,69 -10,88 -24,16 -36,66 -16,66 5,0 14,29 21,64 9,50 9,73 0,101 -9,28 -9,59 -1,130 6,51 11,116 11,143 0,53 12,100 38,147 11,20 19,70 24,150 4,66 12,185 18,265 8,114 7,173 -5,275 -31,285 -30,318 14,483 14,50 24,53 41,13 6,-17 52,-72 101,-123 49,-51 89,-96 89,-100 0,-5 8,-8 18,-8 20,0 135,107 136,126 1,6 16,25 35,43 26,24 32,36 27,55 -3,14 -2,28 4,31 5,3 10,17 10,31 0,13 3,24 6,24 3,0 50,-9 104,-20 54,-11 125,-24 157,-29 32,-5 101,-21 153,-35 52,-15 120,-31 150,-37 30,-6 64,-15 75,-20 11,-5 58,-20 105,-35 112,-35 213,-31 277,9 24,15 45,27 47,27 3,0 36,23 73,51 37,28 84,59 103,68 19,9 39,22 43,29 4,6 13,12 19,12 6,0 8,-3 5,-7 z" />
        </g>

        <g
          id="top"
          className="hover:cursor-pointer"
          fill={topColor ?? BG_COLOR}
          onClick={onTopColorChange}
        >
          <path d="m 2298,8553 c 61,-31 112,-61 112,-67 -1,-31 -79,-212 -110,-251 -4,-5 -23,-40 -43,-76 l -35,-67 28,-27 c 24,-23 29,-37 35,-103 7,-74 9,-79 51,-119 44,-43 56,-76 30,-86 -8,-3 -25,-28 -38,-56 l -24,-49 42,-7 c 24,-3 58,-16 76,-28 18,-13 52,-33 75,-46 34,-20 47,-36 76,-100 19,-42 39,-89 45,-106 56,-157 101,-382 95,-475 -4,-59 -2,-68 21,-95 27,-31 51,-98 43,-120 -3,-6 6,-38 19,-71 28,-68 31,-122 9,-131 -9,-3 -25,-23 -35,-43 -17,-33 -20,-61 -20,-212 -1,-95 4,-198 11,-228 13,-62 13,-83 -1,-194 -8,-65 -7,-82 5,-100 9,-11 20,-39 26,-61 6,-22 33,-90 60,-151 27,-61 49,-121 49,-134 0,-14 15,-40 36,-61 35,-36 36,-38 24,-76 -7,-21 -21,-50 -32,-65 -10,-15 -30,-52 -44,-82 -21,-46 -33,-59 -82,-86 -31,-18 -75,-47 -97,-65 -22,-17 -67,-49 -100,-71 -55,-36 -65,-39 -130,-39 -38,0 -108,10 -155,21 -47,12 -116,29 -155,38 -38,10 -117,33 -175,51 -60,19 -109,30 -114,25 -5,-5 -19,-5 -32,1 -49,18 -151,37 -202,38 -29,0 -61,3 -71,6 -20,6 -33,46 -20,66 4,8 -7,30 -31,58 -57,69 -83,127 -77,173 7,50 -15,142 -53,223 -16,35 -30,70 -30,77 -1,7 -14,29 -30,48 -22,25 -30,45 -30,72 0,23 -9,53 -24,76 -21,33 -23,46 -18,113 3,61 1,81 -13,102 -15,23 -15,33 -4,84 7,32 16,63 21,70 5,6 13,87 18,180 7,154 23,243 42,243 5,0 8,7 8,15 0,9 9,33 20,55 25,49 25,81 0,153 -12,35 -22,92 -24,149 -6,134 -72,378 -102,378 -24,0 -23,-17 10,-131 19,-63 37,-143 40,-179 12,-118 24,-194 40,-251 l 16,-55 -44,-85 -44,-85 -6,-165 c -4,-90 -11,-173 -16,-184 -4,-11 -13,-60 -19,-109 -9,-76 -8,-92 4,-106 18,-20 20,-45 11,-141 -7,-74 -7,-75 18,-87 25,-11 32,-30 27,-76 -1,-11 10,-31 23,-45 26,-28 100,-210 112,-274 4,-23 2,-42 -6,-52 -17,-21 23,-124 77,-196 40,-53 44,-63 45,-122 2,-69 -8,-91 -45,-103 -12,-3 -46,-24 -75,-46 -47,-37 -52,-44 -52,-79 0,-22 -4,-39 -9,-39 -13,0 -153,155 -172,192 -10,18 -27,52 -38,76 -11,23 -31,53 -43,66 -13,13 -24,30 -26,37 -2,8 -12,23 -22,34 -10,11 -25,35 -34,53 -9,17 -20,32 -25,32 -4,0 -43,47 -86,105 -70,95 -84,109 -139,135 -75,35 -120,76 -151,139 -14,27 -32,54 -40,61 -8,7 -15,20 -15,30 0,10 -7,23 -15,30 -8,6 -25,36 -38,64 -22,47 -24,63 -20,152 3,56 14,129 25,169 18,62 21,102 23,350 2,231 5,290 19,335 34,110 36,127 35,255 -2,161 17,250 67,315 18,25 56,79 84,121 58,89 118,147 218,214 40,26 78,57 83,67 5,10 15,18 22,18 14,0 31,24 63,91 24,49 95,116 154,146 40,21 88,54 147,101 34,28 42,41 47,82 6,41 11,49 37,60 26,11 30,17 25,40 -3,19 1,34 14,47 14,15 20,43 25,111 l 7,90 37,10 c 20,5 72,20 116,32 57,16 121,24 225,29 259,12 233,15 358,-46 z" />
        </g>

        <g id="skin" fill={SKIN_COLOR}>
          <path d="m 2267,9010 c 59,-34 97,-95 109,-177 3,-26 11,-56 15,-65 13,-24 -1,-208 -15,-208 -13,0 -124,56 -144,73 -16,13 -333,11 -433,-3 -37,-5 -107,-23 -157,-40 -49,-16 -93,-30 -97,-30 -3,0 -17,25 -31,55 -41,94 -27,183 25,156 32,-18 41,-13 41,21 0,36 55,93 124,128 37,19 218,99 256,113 8,3 69,6 135,6 115,1 122,0 172,-29 z M 1472,4813 c -11,-16 -34,-41 -51,-57 -29,-28 -31,-28 -31,-8 0,13 17,34 46,57 56,42 61,43 36,8 z" />
        </g>

        <g
          id="headwear"
          className="hover:cursor-pointer"
          fill={headwearColor ?? BG_COLOR}
          onClick={onHeadwearColorChange}
        >
          <path d="m 2161,9299 c 38,-11 82,-31 98,-42 97,-73 120,-91 118,-93 -1,-1 -22,2 -47,6 -25,5 -97,9 -160,9 -135,0 -248,-25 -350,-80 -87,-46 -240,-188 -261,-241 -23,-59 -30,-27 -18,79 7,59 19,108 38,148 16,33 34,75 41,92 13,34 90,93 120,93 10,0 35,7 56,17 34,14 137,27 257,31 22,1 70,-7 108,-19 z m 214,-180 c 38,-11 100,-30 137,-41 74,-22 137,-63 138,-89 0,-25 -103,-123 -182,-174 l -37,-23 -6,40 c -9,54 -66,161 -102,192 -54,49 -99,58 -240,53 -118,-4 -135,-7 -213,-39 -47,-19 -110,-47 -140,-62 -69,-35 -49,-15 56,56 66,45 97,59 170,76 121,29 125,29 244,31 80,1 121,-4 175,-20 z" />
        </g>
      </g>
    </svg>
  );
}
