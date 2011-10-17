/**
 * @author santhosh
 */

Sproutdemo.Subscriptions = SC.View.extend({
	
	childViews: 'pageHeadLbl pageContentLbl'.w(),
	pageHeadLbl: SC.LabelView.design({
		layout: {left:10, top: 15, height: 20, width: 200},
		displayTitle: "Subscriptions Page",
	}),
	
		pageContentLbl: SC.LabelView.design({
		layout: {left:10, top: 45, height: 20, width: 200},
		displayTitle: "Profile Page",
	})	

		
		
}) ;
