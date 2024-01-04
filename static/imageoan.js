const panarom = document.querySelector('.pano-image')
const panorama = new PANOLENS.ImagePanorama('C:\Users\ibnha\Documents\Python\Leaflet\pexels-sergio-souza-5048124.jpg');
const viewer = new PANOLENS.Viewer({container: panarom});
viewer.add( panorama );