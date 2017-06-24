const AddAlarmItems = require('AddAlarmItems').addAlarmItems;

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        subItemContent: cc.Node,
        prefabAddAlarmItem: cc.Prefab,
        repeatUI: cc.Node,
        alarmName: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        // this.repeatUI.init();
        this.reloadSubList();
    },

    reloadSubList: function () {
        for (var i = 0; i < AddAlarmItems.length; i++) {
            var alarmItemInfo = AddAlarmItems[i];
            var item = cc.instantiate(this.prefabAddAlarmItem);
            item.tag = i;
            item.getComponent('AddAlarmItem').init(alarmItemInfo);
            this.subItemContent.addChild(item);
            this.addTouchEvent(item, i);
        }
    },

    addTouchEvent: function (node, row) {
        var self = this;
        node.on(cc.Node.EventType.TOUCH_END, function () {
            console.log(row);
            switch (row) {
                case 0:{
                    self.showRepeat();
                }
                break;
                case 1:{
                    self.showAlarmName();
                }
                break;
                case 2:
                break;
                case 3:
                break;
                default:
            }
        });
    },

    showRepeat: function () {
        this.repeatUI.getComponent('RepeatUI').show();
    },

    showAlarmName: function () {
        this.alarmName.getComponent('AlarmName').show();
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
