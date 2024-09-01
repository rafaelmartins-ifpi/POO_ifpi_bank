
class Cliente {
    
    private _id: number;
    private _nome: string;

    constructor (id: number, nome: string){
        this._id = id;
        this._nome = nome;
    }

    get id(): number {
        return this._id;
    }

    get nome(): string {
        return this._nome;
    }
}


export {Cliente};