    //store
    const storeLink = document.getElementById('store-link');
    const dropdownStore = document.getElementById('dropdown-store');

    storeLink.addEventListener('click', function(e) {
      e.preventDefault();
      dropdownStore.classList.toggle('show');
    });

    // Optional: click outside to close
    document.addEventListener('click', function(e) {
      if (!storeLink.contains(e.target) && !dropdownStore.contains(e.target)) {
        dropdownStore.classList.remove('show');
      }
    });

    //mac
    const macLink = document.getElementById('mac-link');
    const dropdownMac = document.getElementById('dropdown-mac');

    macLink.addEventListener('click', function(e) {
      e.preventDefault();
      dropdownMac.classList.toggle('show');
    });

    // Optional: click outside to close
    document.addEventListener('click', function(e) {
      if (!macLink.contains(e.target) && !dropdownMac.contains(e.target)) {
        dropdownMac.classList.remove('show');
      }
    });

    //ipad
    const ipadLink = document.getElementById('ipad-link');
    const dropdownipad = document.getElementById('dropdown-ipad');

    ipadLink.addEventListener('click', function(e) {
      e.preventDefault();
      dropdownipad.classList.toggle('show');
    });

    // Optional: click outside to close
    document.addEventListener('click', function(e) {
      if (!ipadLink.contains(e.target) && !dropdownipad.contains(e.target)) {
        dropdownipad.classList.remove('show');
      }
    });

    //watch
    const watchLink = document.getElementById('watch-link');
    const dropdownWatch = document.getElementById('dropdown-watch');

    watchLink.addEventListener('click', function(e) {
      e.preventDefault();
      dropdownWatch.classList.toggle('show');
    });

    // Optional: click outside to close
    document.addEventListener('click', function(e) {
      if (!watchLink.contains(e.target) && !dropdownWatch.contains(e.target)) {
        dropdownWatch.classList.remove('show');
      }
    });

    //Airpods
    const AirpodsLink = document.getElementById('airpods-link');
    const dropdownAirpods = document.getElementById('dropdown-airpods');

    AirpodsLink.addEventListener('click', function(e) {
      e.preventDefault();
      dropdownAirpods.classList.toggle('show');
    });

    // Optional: click outside to close
    document.addEventListener('click', function(e) {
      if (!AirpodsLink.contains(e.target) && !dropdownAirpods.contains(e.target)) {
        dropdownAirpods.classList.remove('show');
      }
    });

    //Tv
    const TVLink = document.getElementById('tv-link');
    const dropdownTV = document.getElementById('dropdown-tv');

    TVLink.addEventListener('click', function(e) {
      e.preventDefault();
      dropdownTV.classList.toggle('show');
    });

    // Optional: click outside to close
    document.addEventListener('click', function(e) {
      if (!TVLink.contains(e.target) && !dropdownTV.contains(e.target)) {
        dropdownTV.classList.remove('show');
      }
    });

