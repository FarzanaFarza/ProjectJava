let data = []; // To store fetched data

// Fetch product data
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(fetchedData => {
        data = fetchedData;
        displayData(data); // Initial display of all products
    })
    .catch(error => console.log(error));

// Function to display product data
function displayData(items) {
    const container = document.querySelector('.product_items');
    container.innerHTML = ''; // Clear previous data

    items.forEach(product => {
        const markup = `
            <div class="category">
                <span class="img">
                    <img src="${product.image}" alt=""/>
                </span>
                <div class="box">
                    <span class="small">
                        <h4>${product.title}</h4>
                        <h5>${product.rating ? product.rating.rate : 'No rating'}</h5>
                    </span>
                    <h5>Price: $${product.price}</h5>
                    <button>Buy Now</button>
                </div>
            </div>`;
        container.insertAdjacentHTML('beforeend', markup);
    });
}

// Function to filter data based on the selected category
function filterData(category) {
    if (category === 'all') {
        displayData(data);
    } else {
        const filteredData = data.filter(item => item.category === category);
        displayData(filteredData);
    }
}

// Event listener for the dropdown menu
document.getElementById('products').addEventListener('change', function() {
    const selectedCategory = this.value;
    filterData(selectedCategory);

    // Update heading to reflect selected category
    document.querySelector('.top h1').textContent = this[this.selectedIndex].text;
});

    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const close = document.getElementById('close');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.add('active');
        })
    }

    if (close) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        })
    } 
