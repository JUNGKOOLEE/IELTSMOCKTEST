/**
 * Created by jklee on 2015. 11. 24..
 */

if(Meteor.isClient){
    Meteor.startup( function () {
        console.debug("Startup--React.render()");
        React.render(<MainLayout />, document.getElementById("body"));
    });
}
