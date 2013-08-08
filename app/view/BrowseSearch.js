var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.BrowseSearch', {
	extend: 'Ext.Panel',
	alias: 'widget.browsesearchview',
	requires: [
        'Ext.TitleBar',
        'Ext.Video',
		'Ext.List',
		'Ext.dataview.List',

	],
	config: {
		id: 'xBrowseSearch',
		title: 'CONNECT/search',
		items: [

                    {
                    	xtype: 'spacer',
                    	height: '14px',
                    	style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 5px 5px 0px 0px;'
                    },
							{
								xtype: 'spacer',
								height: '7px',
								style: 'background-color: #efecea;'
							},

                    {
                    	xtype: 'container',
                    	layout: 'hbox',
                    	id: 'browseinst-cont',
                    	style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
                    	items: [{
                    		xtype: 'container',
                    		layout: 'vbox',
                    		flex: 1,

                    		listeners:
                                {
                                	painted: function () {
                                	},
                                },
                    		items: [
                                {
                                	xtype: 'container',
                                	id: 'addtest',
                                	laytout: { type: 'vbox' },
                                	cls: 'has-shadow',
                                	items: [
                                        {
                                        	xtype: 'container',
                                        	style: 'box-shadow: 0px 1px 2px rgba(0,0,0,0.5);',
                                        	layout: { type: 'hbox' },
                                        	items: [
                                                {
                                                	xtype: 'label',
                                                	html: 'searchstring',
                                                	cls: 'heading-text active-sign',
                                                	style: 'padding-left: 15px;',
                                                	flex: 1
                                                },
                                        	]
                                        },

                                        {
                                        	xtype: 'spacer',
                                        	height: '14px',
                                        	style: 'background-color: #efecea; margin: 0px 2px;',
                                        }, ],
                                }, ],
                    	}, ]
                    }],
		listeners: {
			painted: function () {
				

				Ext.define('SearchRes', {
					extend: 'Ext.data.Model',
					config: {
						fields: ['title', 'img_src', 'brand_id'],
					}
				});

				var store = Ext.create('Ext.data.Store', {
					model: 'SearchRes',
					pageSize: 4,
					listeners: {
						load: function () {
							alert('trynewload');
							/*take another 36*/
						}//console.log(this.valueOf()); }
					},
					data: [
						{ title: 'Tommy', img_src: 'Maintz', brand_id:1},
						{ title: 'Rob', img_src: 'Dougan', brand_id: 2 },
						{ title: 'Ed', img_src: 'Spencer', brand_id: 3 },
						{ title: 'Jamie', img_src: 'Avins', brand_id: 4 },
						{ title: 'Aaron', img_src: 'Conran', brand_id: 5 },
						{ title: 'Dave', img_src: 'Kaneda', brand_id: 6 },
						{ title: 'Jacky', img_src: 'Nguyen', brand_id: 7 },
						{ title: 'Abraham', img_src: 'Elias', brand_id: 8 },
						{ title: 'Jay', img_src: 'Robinson', brand_id: 9 },
						{ title: 'Nigel', img_src: 'White', brand_id: 10 },
						{ title: 'Don', img_src: 'Griffin', brand_id: 11 },
						{ title: 'Nico', img_src: 'Ferrero', brand_id: 12 },
						{ title: 'Jason', img_src: 'Johnston', brand_id: 13 },
					]
				});

				//for (var item in smiley360.SearchResults)
				//var itemInside = smiley360.SearchResults[item]
				//title = itemInside.title, img_src....

				//function(title,img_src, brand_id)
				//{ var tempstore = Ext.getStore(store);

				//tempstore.removeAll();
				//tempstore.add({ title:title ,img_src: img_src, brand_id: brand_id });
				//tempstore.sync(); }

				///for dynamic load
				//if (store != null) {
				//	store.each(function (record) {
				//		if (record.get('field')) {
				//			template += 
				//				' {field} <br/>';
				//		}
				//	}
				//create an array with data for list
				//for (var i = 0; i < 36; i++) {

				var myTpl = new Ext.XTemplate(
					'<tpl for="data">',
						'<p>{title}</p>',
						'<p>{img_src}</p>',
					'</tpl>'
				);
				var template = '<table><tr><td valign="top"><img src="{title}"' +
				' width=20px height=22px />' +
				'&nbsp;&nbsp;</td><td><span><b>{img_src}</b></span> <br/>';


				

				Ext.getCmp('addtest').add(Ext.create(
						'Ext.List', {
							inline: { wrap: false },

							width: 400,
							height: 200,
							itemTpl: '<div ><div id="left" style="width: 25%; float:left; font-size: 20px; "><p>{title}</p><p>{title}</p></div><div id="center" style="width: 25%; float:left; font-size: 20px; ">{title}</div><div id="semi-center" style="width: 25%; float:left; font-size: 20px; ">{img_src}</div><div id="right" style="width: 25%; float:left; font-size: 20px; ">{img_src}</div></div>',
							//itemTpl: '<div>{title}<br />verified star<br />" "</div>"
							//itemTpl: myTpl,

							store: store,
							plugins: [
										{
											xclass: 'Ext.plugin.ListPaging',
											autoPaging: true
										}
							],
							listeners: {
								initialize: function () { console.log(this.valueOf()); },
								
							},
						}));
			}
		}
	},
});
