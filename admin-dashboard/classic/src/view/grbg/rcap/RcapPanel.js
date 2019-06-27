Ext.define('Admin.view.grbg.rcap.RcapPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'rcapPanel',

    requires: [
        'Ext.calendar.panel.Panel'
    ],

    width: 1200,
    height: 600,

    layout: 'fit',
    items: [{
        xtype: 'calendar',
        views: {
            day: {
                startTime: 6,
                endTime: 22
            },
            workweek: {
                xtype: 'calendar-week',
                titleTpl: '{start:date("j M")} - {end:date("j M")}',
                label: 'Work Week',
                weight: 15,
                dayHeaderFormat: 'D d',
                firstDayOfWeek: 1,
                visibleDays: 5
            }
        },
        // store: {
        //     autoLoad: true,
        //     proxy: {
        //         type: 'ajax',
        //         url: '/KitchenSink/CalendarFull'
        //     }
        // }
        store: {
            type: 'calendar-calendars',
            autoLoad: true,
            asynchronousLoad: true,
            proxy: {
                type: 'memory',
                url: null,
                data: [{
                    id: 1,
                    title: 'Work',
                    eventStore: {
                        asynchronousLoad: true,
                        proxy: {
                            type: 'memory',
                            url: null,
                            data: [{
                                id: 2001,
                                calendarId: 1,
                                title: 'c1标题',
                                // allDay: true,
                                startDate: new Date('2019-03-10 09:00'),
                                endDate: new Date('2019-03-10 10:00')
                            }, {
                                id: 2002,
                                calendarId: 2,
                                title: 'C2标题',
                                //allDay: true,
                                startDate: new Date('2019-03-10 09:00'),
                                endDate: new Date('2019-03-10 17:00')
                            }]

                        }

                    },
                }, {
                    id: 2,
                    title: 'Plan',
                    eventStore: {
                        asynchronousLoad: true,
                        proxy: {
                            type: 'memory',
                            url: null,
                            data: [{
                                id: 2003, //全局id要唯一
                                calendarId: 1,
                                title: 'plan1标题',
                                startDate: new Date('2019-03-11 09:00'),
                                endDate: new Date('2019-03-11 17:00')

                            }, {
                                id: 2003, //和上面id重复 所以覆盖了上面的
                                calendarId: 2,
                                title: 'plan2标题',

                                startDate: new Date('2019-03-11 09:00'),
                                endDate: new Date('2019-03-11 17:00')

                            }]
                        }

                    },
                }, {
                    id: 4,
                    title: 'ToExcSummary',
                    color: '#6f95e1',
                    eventStore: {
                        asynchronousLoad: true,
                        proxy: {
                            type: 'memory',
                            data: [{
                                id: 2005,
                                calendarId: 4,
                                title: '小结标题1',
                                allDay: true,
                                startDate: new Date('2019-03-12 00:00'),
                                endDate: new Date('2019-03-12 24:00')

                            }, {
                                id: 2006,
                                calendarId: 4,
                                title: '小结标题2',

                                startDate: new Date('2019-03-12 09:00'),
                                endDate: new Date('2019-03-12 17:00')

                            }]
                        }
                    }
                }, {
                    id: 5,
                    title: 'ExSummary', //已批小结
                    color: '#8bc34a',
                    eventStore: {
                        asynchronousLoad: true,
                        proxy: {
                            type: 'memory',
                            data: [{
                                id: 2007,
                                calendarId: 1,
                                title: 'w小结标题1',
                                startDate: new Date('2019-03-13 09:00'),
                                endDate: new Date('2019-03-13 17:00')

                            }, {
                                id: 2008,
                                calendarId: 2,
                                title: 'w小结标题2',
                                allDay: true,
                                startDate: new Date('2019-03-13 00:00'),
                                endDate: new Date('2019-03-14 00:00')

                            }]
                        }
                    }
                }]

            },
        }
    }]
});