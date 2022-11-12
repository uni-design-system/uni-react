import { CSSProperties } from 'react';
import { FilterConfig, FilterProps } from './filter.model';
import { FilterType } from './filter.types';
import { FilterConfigs } from './filter.config';

const getFilterConfig = (filterType: FilterType): FilterConfig | undefined => {
  return FilterConfigs[filterType];
};

const getFilterSetting = (type: FilterType, value?: number): string => {
  if (!value) return '';
  const unit = getFilterConfig(type)?.unit;
  return `${type}(${value}${unit && unit !== 'num' ? unit : ''})`;
};

export const FilterStyle = (filterSettings: Partial<FilterProps>): CSSProperties => {
  const filterNames = Object.keys(filterSettings) as FilterType[];

  const filterArray = filterNames.map((type) => getFilterSetting(type, filterSettings[type]));
  console.log(filterArray);
  return { filter: filterArray.join(' ') };
};

/*

.blur {filter: blur(4px) brightness(250%) contrast(180%) grayscale(100%); }
.brightness {filter: brightness(250%);}
.contrast {filter: contrast(180%);}
.grayscale {filter: grayscale(100%);}
.huerotate {filter: hue-rotate(180deg);}
.invert {filter: invert(100%);}
.opacity {filter: opacity(50%);}
.saturate {filter: saturate(7);}
.sepia {filter: sepia(100%);}
.shadow {filter: drop-shadow(8px 8px 10px green);}

* */
