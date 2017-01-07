console.log('iniciamos');

const checkboxes = document.querySelectorAll('.item input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
  let inBetween = false;
  if(e.shiftKey && this.checked){
    //loop sobre todos los checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
        console.log('empezando en medio');
      }

      if(inBetween){
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}

checkboxes.forEach( checkbox => checkbox.addEventListener('click', handleCheck));
