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
        label: cc.Label,
    },

    // 构造方法
    init: function (i) {
        var labelString = '';
        if (i < 10) {
            labelString = '0' + String(i);
        }else {
            labelString = String(i);
        }
        this.label.string = labelString;
    },
});
