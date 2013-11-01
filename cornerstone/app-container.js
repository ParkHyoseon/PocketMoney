
/**
 * app-container.js
 * 애플리케이션의 메인 모듈을 로드해서, 모듈의 launch 메소드를 실행한다.
 * 메인 모듈을 로드하기 전에 모듈간의 의존성과 내용에 대한 디폴트 설정을 수행한다.
 */

requirejs.config( {
	baseUrl: Cornerstone.App.baseUrl,
	// 긴 경로명 대신 사용할 수 있는 alias를 지정한다.
	paths: {
		'jquery': Cornerstone.PATH_LIB + 'jquery-1.10.2.min',
		'underscore': Cornerstone.PATH_LIB + 'underscore-min',
		'backbone': Cornerstone.PATH_LIB + 'backbone-min',
		'handlebars': Cornerstone.PATH_LIB + 'handlebars-1.0.0.beta.6',

		'bootstrap': Cornerstone.PATH_LIB + 'bootstrap/js/bootstrap.min',

		'lawnchair': Cornerstone.PATH_LIB + 'lawnchair-0.6.1.min',
		'hammer': Cornerstone.PATH_LIB + 'hammer',
		'jquery.hammer': Cornerstone.PATH_LIB + 'jquery.hammer',
		'enquire': Cornerstone.PATH_LIB + 'enquire.min',
		'blackbird': Cornerstone.PATH_LIB + 'blackbirdjs/blackbird',
		'template': Cornerstone.PATH + 'loader/template',
		'style': Cornerstone.PATH + 'loader/style',
		'sync': Cornerstone.PATH + 'mvc/model/sync',
		'form-view': Cornerstone.PATH + 'mvc/view/form',
		'validation-view': Cornerstone.PATH + 'mvc/view/validation',
		'gesture-view': Cornerstone.PATH + 'mvc/view/gesture',
		'multipage-router': Cornerstone.PATH + 'mvc/router/multipage',
		
		'socket.io': '/socket.io/socket.io',
		
		// Utils
		'transition': Cornerstone.PATH + 'util/transition',
		'device': Cornerstone.PATH + 'util/srt-0.9',
		'jsonp': Cornerstone.PATH + 'util/jsonp',
		'skt': Cornerstone.PATH + 'util/skt',
		'logging': Cornerstone.PATH + 'util/logging',

        // Widget Alias
        'widget-plugins' : Cornerstone.PATH + 'ui/widget-plugins',
        'widget-chart' : Cornerstone.PATH + 'ui/widget-chart',
        'widget-datatable' : Cornerstone.PATH + 'ui/widget-datatable',
        'widget-editor' : Cornerstone.PATH + 'ui/widget-editor',
        'widget-listview' : Cornerstone.PATH + 'ui/widget-listview',
        'widget-media' : Cornerstone.PATH + 'ui/widget-media',
        'widget-scrollview' : Cornerstone.PATH + 'ui/widget-scrollview'
	},
	// 의존성 및 모듈의 value를 정의한다.
	// 기본적으로 주요 라이브러리들도 전역변수로는 사용하지 않는 것으로 한다.
	shim: {
		'jquery': {
			exports: 'jQuery',
			init: function() {
				return this.jQuery.noConflict( true );
			}
		},
		'underscore': {
			exports: '_',
			init: function() {
				return this._.noConflict();
			}
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone',
			init: function() {
				return this.Backbone.noConflict();
			}
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'lawnchair': {
			exports: 'Lawnchair'
		},
		'handlebars': {
			exports: 'Handlebars'
		},
        'template': {
            deps: ['handlebars']
        },
		'jquery.hammer': {
			deps: ['hammer', 'jquery']
		},
		'enquire': {
			exports: 'enquire'
		},
		'blackbird': {
			deps: ['style!' + Cornerstone.PATH_LIB + 'blackbirdjs/blackbird'],
			exports: 'log'
		},
		'socket.io': {
			exports: 'io'
		},
		'transition': {
			deps: ['jquery'],
            exports: 'Transition'
		},
		'jsonp': {
			deps: ['jquery']
		},
		'skt': {
			deps: ['jquery']
		},
		'logging': {
			deps: ['blackbird']	
		},
        'gesture-view' : {
            deps: ['backbone', 'jquery.hammer']
        },
        'widget-plugins' : {
            deps: ['jquery']
        },
        'widget-editor' : {
            deps: ['jquery']
        },
        'widget-media' : {
            deps: ['jquery']
        },
        'widget-scrollview' : {
            deps: ['jquery']
        },
        'widget-chart' : {
            deps: ['backbone']
        },
        'widget-datatable' : {
            deps: ['backbone']
        },
        'widget-listview' : {
            deps: ['backbone']
        }
	}
} );

// 메인 모듈을 로드하고 실행한다.
require( [ Cornerstone.App.mainModule ], function( main ) {
	main.launch();
} );
