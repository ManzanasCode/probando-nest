enum Sports {
    Football = "Ftb",
    Basketball = "Bkb",
    Tennis = "Tns",
    Volleyball = "Vlb",
    Baseball = "Bsb",
    Hockey = "Hky"
}

enum Countrys {
    Mexico = "mx",
    Spain = "sp",
    England = "en",
    Italy = "it",
    UnitedStates = "us",
    Brazil = "bz"
}


export interface League {
    id: string;
    name: string;
    country: string;
    isMain: boolean;
    type: Sports.Football;
}

export interface Season{
    id: string;
    dateStart: Date;
    dateEnd: Date;
    teamsAtSeason: TeamLeague[];
}

export interface TeamLeague{
    id: string;
    name: string;
    country: string;
    aliasDsiplay: string;
    urlImg: string;
}