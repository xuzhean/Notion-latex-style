// ==UserScript==
// @name Notion Latex Style
// @match https://www.notion.so/*
// @grant GM_addStyle
// ==/UserScript==
(function() {
    'use strict';
    let css=`
      .katex {
          font: normal 1em KaTeX_Main, Times New Roman, serif !important;
      }
	  h1 {
          font-family: KaTeX_Main, Georgia, ui-serif, serif !important;
		  line-height: 1.7em !important;
	  }
	  h2 {
          font-family: KaTeX_Main, Georgia, ui-serif, serif !important;
		  line-height: 1.7em !important;
	  }
	  h3 {
          font-family: KaTeX_Main, Georgia, ui-serif, serif !important;
		  line-height: 1.7em !important;
	  }
	  h4 {
          font-family: KaTeX_Main, Georgia, ui-serif, serif !important;
		  line-height: 1.7em !important;
	  }
	  .notion-page-content {
          font-family: KaTeX_Main, Georgia, ui-serif, serif !important;
		  line-height: 1.35em !important;
		  padding-left: calc(32px + env(safe-area-inset-left)) !important;
          padding-right: calc(32px + env(safe-area-inset-right)) !important;
	  }
	  .notranslate {
		  padding: 2px 2px !important;
	      text-align: justify !important;
	  }
	  .pseudoSelection {
          min-height: calc(1.35em + 4px) !important;
	  }
      .notion-selectable {
          max-width: none !important;
      }
	  .katex-display {
		  margin: 0 !important;	
	  }
	  [role=dialog] {
		  width: 640px !important;
	  }
    `
    GM_addStyle(css);
})();
