//Link Icon http://www.urbanui.com/inspire/pages/ui/icons.html

var menu = [
	
	{
		name : 'Dashboard',
		link : 'index.html',
		icon: 'ti-home',	
	},
	{
		name : 'Customer',
		link : '',
		icon: 'ti-user',
		submenu: [{
			name: 'List customer',
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
			name: 'View customer',
			link: 'order_view.html'
		}
		]
	},
	{
		name : 'Equalize',
		link : '',
		icon: 'ti-write',
		submenu: [{
			name: 'kanbanboard',
			link: 'kanbanboard2.html'
		},
		{
			name: 'List Equalize',
			link: 'equalize-list.html'
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
		icon: 'ti-file',
		submenu: [{
			name: 'List Work',
			link: 'work_list.html'
		},
		{
			name: 'Scan work',
			link: 'work_user.html'
		}
		]
	},
	{
		name : 'Zone',
		link : '',
		icon: 'ti-map-alt',
		submenu: [
		{
			name: 'Scan Zone',
			link: 'scan_zone.html'
		}
		]
	},
	{
		name : 'Delivery Plan',
		link : '',
		icon: 'ti-truck',
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
		icon: 'ti-notepad',
		submenu: [{
			name: 'List Request of car',
			link: 'requestcar.html'
		},
		{
			name: 'Add request of car',
			link: 'requestcar_add.html'
		}
		]
	},
	{
		name : 'Master data',
		link : '',
		icon: 'ti-folder',
		submenu: [{
			name: 'List Supplier',
			link: 'supplier.html'
		},
		{
			name: 'Add Supplier',
			link: 'supplier_add.html'
		},
		{
			name: 'List Company',
			link: 'company.html'
		},
		{
			name: 'Add Company',
			link: 'company_add.html'
		},
		{
			name: 'List Product',
			link: 'product.html'
		},
		{
			name: 'Add Product',
			link: 'product_add.html'
		},
		{
			name: 'List Line work',
			link: 'line.html'
		},
		{
			name: 'Add Line work',
			link: 'line_add.html'
		},
		{
			name: 'List Zone',
			link: 'customer.html'
		},
		{
			name: 'Add Zone',
			link: 'customer_add.html'
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