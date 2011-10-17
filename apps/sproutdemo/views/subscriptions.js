/**
 * @author santhosh
 */

Sproutdemo.Subscriptions = SC.View.extend({
	
	childViews: 'pageHeadLbl topView bottomView'.w(),
	pageHeadLbl: SC.LabelView.design({
		layout: {left:10, top: 15, height: 20, width: 200},
		tag: "h2",
		displayTitle: "Subscriptions Page",		
	}),
	
	topView: SC.ToolbarView.design({
        layout: {top: 35,bottom: 0, left: 0, right: 0, height: 50},    
		backgroundColor: 'black',    
		childViews: 'feedbackLbl scheduleLbl reportsLbl notificationLbl workLbl'.w(),
		
		feedbackLbl: SC.LabelView.design({
		layout: {left:10, top: 20, height: 50, width: 200},
		displayTitle: "Feedback",	
		classNames: 'submenu',	
		}),
		
		scheduleLbl: SC.LabelView.design({
		layout: {left:220, top: 20, height: 50, width: 200},
		displayTitle: "Schedule",	
		classNames: 'submenu',	
		}),
		
		reportsLbl: SC.LabelView.design({
		layout: {left:430, top: 20, height: 50, width: 200},
		displayTitle: "Reports",		
		classNames: 'submenu',
		}),
		
		notificationLbl: SC.LabelView.design({
		layout: {left:640, top: 20, height: 50, width: 200},
		displayTitle: "Notifications",	
		classNames: 'submenu',	
		}),
		
		workLbl: SC.LabelView.design({
		layout: {left:850, top: 20, height: 50, width: 200},
		displayTitle: "Workflow",	
		classNames: 'submenu',	
		}),
		
		
		}),
		
	
	bottomView: SC.ToolbarView.design({
        layout: {bottom: 0, left: 0, right: 0, height: 50},        
		})

		
		
}) ;
