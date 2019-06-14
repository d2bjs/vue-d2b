// Rollup plugins
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';
import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';

// Postcss plugins
import precss from 'precss';
import postcssUtilities from 'postcss-utilities';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';

let plugins = [
  resolve({
    only: ['vue-property-decorator', 'vue-class-component']
  }),
  commonjs(),
  typescript(),
  vue({
    defaultLang: { script: 'ts' }
  }),
  postcss({
    extensions: ['.css'],
    plugins: [
      precss(),
      postcssPresetEnv({ stage: 0 }),
      cssnano(),
      postcssUtilities()
    ],
  }),
  babel({
    exclude: 'node_modules/**',
    extensions: ['.js', '.jsx', '.ts', '.vue']
  }),
];

let outputs = [
  {
    file: 'dist/vue-d2b.cjs.js',
    sourceMap: 'inline',
    format: 'cjs',
    name: 'vued2b'
  },
  {
    file: 'dist/vue-d2b.js',
    format: 'iife',
    globals: {'d2b': 'd2b', 'd3-selection': 'd3', 'd3-transition': 'd3', 'vue': 'Vue'},
    sourceMap: 'inline',
    name: 'vued2b'
  },
];

if (process.env.NODE_ENV === 'production') {
  outputs = [
    {
      file: 'dist/vue-d2b.min.js',
      format: 'iife',
      globals: {'d2b': 'd2b', 'd3-selection': 'd3', 'd3-transition': 'd3', 'vue': 'Vue'},
      sourceMap: 'inline',
      name: 'vued2b'
    }
  ];

  plugins.push(uglify());
}

export default {
  input: 'src/index.ts',
  output: outputs,
  plugins: plugins,
};
