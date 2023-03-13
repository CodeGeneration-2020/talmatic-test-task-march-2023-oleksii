import {Formatter} from 'src/features/api-types';
import formatValue from '../format-modal-value/format-modal-value';

const SEPARATE_SPELL_FORMATTER: Formatter = {
  keys: {
    casting_time: 'Casting time',
    classes: 'Classes',
    components: 'Components',
    concentration: 'Concentration',
    desc: 'Description',
    duration: 'Duration',
    higher_level: 'Higher level',
    level: 'Level',
    material: 'Material',
    name: 'Name',
    range: 'Range',
    ritual: 'Ritual',
    school: 'School',
    subclasses: 'Subclasses',
  },
  value: formatValue,
};
export default SEPARATE_SPELL_FORMATTER;
