const { DateTime } = require('luxon');
exports.genDatetime = () => {
	return DateTime.now()
		.setZone('Europe/London')
		.toFormat("yyyyMMdd'T'HHmmss");
};
