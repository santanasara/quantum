
// Generated with scripts/create-component.js
import { Component } from 'react';

export type ItemPropType = string | { value: string | number; label: string };


export interface DropdownLightProps {
  disabled?: boolean;
  items: ItemPropType[];
  placeholder?: string;
  theme?: {
    colors?: {};
    spacing?: {};
    baseFontSize?: number;
  };
  selectedItem?: ItemPropType;
  onChange?: (
    selectedItem: ItemPropType | null,
  ) => void;
}

export default class DropdownLight extends Component<DropdownLightProps> {}
    