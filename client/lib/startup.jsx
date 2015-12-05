/**
 * Created by jklee on 2015. 11. 24..
 */
//var React = require('react');
//var ReactDOM = require('react-dom');


if(Meteor.isClient){
    Meteor.startup( function () {
        console.debug("Startup--React.render()");
        ReactDOM.render(<MainLayout />, document.getElementById('render_target'));
        console.debug("IELTS MOCKTEST " );
    });
}

