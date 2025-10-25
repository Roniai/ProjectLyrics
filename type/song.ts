export type TSong = {
  id: number;
  title: string;
  subTitle?: string;
  lyrics: TLyrics;
  author?: string;
  composer?: string;
  artist?: string;
  date?: string;
  tone?: Ttone;
};

export type TLyrics = {
  verses?: string[];
  preChorus?: string[];
  chorus?: string[];
  bridge?: string;
  intro?: string;
  outro?: string;
  structure?: string;
  isNumbered?: boolean;
};

export type Ttone =
  | "C"
  | "C#"
  | "D"
  | "Eb"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "Ab"
  | "A"
  | "Bb"
  | "B";
