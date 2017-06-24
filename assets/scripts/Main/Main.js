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
    },

    // use this for initialization
    onLoad: function () {
        // 预加载添加闹铃场景
        cc.director.preloadScene('AddAlarm', function () {
            cc.log('Next scene preloaded');
        });
    },

    // 添加闹铃
    addAlarm: function () {
        Global.glb_DidClickRow = -1;
        cc.director.loadScene('AddAlarm');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

