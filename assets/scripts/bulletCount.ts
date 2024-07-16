// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import EnemyControl from "./EnemyControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class bulletCount extends cc.Component {
    
  

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        this.node.y += 800*dt
        if(this.node.y > 800){
            this.node.destroy()
        }
    }
    onCollisionEnter(other){
        if(other.tag == 1){
            other.getComponent(EnemyControl).die()
            this.node.destroy()
        }
    }

}
