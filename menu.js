//Link Icon http://www.urbanui.com/inspire/pages/ui/icons.html

var menu = [
	
	{
		name : 'Dashboard',
		link : 'index.html',	
	},
	{
		name : 'Order',
		link : '',
		submenu: [{
			name: 'List Order',
			link: 'order.html'
		},
		{
			name: 'Import file',
			link: 'order_file.html'
		},
		{
			name: 'Import manual',
			link: 'order_manual.html'
		},
		{
			name: 'View order',
			link: 'order_view.html'
		}
		]
	},
	{
		name : 'Equalize',
		link : '',
		submenu: [{
			name: 'kanbanboard',
			link: 'kanbanboard.html'
		},
		{
			name: 'List Equalize',
			link: 'equalize.html'
		},
		{
			name: 'Add equalize',
			link: 'equalize_add.html'
		},
		{
			name: 'Edit equalize',
			link: 'equalize_edit.html'
		}

		]
	},
		{
		name : 'Work',
		link : '',
		submenu: [{
			name: 'List Work',
			link: 'work_list.html'
		},
		{
			name: 'Scan work',
			link: 'work.html'
		}
		]
	},
	{
		name : 'Delivery Plan',
		link : '',
		submenu: [{
			name: 'List Delivery plan',
			link: 'deliveryplan.html'
		},
		{
			name: 'Add deliveryplan',
			link: 'deliveryplan_add.html'
		}
		]
	},
	{
		name : 'Request of car',
		link : '',
		submenu: [{
			name: 'List Request of car',
			link: 'requestcar.html'
		},
		{
			name: 'Add request of car',
			link: 'requestcar_add.html'
		}
		]
	}
];
var data = "";

$.each(menu,function(i,v){
	
	if(v.submenu!==undefined){
		if(v.link==main_menu){
			var active = "active";
			var collapse = "collapse";
			var show = 'show';
			var expanded = true;
		}else{
			var active = "";
			var collapse = "";
			var show = 'show';
			var expanded = false;
		}
		data+='<li class="d-flex flex-column '+active+'">\
                <a data-toggle="collapse" href="#menu_'+i+'" class="'+collapse+' nav-link" aria-expanded="false">\
                    <i class="nav-icon '+v.icon+'"></i>\
                    <p>\
                        '+v.name+'\
                        <i class="fa fa-sort-desc submenu-toggle"></i>\
                    </p>\
                </a>\
                <div class="collapse '+show+'" id="menu_'+i+'" role="navigation" aria-expanded="'+expanded+'">\
                    <ul class="nav flex-column">';
                    $.each(v.submenu,function(j,w){
                    	if(w.link==current_page){
							var active = "active";
							var collapse = "collapse";
							var show = 'show';
							var expanded = true;
						}else{
							var active = "";
							var collapse = "";
							var show = 'show';
							var expanded = false;
						}
                    	data+='\
                    	<li class="'+active+'">\
                            <a class="nav-link" href="'+w.link+'">\
                                '+w.name+'\
                            </a>\
                        </li>';
                    });
            data+='\
                    </ul>\
                </div>\
            </li>';
	}else{
		if(v.link==current_page){
			var active = "active";
			var collapse = "collapse";
			var show = 'show';
			var expanded = true;
		}else{
			var active = "";
			var collapse = "";
			var show = '';
			var expanded = false;
		}
		data+='<li class="d-flex flex-column '+active+'">\
	                <a class="nav-link" href="'+v.link+'">\
	                    <i class="nav-icon '+v.icon+'"></i>\
	                    <p>'+v.name+'</p>\
	                </a>\
	            </li>';
	}
});

// console.log(data);

$('#show_menu_on_sidebar').append(data);