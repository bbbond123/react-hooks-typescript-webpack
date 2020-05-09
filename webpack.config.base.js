const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const APP_ENV = 'dist';

module.exports = {
  target: 'web',
  entry: {
    app: './index.tsx'
  },
  output: {
    filename: `js/[name].bundle.[contenthash:8].js`,
    chunkFilename: `js/[name].chunk.[contenthash:8].js`,
    path: path.resolve(__dirname, `${APP_ENV}`),
    publicPath: '/'
  },
  context: path.resolve(__dirname, 'app'),
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: [path.resolve(__dirname, 'i18n'), path.resolve(__dirname, `${APP_ENV}`)],
    publicPath: `/`,
    headers: {
      'Service-Worker-Allowed': '/'
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: `/index.html` },
        { from: /./, to: `/index.html` }
      ]
    },
    logLevel: 'error',
    inline: true,
    watchOptions: {
      watch: true
    },
    disableHostCheck: true,
    compress: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'app'),
      locales: path.resolve(__dirname, 'i18n/locales')
    },
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.json']
  },
  module: {
    rules: [
      process.env.NODE_ENV !== 'production'
        ? {
            enforce: 'pre',
            test: /\.(ts|tsx)$/,
            include: [path.resolve(__dirname, 'app')],
            loader: 'eslint-loader'
          }
        : false,
      {
        test: /\.(ts|tsx)$/,
        include: [path.resolve(__dirname, 'app')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                'babel-plugin-lodash',
                '@babel/plugin-syntax-dynamic-import',
                [
                  'babel-plugin-import',
                  {
                    libraryName: 'antd',
                    style: 'css'
                  }
                ],
                [
                  'babel-plugin-styled-components',
                  {
                    displayName: process.env.NODE_ENV === 'development',
                    pure: true
                  }
                ]
              ],
              presets: [
                [
                  '@babel/env',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3,
                    targets: {
                      ie: '11'
                    }
                  }
                ]
              ]
            }
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          pngquant: {
            quality: [0.7, 0.9],
            speed: 1
          }
        }
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|woff2|svg|mp3)$/,
        loader: 'url-loader',
        options: {
          limit: 3000,
          name: `assets/[name].[hash:8].[ext]`
        }
      },
      {
        loader: 'webpack-ant-icon-loader',
        enforce: 'pre',
        include: [require.resolve('@ant-design/icons/lib/dist')]
      }
    ].filter(Boolean)
  },
  optimization: {
    splitChunks: {
      chunks: function(chunk) {
        return chunk.name !== 'antd-icons';
      },
      name: true,
      cacheGroups: {
        antd: {
          chunks: 'all',
          name: 'antd',
          test: /[\\/]node_modules[\\/]antd[\\/]/,
          priority: 100
        },
        async: {
          chunks: 'async',
          minChunks: 2,
          name: 'async',
          priority: 90
        },
        vendors: {
          chunks: 'all',
          name: 'vendors',
          minChunks: 2,
          test: /[\\/]node_modules[\\/]/,
          priority: 80
        }
      }
    },
    minimizer: [
      process.env.NODE_ENV === 'production'
        ? new TerserPlugin({
            terserOptions: {
              parse: {
                ecma: 8
              },
              compress: {
                ecma: 5,
                warnings: false,
                comparisons: false,
                inline: 2,
                pure_funcs: ['console.log', 'console.debug', 'console.warn']
              },
              mangle: {
                safari10: true
              },
              output: {
                ecma: 5,
                comments: false,
                ascii_only: true
              }
            },
            parallel: process.platform !== 'win32',
            cache: true,
            sourceMap: false
          })
        : null
    ].filter(Boolean)
  }
};
