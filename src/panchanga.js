async function fetchPanchanga(placeId) {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
  
    const url = 'https://daily-panchang-api.p.rapidapi.com/indian-api/v1/find-panchang';
    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '49b937b8bbmsh00c43529634ec18p18b5b6jsn3ba5a804a22e',
        'x-rapidapi-host': 'daily-panchang-api.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        day: day,
        month: month,
        year: year,
        placeId: placeId
      })
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      // You can also display the result in your widget here
      document.getElementById('panchanga-result').textContent = JSON.stringify(result, null, 2);
    } catch (error) {
      console.error(error);
      document.getElementById('panchanga-result').textContent = 'Error fetching Panchanga.';
    }
  }
  
  // Example usage: call this when the page loads or when the user selects a city
  document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById('city-select');
    fetchPanchanga(select.value);
    select.addEventListener('change', function() {
      fetchPanchanga(this.value);
    });
  });