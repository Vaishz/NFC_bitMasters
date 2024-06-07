const url = 'https://pharma-industry-data-collection.p.rapidapi.com/?q=paracetamol&ts=1675159335000&tsi=1677067077000';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ebba480077msh681a1f86682eb13p1cc202jsne3959dedcd45',
		'X-RapidAPI-Host': 'pharma-industry-data-collection.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}