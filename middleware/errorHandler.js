const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case 400:
            res.json({ title: "Validation Error", message: res.message, stackTrace: res.stack });
            break;
        case 404:
            res.json({ title: "Not Found", message: res.message, stackTrace: res.stack });
            break;
        case 403:
            res.json({ title: "Forbidden Error", message: res.message, stackTrace: res.stack });
            break;
        case 401:
            res.json({ title: "Unauthorized Error", message: res.message, stackTrace: res.stack });
            break;
        case 500:
            res.json({ title: "Server Error", message: res.message, stackTrace: res.stack });
            break;
        default:
            console.log("No Error All Good !");
            break;
    }
};

module.exports = errorHandler;