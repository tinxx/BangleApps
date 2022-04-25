(function (back) {
  let settings = require("sched").getSettings();

  E.showMenu({
    "": { "title": /*LANG*/"Scheduler" },

    /*LANG*/"< Back": () => back(),

    /*LANG*/"Unlock at Buzz": {
      value: settings.unlockAtBuzz,
      format: v => v ? /*LANG*/"Yes" : /*LANG*/"No",
      onchange: v => {
        settings.unlockAtBuzz = v;
        require("sched").setSettings(settings);
      }
    },

    /*LANG*/"Default Auto Snooze": {
      value: settings.defaultAutoSnooze,
      format: v => v ? /*LANG*/"Yes" : /*LANG*/"No",
      onchange: v => {
        settings.defaultAutoSnooze = v;
        require("sched").setSettings(settings);
      }
    },

    /*LANG*/"Default Snooze": {
      value: settings.defaultSnoozeMillis / 60000,
      min: 5,
      max: 30,
      step: 5,
      format: v => v + /*LANG*/" min",
      onchange: v => {
        settings.defaultSnoozeMillis = v * 60000;
        require("sched").setSettings(settings);
      }
    },

    /*LANG*/"Buzz Count": {
      value: settings.buzzCount,
      min: 5,
      max: 15,
      step: 1,
      onchange: v => {
        settings.buzzCount = v;
        require("sched").setSettings(settings);
      }
    },

    /*LANG*/"Buzz Interval": {
      value: settings.buzzIntervalMillis / 1000,
      min: 1,
      max: 5,
      step: 1,
      format: v => v + /*LANG*/"s",
      onchange: v => {
        settings.buzzIntervalMillis = v * 1000;
        require("sched").setSettings(settings);
      }
    },

    /*LANG*/"Default Alarm Pattern": require("buzz_menu").pattern(settings.defaultAlarmPattern, v => {
      settings.defaultAlarmPattern = v;
      require("sched").setSettings(settings);
    }),

    /*LANG*/"Default Timer Pattern": require("buzz_menu").pattern(settings.defaultTimerPattern, v => {
      settings.defaultTimerPattern = v;
      require("sched").setSettings(settings);
    })
  });
});