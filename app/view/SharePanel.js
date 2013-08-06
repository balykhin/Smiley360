Ext.define('smiley360.view.SharePanel', {
    extend: 'Ext.Container',
    alias: 'widget.sharepanel',
    requires: ['Ext.ux.ShareButton'],
    config: {
        cls: 'share-panel',
        layout: 'fit',
        items: [{
            xtype: 'container',
            layout: 'hbox',
            cls: 'share-panel-row',
            items: [{
                xtype: 'sharebutton',
                cls: 'share-fb-btn',
                smilesDone: 1,
                smilesTotal: 10,
                smilesCurrent: 5,
                listeners: {
                    tap: function () {
                        Ext.widget('sharetofacebookview').show();
                    }
                }
            }, {
                xtype: 'sharebutton',
                cls: 'share-tw-btn',
                listeners: {
                    tap: function () {
                        Ext.widget('sharetotwitterview').show();
                    }
                }
            }, {
                xtype: 'sharebutton',
                cls: 'share-pin-btn',
                listeners: {
                    tap: function () {
                        alert('coming soon');
                        //Ext.widget('sharetofacebookview').show();
                    }
                }
            }],
        }, {
            xtype: 'container',
            layout: 'hbox',
            cls: 'share-panel-row',
            items: [{
                xtype: 'sharebutton',
                cls: 'share-yt-btn',
                listeners: {
                    tap: function () {
                        Ext.widget('sharetoyoutubeview').show();
                    }
                }
            }, {
                xtype: 'sharebutton',
                cls: 'share-f2f-btn',
                listeners: {
                    tap: function () {
                        Ext.widget('sharetoface2faceview').show();
                    }
                }
            }, {
                xtype: 'sharebutton',
                cls: 'share-photo-btn',
                listeners: {
                    tap: function () {
                        Ext.widget('uploadphotoview').show();
                    }
                }
            }],
        }, {
            xtype: 'container',
            layout: 'hbox',
            cls: 'share-panel-row',
            items: [{
                xtype: 'sharebutton',
                cls: 'share-link-btn',
                listeners: {
                    tap: function () {
                        Ext.widget('sharelinkview').show();
                    }
                }
            }, {
                xtype: 'sharebutton',
                cls: 'share-blog-btn',
                listeners: {
                    tap: function () {
                        Ext.widget('sharetoblogview').show();
                    }
                }
            }, {
                xtype: 'sharebutton',
                cls: 'share-sm_conn-btn',
                listeners: {
                    tap: function () {
                        alert('coming soon');
                        //Ext.widget('sharetofacebookview').show();
                    }
                }
            }],
        }],
    },
});