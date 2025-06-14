export default new Skin('projects-default', () => {
	console.log('mounting DEFAULT projects');

	return () => {
		console.log('unmounting DEFAULT projects');
	};
});
