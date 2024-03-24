 
  function showSearchInput() {
      const searchIcon = document.getElementById('Ricerca');
      const searchInput = document.getElementById('searchInput');
      searchIcon.style.display = 'none';
      searchInput.style.display = 'block';
      searchInput.focus();
    }

    const searchInput = document.getElementById('searchInput');
    const autocompleteResults = document.getElementById('autocompleteResults');
    
    // Dati di esempio per l'autocompletamento
    const suggestions = [
      { name: 'Londra', url: 'Londra.html' },
      { name: 'Alba', url: 'Alba.html' },
      { name: 'Alsazia', url: 'Alsazia.html' },
      { name: 'Amsterdam', url: 'Amsterdam.html' },
      { name: 'Atene', url: 'Atene.html' },
      { name: 'Australia', url: 'Australia.html' },
      { name: 'Barcelona', url: 'Barcelona.html' },
      { name: 'Bergamo', url: 'Bergamo.html' },
      { name: 'Berlino', url: 'Berlino.html' },
      { name: 'Bologna', url: 'Bologna.html' },
      { name: 'Brescia', url: 'Brescia.html' },
      { name: 'Bruges', url: 'bruges.html' },
      { name: 'Bruxelles', url: 'Bruxelles.html' },
      { name: 'Budapest', url: 'Budapest.html' },
      { name: 'Cagliari', url: 'Cagliari.html' },
      { name: 'Copenhagen', url: 'Copenhagen.html' },
      { name: 'Courmayeur', url: 'Courmayeur.html' },
      { name: 'Cracovia', url: 'Cracovia.html' },
      { name: 'Edimburgo', url: 'Edimburgo.html' },
      { name: 'Firenze', url: 'Firenze.html' },
      { name: 'Genova', url: 'Genova.html' },
      { name: 'Giappone', url: 'Giappone.html' },
      { name: 'Ginevra', url: 'Ginevra.html' },
      { name: 'IlCairo', url: 'IlCairo.html' },
      { name: 'Lione', url: 'Lione.html' },
      { name: 'Lisbona', url: 'Lisbona.html' },
      { name: 'Liverpool', url: 'Liverpool.html' },
      { name: 'Lubiana', url: 'Lubiana.html' },
      { name: 'Lugano', url: 'Lugano.html' },
      { name: 'Manchester', url: 'Manchester.html' },
      { name: 'Milano', url: 'Milano.html' },
      { name: 'Napoli', url: 'Napoli.html' },
      { name: 'New York', url: 'NewYork.html' },
      { name: 'Nizza', url: 'Nizza.html' },
      { name: 'Nuova Zelanda', url: 'NuovaZelanda.html' },
      { name: 'Oslo', url: 'Oslo.html' },
      { name: 'Palermo', url: 'Palermo.html' },
      { name: 'Parma', url: 'Parma.html' },
      { name: 'Pisa', url: 'Pisa.html' },
      { name: 'Praga', url: 'Praga.html' },
      { name: 'Principato di Monaco', url: 'Principato di Monaco.html' },
      { name: 'Puglia', url: 'Puglia.html' },
      { name: 'Roma', url: 'Roma.html' },
      { name: 'Santorini', url: 'Santorini.html' },
      { name: 'Siviglia', url: 'Siviglia.html' },
      { name: 'St Moritz', url: 'St Moritz.html' },
      { name: 'Stoccolma', url: 'Stoccolma.html' },
      { name: 'Tallin', url: 'Tallin.html' },
      { name: 'Torino', url: 'Torino.html' },
      { name: 'Transilvania', url: 'Transilvania.html' },
      { name: 'Umbria', url: 'Umbria.html' },
      { name: 'Valencia', url: 'Valencia.html' },
      { name: 'Varsavia', url: 'Varsavia.html' },
      { name: 'Venezia', url: 'Venezia.html' },
      { name: 'Verona', url: 'Verona.html' },
      { name: 'Vienna', url: 'Vienna.html' },
    ];
    
    // Funzione per mostrare i risultati dell'autocompletamento
    function showAutocompleteResults(input) {
      const inputText = input.value.toLowerCase();
      autocompleteResults.innerHTML = '';
      if (inputText.trim() === '') {
        autocompleteResults.style.display = 'none'; // Nasconde l'elemento degli autocomplete se l'input è vuoto
        return;
      }
      const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.name.toLowerCase().startsWith(inputText)
      );
    
      filteredSuggestions.forEach(suggestion => {
        const suggestionElement = document.createElement('div');
        suggestionElement.textContent = suggestion.name;
        suggestionElement.addEventListener('click', () => {
          searchInput.value = suggestion.name;
          window.location.href = suggestion.url;
        });
        autocompleteResults.appendChild(suggestionElement);
      });
    
      if (filteredSuggestions.length === 0) {
        const noResults = document.createElement('div');
        noResults.textContent = 'Nessun risultato trovato';
        autocompleteResults.appendChild(noResults);
      }
      autocompleteResults.style.display = 'block';
    }
    
    searchInput.addEventListener('input', () => {
    showAutocompleteResults(searchInput);
  });