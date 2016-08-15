const path = require('path');
const express = require('express');

module.exports = {
    app: function () {
        app.use(express.static(__dirname + '/static'));

        return app
    }
}