const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let img = new Image();
let fileName = '';

const  btnSaveInput = document.getElementById('btnSave');
const  uploadFile = document.getElementById('upload-file');
const  btnResetInput = document.getElementById('btnReset');


const input = document.querySelector('input');
const filter = document.getElementById('filters');

document.addEventListener('click', (e)=> {
  if ( e.target.classList.contains('filter-btn')) {
    if(e.target.classList.contains("brightness-add")) {
      
    }
  }
 
    console.log(123);
  }
);






uploadFile.addEventListener('change', (e) => {
  //Get file
  const file = document.getElementById('upload-file')
  .files[0];

    const reader = new FileReader();

     if (file) {

      fileName = file.name;
      reader.readAsDataURL(file);
  }
    reader.addEventListener ('load', ()=> {

      //create image
      img = new Image();
      img.src = reader.result;

      //On image load, add to canvas
        img.onload = function () {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
          canvas.removeAttribute('data-caman-id');

        }

    }, false);
 });



 





