#!/usr/bin/env node
import Gyotaku from 'gyotaku';
import updateNotifier from 'update-notifier';
import yargs from 'yargs';

import pkg from '../package.json';


updateNotifier({pkg}).notify();

const argv = yargs
  .usage('Usage: gyotaku [options] <URL>')
  .example('gyotaku http://example.com/', 'Take GYOTAKU of specific url')
  .example('gyotaku -l http://example.com/', 'List GYOTAKU urls for specific url')
  .option('l', {
    alias: 'list',
    description: 'Listing GYOTAKU urls',
    type: 'boolean'
  })
  .help('help')
  .demand(1)
  .version(pkg.version)
  .detectLocale(false)
  .wrap(null)
  .strict()
  .argv;


/**
 * execute
 *
 * @param {Object} args yargs object
 */
function execute(args) {
  const [targetUrl] = args._;
  const listing = args.list;
  const gyotaku = new Gyotaku(targetUrl);
  let promise = null;
  if (listing) {
    promise = gyotaku.list().then(urls => {
      urls.forEach(url => {
        console.log(url);
      });
    });
  } else {
    promise = gyotaku.take().then(url => {
      console.log(url);
    });
  }
  promise.then(() => process.exit()).catch(() => {
    console.error('Error');
    process.exit(1);
  });
}


try {
  execute(argv);
} catch (e) {
  console.error(e);
  process.exit(1);
}
