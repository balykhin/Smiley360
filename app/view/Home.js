Ext.define('smiley360.view.Home', {
	extend: 'Ext.Panel',
	alias: 'widget.homeview',
	requires: [
		'Ext.util.DelayedTask',
        'Ext.Rating',
		'Ext.carousel.Carousel',
	],
	config: {
		id: 'xHomeView',
		title: 'HOME',
		items: [{
			xtype: 'container',
			id: 'home-left',
			layout: 'vbox',
			items: [{
				xtype: 'spacer',
				height: '14px',
				style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 5px 5px 0px 0px;'
			}, {
				xtype: 'spacer',
				height: '7px',
				style: 'background-color: #efecea;'
			}, {
				xtype: 'container',
				laytout: { type: 'vbox' },
				items: [{
					xtype: 'container',
					cls: 'has-shadow',
					layout: { type: 'hbox' },
					items: [{
						xtype: 'label',
						html: 'WHAT\'S HAPPENING?',
						cls: 'heading-text active-sign',
						style: 'padding-left: 15px;',
						flex: 2
					}, {
						xtype: 'label',
						id: 'xUserLevelLabel',
						html: 'LEVEL',
						cls: 'heading-text headings-home',
					}, {
						xtype: 'rating',
						id: 'xUserLevelRating',
						disabled: true,
						itemsCount: 5,
						baseCls: 'x-level-field',
						itemCls: 'x-level-star',
						itemHoverCls: 'x-level-star-hover',
					}],
				}, {
					xtype: 'container',
					id: 'xWhatsHappeningList',
					laytout: { type: 'vbox' },
				}, {
					xtype: 'spacer',
					height: '10px',
					style: 'background-color: #f4f3f1; margin: 0px 2px;'
				}, {
					xtype: 'spacer',
					height: '7px',
					style: 'background-color: #efecea;'
				}, {
					xtype: 'label',
					html: '<p>SPECIAL OFFERS</p>',
					cls: 'heading-text has-shadow',
					style: 'padding-left: 15px;'
				}, {
					xtype: 'container',
					style: 'background-color: #efecea',
					items: [{
						xtype: 'carousel',
						id: 'xSpecialOffersList',
						cls: 'browse-pict',
						direction: 'horizontal',
						style: 'background-color: #efecea',
						dragable: false,
						indicator: false,
						defaults: {
							styleHtmlContent: true
						},
						width: '100%',
						height: 140,
						listeners: {
							painted:
                                function (carousel) {
                                	me = this;

                                	carousel.pageTurner = new Ext.util.DelayedTask(
                                        function () {
                                        	if (me.getActiveIndex() == me.items.length - 1) {
                                        		me.setActiveItem(0, 'slide');
                                        	}
                                        	else {
                                        		me.next();
                                        	}
                                        	//console.log(me.pageTurner.valueOf());
                                        	//me.pageTurner.delay(3000); //comment this to avoid js-bug
                                        }, carousel);

                                	carousel.pageTurner.delay(3000);
                                }
						},
					}, {
						xtype: 'button',
						cls: 'specialoffers-left-btn',
					}, {
						xtype: 'button',
						cls: 'specialoffers-right-btn',
					}],
				}, {
					xtype: 'spacer',
					height: '7px',
					style: 'background-color: #f4f3f1; margin: 0px 2px; -webkit-border-radius: 0px 0px 5px 5px;'

				}, {
					xtype: 'spacer',
					height: '10px',
					style: 'background: transparent;'
				}]
			}],
		}],

		listeners: {
			show: function () {
				console.log('Home view showed!');
			},

			painted: function () {
				console.log('Home view painted!');

				this.setUserLevel();
				this.setWhatsHappening();
				this.setSpecialOffers();
				this.setUser();
			}
		},
	},

	setUser: function () {
		Ext.getCmp('xProfileImage').setSrc(smiley360.userProfileImage);
		Ext.getCmp('xFirstLastName').setHtml(smiley360.memberData.Profile.fName + ' ' + smiley360.memberData.Profile.lName);
		var tmpStateId = '';
		for (var item in smiley360.ProfileDropdowns.stateID) {
			if (smiley360.ProfileDropdowns.stateID[item] == smiley360.memberData.Profile.stateID)
				tmpStateId = item;
		};
		Ext.getCmp('xCityState').setHtml(smiley360.memberData.Profile.city + ', ' + tmpStateId);
	},

	setUserLevel: function () {
		var userLevel = smiley360.memberData.UserLevel
            ? smiley360.memberData.UserLevel : 0;

		this.down('#xUserLevelLabel').setHtml('LEVEL ' + userLevel);

		var xUserLevelRating = this.down('#xUserLevelRating');

		xUserLevelRating.applyValue(-1);
		xUserLevelRating.setValue(userLevel - 1);
	},

	setWhatsHappening: function () {
		var xWhatsHappeningList = this.down('#xWhatsHappeningList');

		xWhatsHappeningList.removeAll(true, true);

		for (var key in smiley360.memberData.WhatsHappening) {
			var oneItem = smiley360.memberData.WhatsHappening[key];
			var oneElement = new Ext.Container({ layout: 'hbox', cls: 'whatshappening-image' });

			oneElement.add(new Ext.Img(
            {
            	flex: 2,
            	src: oneItem.iconURL,
            	height: 20,
            	width: 20,
            	margin: '20px 0px',
            }));

			oneElement.add(new Ext.Label(
            {
            	flex: 8,
            	html: oneItem.text,
            	cls: 'whatshappening-label'
            }));

			xWhatsHappeningList.add(oneElement);
		}
	},

	setSpecialBrand: function () {

	},

	setSpecialOffers: function () {
		var xSpecialOffersList = this.down('#xSpecialOffersList');
		//xSpecialOffersList.removeAll(true, true);

		for (var i = 0; i < 3; i++) {
			for (var key in smiley360.memberData.SpecialOffers) {
				var oneItem = smiley360.memberData.SpecialOffers[key];
				var oneItemContainer = new Ext.Container({
					layout: 'hbox',
					cls: 'cont-pad',
				});
				var incLabel = oneItemContainer.add(new Ext.Label({
					width: '60%',
					style: 'font-size: 1.1em; font-family: \'din medium\';',
					html: oneItem.desc + i, //'Description goes here lorem ipsum.',
					listeners: {
						element: 'element',
						tap: function () {
							window.location = oneItem.link;
						}
					}
				}));
				var incImg = oneItemContainer.add(new Ext.Img({
					src: smiley360.configuration.getResourceDomain() + '/' + smiley360.memberData.specialOffersBrands.smileyConnect_detailsImage_URL,//'resources/images/offers_logo3.png',
					width: 100,
					height: 100,
					cls: 'has-shadow',
					style: 'background-color: white; margin-left: 10px; border-radius: 5px; border-style: solid; border-width: 1px; border-color: white;',
				}));
				xSpecialOffersList.add(oneItemContainer);
			};
		}
	},
});