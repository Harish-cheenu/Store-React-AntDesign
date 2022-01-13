/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const CracoAlias = require('craco-alias');
const CracoLessPlugin = require('craco-less');

 const lessModifyVars = {};
 module.exports = {
   plugins: [
     {
       plugin: CracoLessPlugin,
       options: {
         lessLoaderOptions: {
           lessOptions: {
             modifyVars: lessModifyVars,
             javascriptEnabled: true,
           },
         },
       },
     },
     {
       plugin: CracoLessPlugin,
       options: {
         lessLoaderOptions: {
           lessOptions: {
             modifyVars: lessModifyVars,
             javascriptEnabled: true,
           },
         },
         modifyLessRule: function (lessRule, context) {
           lessRule.test = /\.module\.(less)$/;
           lessRule.exclude = undefined;
           return lessRule;
         },
         cssLoaderOptions: {
           modules: {
             localIdentName: '[local]_[hash:base64:5]',
           },
         },
       },
     },
     {
       plugin: CracoAlias,
       options: {
         source: 'tsconfig',
         baseUrl: './',
         tsConfigPath: './tsconfig.paths.json',
       },
     },
   ],
 };


