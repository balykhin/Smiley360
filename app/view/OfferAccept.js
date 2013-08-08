Ext.define('smiley360.view.OfferAccept', {
    extend: 'Ext.Container',
    alias: 'widget.offeracceptview',
    config: {
        modal: true,
        centered: true,
        fullscreen: true,
        hideOnMaskTap: true,
        id: 'xOAView',
        scrollable: 'vertical',
        cls: 'popup-panel',
        items: [{
            xtype: 'panel',
            id: 'xRootPanel',
            cls: 'popup-root-panel',
            items: [{
                xtype: 'image',
                cls: 'popup-close-button',
                listeners: {
                    tap: function () {
                        Ext.getCmp('xOAView').destroy();
                    }
                }
            }, {
                xtype: 'panel',
                layout: 'hbox',
                cls: 'popup-top-panel forgetpwd-background',
                items: [{
                    xtype: 'label',
                    cls: 'popup-title-text',
                    html: 'Accept Offer?',
                }],
            }, {
                xtype: 'panel',
                id: 'xMiddlePanel',
                cls: 'popup-middle-panel',
                items: [{
                    xtype: 'label',
                    cls: 'popup-message-text',
                    html: 'In order to send product your way, please provide us with you most current address.',
                }, {
                    xtype: 'panel',
                    layout: 'hbox',
                    items: [{
                        xtype: 'label',
                        cls: 'popup-message-text',
                        style: 'margin-top: 10px;',
                        html: 'CURRENT ADDRESS:',
                    }, {
                        xtype: 'button',
                        docked: 'right',
                        height: 30,
                        text: 'EDIT ADDRESS',
                        id: 'xEditAddressButton',
                        cls: 'popup-photo-button',
                        style: 'padding: 5px; font-size: 10pt;',
                        listeners: {
                        	tap: function () {
                        		console.log('i am tapped');
                                Ext.getCmp('xOAView').doEditAddress();
                            }
                        },
                    }],
                }, {
                    xtype: 'label',
                	//cls: 'popup-message-text',
                    id: 'addr_label_address1',
                    html: '263 West 38th Street',
                }, {
                    xtype: 'label',
                	//cls: 'popup-message-text',
                    id: 'addr_label_address2',
                    html: '8th Floor',
                }, {
                    xtype: 'label',
                	//cls: 'popup-message-text',
                    id: 'addr_label_comp',
                    html: 'New York, NY 10018',
                }, {
                    xtype: 'panel',
                    style: 'margin-top: 10px;',
                    items: [{
                        xtype: 'label',
                        width: 150,
                        cls: 'popup-address-comment',
                        html: 'This address is VERIFIED!',
                    }, {
                        xtype: 'image',
                        docked: 'right',
                        width: 30,
                        height: 30,
                        src: 'resources/images/question.png',
                        cls: 'popup-post-icon',
                        listeners: {
                        	tap: function () {
                        		Ext.widget('contactusview').show();
                        		Ext.widget('offeracceptview').hide();
                        	}
                        }
                    }, {
                        xtype: 'button',
                        docked: 'right',
                        ui: 'plain',
                        text: 'Need Help?',
                        cls: 'popup-help-button',
                        //icon: 'resources/images/question.png',
                        //iconAlign: 'right',
                        //iconCls: 'popup-post-icon',
                        listeners: {
                        	tap: function () {
                        		Ext.widget('contactusview').show();
                        		Ext.widget('offeracceptview').hide();
                        	}
                        }
                    }],
                }],
            }, {
                xtype: 'panel',
                cls: 'popup-button-panel',
                items: [{
                    xtype: 'button',
                    text: 'CONTINUE TO MISSION',
                    id: 'xSubmitButton',
                    cls: 'popup-submit-button',
                    listeners: {
                    	tap: function () {
                    		//go accept mission
                    		Ext.getCmp('xOfferView').fireEvent('acceptMissionCommand', this, smiley360.memberData.UserId, smiley360.missionData.MissionDetails.MissionId);
                    		//if accepted go to
                    		Ext.getCmp('xOfferView').fireEvent('LoadMissionDetailsCommand', this, smiley360.missionData.MissionDetails.MissionId, smiley360.memberData.UserId);
                    		Ext.widget('offeracceptview').hide();
                    	}
                    },
                }],
            }],
        }],
        listeners: {
            initialize: function () {
                this.setHeight(Ext.getCmp('xRootPanel').element.getHeight());
            },
            hide: function () {
                this.destroy();
            },
            show: function () {
            	Ext.getCmp('xOfferView').fireEvent('getAddressCommand', this, smiley360.memberData.UserId);
				var profile = smiley360.memberData.Profile;
				var setstr = '';
				for (var field in profile) {
					var element = (field == 'address')
                        ? Ext.getCmp('addr_label_' + field + '1')
                        : Ext.getCmp('addr_label_' + field);

					
					if (field == 'city')
						setstr += profile[field] + ', ';
					if (field == 'stateID')
						setstr += profile[field] + ' ';
					if (field == 'zip')
						setstr += profile[field];
					Ext.getCmp('addr_label_comp').setHtml(setstr);

					if (element) {
						element.setHtml(profile[field]);
					}
				}
				
            }
        },
    },
    doEditAddress: function () {
    	Ext.widget('offeracceptview').hide();
    	Ext.widget('offeracceptaddressview').show();
    	
    },
    doRemoveOffer: function () {
        var submitView = this;
        var submitData = {
            email: Ext.getCmp('xEmailField').getValue()
        };

        //smiley360.setViewStatus(submitView, smiley360.viewStatus.progress);
        smiley360.services.restorePassword(submitData, function (response) {
            smiley360.setResponseStatus(submitView, response);
        });
    },

    setStatus: function (status) {
        var xEmailField = Ext.getCmp('xEmailField');
        var xTitleImage = Ext.getCmp('xTitleImage');
        var xMessageText = Ext.getCmp('xMessageText');
        var xSubmitButton = Ext.getCmp('xSubmitButton');
        //var xSubmitStatus = Ext.getCmp('xSubmitStatus');

        switch (status) {
            case smiley360.viewStatus.progress: {
                xSubmitButton.setText('POSTING...');
                xSubmitButton.setIcon('resources/images/share-initial.png');
                xSubmitStatus.setStyle('background-color: #F9A419;');

                var statusAnimation = new Ext.Anim({
                    autoClear: false,
                    duration: 2000,
                    easing: 'ease-in',
                    from: { width: 0 },
                    to: { width: this.getWidth() },
                });

                statusAnimation.run(xSubmitStatus.element, 'slide');

                break;
            }
            case smiley360.viewStatus.successful: {
                xEmailField.hide();
                xSubmitButton.setHtml('CLOSE')
                xTitleImage.setSrc('resources/images/smile-successful.png');
                xMessageText.setHtml('Thankyou, your password reminder was sent');
                //xSubmitStatus.setStyle('background-color: #5F9E45;');

                break;
            }
            case smiley360.viewStatus.unsuccessful: {
                xTitleImage.setSrc('resources/images/smile-unsuccessful.png');
                xMessageText.setHtml('Oops, the email address you entered is not found in our member accouns. Try again, or contact us for assistance.');
                //xSubmitStatus.setStyle('background-color: #ED1C24;');

                break;
            }
            default:
        }
        // resize container after state has been changed
        this.setHeight(Ext.getCmp('xRootPanel').element.getHeight());
    }
});