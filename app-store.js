// Show banner prompting user to open in Safari/Browser
function showOpenInBrowserBanner() {
    // Check if banner already exists
    if (document.getElementById('tiktok-banner')) return;

    const banner = document.createElement('div');
    banner.id = 'tiktok-banner';
    banner.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 16px 20px;
        text-align: center;
        z-index: 9999;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
        animation: slideDown 0.3s ease-out;
    `;
    
    banner.innerHTML = `
        <style>
            @keyframes slideDown {
                from { transform: translateY(-100%); }
                to { transform: translateY(0); }
            }
            #tiktok-banner-close {
                position: absolute;
                right: 16px;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(255,255,255,0.2);
                border: none;
                color: white;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                cursor: pointer;
                font-size: 18px;
                line-height: 1;
            }
            #tiktok-banner-text {
                font-size: 15px;
                font-weight: 600;
                margin: 0 40px;
            }
            #tiktok-banner-icon {
                display: inline-block;
                margin-right: 8px;
                font-size: 20px;
            }
        </style>
        <button id="tiktok-banner-close" onclick="this.parentElement.remove()">×</button>
        <div id="tiktok-banner-text">
            <span id="tiktok-banner-icon">🔓</span>
            <span>Tap the <strong>•••</strong> menu and select <strong>"Open in Safari"</strong> to download the app</span>
        </div>
    `;
    
    document.body.insertBefore(banner, document.body.firstChild);
    document.body.style.paddingTop = banner.offsetHeight + 'px';
}

// Handle app store link clicks - always assume TikTok browser
function openAppStore(event, platform) {
    event.preventDefault();
    showOpenInBrowserBanner();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
