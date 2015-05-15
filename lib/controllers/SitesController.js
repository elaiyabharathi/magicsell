SitesController = MeteorisController.extend({
    /* get subscribtion from server with parameter criteria, and sort/limit */
    subscriptions: function() {
    },
    /* passing data from controllers to view */
    data: function() {
        return {
        };
    },
     /* private get user input docs */
    _getDoc: function(t) {
        return {
            name: t.find('#name').value,
	    email: t.find('#email').value,
	    phone: t.find('#phone').value? Number(t.find('#phone').value):null,
	    bookstosell: t.find('#bookstosell').value? Number(t.find('#bookstosell').value):null,
	    college: t.find('#college').value,

        };
    },
    /* event inserting data */
    insert: function(t) {
	
        if (this._post) {
	    alert("in controller aa");
            //uploading file using cfs:fileSystem package + cfs:ejson
            //var imageId = this._uploadImage();

            //set inserted doc
            var doc = this._getDoc(t);
            //doc.imageId = imageId;

            Seller.insert(doc, function(err, _id) {
                if (err) {
                    MeteorisFlash.set('danger', err.message);
                    throw new Meteor.Error(err);
                }
                MeteorisFlash.set('success', "Success Inserting Seller");
                Router.go('sellerView', {_id: _id});
            });
        }
        return this.render('sellerInsert', {});
    },
});
