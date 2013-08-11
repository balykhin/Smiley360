var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.BrowseInstruments', {
	extend: 'Ext.Panel',
	alias: 'widget.browseinstrumentsview',
	requires: [
        'Ext.TitleBar',
        'Ext.Video',
		'Ext.List',
		'Ext.dataview.List',

	],
	config: {
		id: 'xBrowseInstruments',
		title: 'CONNECT/browse',
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
                                                	html: 'MUSIC AND ARTS / instruments',
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
                                        },
                                	],
                                },
                            ///end first
                    		],
                    	},//end vbox container

                    	]
                    }//ens strange container
		],
		listeners: {
			painted: function () {
				//create an array with data for list


				//for (var i = 0; i < 19; i++) {

				//	var members = Ext.getStore('Countries');

				//	members.add({ name: 'Tommy' + i + i});
				//	members.sync();
				//}


				Ext.define('Contact', {
					extend: 'Ext.data.Model',
					config: {
						fields: ['firstName', 'lastName'],
					}

				});

				var store = Ext.create('Ext.data.Store', {
					model: 'Contact',
					//sorters: 'lastName',
					pageSize: 4,
					listeners: {
						load: function () {
							alert('trynewload');
							/*take another 36*/
						}//console.log(this.valueOf()); }
					},
					data: [
						{ firstName: 'Tommy', lastName: 'Maintz' },
						{ firstName: 'Rob', lastName: 'Dougan' },
						{ firstName: 'Ed', lastName: 'Spencer' },
						{ firstName: 'Jamie', lastName: 'Avins' },
						{ firstName: 'Aaron', lastName: 'Conran' },
						{ firstName: 'Dave', lastName: 'Kaneda' },
						{ firstName: 'Jacky', lastName: 'Nguyen' },
						{ firstName: 'Abraham', lastName: 'Elias' },
						{ firstName: 'Jay', lastName: 'Robinson' },
						{ firstName: 'Nigel', lastName: 'White' },
						{ firstName: 'Don', lastName: 'Griffin' },
						{ firstName: 'Nico', lastName: 'Ferrero' },
						{ firstName: 'Jason', lastName: 'Johnston' },

					]
				});

				var myTpl = new Ext.XTemplate(
					'<tpl for="data">',
						'<p>{firstName}</p>',
						'<p>{lastName}</p>',
					'</tpl>'
				);
				var template = '<table><tr><td valign="top"><img src="{firstName}"' +
				' width=20px height=22px />' +
				'&nbsp;&nbsp;</td><td><span><b>{lastName}</b></span> <br/>';

				
				//if (store != null) {
				//	store.each(function (record) {
				//		if (record.get('field')) {
				//			template += '<span class="label">Domain Name:</span>' +
				//				' {field} <br/>';
				//		}
				//	}

				Ext.getCmp('addtest').add(Ext.create(
					'Ext.List', {

						//give it an xtype of list for the list component


						inline: { wrap: false },
						//scrollable: {
						//	direction: 'horizontal',
						//	directionLock: true
						//},

						width: 400,
						height: 100,
						background: 'white',
						//fullscreen: true,
						itemTpl: '<div ><div id="left" style="width: 25%; float:left; font-size: 20px; "><p>{firstName}</p><p>{firstName}</p></div><div id="center" style="width: 25%; float:left; font-size: 20px; ">{firstName}</div><div id="semi-center" style="width: 25%; float:left; font-size: 20px; ">{lastName}</div><div id="right" style="width: 25%; float:left; font-size: 20px; ">{lastName}</div></div>',
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
						//grouped: false
					}));

			}
		}
	},
	onBackButtonTap: function () {
		console.log('back button tapped');
		this.fireEvent('backButtonCommandOffers', this);
	},
	onGoToProfileTap: function () {
		console.log('GoToProfile button tapped');
		this.fireEvent('GoToProfileCommand', this);
	},
	oneditLabel: function () {
		console.log("oneditLabel");
		this.fireEvent('oneditLabelCommand', this);
	},
});
