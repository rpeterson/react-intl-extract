# Intl extract from `<FormattedMessage>` to json dictionary

This is a command line tool to help extracting dictionaries from react-intl apps written in es6 and typescript.

If your app is internationalized using [`react-intl`](https://github.com/yahoo/react-intl), you use the component `<FormattedMessage>` (and other react-intl components) for i18n strings.

This tool configures babel, react intl and babel-plugin-react-intl and offers a simple command to manage your app's dictionaries.

## Install

`npm i react-intl-extract`

## Usage

### Cli

`npx react-intl-extract [options]`

#### Options

- `-l` (`--locales`): list of languages, it will produce a dictionary for every language, comma separated (deafult: `en,it`)
- `-s` (`--src`): source directory, where your `.jsx|.tsx` files are located (default `${cwd}/src`)
- `-e` (`--extensions`): file extensions, a csv list of extensions to extract from (default 'jsx,tsx')
- `-o` (`--output`): destination directory, where your dictionaries will be saved (default `${cwd}/locales`)
- `-v` (`--version`): shows script version
- `-h` (`--help`): shows available options

#### Example

`npx react-intl-extract -s src -o lib/locales -l en,it,es,fr`

Directory structure:

```
- /
  - /lib
    - /locales
      - en.json
      - es.json
      - fr.json
      - index.ts
      - it.json
  - /src
    - ...jsx
    - ...tsx
```

### As a node library

```javascript
import extract from 'react-intl-extract';

extract({
  locales: ['en', 'it', 'es'],
  src: `${__dirname}/src`,
  output: `${__dirname}/locales`
});
```

## Known problems

This module extracts only the `<FormattedMessage>` and `<FormattedHTMLMessage>` jsx tags, and the `defineMessages()` function, as [you can see here](https://github.com/yahoo/babel-plugin-react-intl/blob/master/src/index.js).

This is reported also [in the react-intl issues](https://github.com/yahoo/babel-plugin-react-intl/issues).

### workaround

If you need to use a string, as example in a prop, use this form:

```javascript
<Tag prop={(
  () => <FormattedMessage id='' defaultMessage='' />
  )()} ></Tab>
```


# Thanks

- [react](https://reactjs.org/)
- [react-intl](https://github.com/yahoo/react-intl)
- [babel-plugin-react-intl]()
