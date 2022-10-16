import { Spaces } from '../constants';
import { Space } from '../types';

export const getSpace = (point: Space | string): string | null => {
  if (Object.keys(Spaces).includes(point)) {
    return Spaces[point as Space];
  }

  return null;
};
