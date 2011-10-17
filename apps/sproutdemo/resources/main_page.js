// ==========================================================================
// Project:   Sproutdemo - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Sproutdemo */

// This page describes the main user interface for your application.  
Sproutdemo.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'toolbarView splitView bottomToolbar'.w(),
      toolbarView: SC.ToolbarView.design({
        layout: {top: 0, left: 0, right: 0, height: 100},
        backgroundColor: 'black',
        classNames: ['top-toolbar'],
        childViews: 'logoLbl languageSlct homeBtn profileBtn logoutBtn'.w(),
        
		logoLbl: SC.LabelView.design({
			layout: {left:10, top: 15, height: 20, width: 200},
			displayTitle: "Company Logo",
			classNames: 'logo'
		}),
		
        languageSlct: SC.SelectFieldView.design({
          layout: {right:10, top: 15, height: 20, width: 100},
          objects: ['English', 'Hindi', 'Chinese']
        }),

        homeBtn: SC.ButtonView.design({
          layout: {right: 180, bottom: 10, height: 25, width: 75},		  
          title: 'Home'
        }),

        profileBtn: SC.ButtonView.design({
          layout: {right: 95, bottom: 10, height: 25, width: 75},		  
          title: 'Profile'
        }),

        logoutBtn: SC.ButtonView.design({
          layout: {right: 10, bottom: 10, height: 25, width: 75},         
		  title: 'Logout'
        })
      }),

      splitView: SC.SplitView.design({
        layout: {top:100, left: 0, right: 0, bottom: 50},
        topLeftMinThickness: 150,
        topLeftMaxThickness: 150,
		bottomRightMinThickness: 450,
        defaultThickness: 150,
        canCollapseViews: NO,
        topLeftView: SC.View.design({
          backgroundColor: 'gray',
          childViews: 'list'.w(),

          list: SC.ListView.design({
            layout: {top: 0, left: 0, right: 0, height: 125},
            rowHeight: 25,
			contentValueKey: 'name',
            content: [
				SC.Object.create({name: 'Profile', value: 'profile'}), SC.Object.create({name: 'Company Profile', value: 'company_profile'}), SC.Object.create({name: 'User Profile', value: 'user_profile'}), SC.Object.create({name: 'Subscriptions', value: 'subscriptions'}), SC.Object.create({name: 'Log', value: 'log'})]
          })
        }),

        bottomRightView: SC.View.design({
          backgroundColor: 'white',
          
        })
      }),
	  bottomToolbar: SC.ToolbarView.design({
        layout: {bottom: 0, left: 0, right: 0, height: 50},
        backgroundColor: 'black',
        classNames: ['top-toolbar'],
		childViews: 'copyright'.w(),
		
		copyright: SC.LabelView.design({
			layout: {left: 20, width: 140, centerY: 0, height: 25},
			classNames: ['copyright'],
			value: 'icloud Feedback @ 2011'
		})
	  })
    })
});



