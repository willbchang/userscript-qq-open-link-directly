// ==UserScript==
// @name         QQ Open Link Directly
// @namespace    https://github.com/willbchang/userscript-qq-open-link-directly/
// @version      1.0.0
// @description  点击 QQ 客户端中的链接后，自动跳转中转提示页 "当前网页非官方页面" 至原网址
// @author       Will B Chang
// @match        *://c.pc.qq.com/middlem.html*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    const url = new URL(window.location.href)
    const target = url.searchParams.get('pfurl')
    window.location.href = target;
})();
