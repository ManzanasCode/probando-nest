enum Sports {
    Football = "Ftb",
    Basketball = "Bkb",
    Tennis = "Tns",
    Volleyball = "Vlb",
    Baseball = "Bsb",
    Hockey = "Hky"
}


export interface League {
    id: string;
    name: string;
    country: string;
    isMain: boolean;
    type: Sports.Football;
}

export interface TeamLeague{
    id: string;
    name: string;
    country: string;
    aliasDsiplay: string;
}