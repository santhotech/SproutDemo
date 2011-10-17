/**
 * @author santhosh
 */

Sproutdemo.Log = SC.View.extend({
	
	childViews: 'pageHeadLbl pageContentLbl'.w(),
	pageHeadLbl: SC.LabelView.design({
		layout: {left:10, top: 15, height: 20, width: 200},
		displayTitle: "Log Page",
	}),
	
		pageContentLbl: SC.LabelView.design({
		layout: {left:10, top: 45, height: 20, width: 400},
		displayTitle: "This is the log page where all the loggin stuff can be done.",
	})	

		
		
}) ;
