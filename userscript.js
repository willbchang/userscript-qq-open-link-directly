// ==UserScript==
// @name         QQ Open Link Directly 自动跳转 当前网页非官方页面/已停止访问该网页
// @namespace    https://github.com/willbchang/userscript-qq-open-link-directly/
// @version      1.1.1
// @description  点击 QQ 客户端中的链接后，自动跳转中转提示页 "当前网页非官方页面" 或 "已停止访问该网页" 至原网址
// @author       Will B Chang
// @match        *://c.pc.qq.com/*
// @grant        none
// @license      AGPL-V3
// ==/UserScript==


(function() {
    'use strict';
    const url = new URL(window.location.href)
    // pfurl 对应 当前网页非官方页面
    // url 对应 已停止访问该网页
    let target = url.searchParams.get('pfurl') || url.searchParams.get('url')
    if (target.endsWith('//')) target = target.slice(0, -1)
    window.location.href = target;
})();
