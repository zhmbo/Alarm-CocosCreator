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
        prefabPage_hour: cc.Prefab,
        prefabPage_minute: cc.Prefab,
        content_hour: cc.Node,
        content_minute: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        // this.node.position = cc.p(0, 0);

        // 添加小时
        this.addHourItems();
        // 添加分钟
        this.addMinuteItems();
    },

    // 添加小时
    addHourItems: function () {
        for (var i = 0; i < 24; i++) {
            var hourItem = cc.instantiate(this.prefabPage_hour);
            // 赋值 label 时间
            hourItem.getComponent('pageViewItem_hour').init(i);
            this.content_hour.addChild(hourItem);
        }
    },

    // 添加分钟
    addMinuteItems: function () {
        for (var i = 0; i < 60; i++) {
            var minuteItem = cc.instantiate(this.prefabPage_minute);
            // 赋值 label 时间
            minuteItem.getComponent('pageViewItem_minute').init(i);
            this.content_minute.addChild(minuteItem);
        }
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.node.position = cc.p(0, 0);
    },
});
