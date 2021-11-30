
class TieusuController  {

    // [GET] /tieusu
    index(req, res) {
        res.render('tieusu')
    }

    //[GET] /tieusu/:slug
    show(req, res){
        res.send('show')
    }



}

module.exports = new TieusuController;