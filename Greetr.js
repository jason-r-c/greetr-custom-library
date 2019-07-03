(function(global, $) {

		// Create an object based on calling the Greet.init() constructor
		var Greetr = function(firstname, lastname, language) {
				return new Greetr.init(firstname, lastname, language);				
		}

		// private property
		var supportedLangs = ['en', 'es'];

		// private property
		var greetings = {
			en: 'Hello',
			es: 'Hola'
		};

		// private property
		var formalGreetings = {
			en: 'Greetings',
			es: 'Saludos'
		};

		// private property
		var logMessages = {
			en: 'Logged in',
			es: 'Inicio sesion'
		};

		// Public
		Greetr.prototype = {
			fullName: function() {
				return this.firstname + ' ' + this.lastname;
			},

			validate: function() {
				if(supportedLangs.indexOf(this.language) === -1) {
					throw "Unsupported language" 
				}
				else {
					return "Nothing to validate";
				}
			},

			greeting: function() {
				return greetings[this.language] + ' ' + this.firstname + '!';
			},

			formalGreeting: function() {
				return formalGreetings[this.language] + ', ' + this.fullName();
			},

			// Chainable
			greet: function(formal) {
				var msg;

				if(formal) {
					msg = this.formalGreeting();
				} 
				else {
					msg = this.greeting();
				}

				if(console) {
					console.log(msg);
				}

				// 'this' refers to the calling object at execution time
				// makes the method chainable
				return this;
			},

			// Chainable
			log: function() {
				// Checks if IE has the console open
				if(console) {
					console.log(logMessages[this.language] + ': ' + this.fullName());
				}

				return this;
			},

			// Chainable
			setLang: function(lang) {
				if(typeof lang !== 'undefined') {
					this.language = lang;
					console.log(this.language);
					this.validate();
					return this;
				}
				else {
					throw "You must set a language";
				}
			}
		};

		// Our function constructor which creates an object
		Greetr.init = function(firstname, lastname, language) {
			// self contains a reference to the current object
			var self = this;


     		// If properties arent set, give default values
			self.firstname = firstname || '';
			self.lastname = lastname || '';
			self.language = language || 'en';
		}

		// this is all to do with setting up a clean prototype chain
		Greetr.init.prototype = Greetr.prototype;

		// Greetr is the returned Constructor, 
		// simply add it to the global object and add an alias
		global.Greetr = global.G$ = Greetr;

}(window, jQuery));