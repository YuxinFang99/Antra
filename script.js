const state = {
    a: 'apple',
    b: 'banana',
    c: 'city',
    d: 'dom',
    e: 'end',
    f: 'forEach',
    g: 'gold'
};

function dropdowns(state) {
    let dropdownContainer = document.createElement('div');
    let dropdownKey = document.createElement('select');
    let dropdownValue = document.createElement('select');


    Object.keys(state).forEach(key => {
        const optionA = document.createElement('option');
        const optionB = document.createElement('option');
        optionA.textContent = key;
        optionB.textContent = state[key];
        dropdownKey.appendChild(optionA);
        dropdownValue.appendChild(optionB);
    })

    const handleChange = function(event){
        const selectionIndex = event.target.selectedIndex;
        dropdownKey.selectedIndex = selectionIndex;
        dropdownValue.selectedIndex = selectionIndex;
    }

    dropdownKey.onchange = handleChange;
    dropdownValue.onchange = handleChange;

    dropdownContainer.appendChild(dropdownKey);
    dropdownContainer.appendChild(dropdownValue);
    document.body.appendChild(dropdownContainer);
    
}

dropdowns(state);