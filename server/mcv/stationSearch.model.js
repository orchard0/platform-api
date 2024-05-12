const db = require('../../db/connection');
var format = require('pg-format');

exports.queryStationNames = (slug) => {
	const query = format(
		"SELECT name, crs from stations where lower(name) like '%%%s%%' or lower(crs) like '%%%s%%' limit 15",
		slug.toLowerCase(),
		slug.toLowerCase()
	);
	return db.query(query).then(({ rows }) => {
		return rows;
	});
};

exports.queryStationCrs = (crs) => {
	const query = format(
		'SELECT name, crs from stations where lower(crs) = %L',
		crs.toLowerCase()
	);
	return db.query(query).then(({ rows }) => {
		return rows;
	});
};
