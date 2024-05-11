const { queryStationNames, queryStationCrs } = require('./stationSearch.model');

exports.searchStationByTerm = (req, res, next) => {
	const term = req.params.term;
	queryStationNames(term)
		.then((results) => {
			res.status(200).send({ results });
		})
		.catch((err) => {
			next(err);
		});
};

exports.searchStationByCRS = (req, res, next) => {
	const crs = req.params.crs;
	queryStationCrs(crs)
		.then((results) => {
			res.status(200).send({ results });
		})
		.catch((err) => {
			next(err);
		});
};
