import type { TechChipsConfig } from '@/models/tech-chips-config.mode';

export const techChipsConfiguration: { [key: string]: TechChipsConfig } = {
  python: {
    label: 'Python',
    color: '#3776AB',
    iconName: 'siPython',
  },
  c: {
    label: 'C',
    color: '#A8B9CC',
    iconName: 'siC',
  },
  cplusplus: {
    label: 'C++',
    color: '#00599C',
    iconName: 'siCplusplus',
  },
  javascript: {
    label: 'JavaScript',
    color: '#F7DF1E',
    iconName: 'siJavascript',
  },
  typescript: {
    label: 'TypeScript',
    color: '#3178C6',
    iconName: 'siTypescript',
  },
  vue: {
    label: 'Vue',
    color: '#4FC08D',
    iconName: 'SiVuedotjs',
  },
  flask: {
    label: 'Flask',
    color: '#000000',
    iconName: 'siFlask',
  },
  fastapi: {
    label: 'FastAPI',
    color: '#009688',
    iconName: 'siFastapi',
  },
  java: {
    label: 'Java',
    color: '#000000',
    iconName: 'siOpenjdk',
  },
};
