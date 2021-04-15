

const mySchema = new mongoose.Schema({
    "offset": 0,
    "limit": 1,
});


mySchema.plugin(mongoosePaginate);

const Model = mongoose.model('SampleModel', mySchema);

Model.paginate({}, { offset: 1, limit: 1 }, function (err, result) {

});