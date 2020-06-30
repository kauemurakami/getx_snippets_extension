/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("url");
var https = require("https");
var HttpsProxyAgent = require('https-proxy-agent');
var HttpProxyAgent = require('http-proxy-agent');
var PROXY_AGENT = undefined;
var HTTPS_PROXY_AGENT = undefined;
if (process.env.npm_config_proxy) {
    PROXY_AGENT = new HttpProxyAgent(process.env.npm_config_proxy);
    HTTPS_PROXY_AGENT = new HttpsProxyAgent(process.env.npm_config_proxy);
}
if (process.env.npm_config_https_proxy) {
    HTTPS_PROXY_AGENT = new HttpsProxyAgent(process.env.npm_config_https_proxy);
}
function getUrlContents(url, token, headers, callback) {
    var options = toHttpRequestOptions(url, token, headers);
    https.get(options, function (res) {
        if (res && res.statusCode >= 400) {
            callback(new Error('Request returned status code: ' + res.statusCode));
        }
        var data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function () {
            callback(null, data);
        });
    }).on('error', function (e) {
        callback(e);
    });
}
exports.getUrlContents = getUrlContents;
function toHttpRequestOptions(url, token, headers) {
    if (headers === void 0) { headers = { 'user-agent': 'nodejs' }; }
    var options = url_1.parse(url);
    if (PROXY_AGENT && options.protocol.startsWith('http:')) {
        options.agent = PROXY_AGENT;
    }
    if (HTTPS_PROXY_AGENT && options.protocol.startsWith('https:')) {
        options.agent = HTTPS_PROXY_AGENT;
    }
    if (token) {
        headers['Authorization'] = 'token ' + token;
    }
    options.headers = headers;
    // We need to test the absence of true here because there is an npm bug that will not set boolean
    // env variables if they are set to false.
    if (process.env.npm_config_strict_ssl !== 'true') {
        options.rejectUnauthorized = false;
    }
    return options;
}
