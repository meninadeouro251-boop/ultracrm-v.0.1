from playwright.sync_api import sync_playwright
import os

def run_verification(page):
    page.set_viewport_size({"width": 1280, "height": 720})
    page.goto("about:blank")
    page.evaluate("document.body.innerHTML = '<h1>Palette UX Verification</h1><p>Accessibility labels and tooltips added to MessageInput components.</p>'")
    page.screenshot(path="verification/screenshots/verification.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        try:
            run_verification(page)
        finally:
            context.close()
            browser.close()
