var hide_panel, first_time, dock_panel;
Ext.define('smiley360.view.Details', {
	extend: 'Ext.tab.Panel',
	alias: 'widget.detailsview',
	requires: [
        'Ext.carousel.Carousel',
        'Ext.TitleBar',
        'Ext.Video'
	],
	config: {
		id: 'xDetailsView',
		tabBarPosition: 'bottom',
		cls: 'cust-tabbar normal-page-bg',
		items: [
            {
            	title: 'HOME',
            	iconCls: 'home-img',
            	styleHtmlContent: true,
            	scrollable: true,
            	items: [
                	{
                		xtype: 'toolbar',
                		title: 'MISSIONS',
                		cls: 'home-title',
                		docked: 'top',
                		ui: 'light',
                		items: [
							{
								xtype: 'button',
								text: '',
								ui: 'plain',
								iconCls: 'back-btn',
								iconMask: true,
								itemId: 'backBtn',
								listeners: {
									tap: function () {
										this.up('#xDetailsView').fireEvent('backButtonCommandDetails', this);
									}
								}
							},
							{ xtype: 'spacer' },
							{
								xtype: 'button',
								iconCls: 'menu-btn',
								iconMask: true,
								ui: 'plain',
								text: '',
								itemId: 'menuBtn',
								listeners:
                                {
                                	tap: function () {
                                		if (Ext.getCmp('missions_menu').getHidden() == false) {
                                			Ext.getCmp('missions_menu').hide({ type: 'slide', direction: 'top', duration: 300 });
                                		}
                                		else {
                                			Ext.getCmp('missions_menu').show({ type: 'slide', direction: 'left', duration: 300 });
                                		}
                                	},

                                },
							}
                		]
                	}, {
                		xtype: 'container',
                		layout: 'vbox',
                		flex: 1,
                		listeners:
						{
							painted: function () {
								//dock_panel = this;
							},
						},
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
								laytout: { type: 'vbox' },
								//cls: 'has-shadow',
								items: [
									{
										xtype: 'container',
										cls: 'has-shadow',
										layout: { type: 'hbox' },
										items: [
											{
												xtype: 'label',
												id: 'DetailsTitleLabel',
												html: 'CAMPBELL\'S &reg; SLOW KETTLE &reg; SOUPS ',
												cls: 'heading-text active-sign',
												style: 'padding-left: 15px;',
												flex: 2,
											},
											{
												xtype: 'label',
												html: '13/92',
												cls: 'heading-text',
												style: 'padding-left: 15px; padding-right: 10px;',
												flex: 0.2,
											},
										]
									},
									{
										xtype: 'container',
										style: 'background-color: #efecea; ',

										items: [
											{
												xtype: 'carousel',
												direction: 'horizontal',
												style: 'background-color: #efecea;',
												dragable: false,
												indicator: false,
												defaults: {
													styleHtmlContent: true
												},
												width: '100%',
												height: 160,

												items: [
														{
															xtype: 'container',
															layout: 'vbox',
															items: [

																{
																	xtype: 'image',
																	id: 'DetailsHero',
																	height: 160
																}
															]
														},

												]
											},
											{
												xtype: 'panel',
												html: '<div class="left-btn-mission"></div><div class="right-btn-mission"></div>'
											},
									{
										xtype: 'spacer',
										style: 'background-color: #efecea; border-bottom: 1px dashed #d7cfcd;',
										height: 20,
									},

											{
												xtype: 'container',
												//margin: '20px 25px',
												style: 'background-color: #F4F3F1; padding: 40px 25px;',
												layout: { type: 'vbox' },
												items: [
													{
														xtype: 'button',
														itemId: 'recievebtn',
														cls: 'menu-list-btn-recieve',
														style: 'padding: 30px 0px 50px 0px; margin: -50px 0px; margin-top: -15px 0px;',
														text: 'WHAT YOU\'LL RECIEVE',
														listeners:
															{
																tap: function () {
																	if (Ext.getCmp('recieve_panel').getHidden() == true)
																	{ Ext.getCmp('recieve_panel').show(); this.setCls('after-menu-list-btn-recieve'); }
																	else { Ext.getCmp('recieve_panel').hide(); this.setCls('menu-list-btn-recieve'); }
																}
															}

													},
																{
																	xtype: 'panel',
																	layout: 'vbox',
																	cls: 'has-shadow',
																	style: 'border-radius: 0px 0px 5px 5px; background-color: #e2ddda; margin-top: 50px; margin-bottom: -30px;',
																	id: 'recieve_panel',
																	listeners: {
																		initialize: function ()
																		{ this.hide(); }
																	},
																	items:
																		[
																			{
																				xtype: 'label',
																				height: '3px',
																				style: 'background-color:#fba00a; margin: 0px 0px 0px 0px; '
																			},
																			{
																				xtype: 'label',
																				id: 'DetailsWhatYoullRecieve',
																				style: 'font-family: franklin; font-size:1em;',
																				//cls:'mission-t',
																				html: '1 Campbell\'s Slow Kettle Soup',
																				padding: '10px 20px',
																			},
																		],
																},

													{
														xtype: 'button',
														itemId: 'recievebtn',
														style: 'padding: 30px 0px 50px 0px; margin: 60px 0px;',
														cls: 'menu-list-btn-new',
														text: 'TRY NEW THINGS',
														listeners:
															{
																tap: function () {
																	if (Ext.getCmp('trynew_panel').getHidden() == true)
																	{ Ext.getCmp('trynew_panel').show(); this.setCls('after-missions-trynew-btn'); }
																	else { Ext.getCmp('trynew_panel').hide(); this.setCls('missions-trynew-btn'); }
																}
															}
													},
													{
														xtype: 'panel',
														layout: 'vbox',
														cls: 'has-shadow',
														style: 'background-color:#e2ddda; border-radius: 0px 0px 5px 5px; background-color:white; margin-top: -60px; margin-bottom: 60px;',
														id: 'trynew_panel',
														listeners: {
															initialize: function ()
															{ this.hide(); }
														},
														items:
															[
																{
																	xtype: 'label',
																	height: '3px',
																	style: 'background-color:#fba00a; margin: 0px 0px 0px 0px; '
																},
																{
																	xtype: 'label',
																	id: 'DetailsTryNew',
																	style: 'font-family: franklin; font-size:1em;',
																	//cls:'mission-t',
																	html: '1 Campbell\'s Slow Kettle Soup',
																	padding: '10px 20px',
																},
																{
																	xtype: 'label',
																	id: 'DetailsShipment',
																	style: 'font-family: franklin; font-size:1em;',
																	//cls:'mission-t',
																	html: 'This will ship later.',
																	padding: '10px 20px',
																},
															],
													},
															{
																xtype: 'button',
																itemId: 'recievebtn',
																style: 'padding: 30px 0px 50px 0px; margin: -45px 0px 0px 0px;',
																cls: 'menu-list-btn-smiles',
																text: 'MISSION SMILES',
																listeners:
																{
																	tap: function () {
																		if (Ext.getCmp('mission_smiles_panel').getHidden() == true)
																		{ Ext.getCmp('mission_smiles_panel').show(); this.setCls('after-missions-smiles-btn'); }
																		else { Ext.getCmp('mission_smiles_panel').hide(); this.setCls('missions-smiles-btn'); }
																	}
																}
															},
															{
																xtype: 'panel',
																layout: 'vbox',
																cls: 'has-shadow',
																style: 'background-color:#e2ddda; border-radius: 0px 0px 5px 5px; background-color:white;',
																id: 'mission_smiles_panel',
																listeners: {
																	initialize: function ()
																	{ this.hide(); }
																},
																items:
																	[
																		{
																			xtype: 'label',
																			height: '3px',
																			style: 'background-color:#fba00a; margin: 0px 0px 0px 0px; '
																		},
																		{
																			xtype: 'label',
																			id: 'DetailsMissionSmiles',
																			style: 'font-family: franklin; font-size:1em;',
																			//cls:'mission-t',
																			html: '1 Campbell\'s Slow Kettle Soup',
																			padding: '10px 20px',
																		},
																	],
															},
												],
											},

										]
									},
									{
										xtype: 'spacer',
										height: '7px',
										style: 'background-color: #efecea;',
										cls: 'has-shadow',
									},


									{
										xtype: 'spacer',
										height: '7px',
										style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

									},
									{
										xtype: 'spacer',
										height: '10px',
										style: 'background: transparent;'
									}

								]
							},

                		],

                	},//end vbox container

            	]
            },
            {
            	title: 'MISSIONS',
            	iconCls: 'mission-img',
            	styleHtmlContent: true,
            	scrollable: true,
            },
            {
            	title: 'SHARE',
            	iconCls: 'share-img',
            	styleHtmlContent: true,
            	scrollable: true,

            },
            {
            	title: 'OFFERS',
            	iconCls: 'offers-img',

            	items: [
                    {
                    	xtype: 'toolbar',
                    	title: 'SIGN UP',
                    	docked: 'top',
                    	ui: 'light',
                    	items: [
							{
								xtype: 'button',
								text: '',
								ui: 'plain',
								iconCls: 'cust-back',
								itemId: 'backBtn'
							},
							{ xtype: 'spacer' },
							{
								xtype: 'button',
								iconCls: 'cust-menu',
								ui: 'plain',
								text: '',
								itemId: 'menuBtn'
							}
                    	]
                    },
            	]
            },
            {
            	title: 'CONNECT',
            	iconCls: 'connect-img',

            	items: [
                    {
                    	xtype: 'toolbar',
                    	title: 'SIGN UP',
                    	docked: 'top',
                    	ui: 'light',
                    	items: [
							{
								xtype: 'button',
								text: '',
								ui: 'plain',
								iconCls: 'cust-back',
								itemId: 'backBtn'
							},
							{ xtype: 'spacer' },
							{
								xtype: 'button',
								iconCls: 'cust-menu',
								ui: 'plain',
								text: '',
								itemId: 'menuBtn'
							}
                    	]
                    },
            	]
            }
		],
		listeners: {
			show: function () {
				console.log('Details view showed!');
				this.setMissionDetails();
				//this.setWhatsHappening();
				//this.setSpecialOffers();
			},
		},
	},
	onBackButtonTap: function () {
		console.log('back button tapped');
		this.fireEvent('backButtonCommandDetails', this);
	},
	onGoToProfileTap: function () {
		console.log('GoToProfile button tapped');
		this.fireEvent('GoToProfileCommand', this);
	},
	oneditLabel: function () {
		console.log("oneditLabel");
		this.fireEvent('oneditLabelCommand', this);
	},
	setMissionDetails: function () {
		//	alert(smiley360.missionData.MissionDetails.MissionId);			
		Ext.getCmp('DetailsTitleLabel').setHtml(smiley360.missionData.MissionDetails.MissionDetails.title);
		Ext.getCmp('DetailsHero').setSrc(smiley360.configuration.getOfferImagesUrl(smiley360.missionData.MissionDetails.MissionId, smiley360.missionData.MissionDetails.MissionDetails.link));
		Ext.getCmp('DetailsWhatYoullRecieve').setHtml(smiley360.missionData.MissionDetails.MissionDetails.youllReceive);
		Ext.getCmp('DetailsTryNew').setHtml(smiley360.missionData.MissionDetails.MissionDetails.tryNewThings);
	},
});