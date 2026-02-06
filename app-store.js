/**
 * App Store Link Handler
 * Opens app store links in a new tab - works on TikTok and other platforms
 */
function openAppStore(platform) {
    const urls = {
        ios: 'https://apps.apple.com/us/app/triprank-speed-tracker/id6757245082?mt=8',
        android: 'https://play.google.com/store/apps/details?id=io.uros.triprank'
    };
    
    // Open in new tab - this works on TikTok and other platforms
    window.open(urls[platform], '_blank');
}
