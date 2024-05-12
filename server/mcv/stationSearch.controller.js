const { queryStationNames, queryStationCrs } = require('./stationSearch.model');

exports.searchStationByTerm = (req, res, next) => {
	const term = req.params.term;
	queryStationNames(term)
		.then((stations) => {
			res.status(200).send({ stations });
		})
		.catch((err) => {
			next(err);
		});
};

exports.searchStationByCRS = (req, res, next) => {
	const crs = req.params.crs;
	queryStationCrs(crs)
		.then((stations) => {
			res.status(200).send({ stations });
		})
		.catch((err) => {
			next(err);
		});
};
