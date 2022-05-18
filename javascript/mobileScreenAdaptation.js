var mobileScreenMode = null;

if (window.innerWidth <= mobileScreenWidthThreshold) {
    mobileScreenMode = true
} else {
    mobileScreenMode = false
};

window.addEventListener('resize', e => {
    if (!mobileScreenMode) {
    leftColumn.style.width = leftColumn.getBoundingClientRect().right + 'px'
    }
});
