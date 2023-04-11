export interface ITechnicalProject {
    name: string,
    isMyPosition: boolean
}
export interface IProject {
    technicals: ITechnicalProject[],
    name: string,
    shortDescription: string,
    thumnailUrl: string,
}

