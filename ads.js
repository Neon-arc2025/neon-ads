// Sample JavaScript for dynamically loading ads
document.addEventListener("DOMContentLoaded", () => {
    const ads = [
        { image: "ad1.jpg", title: "Ad 1", description: "This is the first ad." },
        { image: "ad2.jpg", title: "Ad 2", description: "This is the second ad." },
        { image: "ad3.jpg", title: "Ad 3", description: "This is the third ad." },
    ];

    const adContainer = document.getElementById('ad-container');

    ads.forEach(ad => {
        const adDiv = document.createElement('div');
        adDiv.className = 'ad';
        adDiv.innerHTML = `
            <img src="${ad.image}" alt="${ad.title}">
            <h3>${ad.title}</h3>
            <p>${ad.description}</p>
        `;
        adContainer.appendChild(adDiv);
    });
});