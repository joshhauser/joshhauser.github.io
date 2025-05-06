import type { TechChipsConfig } from '@/models/tech-chips-config.mode';

export const techChipsConfiguration: { [key: string]: TechChipsConfig } = {
  python: {
    label: 'Python',
    color: '#3776AB',
    backgroundColor: '#122F48',
    iconName: 'siPython',
  },
  c: {
    label: 'C',
    color: '#A8B9CC',
    backgroundColor: '#5f6a75',
    iconName: 'siC',
  },
  cplusplus: {
    label: 'C++',
    color: '#00599C',
    backgroundColor: '#002A4A',
    iconName: 'siCplusplus',
  },
  javascript: {
    label: 'JavaScript',
    color: '#F7DF1E',
    backgroundColor: '#4F4707',
    iconName: 'siJavascript',
  },
  typescript: {
    label: 'TypeScript',
    color: '#3178C6',
    backgroundColor: '#193655',
    iconName: 'siTypescript',
  },
  vue: {
    label: 'Vue',
    color: '#4FC08D',
    backgroundColor: '#22513C',
    iconName: 'siVuedotjs',
  },
  flask: {
    label: 'Flask',
    color: '#000000',
    backgroundColor: '#6a6a6a',
    iconName: 'siFlask',
  },
  fastapi: {
    label: 'FastAPI',
    color: '#009688',
    backgroundColor: '#00443e',
    iconName: 'siFastapi',
  },
  java: {
    label: 'Java',
    color: '#000000',
    backgroundColor: '#6a6a6a',
    iconName: 'siOpenjdk',
  },
};
