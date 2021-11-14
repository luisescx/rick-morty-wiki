export interface Character {
  id: string;

  name: string;

  image: string;

  location: Location;

  episode: Episode[];
}

export interface CharacterQuery {
  info: Info;

  results: Character[];
}

export interface Location {
  id: string;

  name: string;
}

export interface Episode {
  id: string;

  name: string;

  characters: Character[];

  air_date: string;
}

export interface EpisodeQuery {
  info: Info;

  results: Episode[];
}

export interface Info {
  count: number;

  pages: number;
}
