export class Reward {
    skill: string;
    xp: number;

    constructor(skill = '', xp = 0) {
        this.skill = skill;
        this.xp = xp;
    }
}