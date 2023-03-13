/* eslint-disable @typescript-eslint/no-explicit-any */
// Base type for other entities
export type GenericType = {
  index: string;
  name: string;
  url: string;
};

// Spell type
export type Spell = GenericType;

// Class type
type Class = GenericType;

// School type
type School = GenericType;

// SubClass type
type SubClass = GenericType;

// A type that is used for the particular spell
export type SeparateSpell = {
  casting_time: string;
  classes: Class[];
  components: string[];
  concentration: boolean;
  desc: string[];
  duration: string;
  higher_level: any[];
  index: string;
  level: number;
  material: string;
  name: string;
  range: string;
  ritual: boolean;
  school: School;
  subclasses: SubClass[];
  url: string;
};
export type Formatter = {
  keys: {[key: string]: string};
  value: (value: any) => string | number;
};
