// Filter
$(function () {
    // Set up some data and variables
    const data = [17, 25, 52, 60],
        filterInput = $('#filter-input'),
        filterSubmit = $('#filter-submit'),
        filterResult = $('#filter-result');
    // Click event on the submit input
    filterSubmit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = filterInput.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
          // Add our new number to the data array
          data.push(num);
          // Filters out odd numbers
          const filteredData = data.filter(i => i % 2 === 0);
          // Display new result
          filterResult.text(filteredData);
          // Reset the input value to nothing
          filterInput.val('');
        }
    });
});
// Map
$(function () {
    // Set up some data and variables
    const currentAges = [17, 25, 52, 60],
        mapInput = $('#map-input'),
        mapSubmit = $('#map-submit'),
        mapResult = $('#map-result');
    // Click event on the submit input
    mapSubmit.on('click', function () {
        // Grab the input value and parse it into a number
        const inputAge = mapInput.val();
        const age = parseInt(inputAge);
        // Verify the user gave us a real number
        if (!isNaN(age)) {
          // Add our new number to the data array
          currentAges.push(age);
          // Use map to add 23 to all numbers in array
          const futureAge = currentAges.map(x => x + 23);
          // Display new ages
          mapResult.text(futureAge);
          // Reset the input value to nothing
          mapInput.val('');
        }
    });
});
// Some
$(function () {
    // Set up some data and variables
    const fam = [17, 25, 52, 60],
        someInput = $('#some-input'),
        someSubmit = $('#some-submit'),
        someResult = $('#some-result');
    // Click event on the submit input
    someSubmit.on('click', function () {
        // Grab the input value and parse it into a number
        const addNumber = someInput.val();
        const newNumber = parseInt(addNumber);
        // Verify the user gave us a real number
        if (!isNaN(newNumber)) {
          // Add our new number to the data array
          fam.push(newNumber);
          // Use map to add 23 to all numbers in array
          const over65 = fam.some(x => x > 65);
          // Display new ages
          someResult.text(over65);
          // Reset the input value to nothing
          mapInput.val('');
        }
    });
});
// Includes
$(function () {
    // Set up some data and variables
    const oliviasFaves = ['WA', 'CA', 'MA', 'OR', 'NY'],
        includesInput = $('#includes-input'),
        includesSubmit = $('#includes-submit'),
        includesResult = $('#includes-result');
    // Click event on the submit input
    includesSubmit.on('click', function () {
        // Grab the input value
        const faveState = includesInput.val();
        // includes checks if input is included in array
        const state = oliviasFaves.includes(faveState);
        // displays true or false depending on input
        includesResult.text(state);
          // Reset the input value to nothing
        includesInput.val('');
      });
    });
