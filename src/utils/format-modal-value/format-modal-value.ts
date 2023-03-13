import {GenericType} from 'src/features/api-types';

const formatValue = (value: any) => {
  if (Array.isArray(value)) {
    if (value[0]?.name) {
      return (value as GenericType[]).map(({name}) => name).join(' ');
    }
    return value.length > 0 ? value.map(_ => _)?.join(' ') : '-';
  }
  if (typeof value === 'string') {
    return value.length > 0 ? value : '-';
  }

  if (typeof value === 'number') {
    return value || '-';
  }
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }
  return '-';
};
export default formatValue;
