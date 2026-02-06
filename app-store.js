/**
 * App Store Link Handler
 * Opens app store links in a new tab - works on TikTok and other platforms
 */
function openAppStore(platform) {
    console.log('openAppStore called with platform:', platform);
    
    const urls = {
        ios: 'https://apps.apple.com/app/apple-store/id6757245082?ct=web&mt=8',
        android: 'https://play.google.com/store/apps/details?id=io.uros.triprank'
    };
    
    const url = urls[platform];
    console.log('Opening URL:', url);
    
    // Try to open in new tab - this works on TikTok and other platforms
    try {
        const opened = window.open(url, '_blank');
        console.log('window.open returned:', opened);
        
        // Fallback if popup blocked
        if (!opened || opened.closed || typeof opened.closed === 'undefined') {
            console.log('Popup blocked, using location.href fallback');
            window.location.href = url;
        }
    } catch (error) {
        console.error('Error opening app store:', error);
        // Final fallback
        window.location.href = url;
    }
    
    return false;
}
