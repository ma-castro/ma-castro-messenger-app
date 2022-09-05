import light from './light';

export type Theme = typeof light;
export type Color = keyof Theme['colors'];

export default { light };
