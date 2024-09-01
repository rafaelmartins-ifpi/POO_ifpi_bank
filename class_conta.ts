
import Cliente from "prompt-sync"


class Conta {

    private _numero: string;
    private _cliente: Cliente;
    private _saldo: number;

    constructor (numero: string, cliente: Cliente, saldo: number){
        this._numero = numero;
        this._cliente = cliente;
        this._saldo = saldo;
    }

    get numero(): string {
        return this._numero;
    }

    get cliente(): Cliente {
        return this._cliente;
    }

    get saldo(): number {
        return this._saldo;
    }

    
    sacar (valor: number): void {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }


    depositar (valor: number): void {
        this._saldo += valor;
    }
    

    transferir (contaDestino: Conta, valor: number): void {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    
}


export {Conta};
