import { ShadowElevation, ShadowMap } from '@uni-design-system/uni-core';

export function BoxShadow(elevation: ShadowElevation) {
  const shadowDef = ShadowMap[elevation];

  const umbra = `0 ${shadowDef.umbra.offset}px ${shadowDef.umbra.blur}px rgba(0,0,0,0.${shadowDef.umbra.opacity})`;
  const penumbra = `0 ${shadowDef.penumbra.offset}px ${shadowDef.penumbra.blur}px rgba(0,0,0,0.${shadowDef.penumbra.opacity})`;

  return [umbra, penumbra].join(', ');
}
