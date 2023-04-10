import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#A3A160',
  textcolor: '#000000',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './react.png',
  fullDecal: './threejs.png',
  pencils: 'num3',
});

export default state;
