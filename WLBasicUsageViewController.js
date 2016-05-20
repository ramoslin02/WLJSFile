require('UIView,UIColor,UILabel')

defineClass('WLBasicUsageViewController',{
            setupUI:function()
            {
               var view = UIView.alloc().init();
               view.setFrame({x:20,y:100,width:100,height:100});
               view.setBackgroundColor(UIColor.redColor());
               self.view().addSubview(view);

            }
            
            
            
            });
