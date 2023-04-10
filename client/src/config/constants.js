import {
  swatch,
  fileIcon,
  ai,
  logoShirt,
  stylishShirt,
  num3,
  num6,
} from '../assets';

export const EditorTabs = [
  {
    name: 'colorpicker',
    icon: swatch,
  },
  {
    name: 'filepicker',
    icon: fileIcon,
  },
  {
    name: 'aipicker',
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: 'num3',
    icon: num3,
  },
  {
    name: 'num6',
    icon: num6,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: 'logoDecal',
    filterTab: 'logoShirt',
  },
  full: {
    stateProperty: 'fullDecal',
    filterTab: 'stylishShirt',
  },
};
