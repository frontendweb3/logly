import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/github-dark.css';

import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';

// Register languages with hljs core
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('css', css);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
// Add aliases for HTML
hljs.registerLanguage('html', xml);

// Export hljs to window for other plugins (like line numbers)
window.hljs = hljs;

const highlightCodeBlocks = () => {
    for (const block of document.querySelectorAll('pre code')) {
        if (block.classList.contains('hljs')) {
            continue;
        }
        hljs.highlightElement(block);
        
        // Initialize line numbers if the plugin is loaded
        if (window.hljs.initLineNumbersOnLoad) {
            // Since we are calling this manually per element sometimes, 
            // or after highlightElement, we might need a different approach 
            // but highlightAll usually handles it if we use initLineNumbersOnLoad()
        }
    }
    
    // If the line numbers plugin is loaded from CDN, it might have registered itself
    if (window.hljs && typeof window.hljs.lineNumbersBlock === 'function') {
        document.querySelectorAll('code.hljs').forEach((block) => {
            window.hljs.lineNumbersBlock(block);
        });
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', highlightCodeBlocks);
} else {
    highlightCodeBlocks();
}
