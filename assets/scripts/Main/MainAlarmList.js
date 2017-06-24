const alarm = require('AlarmModel').alarmModel;

cc.Class({
    extends: cc.Component,

    properties: {
        scrollView: cc.ScrollView,
        prefabAlarmItem: cc.Prefab,
        alarms:[],
        storageMng: cc.Node,
    },

    // use this for initialization
    onLoad: function () {
        // 获取节点上组件
        var storageMng = this.storageMng.getComponent('StorageMng');
        // 初始化数据
        this.alarms = storageMng.readAlarmsData();
        // 映射到 Canvas
        this.populateList();
    },

    // 映射到 Canvas
    populateList: function() {
        // self.prefabAlarmItem = self.node.getChildByName("yinxiao")
        for (var i = 0; i < this.alarms.length; ++i) {
            // console.log('创建了第 ' + i + ' item');
            var alarmInfo = this.alarms[i];
            var item = cc.instantiate(this.prefabAlarmItem);
            item.tag = i;
            item.getComponent('MainAlarmItem').init(alarmInfo);
            this.scrollView.content.addChild(item);
            // 添加点击事件   
            this.addTouchEvent(item, i);
        }
    },
    
    // 添加点击事件
    addTouchEvent: function (node, row) {
        node.on(cc.Node.EventType.TOUCH_END, function () {
            Global.glb_DidClickRow = row;
            // 编辑闹铃场景
            cc.director.loadScene('AddAlarm');
         });
    },
});