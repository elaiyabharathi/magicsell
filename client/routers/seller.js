/* Seller */
Router.route('seller', function() {
    Router.go('sellerIndex');
});
Router.route('seller/index/:limit?/', {
    name: 'sellerIndex',
    controller: SellerController,
    action: 'index',
});
Router.route('seller/insert/', {
    name: 'sellerInsert',
    controller: SellerController,
    action: 'insert',
});
Router.route('seller/update/:_id?', {
    name: 'sellerUpdate',
    controller: SellerController,
    action: 'update',
});
Router.route('seller/view/:_id?', {
    name: 'sellerView',
    controller: SellerController,
    action: 'view',
});
/* EOF Seller */