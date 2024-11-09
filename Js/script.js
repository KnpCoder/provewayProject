    // Function to highlight the selected option and show dropdown according to it.
    function selectOption(unit) {
        const options = document.querySelectorAll('.offerOption');
        options.forEach((option, index) => {
            if (index === unit - 1) {
                option.classList.add('active');
                option.querySelector('input').checked = true;
            } else {
                option.classList.remove('active');
            }
            const sizeColorSelects = option.querySelectorAll('.size-color-dropdowns');
            sizeColorSelects.forEach(select => {
                select.style.display = option.classList.contains('active') ? 'block' : 'none';
            });
        });
        updateTotal(unit);
    }
    // Function to update the total amout dynamically
    function updateTotal(unit) {
        let total = 0;
        if (unit === 1) {
            total = 10.00;
        } else if (unit === 2) {
            total = 18.00;
        } else if (unit === 3) {
            total = 24.00;
        }
        document.getElementById('total').innerText = `$${total.toFixed(2)} USD`;   // using literals
    }

    // Function to select the most popular offer by default
    document.addEventListener('DOMContentLoaded', function () {
        updateTotal(2);  // Default selection is 2 units
    });