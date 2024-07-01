const generateTodaysDate = () => {
	const today = new Date();
	const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const formattedDate = today.toLocaleDateString(undefined, options);

	return formattedDate;
};

export { generateTodaysDate };
