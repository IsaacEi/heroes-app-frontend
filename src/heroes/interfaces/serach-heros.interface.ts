export interface HeroResponse {
    id:              string;
    name:            string;
    slug:            string;
    alias:           string;
    powers:          string[];
    description:     string;
    strength:        number;
    intelligence:    number;
    speed:           number;
    durability:      number;
    team:            string;
    image:           string;
    firstAppearance: string;
    status:          string;
    category:        string;
    universe:        string;
}

export interface SearchOptions {
    name?: string;
    team?: string;
    category?: string;
    universe?: string;
    status?: string;
    strength?: number;
}
