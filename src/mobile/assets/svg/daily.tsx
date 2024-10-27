import * as React from "react";
import Svg, { Defs, Image, Path, Pattern, Use } from "react-native-svg";

export const DailyQuestIcon = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    fill="none"
  >
    <Path fill="url(#a)" d="M0 0h16v18H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="matrix(.00284 0 0 .00251 -.226 -.143)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4Ae3dCbBtWVkY4J8ZZHSgCaZiEBpJjHOFIhQmKqUELKA1AmUUcKgkxomuKNgMEVrEYIJADMRSnEkChpACFINDKgFsRMaQZgqlIYklKIOIhtDYQHfuf7y3ue/2effuc89ee6/hO1Wv3n33nbP3Wt+//n+tfc4+e0d4ECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAi0IXBIRD4uIp0TECyPiTRHx7oj4UERce/D76wf/kwZpkSZp84KIeHJEfENEpJ0HAQIECBBoRuDeEfGsg0nsrQeT2XWDT/D7LHDSLg2fGRF/s5noaygBAgQIDCVwh4h4bES8w4Rf7F2Ntx8a336okaWzBAgQIFClwGdExA8dvo29z9Gu107/OCQ/MrgyIj69yhGhUQQIECDQtcBNDj63fnREvN8R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+D/X2f7TCr1nEThNIG/N+RELAUeCxoAx0MAYyEsM55UIPQgQmEngr0fEWxtIfkd9Yx/1if/Y8X+nO/vNVPFthsAJgdu6YJAjQItAY6DSMfCzEZFfZfYgQKCgwP0jIlfajrYYGAPGwNpj4Hcj4kEF651NEyBwQuCWEXHFwZ9rLAQshIwBY2CFMZCf9V/pLP8Tldk/CSwocI+IeHFEfHKFArD2kYf9O/o1BpYfA1lr8ivKn7tgnbMrAgROEfgbEfH8iPi4hYCjQWPAGCgwBo4m/jwh2YMAgQoFLo2In4mIfHvO0REDY8AY2HcMZC153sEBxt0rrHeaRIDAFoE7REReP+A3I+I6iwGLIWPAGNhhDOTR/lURcXlEfOaW+uJXBAg0InC3g48GnhQRr/ERgUlgh0lg3yNHr2/r3YdrDyf9J0TE5zRS2zSTAIEdBPJGQ18bEc+IiDdFRCa9Qs3AGBhvDGTuv/Hgu/v/4vBrfG7Vu0Mh9VQCPQjcIiI+LyIuOzhv4AcOzx/IOxG+ISLeERG/HxEfskiwSDIGmhoDmbOZu5nDmcuZ03lu0OMi4qGHOZ+570GAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBPYW+P+5Q7BXRSHMtwAAAABJRU5ErkJggg=="
        id="b"
        width={512}
        height={512}
      />
    </Defs>
  </Svg>
);
