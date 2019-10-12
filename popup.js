// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let blockAds = document.getElementById('blockAds');
let autoBlock = document.getElementById('auto');
chrome.storage.sync.get('auto_block', function(settings) {
  blockAds.style.backgroundColor = settings.auto_block;
  autoBlock.setAttribute('checked', settings.auto_block);
});

blockAds.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(null, { file: "js/jquery-3.4.1.js" }, function() {
      chrome.tabs.executeScript(tabs[0].id, {file: 'block.js'});
    });
  });
};
autoBlock.onchange = function(element) {
  
}