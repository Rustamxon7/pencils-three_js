import {
  swatch,
  fileIcon,
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
