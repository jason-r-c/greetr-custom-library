var g = G$('jason', 'carney', 'en');

// -- how to use -- //

// properties
g.firstname;

g.lastname;

g.language;

// methods
g.formalGreeting();

g.fullName();

g.greet();

// chain methods jquery style
g.greet(true)log().setLang('en');

// Is publically accessible but cannot be directly used
// g.validate();