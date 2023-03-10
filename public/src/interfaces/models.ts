export interface iPlayer {
    platform: string;
    region: string;
    id: string;
    character: string;
    maxHp: number;
    currentHp: number;
    attack: iAttack;
}

export interface iAttack {
    damage: number;
    meethod: string;
    target: iPlayer;
}