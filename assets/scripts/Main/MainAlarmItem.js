cc.Class({
    extends: cc.Component,

    properties: {
        labelWeekDays: cc.Label,
        labelTime: cc.Label, 
        labelAlertBody: cc.Label, 
        spSoundName: cc.SpriteFrame, 
        // ...
    },

    // prefab 构造函数
    init: function (alarmInfo) {
        var weekArray = alarmInfo.weekDays;
        this.labelWeekDays.string = '';
        for (var i = 0; i < weekArray.length; i++) {
            // console.log(weekArray[i]);
            this.labelWeekDays.string += weekArray[i]+' ';
        }
        this.labelTime.string = alarmInfo.hourString + ':' + alarmInfo.minString;
        this.labelAlertBody.string = alarmInfo.alertBody;
    },

});
