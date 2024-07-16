

const {ccclass, property} = cc._decorator;

@ccclass
export default class MamyEnemy extends cc.Component {
    @property(cc.Prefab)
     ememy:cc.Prefab

    

    // onLoad () {}

    start () {
        // console.log('这是this',this)
        // console.log('这是cc',cc)
        this.schedule(()=>{
        let enemy  = cc.instantiate(this.ememy)
        enemy.setParent(cc.director.getScene())
        enemy.y = 820
        enemy.x = Math.random()*360 + 20
       },2)
    }

    // update (dt) {}
}
