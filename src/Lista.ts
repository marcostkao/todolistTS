import { Tarefa } from "./Tareafa";




export class Lista {
    private _lista: Tarefa[] = [];

    addTarefa(...t: Tarefa[]) {
        this._lista.push(...t);
    }

    removeTarefa(t: Tarefa){
        let pos: number = this._lista.indexOf(t);
        if(pos > -1){
            this._lista.slice(pos, 1);
        }
    }


}


