module.exports = {
	context: __dirname,
	output: {
		library: 'filbert',
		libraryTarget: 'umd',
		filename: 'skulpty.js',
		path: require('path').resolve(__dirname, 'build')
	},
	entry: './src/index.js',
	mode: 'production'
};