import resolve from 'rollup-plugin-node-resolve'; // 帮助寻找 node_modules 里的包
import commonjs from 'rollup-plugin-commonjs';    // 将非 ES6 语法的包转为 ES6 可用
import babel from 'rollup-plugin-babel';          // rollup 的 babel 插件，ES6 转 ES5
import json from 'rollup-plugin-json';            // 从JSON文件中导入数据
import license from'rollup-plugin-license';       // 许可版权
import { uglify } from 'rollup-plugin-uglify';    // 压缩包
import pkg from '../package.json';

const banner =
  '/*!\n' +
  ` * unloader.js v${pkg.version}\n` +
  ` * (c) 2018-${new Date().getFullYear()} Pangxieju\n` +
  ' * Released under the MIT License.\n' +
	' */';

const input = 'src/main.js';
const dist = 'dist';

const plugins = [
	json(),
	resolve(), // so Rollup can find `ms`
	commonjs(), // so Rollup can convert `ms` to an ES module
	babel({
		exclude: ['node_modules/**']
	}),
	license({
		banner
	})
];

const builds = {
	'umd': {
		input,
		output: {
			name: 'unloader',
			file: `${dist}/unloader.js`,
			format: 'umd'
		},
		plugins: [
			...plugins
		],
		external: ['axios'],
		globals: {
			'axios': 'axios'
		}
	},
	'umd-min': {
    input,
		output: {
			name: 'unloader',
			file: `${dist}/unloader.min.js`,
			format: 'umd'
		},
		plugins: [
			...plugins,
			uglify({
				compress: {
					warnings: false,
					drop_console: true,
					drop_debugger: true
				}
			})
		],
		external: ['axios'],
		globals: {
			'axios': 'axios'
		}
	},
	'cjs': {
		input,
		external: ['ms'],
		output: {
			file: `${dist}/unloader.common.js`,
			format: 'cjs'
		},
		plugins: [
			...plugins
		],
		external: ['axios'],
		globals: {
			'axios': 'axios'
		}
	},
	'esm': {
		input,
		external: ['ms'],
		output: {
			file: `${dist}/unloader.esm.js`,
			format: 'es'
		},
		plugins: [
			...plugins
		],
		external: ['axios'],
		globals: {
			'axios': 'axios'
		}
	}
};

export default Object.values(builds);
