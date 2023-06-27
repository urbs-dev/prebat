import adapter from '@sveltejs/adapter-node'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { config } from 'dotenv'

const result = config({ path: '../../.env'})
if (result.error) {
	config({ path: '../../../.env'})
}

/** @type {import('@sveltejs/kit').Config} */
const params = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({ out: 'build' }),
		paths: {
			base: process.env.NODE_ENV === 'development' ? '' : '/prebat',
		},
	},
	vitePlugin: {
		inspector: {
			toggleKeyCombo: 'meta-shift',
			holdMode: true,
			showToggleButton: 'always',
			toggleButtonPos: 'bottom-right',
		}
	}
}
export default params
