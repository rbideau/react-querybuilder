import type { Classnames, Controls, FullField } from 'react-querybuilder';
import { getCompatContextProvider } from 'react-querybuilder';
import { BulmaNotToggle } from './BulmaNotToggle';
import { BulmaValueEditor } from './BulmaValueEditor';
import { BulmaValueSelector } from './BulmaValueSelector';

export * from './BulmaNotToggle';
export * from './BulmaValueEditor';
export * from './BulmaValueSelector';

export const bulmaControlClassnames = {
  actionElement: 'button',
} satisfies Partial<Classnames>;

export const bulmaControlElements = {
  notToggle: BulmaNotToggle,
  valueEditor: BulmaValueEditor,
  valueSelector: BulmaValueSelector,
} satisfies Partial<Controls<FullField, string>>;

export const QueryBuilderBulma = getCompatContextProvider({
  key: 'bulma',
  controlElements: bulmaControlElements,
  controlClassnames: bulmaControlClassnames,
});
