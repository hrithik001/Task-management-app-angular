import { Columns } from './columns';

export interface Board {
  name: string;
  // projectId: number;
  // isActive: boolean;
  columns: Columns[];
}
