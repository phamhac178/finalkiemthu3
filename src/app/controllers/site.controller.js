
class SiteController  {

    // [GET] /home
    home(req, res) {
        res.render('home')
    }

    //[GET] /seach
    search(req, res){
        res.render('search')
    }

    //[GET] /seach
    login(req, res){
        res.render('login')
    }

    //[GET] /seach
    register(req, res){
        res.render('register')
    }

}

module.exports = new SiteController;