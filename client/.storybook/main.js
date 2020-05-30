const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(js|ts|mdx|tsx)'],
  addons: ['@storybook/addon-knobs/register', '@storybook/addon-actions', '@storybook/addon-docs/preset'],

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
            plugins: [
              [
                require.resolve('babel-plugin-named-asset-import'),
                { loaderMap: { svg: { ReactComponent: '@svgr/webpack?-svgo, +titleProp, +ref![path]' } } }
              ]
            ]
          }
        },
        require.resolve('react-docgen-typescript-loader')
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');

    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src/'),
      '@Action': path.resolve(__dirname, '../src/action/'),
      '@Reducer': path.resolve(__dirname, '../src/reducer/'),
      '@Saga': path.resolve(__dirname, '../src/saga/'),
      '@Cards': path.resolve(__dirname, '../src/components/Cards/'),
      '@Custom': path.resolve(__dirname, '../src/components/custom/'),
      '@Filters': path.resolve(__dirname, '../src/components/Filters/'),
      '@Modal': path.resolve(__dirname, 'src/components/Modal'),
      $Icon: path.resolve(__dirname, '../src/Icon/'),
      $Style: path.resolve(__dirname, '../src/style/'),
      $Util: path.resolve(__dirname, '../src/util/')
    };

    return config;
  }
};
