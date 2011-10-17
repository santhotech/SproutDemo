/**
 * @author santhosh
 */

Sproutdemo.CompProfile = SC.View.extend({
	
	childViews: 'title1 button1 section1 title2 button2 section2'.w(),
	
	title1: SC.LabelView.design({
		isVisibleBinding: 'Newapp.profileController.profileVisibility',
		layout: {left: 20, top: 20, width: 100, height: 25},
		value: 'Company Profile',
		fontWeight: 'bold'
	}),
	
	button1: SC.ButtonView.design({
		isVisibleBinding: 'Newapp.profileController.profileVisibility',
		layout: {right: 20, width:100, top: 38, height: 24},
		classNames: ['add-button'],
		title: 'Add',
		action: 'Newapp.profileController.button1Action'
	}),
	
	section1: SC.View.design({
		isVisibleBinding: 'Newapp.profileController.profileVisibility',
		layout: {top: 50, right: 120, height: 200},
		childViews: 'separator label1 text1 label11 label2 text2 label21 label3 text3 label31 label4 text4 label41'.w(),
		separator: SC.SeparatorView.design({
			layout: {left: 15, right: 120, height: 1, top: 0}
		}),
		label1: SC.LabelView.design({
			layout: {left: 20, top: 20, width: 100, height: 25},
			value: 'Company Name'
		}),
		text1: SC.TextFieldView.design({
			isVisibleBinding: 'Newapp.profileController.button1Mode',
			layout: {left: 220, top: 20, width: 100, height: 25},
			valueBinding: 'Newapp.profileController.text1'
		}),
		label11: SC.LabelView.design({
			isVisibleBinding: SC.Binding.not('Newapp.profileController.button1Mode'),
			layout: {left: 220, top: 20, width: 100, height: 25},
			valueBinding: 'Newapp.profileController.text1'
		}),
		label2: SC.LabelView.design({
			layout: {left: 20, top: 55, width: 100, height: 25},
			value: 'GST Reference'
		}),
		text2: SC.TextFieldView.design({
			isVisibleBinding: 'Newapp.profileController.button1Mode',
			layout: {left: 220, top: 55, width: 100, height: 25},
			valueBinding: 'Newapp.profileController.text2'
		}),
		label21: SC.LabelView.design({
			isVisibleBinding: SC.Binding.not('Newapp.profileController.button1Mode'),
			layout: {left: 220, top: 55, width: 100, height: 25},
			valueBinding: 'Newapp.profileController.text2'
		}),
		label3: SC.LabelView.design({
			layout: {left: 20, top: 90, width: 100, height: 25},
			value: 'Address'
		}),
		text3: SC.TextFieldView.design({
			isVisibleBinding: 'Newapp.profileController.button1Mode',
			layout: {left: 220, top: 90, width: 100, height: 25},
			valueBinding: 'Newapp.profileController.text3'
		}),
		label31: SC.LabelView.design({
			isVisibleBinding: SC.Binding.not('Newapp.profileController.button1Mode'),
			layout: {left: 220, top: 90, width: 100, height: 25},
			valueBinding: 'Newapp.profileController.text3'
		}),
		label4: SC.LabelView.design({
			layout: {left: 20, top: 125, width: 100, height: 25},
			value: 'Country'
		}),
		text4: SC.SelectFieldView.design({
			isVisibleBinding: 'Newapp.profileController.button1Mode',
			layout: {left: 220, top: 125, width: 100, height: 25},
			objects: ['--Select--', 'India', 'Singapore', 'Australia'],
			valueBinding: 'Newapp.profileController.text4'
		}),
		label41: SC.LabelView.design({
			isVisibleBinding: SC.Binding.not('Newapp.profileController.button1Mode'),
			layout: {left: 220, top: 125, width: 100, height: 25},
			valueBinding: 'Newapp.profileController.text4'
		})
	}),
	
	title2: SC.LabelView.design({
		isVisibleBinding: 'Newapp.profileController.profileVisibility',
		layout: {left: 20, top: 250, width: 100, height: 25},
		value: 'Branch Profile',
		fontWeight: 'bold'
	}),
	
	button2: SC.ButtonView.design({
		isVisibleBinding: 'Newapp.profileController.profileVisibility',
		layout: {right: 20, width:100, top: 268, height: 24},
		classNames: ['add-button'],
		title: 'Add',
		action: 'Newapp.profileController.button2Action'
	}),
	
	section2: SC.View.design({
		isVisibleBinding: 'Newapp.profileController.profileVisibility',
		layout: {top: 280, right: 120, height: 200},
		childViews: 'separator label1 text1 label11 label2 text2 label21 label3 text3 label31 label4 text4 label41'.w(),
		separator: SC.SeparatorView.design({
			layout: {left: 15, right: 120, height: 1, top: 0}
		}),
		label1: SC.LabelView.design({
			layout: {left: 20, top: 20, width: 100, height: 25},
			value: 'Branch Name'
		}),
		text1: SC.TextFieldView.design({
			isVisibleBinding: 'Newapp.profileController.button2Mode',
			layout: {left: 220, top: 20, width: 100, height: 25},
			valueBinding: 'Newapp.profileController.text21'
		}),
		label11: SC.LabelView.design({
			isVisibleBinding: SC.Binding.not('Newapp.profileController.button2Mode'),
			layout: {left: 220, top: 20, width: 100, height: 25},
			valueBinding: 'Newapp.profileController.text21'
		}),
		label2: SC.LabelView.design({
			layout: {left: 20, top: 55, width: 100, height: 25},
			value: 'No. of Users'
		}),
		text2: SC.TextFieldView.design({
			isVisibleBinding: 'Newapp.profileController.button2Mode',
			layout: {left: 220, top: 55, width: 100, height: 25},
			valueBinding: 'Newapp.profileController.text22'
		}),
		label21: SC.LabelView.design({
			isVisibleBinding: SC.Binding.not('Newapp.profileController.button2Mode'),
			layout: {left: 220, top: 55, width: 100, height: 25},
			valueBinding: 'Newapp.profileController.text22'
		}),
		label3: SC.LabelView.design({
			layout: {left: 20, top: 90, width: 100, height: 25},
			value: 'Address'
		}),
		text3: SC.TextFieldView.design({
			isVisibleBinding: 'Newapp.profileController.button2Mode',
			layout: {left: 220, top: 90, width: 100, height: 25},
			valueBinding: 'Newapp.profileController.text23'
		}),
		label31: SC.LabelView.design({
			isVisibleBinding: SC.Binding.not('Newapp.profileController.button2Mode'),
			layout: {left: 220, top: 90, width: 100, height: 25},
			valueBinding: 'Newapp.profileController.text23'
		}),
		label4: SC.LabelView.design({
			layout: {left: 20, top: 125, width: 100, height: 25},
			value: 'Country'
		}),
		text4: SC.SelectFieldView.design({
			isVisibleBinding: 'Newapp.profileController.button2Mode',
			layout: {left: 220, top: 125, width: 100, height: 25},
			objects: ['--Select--', 'India', 'Singapore', 'Australia'],
			valueBinding: 'Newapp.profileController.text24'
		}),
		label41: SC.LabelView.design({
			isVisibleBinding: SC.Binding.not('Newapp.profileController.button2Mode'),
			layout: {left: 220, top: 125, width: 100, height: 25},
			valueBinding: 'Newapp.profileController.text24'
		})
	})
}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('sproutdemo');