//your code here
let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Who', 'Aerosmith', 'The Rolling Stones'];

// Remove articles from band names
bandNames = bandNames.map(name => name.replace(/^(a|an|the)\s+/i, ''));

// Sort band names in lexicographic order
bandNames.sort((a, b) => a.localeCompare(b));

// Display sorted band names in ul id='band' tag using li tag
const ul = document.createElement('ul');
ul.id = 'band';
document.body.appendChild(ul);

for (const name of bandNames) {
  const li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
}
