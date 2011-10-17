/**
 * @author santhosh
 */

Sproutdemo.optionController = SC.ObjectController.create({
  	contentBinding: SC.Binding.single('Sproutdemo.menuController.selection'),
  });

Sproutdemo.menuController = SC.ArrayController.create({

  content: [
				SC.Object.create({name: 'Profile', value: 'profile'}), SC.Object.create({name: 'Company Profile', value: 'compprofile'}), SC.Object.create({name: 'User Profile', value: 'userprofile'}), SC.Object.create({name: 'Subscriptions', value: 'subscriptions'}), SC.Object.create({name: 'Log', value: 'log'})]
  
});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('sproutdemo');