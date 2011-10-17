/**
 * @author santhosh
 */

Sproutdemo.CompProfile = SC.View.extend({
	
	childViews: 'compTitle compButton compSection branchTitle branchButton branchSection'.w(),
	
	compTitle: SC.LabelView.design({		
		layout: {left: 20, top: 20, width: 100, height: 25},
		value: 'Company Profile',
		fontWeight: 'bold'
	}),
	
	compButton: SC.ButtonView.design({		
		layout: {right: 20, width:100, top: 38, height: 24},		
		title: 'Edit',		
	}),
	
	compSection: SC.View.design({		
		layout: {top: 50, right: 120, height: 300},
		childViews: 'lineRule compNameLbl compNameTxt gstrefLbl gstrefTxt addr1Lbl addr1Txt addr2Lbl addr2Txt postalLbl postalTxt stateLbl stateTxt countryLbl countryTxt'.w(),
		
		lineRule: SC.SeparatorView.design({
			layout: {left: 15, right: 120, height: 3, top: 0}
		}),
		
		compNameLbl: SC.LabelView.design({
			layout: {left: 20, top: 20, width: 100, height: 20},
			value: 'Company Name'
		}),
		compNameTxt: SC.TextFieldView.design({			
			layout: {left: 220, top: 20, width: 200, height: 20},			
		}),
		
		gstrefLbl: SC.LabelView.design({
			layout: {left: 20, top: 45, width: 100, height: 20},
			value: 'GST Reference'
		}),
		gstrefTxt: SC.TextFieldView.design({			
			layout: {left: 220, top: 45, width: 200, height: 20},			
		}),
		
		addr1Lbl: SC.LabelView.design({
			layout: {left: 20, top: 70, width: 100, height: 20},
			value: 'Address Line 1'
		}),
		addr1Txt: SC.TextFieldView.design({			
			layout: {left: 220, top: 70, width: 200, height: 20},			
		}),
		
		
		
				addr2Lbl: SC.LabelView.design({
			layout: {left: 20, top: 95, width: 100, height: 20},
			value: 'Address Line 2'
		}),
		addr2Txt: SC.TextFieldView.design({			
			layout: {left: 220, top: 95, width: 200, height: 20},			
		
		}),
		
		postalLbl: SC.LabelView.design({
			layout: {left: 20, top: 120, width: 100, height: 20},
			value: 'Postal Code'
		}),
		postalTxt: SC.TextFieldView.design({			
			layout: {left: 220, top: 120, width: 200, height: 20},			
		
		}),
		
		stateLbl: SC.LabelView.design({
			layout: {left: 20, top: 145, width: 100, height: 20},
			value: 'Postal Code'
		}),
		stateTxt: SC.TextFieldView.design({			
			layout: {left: 220, top: 145, width: 200, height: 20},			
		
		}),								
		
		countryLbl: SC.LabelView.design({
			layout: {left: 20, top: 170, width: 100, height: 20},
			value: 'Country'
		}),
		countryTxt: SC.SelectFieldView.design({			
			layout: {left: 220, top: 170, width: 200, height: 20},
			objects: ['--Select--', 'India', 'China', 'USA'],			
		}),
		
		
	}),
	
	branchTitle: SC.LabelView.design({		
		layout: {left: 20, top: 250, width: 100, height: 20},
		value: 'Branch Profile',
		fontWeight: 'bold'
	}),
	
	branchButton: SC.ButtonView.design({
		layout: {right: 20, width:100, top: 268, height: 24},		
		title: 'Add',		
	}),
	
	branchSection: SC.View.design({		
		layout: {top: 280, right: 120, height: 200},
		childViews: 'linerule brnchNameLbl brnchNameTxt userLbl userTxt addr1Lbl addr1Txt addr2Lbl addr2Txt postalLbl postalTxt stateLbl stateTxt countryLbl countryTxt'.w(),
		linerule: SC.SeparatorView.design({
			layout: {left: 15, right: 120, height: 1, top: 0}
		}),
		brnchNameLbl: SC.LabelView.design({
			layout: {left: 20, top: 20, width: 100, height: 20},
			value: 'Branch Name'
		}),
		brnchNameTxt: SC.TextFieldView.design({
		
			layout: {left: 220, top: 20, width: 100, height: 20},
			
		}),
		
		userLbl: SC.LabelView.design({
			layout: {left: 20, top: 45, width: 100, height: 20},
			value: 'No. of Users'
		}),
		userTxt: SC.TextFieldView.design({
			
			layout: {left: 220, top: 45, width: 100, height: 20},
			
		}),
		
		addr1Lbl: SC.LabelView.design({
			layout: {left: 20, top: 70, width: 100, height: 20},
			value: 'Address Line 1'
		}),
		addr1Txt: SC.TextFieldView.design({			
			layout: {left: 220, top: 70, width: 200, height: 20},			
		}),
		
		
		
				addr2Lbl: SC.LabelView.design({
			layout: {left: 20, top: 95, width: 100, height: 20},
			value: 'Address Line 2'
		}),
		addr2Txt: SC.TextFieldView.design({			
			layout: {left: 220, top: 95, width: 200, height: 20},			
		
		}),
		
		postalLbl: SC.LabelView.design({
			layout: {left: 20, top: 120, width: 100, height: 20},
			value: 'Postal Code'
		}),
		postalTxt: SC.TextFieldView.design({			
			layout: {left: 220, top: 120, width: 200, height: 20},			
		
		}),
		
		stateLbl: SC.LabelView.design({
			layout: {left: 20, top: 145, width: 100, height: 20},
			value: 'Postal Code'
		}),
		stateTxt: SC.TextFieldView.design({			
			layout: {left: 220, top: 145, width: 200, height: 20},			
		
		}),								
		
		countryLbl: SC.LabelView.design({
			layout: {left: 20, top: 170, width: 100, height: 20},
			value: 'Country'
		}),
		countryTxt: SC.SelectFieldView.design({			
			layout: {left: 220, top: 170, width: 200, height: 20},
			objects: ['--Select--', 'India', 'China', 'USA'],			
		}),
		
		
		
		
	})
}) ;
