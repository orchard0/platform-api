const {
	searchStationByTerm,
	searchStationByCRS,
} = require('../mcv/stationSearch.controller');

const apiRouter = require('express').Router();

apiRouter.route('/stationSearch/:term').get(searchStationByTerm);
apiRouter.route('/stationSearch/crs/:crs').get(searchStationByCRS);

module.exports = apiRouter;
