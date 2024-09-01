import {Conta} from "./class_conta"


class Banco {

    private _contas: Conta[] = [];

    get contas(): Conta[] {
        return this._contas;
    }

    cadastrar (conta: Conta): void {
        this._contas.push(conta);
    }





}