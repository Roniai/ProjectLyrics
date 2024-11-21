export type TSong = {
  title: string;
  subTitle?: string;
  lyrics: TLyrics;
  author?: string;
  composer?: string;
  date?: Date;
  tone?: Ttone;
};

export type TLyrics = {
  verses: string[];
  chorus?: string;
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
