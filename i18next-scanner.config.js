const fs = require('fs');
const chalk = require('chalk');
const path = require("path");
const typescript = require("typescript");

module.exports = {
  input: [
    'app/**/*.{ts,tsx}',
    '!**/node_modules/**',
  ],
  output: './',
  options: {
    debug: false,
    sort: true,
    removeUnusedKeys: true,
    func: {
      list: ['i18next.t', 'i18n.t', '_.t'],
      extensions: ['.ts', '.tsx']
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: [],
      fallbackKey: function(ns, value) {
        return value;
      }
    },
    lngs: ['en', 'zh'],
    ns: [
      'resource'
    ],
    defaultLng: 'en',
    defaultNs: 'resource',
    defaultValue: function(lng, ns, key) {
      return key;
    },
    resource: {
      loadPath: 'i18n/locales/{{lng}}/{{ns}}.json',
      savePath: 'i18n/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n'
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}'
    }
  },
  transform: function customTransform(file, enc, done) {

    const { base, ext } = path.parse(file.path);

    if (!base.includes('.d.ts')) {
      const content = fs.readFileSync(file.path, enc);

      const { outputText } = typescript.transpileModule(content, {
        compilerOptions: {
          target: 'es2018',
        },
        fileName: path.basename(file.path),
      });

      let count = 0;
      const parser = this.parser;

      parser.parseFuncFromString(outputText, { list: ['i18next.t', 'i18n.t', '_.t'] }, (key, options) => {
        parser.set(key, Object.assign({}, options, {
          nsSeparator: false,
          keySeparator: false
        }));
        ++count;
      });

      parser.parseTransFromString(outputText, { component: 'Trans', fallbackKey: true }, (key, options) => {
        // This handling is workaround from issue:
        // https://github.com/i18next/i18next-scanner/issues/157
        let sentence = options.defaultValue;
        // remove <Tag> surrounding interopations to match i18next simpilied result
        // @see https://github.com/i18next/react-i18next/blob/master/CHANGELOG.md#800
        sentence = sentence.replace(/<(\d+)>{{(\w+)}}<\/\1>/g, '{{$2}}');
        sentence = sentence.replace(/\s+/g, ' ');
        options.defaultValue = sentence;

        parser.set(key, Object.assign({}, options, {
          nsSeparator: false,
          keySeparator: false
        }));
        ++count;
      });

      if (count > 0) {
        console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
      }
    }

    done();
  }
};