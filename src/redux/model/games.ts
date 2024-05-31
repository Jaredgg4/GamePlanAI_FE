interface Games {
    id: number,
    teams: Teams[],
    scores: Scores[],
    periods: Periods[],
    status: Status[]
}

interface Teams {
    home: Team,
    visitors: Team
}

interface Team{
    code: string,
    id: number,
    logo: string,
    name: string,
    nickname: string
}

interface Scores {
    home: scores,
    visitors: scores,
}
interface scores{
    linescore: string[],
    loss: number,
    points: number | null,

}

interface Periods {
    current: number,
    endOfPeriod: boolean,
    total: number
}

interface Status {
    clock: null,
    halftime: boolean,
    long: string
}

export default Games