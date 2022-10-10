/* eslint-disable no-undef */

// 1 -  Change link href
const ouput1 = document.getElementById('output1');
changeHref.onclick = () => {
  const output1href = output1.getElementsByTagName('a');
  output1href[0].href = 'http://www.google.fr';
  console.log(output1href);
};
// 2 - Change output content
changeText.onclick = () => {
  output1.innerHTML = `<blockquote>L'espoir est un fluide nécessaire à l'homme comme l'eau à la terre, il déclenche des forces insoupçonnées de la nature humaine.
    L'union dans l'amour doit se dérouler dans le silence, comme la prière, puisque la demande est à l'écoute de nos désirs. Le bonheur revient toujours après la peine.</blockquote>`;
};
// 3 - Delete elements from list
removeHTML.onclick = () => {
  const output2 = document.getElementById('output2');
  output2.innerHTML = '';
};
// 4 - Recreate part 1

createDiv.onclick = () => {
  const template1 = document.createElement('div');
  template1.id = 'divTP1';
  template1.innerHTML = 'Le <strong>World Wide Web Consortium</strong>, abrégé par le sigle <strong>W3C</strong>, est un<ahref="http://fr.wikipedia.org/wiki/Organisme_de_normalisation"title="Organisme de normalisation">organisme de standardisation</a>à but non-lucratif chargé de promouvoir la compatibilité des technologies du <ahref="http://fr.wikipedia.org/wiki/World_Wide_Web"title="World Wide Web">World Wide Web</a>.';
  document.body.insertBefore(template1, document.getElementById('createDiv'));
};
// 5 - Recreate part 2
createSecondDiv.onclick = () => {
  const template2 = document.createElement('div');
  template2.id = 'divTP2';
  template2.innerHTML = '<p>Langages basés sur ECMAScript :</p><ul><li>JavaScript</li><li>JScript</li><li>ActionScript</li><li>EX4</li></ul>';
  document.body.insertBefore(template2, document.getElementById('createSecondDiv'));
};
// 6 -  Recreate part 3
createThirdDiv.onclick = () => {
  const template3 = document.createElement('div');
  template3.id = 'divTP3';
  template3.innerHTML = '<form enctype="multipart/form-data"method="post"action="upload.php"><fieldset><legend>Uploader une image</legend><div style="text-align:center"><label for="inputUpload">Image à uploader :</label><input type="file"name="input Upload"id="inputUpload"/><br/><br/><input type="submit"value="Envoyer"/></div></fieldset></form>';
  document.body.insertBefore(template3, document.getElementById('createThirdDiv'));
};
// 7 - Modify table
addMozilla.onclick = () => {
  const tbl = document.getElementsByTagName('table').getElementsByTagName('tbody');

  const row = tbl.insertRow();
  const cell = row.insertCell();
  const mozilla = document.createTextnode('<th scope="row">Firefox</th><td>Mozilla</td><td>27,8%</td>');
  cell.appendChild(mozilla);
};
