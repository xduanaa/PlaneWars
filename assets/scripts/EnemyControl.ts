// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import User from "./user";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemyControl extends cc.Component {
  isDie: boolean = false;

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}

  start() {}

  update(dt) {
    if (this.isDie === false) {
      this.node.y -= 200 * dt;
    }
    if (this.node.y < -38) {
      this.node.destroy();
    }
  }
  onCollisionEnter(orter){
  if(orter.tag==2){
    this.isDie =true
    orter.getComponent(User).ml()
    cc.resources.load(
        "fly/enemy0_die",
        cc.SpriteFrame,
        (err, res: cc.SpriteFrame) => {
          this.node.getComponent(cc.Sprite).spriteFrame = res;
        }
      );
      setTimeout(() => {
        this.node.destroy();
      }, 300);
  }
  }

  die() {
    this.isDie = true;
    cc.resources.load(
      "fly/enemy0_die",
      cc.SpriteFrame,
      (err, res: cc.SpriteFrame) => {
        this.node.getComponent(cc.Sprite).spriteFrame = res;
      }
    );
    setTimeout(() => {
      this.node.destroy();
    }, 300);
  }
}
