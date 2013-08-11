﻿var hide_panel, first_time, dock_panel, id_arr_browse = [];
Ext.define('smiley360.view.Browse', {
	extend: 'Ext.Panel',
	alias: 'widget.browseview',
	requires: [
        'Ext.TitleBar',
        'Ext.Video'
	],
	config: {
		title:'BROWSE',
		id: 'xBrowse',
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
                    	//id: 'missions-cont',
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
                                                	html: 'HOT BRANDS',
                                                	cls: 'heading-text active-sign',
                                                	style: 'padding-left: 15px;',
                                                	flex: 1
                                                },
                                        	]
                                        },
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
                                        	height: 180,

                                        	items: [{
                                        		xtype: 'container',
                                        		layout: 'hbox',
                                        		id: 'xMyHot',
                                        		style: 'background-color: #efecea;',
                                        		cls: 'has-shadow',
                                        		padding: 20,
                                        		items: [

                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'image',
                                                            	src: 'resources/images/mc_img.png',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'border-radius: 5px;',
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'McDonald\'s',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//1st item carousel
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'image',
                                                            	src: 'resources/images/secret-logo.png',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'border-radius: 5px;',
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Secrete',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//1st item carousel
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'image',
                                                            	src: 'resources/images/offers_logo.png',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'border-radius: 5px;',
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Campbell\'s Go',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//1st item carousel
                                                    {
                                                    	xtype: 'container',
                                                    	layout: 'vbox',
                                                    	cls: 'has-shadow',
                                                    	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                    	items: [

                                                            {
                                                            	xtype: 'image',
                                                            	src: 'resources/images/offers_logo3.png',
                                                            	height: 100,
                                                            	width: 100,
                                                            	style: 'border-radius: 5px;',
                                                            },
                                                             {
                                                             	xtype: 'label',
                                                             	html: 'Brand X',
                                                             	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                             },
                                                    	]
                                                    },//1st item carousel
                                        		],//1st row items
                                        	},//1st row end
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

                            {
                            	xtype: 'container',
                            	laytout: { type: 'vbox' },
                            	cls: 'has-shadow',
                            	items: [
									{

										xtype: 'spacer',
										height: '7px',
										style: 'background-color: #efecea;'
									}, {
										xtype: 'container',
										cls: 'has-shadow',
										layout: { type: 'hbox' },
										items: [
											{
												xtype: 'label',
												html: 'FAVORITED',
												cls: 'heading-text active-sign',
												style: 'padding-left: 15px;',
												flex: 1
											},
										]
									},

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
                                    	height: 180,

                                    	items: [{
                                    		xtype: 'container',
                                    		layout: 'hbox',
                                    		id: 'xMyFavorited',
                                    		style: 'background-color: #efecea;',
                                    		cls: 'has-shadow',
                                    		padding: 20,
                                    		items: [

                                                {
                                                	xtype: 'container',
                                                	layout: 'vbox',
                                                	cls: 'has-shadow',
                                                	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                	items: [

                                                        {
                                                        	xtype: 'image',
                                                        	src: 'resources/images/secret-logo.png',
                                                        	height: 100,
                                                        	width: 100,
                                                        	style: 'border-radius: 5px;',
                                                        },
                                                         {
                                                         	xtype: 'label',
                                                         	html: 'McDonald\'s',
                                                         	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                         },
                                                	]
                                                },//1st item carousel
                                                {
                                                	xtype: 'container',
                                                	layout: 'vbox',
                                                	cls: 'has-shadow',
                                                	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                	items: [

                                                        {
                                                        	xtype: 'image',
                                                        	src: 'resources/images/mc_img.png',
                                                        	height: 100,
                                                        	width: 100,
                                                        	style: 'border-radius: 5px;',
                                                        },
                                                         {
                                                         	xtype: 'label',
                                                         	html: 'Secrete',
                                                         	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                         },
                                                	]
                                                },//1st item carousel
                                                {
                                                	xtype: 'container',
                                                	layout: 'vbox',
                                                	cls: 'has-shadow',
                                                	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                	items: [

                                                        {
                                                        	xtype: 'image',
                                                        	src: 'resources/images/offers_logo3.png',
                                                        	height: 100,
                                                        	width: 100,
                                                        	style: 'border-radius: 5px;',
                                                        },
                                                         {
                                                         	xtype: 'label',
                                                         	html: 'Campbell\'s Go',
                                                         	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                         },
                                                	]
                                                },//1st item carousel
                                                {
                                                	xtype: 'container',
                                                	layout: 'vbox',
                                                	cls: 'has-shadow',
                                                	style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
                                                	items: [

                                                        {
                                                        	xtype: 'image',
                                                        	src: 'resources/images/offers_logo.png',
                                                        	height: 100,
                                                        	width: 100,
                                                        	style: 'border-radius: 5px;',
                                                        },
                                                         {
                                                         	xtype: 'label',
                                                         	html: 'Brand X',
                                                         	style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
                                                         },
                                                	]
                                                },//1st item carousel
                                    		],//1st row items
                                    	},//1st row end
                                    	]
                                    },
									{
										xtype: 'spacer',
										height: '7px',
										style: 'background-color: #efecea;',
										cls: 'has-shadow',
									},
                            	]
                            },//end second
                            {
                            	xtype: 'spacer',
                            	height: '7px',
                            	style: 'background-color: #f4f3f1; margin: 0px 2px;'

                            },

                              {
                              	xtype: 'spacer',
                              	height: '7px',
                              	style: 'background-color: #f4f3f1; margin: 0px 2px;'

                              },
                            {
                            	xtype: 'container',
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
                                            	html: 'CATEGORIES',
                                            	cls: 'heading-text active-sign',
                                            	style: 'padding-left: 15px;',
                                            	flex: 1
                                            },
                                    	]
                                    },
                                    //auto, baby, clothes
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb;',
                                    	padding: 20,
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Auto',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	//style: 'background: #e2ddda; border-radius: 5px;margin-right: 20px ',
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xAutoPict',
                                                    	src: 'resources/images/auto_c.png',
                                                    	height: 50,
                                                    	width: '100%',
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xAutoLabel',
                                                     	html: 'Automotive',
                                                     	cls: 'browse_text',
                                                     	//style: 'text-align: center; font-size:1.25em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din bold\';',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Baby',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xBabyPict',
                                                    	src: 'resources/images/baby_c.png',
                                                    	height: 40,
                                                    	width: '70%',
                                                    	margin: '15px 22px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xBabyLabel',
                                                     	html: 'Baby',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Clothes',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xClothesPict',
                                                    	src: 'resources/images/clothes_c.png',
                                                    	height: 50,
                                                    	width: '100%',
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xClothesLabel',
                                                     	html: 'Clothing & Accessories',
                                                     	style: 'margin-top: -20px;',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//1st row end
									 {
									 	xtype: 'container',
									 	layout: 'vbox',
									 	id: 'xAuto_panel_browse',
									 	width: '100%',
									 	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
									 	listeners: {
									 		initialize: function () {
									 			var arr = ['Cars', 'Trucks', 'Motorcycles', 'Boats'];
									 			Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'left');
									 			this.hide();
									 		}
									 	}
									 },
									 {
									 	xtype: 'container',
									 	layout: 'vbox',
									 	id: 'xBaby_panel_browse',
									 	width: '100%',
									 	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
									 	listeners: {
									 		initialize: function () {
									 			var arr = ['Baby Toys', 'Clothing & Shoe Brands', 'Diapers & Accessories', 'Feeding',
													'General Parenting Info', 'Safety', 'Strollers & Carriers'];
									 			Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'middle');
									 			this.hide();
									 		}
									 	}
									 },
									 {
									 	xtype: 'container',
									 	layout: 'vbox',
									 	id: 'xClothes_panel_browse',
									 	width: '100%',
									 	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
									 	listeners: {
									 		initialize: function () {
									 			var arr = ['Athletic', 'Clothing Retailers', 'Department Stores', 'Fashion Designers &<br> Retailers',
									 			'Jewelry & Wathches', 'Maternity', 'Shoes', 'Sunglasses, Handbags and Other<br> Accessories'];
									 			Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'right');
									 			this.hide();
									 		}
									 	}
									 },
                                    //software,eco,education
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb;',
                                    	padding: 20,
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Computer',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xComputerPict',
                                                    	src: 'resources/images/computer_c.png',
                                                    	height: 50,
                                                    	align: 'center',
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xComputerLabel',
                                                     	html: 'Computer & Software',
                                                     	style: 'margin-top: -20px;',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Eco_Friendly',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xEco_FriendlyPict',
                                                    	src: 'resources/images/eco_friendly_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xEco_FriendlyLabel',
                                                     	html: 'Eco-Friendly',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	id: 'Edu',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xEduPict',
                                                    	src: 'resources/images/edu_c.png',
                                                    	height: 50,
                                                    	width: '60%',
                                                    	margin: '15px 27px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xEduLabel',
                                                     	html: 'Education',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//2nd row end
									{
										xtype: 'container',
										layout: 'vbox',
										id: 'xComputer_panel_browse',
										width: '100%',
										style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
										listeners: {
											initialize: function () {
												var arr = ['Computer Makes & Models', 'Social Networking & Email Program', 'General Software'];
												Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'left');
												this.hide();
											}
										}
									},
									 {
									 	xtype: 'container',
									 	layout: 'vbox',
									 	id: 'xEco_Friendly_panel_browse',
									 	width: '100%',
									 	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
									 	listeners: {
									 		initialize: function () {
									 			var arr = ['Cleaning & Household', 'Food & Beverage', 'General Eco-Friendly', ' Wellness Products'];
									 			Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'middle');
									 			this.hide();
									 		}
									 	}
									 },
									 {
									 	xtype: 'container',
									 	layout: 'vbox',
									 	id: 'xEdu_panel_browse',
									 	width: '100%',
									 	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
									 	listeners: {
									 		initialize: function () {
									 			var arr = ['Colleges & Universities', 'Educational Services &<br> Websites', 'General Education'];
									 			Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'right');
									 			this.hide();
									 		}
									 	}
									 },
                                    //electronics, financial,food
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb;',
                                    	padding: 20,
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Mobile',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xMobilePict',
                                                    	src: 'resources/images/mobile_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xMobileLabel',
                                                     	html: 'Electronics',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Finance',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	id: 'xFinancePict',
                                                    	src: 'resources/images/finance_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	id: 'xFinanceLabel',
                                                     	html: 'Financial Services',
                                                     	style: 'margin-top: -20px;',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/food_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Food & Drinks',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//3rd row end
									{
										xtype: 'container',
										layout: 'vbox',
										id: 'xMobile_panel_browse',
										width: '100%',
										style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
										listeners: {
											initialize: function () {
												var arr = ['Cameras', ' Computers', 'Electronics Misc', 'Music Players',
												'Phones', 'Retailers, Websites & Models'];
												Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'left');
												this.hide();
											}
										}
									},
									 {
									 	xtype: 'container',
									 	layout: 'vbox',
									 	id: 'xFinance_panel_browse',
									 	width: '100%',
									 	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
									 	listeners: {
									 		initialize: function () {
									 			var arr = ['Banking', ' Mortgages & Loans'];
									 			Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'middle');
									 			this.hide();
									 		}
									 	}
									 },
                                    //health,hobbies,home
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb;',
                                    	padding: 20,
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/health_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Health & Beauty',
                                                     	style: 'margin-top: -20px;',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/hobbies_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Hobbies',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/home_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Home & Garden',
                                                     	style: 'margin-top: -20px;',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//4th row end
                                    //media,music,non-prof
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb;',
                                    	padding: 20,
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/media_c.png',
                                                    	height: 50,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Media',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	id: 'Music',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	listeners: {
                                            		element: 'element',
                                            		tap: function () {
                                            			this.up('#xBrowse').doTap(this.id);
                                            		},
                                            	},
                                            	items: [

													{
														id: 'xMusicPict',
														xtype: 'image',
														height: 50,
														margin: '15px 35px',
													},
													 {
													 	id: 'xMusicLabel',
													 	xtype: 'label',
													 	html: 'Music & Arts',
													 	cls: 'browse_text',
													 },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/non-profit_c.png',
                                                    	height: 50,
                                                    	margin: '15px 35px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Non-Profit',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//5th row end
                                    {
                                    	xtype: 'container',
                                    	layout: 'vbox',
                                    	id: 'xMusic_panel_browse',
                                    	width: '100%',
                                    	style: 'background: #f0eceb; border-top: 1px dashed #d7cfcd;border-bottom: 1px dashed #d7cfcd;',
                                    	listeners: {
                                    		initialize: function () {
                                    			var arr = ['ArtSupplies', 'Artists', 'Instruments', 'Musical Gear', 'Performers'];
                                    			Ext.getCmp('xBrowse').doCreateItems(arr, this.id, 'middle');
                                    		}
                                    	}
                                    },
                                    	//people, pets, sports
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb;',
                                    	padding: 20,
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/people_c.png',
                                                    	height: 50,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'People',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/pets_c.png',
                                                    	height: 50,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Pets',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/sports_c.png',
                                                    	height: 50,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Sports',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//3rd item carousel
                                    	],//1st row items
                                    },//6th row end
                                    //travel, work
                                    {
                                    	xtype: 'container',
                                    	layout: 'hbox',
                                    	style: 'background: #f0eceb;',
                                    	padding: 20,
                                    	items: [
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/travel_c.png',
                                                    	height: 50,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Travel',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//1st item carousel
                                            {
                                            	xtype: 'container',
                                            	layout: 'vbox',
                                            	cls: 'has-shadow browse_container',
                                            	height: 140,
                                            	width: 140,
                                            	items: [

                                                    {
                                                    	xtype: 'image',
                                                    	src: 'resources/images/work_c.png',
                                                    	height: 50,
                                                    	margin: '15px 0px',
                                                    },
                                                     {
                                                     	xtype: 'label',
                                                     	html: 'Work',
                                                     	cls: 'browse_text',
                                                     },
                                            	]
                                            },//2nd item carousel

                                    	],//1st row items
                                    },//6th row end
                                     {
                                     	xtype: 'spacer',
                                     	height: '7px',
                                     	style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

                                     },
									{
										xtype: 'spacer',
										height: '10px',
										style: 'background: transparent;'
									},
                            	],
                            },//end last
                    		],
                    	},//end vbox container

                    
                    	]
                    }//ens strange container
		],
		listeners: {
			activate: function () {				
				this.setHot();
			},
			painted: function () {	
				this.setFavorited();
				
			}
		}
	},
	setFavorited: function () {
		Ext.getCmp('xMyFavorited').removeAll(true, true);
		var FavBrands = smiley360.memberData.UserBrands;
		for (var key in FavBrands) {
			var oneItem = FavBrands[key];
			if (oneItem.title)
				this.setFavoritedItem(oneItem);
		};
	},
	setFavoritedItem: function (oneItem) {
		var FavoritedItem = new Ext.Container({
			//id: id + 'container',
			layout: 'vbox',
			cls: 'has-shadow',
			style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
		});
		var ContItem = FavoritedItem.add(new Ext.Container(
		{
			height: 100,
			width: 100,
			style: 'border-radius: 5px;',
		}));
		var Item = ContItem.add(new Ext.Img(
		{
			//src: 'resources/images/secret-logo.png',
			style: 'border-radius: 5px;',
			src: smiley360.configuration.getResourceDomain() + '/' + oneItem.imageURL,
			padding: 50,
			listeners: {
				tap: function () {
					this.up('#xBrowse').fireEvent('onBrandTapCommand', this, smiley360.memberData.UserId, oneItem.smileyconnectID, 0, 10);
				}
			}
		}));

		var NextItem = FavoritedItem.add(new Ext.Label(
		{
			//html: 'McDonald\'s',
			html: oneItem.title,
			style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',

		}));

		Ext.getCmp('xMyFavorited').add(FavoritedItem);
		if (NextItem.getHtml().toString().length > 12) {
			NextItem.setHtml(NextItem.getHtml().toString().substr(0, 9) + '...');
		};
	},
	//////////////

	setHot: function () {
		Ext.getCmp('xMyHot').removeAll(true, true);
		var HotBrands = smiley360.HotBrands;
		for (var key in HotBrands) {
			var oneItem = HotBrands[key];
			if (oneItem.title)
				this.setHotItem(oneItem);
		};
		console.log('Hot brands');
	},
	setHotItem: function (oneItem) {
		var HotItem = new Ext.Container({
			//id: id + 'container',
			layout: 'vbox',
			cls: 'has-shadow',
			style: 'background: #f7f5f6; border-radius: 5px;margin-right: 20px;',
		});
		var ContItem = HotItem.add(new Ext.Container(
		{
			height: 100,
			width: 100,
			style: 'border-radius: 5px;',
		}));
		var Item = ContItem.add(new Ext.Img(
		{
			//src: 'resources/images/secret-logo.png',
			style: 'border-radius: 5px;',
			src: smiley360.configuration.getResourceDomain() + '/' + oneItem.imageURL,
			padding: 50,
			listeners: {
				tap: function () {
					this.up('#xBrowse').fireEvent('onBrandTapCommand', this, smiley360.memberData.UserId, oneItem.smileyconnectID, 0, 10);
				}
			}
		}));

		var NextItem = HotItem.add(new Ext.Label(
		{
			//html: 'McDonald\'s',
			html: oneItem.title,
			style: 'text-align: center; font-size:1.1em; padding: 10px; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',

		}));

		Ext.getCmp('xMyHot').add(HotItem);
		if (NextItem.getHtml().toString().length > 12) {
			NextItem.setHtml(NextItem.getHtml().toString().substr(0, 9) + '...');
		};
	},
	doCreateItems: function (items_arr, id, pos) {
		var lbl_padding = '10px 0px 10px ';
		if (pos == 'left') { lbl_padding += '20px'; }
		if (pos == 'middle') { lbl_padding += '175px'; }
		if (pos == 'right') { lbl_padding += '340px'; }
		for (var key in items_arr)
			Ext.getCmp(id).add(new Ext.Label(
				{
					html: items_arr[key].toString(),
					padding: lbl_padding,
					style: 'max-width: 260px; text-align: left; font-size:1.2em; word-wrap: break-all; color:#413f40; font-family: \'din medium\';',
					listeners: {
						element: 'element',
						tap: function () {
							this.up('#xBrowse').fireEvent('onBrowseResultsByCategoryTapCommand', this, 1, 1, 1, 1);
						}
					}
				}));
	},
	doTap: function (id) {
		if (Ext.getCmp(id).getCls() == 'has-shadow browse_container') {
			Ext.getCmp(id).setCls('has-shadow after_browse_container');
			Ext.getCmp('x' + id + '_panel_browse').show();
			Ext.getCmp('x' + id + 'Pict').setSrc('resources/images/' + id.toLowerCase() + '_c.png');
			Ext.getCmp('x' + id + 'Label').setCls('after_browse_text');
		}
		else {
			Ext.getCmp(id).setCls('has-shadow browse_container');
			Ext.getCmp('x' + id + '_panel_browse').hide();
			Ext.getCmp('x' + id + 'Pict').setSrc('resources/images/' + id.toLowerCase() + '_c.png');
			Ext.getCmp('x' + id + 'Label').setCls('browse_text');
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