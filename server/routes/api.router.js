const {
	searchStationByTerm,
	searchStationByCRS,
} = require('../mcv/stationSearch.controller');
const { serviceData } = require('../mcv/services.controller');

const apiRouter = require('express').Router();

apiRouter.route('/stations/:term').get(searchStationByTerm);
apiRouter.route('/stations/crs/:crs').get(searchStationByCRS);
apiRouter.route('/services/live/:from/:to').get(serviceData);

module.exports = apiRouter;
