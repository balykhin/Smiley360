var xMainView, xTitlebar, xTabpanel, xSidePanel, xBackButton;
var views = {}, history = [], isBackNow = false;

Ext.define('smiley360.view.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.mainview',
    requires: [
        'Ext.TabBar',
        'Ext.TitleBar',
    ],
    config: {
        id: 'xMainView',
        layout: 'fit',
        fullscreen: true,
        items: [{
            xtype: 'titlebar',
            id: 'xTitlebar',
            docked: 'top',
            title: 'HOME',
            ui: 'light',
            items: [{
                xtype: 'button',
                id: 'xBackButton',
                ui: 'plain',
                align: 'left',
                iconCls: 'back-btn',
                iconMask: true,
                hidden: true,
                listeners: {
                    tap: function () {
                        isBackNow = true;
                        xTabpanel.setActiveItem(history.pop());
                        isBackNow = false;
                    }
                }
            }, {
                xtype: 'button',
                ui: 'plain',
                align: 'right',
                iconCls: 'menu-btn',
                iconMask: true,
                listeners: {
                    tap: function () {
                        xMainView.swapSidePanel();
                    },
                },
            }],
        }, {
            xtype: 'tabpanel',
            id: 'xTabpanel',
            tabBarPosition: 'bottom',
            cls: 'cust-tabbar normal-page-bg',

            layout: {
                type: 'card',
                animation: { type: 'slide', direction: 'left' },//!Ext.os.is('Android'),
            },

            defaults: {
                styleHtmlContent: true,
                scrollable: true,
            },

            items: [{
                title: 'HOME',
                id: 'xHomeTab',
                cls: 'tab-item',
                iconCls: 'home-img',
                items: { xtype: 'homeview' },
            }, {
                title: 'MISSIONS',
                id: 'xMissionsTab',
                iconCls: 'mission-img',
                items: { xtype: 'missionsview' },
            }, {
                title: 'SHARE',
                id: 'xShareTab',
                iconCls: 'share-img',
                //disabled: true,
                items: { xtype: 'detailsview' },
            }, {
                title: 'OFFERS',
                id: 'xOffersTab',
                iconCls: 'offers-img',
                items: { xtype: 'offersview' },
            }, {
                title: 'CONNECT',
                id: 'xConnectTab',
                iconCls: 'connect-img',
                items: { xtype: 'connectview' },
            }, {
                title: 'sidepanel',
                id: 'xSidePanel',
                cls: 'side-panel',
                hidden: true,
                items: { xtype: 'sidemenu' }
            }],

            listeners: {
                activeitemchange: function (tabbar, value, oldValue, eOpts) {
                    xMainView.setTitle(value.tab.getTitle());

                    if (!xSidePanel.getHidden()) {
                        xMainView.hideSidePanel(oldValue.element);
                    }

                    if (isBackNow == false) {
                        history.push(oldValue);
                        xBackButton.show();
                    }
                    else if (history.length == 0) {
                        xBackButton.hide();
                    }
                }
            },
        }],

        listeners: {
            initialize: function () {
                console.log('MainView -> initialized!');

                xMainView = this;
                xTitlebar = this.down('#xTitlebar');
                xTabpanel = this.down('#xTabpanel');
                xSidePanel = this.down('#xSidePanel');
                xBackButton = this.down('#xBackButton');

                views['homeview'] = this.down('#xHomeTab');
                views['missionsview'] = this.down('#xMissionsTab');
                views['detailsview'] = this.down('#xShareTab');
                views['offersview'] = this.down('#xOffersTab');
                views['connectview'] = this.down('#xConnectTab');

                var shareButton = xTabpanel.getTabBar().getComponent(2);

                shareButton.disable();
                shareButton.on('tap', function () {
                    xTabpanel.down('#xDetailsView').showSharePanel();
                });
            },
        }
    },

    setTitle: function (title) {
        xTitlebar.setTitle(title);
    },

    swapSidePanel: function () {
        var currentTab = xTabpanel.getActiveItem().element;

        if (xSidePanel.getHidden()) {
            this.showSidePanel(currentTab);
        }
        else {
            this.hideSidePanel(currentTab);
        }
    },

    showSidePanel: function (currentTab) {
        if (!currentTab) {
            currentTab = xTabpanel.getActiveItem().element;
        }

        var currentTabWidth = currentTab.getWidth();
        var panelWidth = currentTabWidth * 0.4;

        Ext.Animator.run({
            element: currentTab,
            easing: 'ease-out',
            preserveEndState: true,
            from: { left: 0, right: 0 },
            to: { left: -panelWidth, right: panelWidth },
            onEnd: function () {
                currentTab.setLeft('-40%');
                currentTab.setRight('40%');
            }
        });

        Ext.Animator.run({
            element: xSidePanel.element,
            easing: 'ease-out',
            preserveEndState: true,
            from: { left: currentTabWidth },
            to: { left: currentTabWidth - panelWidth },
            before: { fn: xSidePanel.show() },
            onEnd: function () {
                xSidePanel.element.setLeft('60%');
            },
        });
    },

    hideSidePanel: function (currentTab) {
        if (!currentTab) {
            currentTab = xTabpanel.getActiveItem().element;
        }

        var currentTabWidth = currentTab.getWidth();
        var panelWidth = currentTabWidth * 0.4;

        Ext.Animator.run({
            element: currentTab,
            easing: 'ease-out',
            preserveEndState: true,
            from: { left: -panelWidth, right: panelWidth },
            to: { left: 0, right: 0 },
            onEnd: function () {
                currentTab.setLeft('0px');
                currentTab.setRight('0px');
            }
        });

        Ext.Animator.run({
            element: xSidePanel.element,
            easing: 'ease-out',
            preserveEndState: true,
            from: { left: currentTabWidth - panelWidth },
            to: { left: currentTabWidth },
            onEnd: function () {
                xSidePanel.hide();
                xSidePanel.element.setLeft('100%');
            },
        });
    },

    showExternalView: function (viewAlias) {
        if (!views[viewAlias]) {
            views[viewAlias] = xTabpanel.insert(
                xTabpanel.getItems().length, {
                    xtype: viewAlias, hidden: true
                });
        }

        xTabpanel.setActiveItem(views[viewAlias]);
    },

    enableSharing: function () {
        xTabpanel.getTabBar().getComponent(2).enable();
    }
});
