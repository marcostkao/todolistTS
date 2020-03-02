import { Prioridade } from "./Prioridade"

export class Tarefa {

    private descricao: string;
    private _concluido: boolean;
    private prioridade: Prioridade;

    constructor(descricao:string, prioridade: Prioridade, concluido: boolean = false){
        this.descricao = descricao;
        this.prioridade = prioridade;
        this._concluido = concluido;
        
    }

    public set feito(concluido:boolean) {
        this._concluido = concluido;
    }

    public get concluido():boolean{
        return this._concluido;

    }




}