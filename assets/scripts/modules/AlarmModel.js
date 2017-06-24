/**
 * 闹铃模型
 */

const alarmModel = {
        weekDays: ['一', '二','三','日'], 
        hourString: 6, 
        minString: 15, 
        alertBody: '起床闹铃', 
        soundName: '铃声', 
        userNotificationKey: 1, 
        isOn: false
};

module.exports = {
	alarmModel: alarmModel
};
