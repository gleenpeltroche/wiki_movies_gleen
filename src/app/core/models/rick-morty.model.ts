export interface RickMortyResponse {
    info:    RickMortyInfo;
    results: RickMortyResult[];
}

export interface RickMortyInfo {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface RickMortyResult {
    id:       number;
    name:     string;
    status:   RickMortyStatus;
    species:  RickMortySpecies;
    type:     string;
    gender:   RickMortyGender;
    origin:   RickMortyLocation;
    location: RickMortyLocation;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export enum RickMortyGender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface RickMortyLocation {
    name: string;
    url:  string;
}

export enum RickMortySpecies {
    Alien = "Alien",
    Human = "Human",
}

export enum RickMortyStatus {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}