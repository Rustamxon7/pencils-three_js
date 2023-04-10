import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  colorPicker: false,
  color: '#A3A160',
  textcolor: '#000000',
  isLogoTexture: true,
  isFullTexture: false,
  fullDecal: './threejs.png',
  pencils: 'num3',
});

export default state;
