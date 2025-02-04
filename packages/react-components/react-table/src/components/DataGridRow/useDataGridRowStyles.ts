import { mergeClasses } from '@griffel/react';
import type { DataGridRowSlots, DataGridRowState } from './DataGridRow.types';
import type { SlotClassNames } from '@fluentui/react-utilities';
import { useTableRowStyles_unstable } from '../TableRow/useTableRowStyles';

export const dataGridRowClassNames: SlotClassNames<DataGridRowSlots> = {
  root: 'fui-DataGridRow',
};

/**
 * Apply styling to the DataGridRow slots based on the state
 */
export const useDataGridRowStyles_unstable = (state: DataGridRowState): DataGridRowState => {
  useTableRowStyles_unstable(state);
  state.root.className = mergeClasses(dataGridRowClassNames.root, state.root.className);

  return state;
};
