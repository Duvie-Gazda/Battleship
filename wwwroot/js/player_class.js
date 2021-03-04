import { Map } from './Const.js';
export class Player{
    id; 
    name;
    map;
    htmlMapId;
    htmlUserNameId;
    me;
    constructor(id_, name_, map_, htmlMapId_,htmlUserNameId_, me_){
        this.id = id_;
        this.name = name_;
        this.map = map_;
        this.htmlMapId = htmlMapId_;
        this.htmlUserNameId = htmlUserNameId_;
        this.me = me_;
        this.showMap();
    }
    showMap(){
        for(let y = 0; y < 10; y++){
            let line = document.createElement('tr');
            line.setAttribute('id', 'line-' + y);
            document.getElementById(this.htmlMapId).appendChild(line);
            for(let x = 0; x < 10; x++){
                let cell = document.createElement('td');
                cell.setAttribute('id', 'cell-' + x + '-' + y);
                cell.setAttribute('x', x);
                cell.setAttribute('y', y);
                if(this.me){
                    cell.setAttribute('class', this.map[y][x]);
                } else {
                    cell.setAttribute('class', (this.map[y][x] != Map.ship) ?  this.map[y][x] : Map.field);
                }
                line.appendChild(cell);
            }
        }
    }
    showName(){
        document.getElementById(this.htmlUserNameId).innerText = this.name;
    }
}