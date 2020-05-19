//Nav toggle
(function($){
    $('.nav-toggle').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    });
    $('.nav-overlay').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
    });
})(jQuery);

// Custom Menu
const contextMenu = document.getElementById('context-menu');
const width = contextMenu.offsetWidth, height = contextMenu.offsetHeight;

contextMenu.classList.remove('show');


document.addEventListener('contextmenu', event => {
    event.preventDefault();

    const padding = 10;
    let x = event.clientX, y = event.clientY;

    // Prevent overflowing on x
    if (x < padding) x = padding;

    let maxX = window.innerWidth - width - padding;
    if ( x > maxX) x = maxX;

    // Prevent overflowing on y
    if (y < padding) y = padding;

    let maxY = window.innerHeight - height - padding;
    if (y > maxY) y = maxY;

    contextMenu.style.left = `${ x }px`;
    contextMenu.style.top = `${ y }px`;

    contextMenu.classList.add('show');
});

// Functions

function onBack() {
    window.history.back();
}
function onForward() {
    window.history.forward();
}
function onReload() {
    location.reload();
}
function onClose() {
    contextMenu.classList.remove('show');
}