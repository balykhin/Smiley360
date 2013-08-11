var save_size, s_hide, first_time = true, first_time_children = true, field_about, field_url, child_field_hide, make_hide = false;
Ext.define('smiley360.view.EditProfile', {
	extend: 'Ext.Panel',
	alias: 'widget.editprofileview',
	requires: [
        'Ext.field.DatePicker',
        'Ext.field.Select',
	],
	config: {
		id: 'xEditProfile',
		title: 'Edit Profile',
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
			laytout: 'vbox',
			items: [{
				xtype: 'container',
				cls: 'has-shadow',
				layout: 'hbox',
				items: [{
					xtype: 'label',
					html: 'GENERAL INFORMATION',
					cls: 'heading-text active-sign',
					style: 'padding-left: 15px;',
					flex: 1
				}],
			}, {
				xtype: 'container',
				cls: 'has-shadow',
				layout: { type: 'vbox' },
				style: 'background-color: #efecea;',
				padding: 10,
				items: [{
					xtype: 'container',
					layout: { type: 'hbox' },
					style: 'background-color: #efecea; padding-bottom: 5px;',
					items: [{
						xtype: 'image',
						id: 'userProfileImage',
						style: 'min-width: 60px;border-style: solid; border-color: white; border-radius: 3px; border-width: 2px;',
						flex: 1,
						cls: 'has-shadow',
					}, {
						xtype: 'container',
						layout: 'vbox',
						style: 'background-color: #efecea; padding-top: 30px; padding-left: 10px;',
						flex: 6,
						items: [{
							xtype: 'textfield',
							placeHolder: 'First Name',
							itemId: 'txtFirstName',
							id: 'fName',
							name: 'txtFirstName',
							cls: 'cust-input',
							required: true
						}, {
							xtype: 'textfield',
							placeHolder: 'Last Name',
							itemId: 'txtLastName',
							id: 'lName',
							name: 'txtLastName',
							cls: 'cust-input',
							required: true
						}]
					}],
				}, {
					xtype: 'emailfield',
					placeHolder: 'Email',
					itemId: 'txtEmail',
					id: 'email',
					name: 'txtEmail',
					cls: 'cust-input',
					autoCapitalize: false,
					required: true
				}, {
					//xtype: 'datepickerfield',
					xtype: 'textfield',
					cls: 'cust-input cust-input-ddl',
					name: 'birthday',
					itemId: 'calDob',
					id: 'birthdate',
					name: 'calDob',
					ui: 'light',
					readOnly: true,
					//picker: {
					//	yearFrom: 1900,
					//},
					placeHolder: 'Date of birth',
					required: true
				}, {
					xtype: 'selectfield',
					itemId: 'ddlGender',
					name: 'ddlGender',
					id: 'gender',
					cls: 'cust-input cust-input-ddl',
					placeHolder: 'Gender',
					readOnly: true,
					options: [
                        { text: '', value: '' },
					]
				}],//end items top vbox
			}, {
				xtype: 'spacer',
				height: '10px',
				style: 'background-color: #f4f3f1; margin: 0px 2px;'
			}, {
				xtype: 'spacer',
				height: '7px',
				style: 'background-color: #efecea;'
			}, {
				xtype: 'container',
				cls: 'has-shadow',
				layout: { type: 'hbox' },
				items: [{
					xtype: 'label',
					html: 'SHIPPING INFORMATION',
					cls: 'heading-text active-sign',
					style: 'padding-left: 15px;',
					flex: 1
				}]
			}, {
				xtype: 'container',
				cls: 'has-shadow',
				layout: { type: 'vbox' },
				style: 'background-color: #efecea;',
				padding: 10,
				items: [{
					xtype: 'container',
					layout: { type: 'hbox' },
					items: [{
						xtype: 'container',
						layout: { type: 'vbox' },
						flex: 6,
						items: [{
							xtype: 'textfield',
							placeHolder: 'Address1',
							id: 'address1',
							itemId: 'txtAddress1',
							name: 'txtAddress1',
							cls: 'cust-input',
							required: false
						}, {
							xtype: 'textfield',
							placeHolder: 'Address2',
							id: 'address2',
							itemId: 'txtAddress2',
							name: 'txtAddress2',
							cls: 'cust-input',
							required: false
						}]
					}],
				}, {
					xtype: 'container',
					layout: { type: 'hbox' },
					items: [{
						xtype: 'textfield',
						flex: 20,
						placeHolder: 'City',
						id: 'city',
						itemId: 'txtCity',
						name: 'txtCity',
						cls: 'cust-input',
						required: false
					}, {
						xtype: 'spacer', height: '10px'
					}, {
						xtype: 'selectfield',
						flex: 20,
						itemId: 'ddlState',
						id: 'stateID',
						name: 'ddlState',
						cls: 'cust-input cust-input-ddl',
						placeHolder: 'State',
						options: [
                            { text: '', value: '' },
						]
					}],
				}, {
					xtype: 'textfield',
					placeHolder: 'CityStateZip',
					itemId: 'txtCityStateZip',
					id: 'zip',
					name: 'txtCityStateZip',
					cls: 'cust-input',
					listeners: {
						blur: function () {
							Ext.getCmp('xEditProfile').fireEvent('getLocationCommand', Ext.getCmp('xEditProfile'), Ext.getCmp('zip').getValue());
						}
					},
					required: false
				}, {
					xtype: 'selectfield',
					itemId: 'ddlCountry',
					id: 'country',
					name: 'ddlCountry',
					cls: 'cust-input cust-input-ddl',
					placeHolder: 'Country',
					options: [
                        { text: '', value: '' },
					]
				}],
			}, {
				xtype: 'spacer',
				height: '10px',
				style: 'background-color: #f4f3f1; margin: 0px 2px;'
			}, {
				xtype: 'spacer',
				height: '7px',
				style: 'background-color: #efecea;'
			}, {
				xtype: 'container',
				cls: 'has-shadow',
				layout: { type: 'hbox' },
				items: [{
					xtype: 'label',
					html: 'ABOUT YOU',
					cls: 'heading-text active-sign',
					style: 'padding-left: 15px;',
					flex: 1
				}],
			}, {
				xtype: 'container',
				cls: 'has-shadow',
				layout: { type: 'vbox' },
				style: 'background-color: #efecea;',
				padding: 10,
				items: [{
					xtype: 'selectfield',
					itemId: 'ddlStatus',
					name: 'ddlStatus',
					id: 'marital',
					cls: 'cust-input cust-input-ddl',
					placeHolder: 'Single',
					options: [
                        { text: '', value: '' }
					]
				}, {
					xtype: 'selectfield',
					itemId: 'ddlChildren',
					name: 'ddlChildren',
					id: 'children',
					cls: 'cust-input cust-input-ddl',
					placeHolder: 'Do you have children?',
					listeners: {
						change: function (selectbox, newValue, oldValue) {
							first_time_children = false;
							//first_time = false;//check if custom variable has been set to false
							if (newValue == 1) {
								Ext.getCmp('howmanychildren').show();
								//Ext.getCmp('howmanychildren').setValue(smiley360.memberData.Profile.howmanychildren);
							}
							if (newValue != 1) {
								Ext.getCmp('howmanychildren').hide();
								Ext.getCmp('howmanychildren').setValue('');
							}
						},
					},
					options: [
                        { text: '', value: '' },
					]
				}, {
					xtype: 'selectfield',
					itemId: 'ddlHaveChildren',
					name: 'ddlHaveChildren',
					id: 'howmanychildren',
					//style: 'my-ddl-color',
					cls: 'cust-input cust-input-ddl',
					placeHolder: 'How many children do you have?',
					listeners: {
						element: 'element',
						painted: function () {
							child_field_hide = this;
							if (first_time_children == true) { child_field_hide.hide(); };
						},
					},
					options: [
                        { text: '', value: '' },
					]
				}, {
					xtype: 'selectfield',
					itemId: 'ddlHousehold',
					name: 'ddlHousehold',
					id: 'income',
					cls: 'cust-input cust-input-ddl',
					placeHolder: 'Household Income',
					options: [
                        { text: '', value: '' },
					]
				}, {
					xtype: 'textfield',
					itemId: 'ddlRace',
					name: 'ddlRace',
					//style: 'my-ddl-color',
					cls: 'cust-input cust-input-ddl',
					placeHolder: 'Race / Ethnicity',
					id: 'race_etn',
					listeners: {
						element: 'element',
						painted: function () {
							//if (first_time == true) { s_hide.hide(); };
						},
						mousedown: function () {
							this.setValue('Race / Ethnicity');
							this.setReadOnly(true);
							//this.setCls('cust-input cust-input-ddl my-ddl-color');
							first_time = false;
							if (make_hide == false) {
								s_hide.show();
								make_hide = true;
								field_about.setValue(' ');
								field_url.setValue(' ');
								field_about.setReadOnly(true);
								field_url.setReadOnly(true);
								field_about.setPadding('0px 20px');
								field_url.setPadding('0px 20px');
							}
							else {
								s_hide.hide();
								//Ext.Msg.alert('dfvgd');
								make_hide = false;
								field_about.setValue('');
								field_url.setValue('');
								field_url.setReadOnly(false);
								field_url.setReadOnly(false);
								field_about.setPadding('0px 0px');
								field_url.setPadding('0px 0px');
							};
							//Ext.Msg.alert('Hidden!');
						},
					},
					options: [
                        { text: '', value: '' },
					]
				}, {
					xtype: 'panel',
					layout: 'vbox',
					id: 'ddlCheckboxes',
					//hidden: 'true',
					name: 'ddlCheckboxes',
					style: 'border-radius: 0px 0px 5px 5px; background-color:white; margin:-10px 0px -10px 0px;',
					cls: 'cust-input',
					listeners: {
						element: 'element',
						painted: function () {
							s_hide = this;
							if (first_time == true) { s_hide.hide(); };
						},
					},
					//padding: 5,
					items: [{
						xtype: 'label',
						html: '(please select all that apply)',
						cls: 'my-checkbox-label',
						style: 'font-family: \'franklin\';font-size: 0.8em; color: black; background-color:transparent; padding-left: 120px;',
						margin: '-19px 0px 0px 0px',
						listeners: {
							element: 'element',
							tap: function () {
								Ext.getCmp('race_etn').setValue('Race / Ethnicity');
								Ext.getCmp('race_etn').setReadOnly(true);
								//this.setCls('cust-input cust-input-ddl my-ddl-color');
								first_time = false;
								if (make_hide == false) {
									s_hide.show();
									make_hide = true;
									field_about.setValue(' ');
									field_url.setValue(' ');
									field_about.setReadOnly(true);
									field_url.setReadOnly(true);
									field_about.setPadding('0px 20px');
									field_url.setPadding('0px 20px');
								}
								else {
									s_hide.hide();
									//Ext.Msg.alert('dfvgd');
									make_hide = false;
									field_about.setValue(smiley360.memberData.Profile.aboutself);
									field_url.setValue(smiley360.memberData.Profile.blogURL);
									field_about.setReadOnly(false);
									field_url.setReadOnly(false);
									field_about.setPadding('0px 0px');
									field_url.setPadding('0px 0px');
								};
								//Ext.Msg.alert('Hidden!');

							},
						}
					},

					],//end chackbox items
				}, {
					xtype: 'textfield',
					height: 80,
					placeHolder: 'Tell us about yourself',
					itemId: 'txtAboutYourself',
					id: 'aboutself',
					name: 'txtAboutYourself',
					cls: 'cust-input',
					required: false,
					listeners: {
						initialize: function () {
							field_about = this;
						}
					}
				}, {
					xtype: 'textfield',
					placeHolder: 'Blog URL',
					itemId: 'txtBlogURL',
					id: 'blogURL',
					name: 'txtBlogURL',
					cls: 'cust-input',
					required: false,
					listeners: {
						initialize: function () {
							field_url = this;
						}
					}
				}],//end items top vbox
			}, {
				xtype: 'container',
				margin: '0px 2px 0px 2px',
				padding: '25px 0px 0px 0px',
				style: 'background-color: #F4F3F1; padding: 0px 20px;',
				layout: { type: 'vbox' },
				items: [{
					xtype: 'button',
					itemId: 'btnSavechanges',
					cls: 'cust-btn signup-btn save-changes-btn',
					text: 'SAVE CHANGES',
					listeners: {
						tap: function () {
							this.up('#xEditProfile').fireEvent('onbtnSavechangesCommandProfile', this);
							console.log('editprofiletap');
						}
					}
				}],
			}, {
				xtype: 'spacer',
				height: '10px',
				style: 'background-color: #f4f3f1; margin: 0px 2px;'
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

		listeners: {
			show: function () {
				console.log('EditProfile view showed!');
				this.setDropdownLists();
				this.setDropdownRace();
				var profile = smiley360.memberData.Profile;

				for (var field in profile) {

					var element = (field == 'address')
                        ? Ext.getCmp(field + '1')
                        : Ext.getCmp(field);

					if (element) {

						element.setValue(profile[field]);
					}
				}
				Ext.getCmp('userProfileImage').setSrc(smiley360.userProfileImage);
				console.log(smiley360.ProfileDropdowns.raceEthnicity_options.valueOf());

			},

			activate: function () {
				console.log('EditProfile view activated!');
			}
		},
	},

	setOrder: function (obj, callback, context) {
		var tuples = [];

		for (var key in obj) tuples.push([key, obj[key]]);

		tuples.sort(function (a, b) { return a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0 });


		var length = tuples.length;
		while (length--) callback.call(context, tuples[length][0], tuples[length][1]);
	},
	setAnyOptions: function (field, otherOptions) {
		field.setOptions(otherOptions, true);
	},
	setDropdownLists: function () {
		var me = this;
		var otherOptions = [];
		for (var item in smiley360.ProfileDropdowns)
			if (item != 'raceEthnicity_options') {
				otherOptions = [];
				if (item == 'howmanychildren') {
					for (var it in smiley360.ProfileDropdowns[item]) {
						var temp_array = new Array();
						temp_array["text"] = smiley360.ProfileDropdowns[item][it];
						//alert(it); console.log(it.valueOf());
						temp_array["value"] = parseInt(it);
						//alert(temp_array["text"] + ": " + temp_array["value"]);
						otherOptions.push(temp_array);
					};
				}
				else {
					me.setOrder(smiley360.ProfileDropdowns[item], function (key, value) {

						//alert(key + ": " + value);
						var temp_array = new Array();
						temp_array["text"] = key;
						temp_array["value"] = value;

						otherOptions.push(temp_array);
					});
				};
				if (Ext.getCmp(item)) {
					me.setAnyOptions(Ext.getCmp(item), otherOptions);
				};
			}
			else {

			};
	},

	setAddress: function () {
		Ext.getCmp('stateID').setValue(smiley360.memberData.Profile.stateID);
		Ext.getCmp('city').setValue(smiley360.memberData.Profile.city);
	},
	setDropdownRace: function () {
		//race
		this.setOrder(smiley360.ProfileDropdowns.raceEthnicity_options, function (key, value) {
			//alert(key + ": " + value);
			var allContainer = new Ext.Container({
				id: value.toString() + 'check-panel',
				style: 'background-color:white; border-radius: 0px 0px 5px 5px;',
				layout: 'hbox',
				padding: 5,
			});
			allContainer.add(new Ext.field.Checkbox({

				cls: 'popup-checkbox',
				height: 23,
				width: 23,
			}));
			allContainer.add(new Ext.Label({

				html: key,//'black\\african-american',
				cls: 'my-checkbox-label',
				style: 'background-color:white;',
				height: 23,
			}));
			Ext.getCmp('ddlCheckboxes').add(allContainer);
		});
	},
});