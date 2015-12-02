/**
 * Created by jklee on 2015. 11. 26..
 */
FlowRouter.route('/', {
    action() {
        ReactLayout.render(App, {content: <Header />});
    }
});
