export class Alphabet{
    public id: number;
    public isTicked: boolean = false;
    public isCrossed: boolean = false;
    constructor(public letter: string){
        this.id = letter.charCodeAt(0);
    };
}