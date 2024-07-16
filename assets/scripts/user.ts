const { ccclass, property } = cc._decorator;

@ccclass
export default class User extends cc.Component {
  @property(cc.Prefab)
  bulletPre: cc.Prefab;

  start() {
    this.node.on(cc.Node.EventType.TOUCH_MOVE, (e: cc.Event.EventTouch) => {
      this.node.setPosition(e.getLocation());
      console.log(e.getLocation);
    });

    this.schedule(() => {
      // 创建子弹
      let bullt = cc.instantiate(this.bulletPre);
      bullt.setParent(cc.director.getScene());
      bullt.x = this.node.x;
      bullt.y = this.node.y + 80;
    }, 0.5);

    cc.director.getCollisionManager().enabled = true;
  }
  ml() {
    cc.resources.load(
      "fly/hero1_die",
      cc.SpriteFrame,
      (err, res: cc.SpriteFrame) => {
        this.node.getComponent(cc.Sprite).spriteFrame = res;
      }
    );
    this.node.off(cc.Node.EventType.TOUCH_MOVE)
    setTimeout(() => {
      this.node.destroy();
    }, 500);
  }
  // update (dt) {}
}
