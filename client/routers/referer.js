/* Referer */
Router.route('referer', function() {
    Router.go('refererIndex');
});
Router.route('referer/index/:limit?/', {
    name: 'refererIndex',
    controller: RefererController,
    action: 'index',
});
Router.route('referer/insert/', {
    name: 'refererInsert',
    controller: RefererController,
    action: 'insert',
});
Router.route('referer/update/:_id?', {
    name: 'refererUpdate',
    controller: RefererController,
    action: 'update',
});
Router.route('referer/view/:_id?', {
    name: 'refererView',
    controller: RefererController,
    action: 'view',
});
/* EOF Referer */