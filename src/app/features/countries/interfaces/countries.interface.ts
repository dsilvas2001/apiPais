export interface CountryI {
  flags: Flags;
  name: Name;
  cca3: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  fra: Fra;
}

export interface Fra {
  official: string;
  common: string;
}
