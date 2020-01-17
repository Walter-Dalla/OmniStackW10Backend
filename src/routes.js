const {Router} = require('express');
const routes = Router();

const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')
routes.get('eia', (req, resp) =>{
    return resp.json({sla:"sla"})   
})

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

routes.get("/search", SearchController.index);

module.exports = routes;