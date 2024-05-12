const {
	searchStationByTerm,
	searchStationByCRS,
} = require('../mcv/stationSearch.controller');

const apiRouter = require('express').Router();

apiRouter.route('/stations/:term').get(searchStationByTerm);
apiRouter.route('/stations/crs/:crs').get(searchStationByCRS);

module.exports = apiRouter;
