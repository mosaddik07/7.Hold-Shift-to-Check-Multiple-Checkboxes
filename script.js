const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
function handleCheck(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            checkboxes.forEach(checkbox => {
                console.log(checkbox)
                if (checkbox === this || checkbox === lastChecked) {
                    inBetween = !inBetween;
                    console.log('Starting to check them between!')
                }
                if (inBetween) {
                    checkbox.checked = true;
                }
            })

        })
    }
    lastChecked = this;
}
checkboxes.forEach(checkboxe => checkboxe.addEventListener('click', handleCheck));