function enquire(product) {
    let msg = `Hi Chennai Tools, I need ${product} spare parts`;
    let url = `https://wa.me/919543895438?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
}