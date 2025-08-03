// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};


// 1. List all enabled settings as "key: value" (only true)
const enabledSettingsElement = document.getElementById("enabled-settings");

const enabledSettings = Object.entries(settings)
  .filter(([_, value]) => value === true)
  .map(([key, value]) => '${key}: ${value}');

enabledSettingsElement.textContent = enabledSettings.join(", ");


  enabledSettingsElement.style.fontSize = "1rem";
  enabledSettingsElement.style.color = "red";
  enabledSettingsElement.style.fontWeight = "bold";
  enabledSettingsElement.style.fontFamily = "arial";

// 2. Count how many settings are set to true
const countTrueElement = document.getElementById("count-true");

const countTrue = enabledSettings.length;
countTrueElement.textContent = countTrue;

  countTrueElement.style.fontSize = "1rem";
  countTrueElement.style.color = "green";
  countTrueElement.style.fontWeight = "bold";
  countTrueElement.style.fontFamily = "arial";

// 3. Convert settings to an array with Object.entries and filter true values
const filteredSettingsArrayElement = document.getElementById("filtered-settings-array");

const filteredSettingsArray = Object.entries(settings).filter(([_, value]) => value === true);

  filteredSettingsArrayElement.style.fontSize = "1rem";
  filteredSettingsArrayElement.style.color = "violet";
  filteredSettingsArrayElement.style.fontWeight = "bold";
  filteredSettingsArrayElement.style.fontFamily = "arial";

// Display filtered settings array as separate lines 
filteredSettingsArrayElement.innerHTML = filteredSettingsArray
  .map(([key, value]) => '[${key}, ${value}]')
  .join("<br>");


// 4. Rebuild filtered settings object using Object.fromEntries
const filteredSettingsObjectElement = document.getElementById("filtered-settings-object");

const filteredSettingsObject = Object.fromEntries(filteredSettingsArray);

// Display filtered settings object as readable key: value pairs 
filteredSettingsObjectElement.innerHTML = Object.entries(filteredSettingsObject)
  .map(([key, value]) => '${key}: ${value}')
  .join("<br>");

  filteredSettingsObjectElement.style.fontSize = "1rem";
  filteredSettingsObjectElement.style.color = "orange";
  filteredSettingsObjectElement.style.fontWeight = "bold";
  filteredSettingsObjectElement.style.fontFamily = "arial";
