export default new Skin('blog-default', () => {
	console.log('mounting DEFAULT blog');

	return () => {
		console.log('unmounting DEFAULT blog');
	};
});
