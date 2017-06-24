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
        prefabSoundItem: cc.Prefab,
        content: cc.Node,
    },

    onLoad: function () {
        for (var i = 0; i < 10; i++) {
            var soundItem = cc.instantiate(this.prefabSoundItem);
            this.content.addChild(soundItem);
        }
    },

    // 展现
    show: function () {
        this.node.active = true;
        this.node.emit('fade-in');
    },

    // 隐藏
    hide: function () {
        this.node.emit('fade-out');
    }
});
