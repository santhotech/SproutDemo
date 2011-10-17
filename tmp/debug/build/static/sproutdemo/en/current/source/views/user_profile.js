/**
 * @author santhosh
 */

Sproutdemo.UserProfile = SC.View.extend({
	
	childViews: 'pageHeadLbl pageContentLbl'.w(),
	pageHeadLbl: SC.LabelView.design({
		layout: {left:10, top: 15, height: 20, width: 200},
		displayTitle: "User Profile Page",
	}),
	
		pageContentLbl: SC.LabelView.design({
		layout: {left:10, top: 45, height: 20, width: 400},
		displayTitle: "This is the user profile page where all the stuff related to user is done.",
	})	

		
		
}) ;
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('sproutdemo');