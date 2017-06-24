cc.Class({
    extends: cc.Component,

    properties: {
        // ...
        labelLeftName: {
            default: null,
            type: cc.Label
        },
        labelRightDes: {
            default: null,
            type: cc.Label
        },
    },

    init: function (subAlarmInfo) {
        this.labelLeftName.string = subAlarmInfo.leftNmae;
        this.labelRightDes.string = subAlarmInfo.rightDes;
    }
});
