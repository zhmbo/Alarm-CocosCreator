const alarm = require('AlarmModel').alarmModel;

cc.Class({
    extends: cc.Component,

    properties: {
        alarmKey:'Alarms',
        alarms: [],
    },

    readAlarmsData: function () {
        console.log('存本地读取 alarmKey 数据');
        return [alarm,alarm,alarm];
        // 从本地获取数据
        var alarmsData = JSON.parse(cc.sys.localStorage.getItem(this.alarmKey));
        // 判断本地是否存在 key 为 alarmKey 的数据
        if (alarmsData == null) {return};
        console.log('数据为：'+alarmsData.length+'条');
        // 循环添加倒数组并返回
        for (var i = 0; i < alarmsData.length; i++) {
            this.alarms = this.alarms.concat(alarmsData[i]);
        }
        return this.alarms;
    },

    storageAlarmData: function (alarmData) {
        this.labelTag.string = '正在将 alarmKey 写入本地数据库';
        cc.sys.localStorage.setItem(this.alarmKey, JSON.stringify(alarmData));
    },

    getAlarmDataWithRow: function (row) {
        this.readAlarmsData()[row];
    },

});