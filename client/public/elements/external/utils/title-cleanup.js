const WORD_MAP = {
  'bio' : 'Biological',
  'adj' : 'Adjunct',
  'ag' : 'Agricultural',
  'agron' : 'Agronomist',
  'asst' : 'Assistant',
  'assoc' : 'Associate',
  'coop' : 'Cooperative',
  'engr' : 'Engineering',
  'ext' : 'Extension',
  'prof' : 'Professor',
  '&' : 'and',
};

export default function(titleList) {
  let unique = new Set();
  
  titleList.forEach(title => {
    unique.add(cleanWord(title));
  });

  return Array.from(unique);
}

function cleanWord(word) {
  return word.split(/( |\/|&)/)
    .filter(part => part.trim())
    .map(part => WORD_MAP[part.toLowerCase()] || (part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()))
    .join(' ');
}