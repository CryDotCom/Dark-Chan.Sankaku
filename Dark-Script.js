// ==UserScript==
// @name         Dark chan.Sankaku
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://chan.sankakucomplex.com/*
// @grant        none
// ==/UserScript==


var images = document.getElementsByTagName ("img")[0];
images.setAttribute ( 'src', '//img.sankakucomplex.com/gfx/main/logo_tn.png'); //Changes Header Logo to Transparent Version from main Page

var RemoveThumbs = document.getElementById("headerthumbs"); //Removes the ugly Thumbnails from Mainpage
RemoveThumbs.removeChild(RemoveThumbs.childNodes[0]);


function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle(

'img {position: inherit;margin-left: 38%;}'+

'body, body.en, body.ja, div#header {background: rgb(45, 45, 45)!Important; color: rgb(200,200,200)!Important;}'+
'#popular-preview { background-color: rgba(0,0,0,0.2)!Important;border-color: #191919!Important;box-shadow: 3px 3px 1px rgba(0,0,0,.20)}'+
'#tags { color: #e6e6e6!Important;}'+
'input#tags { border: 2px solid #4a4a4a!Important; background: #FAFAFA!Important;background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0,#464646),color-stop(1,#000000))!Important;border-width: 1px!Important;border-style: solid!Important;border-color: #000!Important;}'+
'select, #mode, input#i_rated, select#order_by, input#exc_tags, input#n_rated, input#up_by, input#fav_by, input#voted_by, input#sub_of,  select#h_is, input#h_is_this, select#w_is, input#w_is_this, select#mp_is, input#mp_is_this, select#fsize_is, input#fsize_is_this, select#d_is, input#d_is_this  { background-color: #383838!Important; color: #d9d9d9!Important;border-color: #131212!Important;border-width: 1px!Important;}'+
'ul.flat-list {background-color: rgba(45,45,45)!Important;border-color: #b3b3b3!Important;}'+

'div#header ul#navbar li.current-page{background-color: #3a3a3a;border-bottom: 2px solid #3a3a3a!important;;border: 1px solid #1d1d1d;}'+
'div#header ul#navbar li:hover{background-color: #3a3a3a;border-bottom: 2px solid #3a3a3a!important;;border: 1px solid #1d1d1d;}'+
'div#header ul#navbar li:hover>ul {background: #3a3a3a;}'+
'div#header ul#subnavbar { background-color: #3a3a3a!Important;border: 1px solid #1d1d1d!Important;box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25)!important;}'+
'div#header ul#navbar li { border: 1px solid transparent;border-radius: 4px;border-top-right-radius: 1em;border-bottom-right-radius: 2px;border-bottom-left-radius: 2px;}'+
'div.sidebar {border-color: #191919!Important; background-color:rgba(0,0,0,0.2)!Important}'+
'div#advanced_search {background: transparent!Important; border: 1px solid transparent!important;}'+

'textarea,input#artist_name, input#artist_alias_names, input#artist_member_names, input#query, input#name, input#url, input#pool_name_en,input#post_parent_id, input#post_source, textarea#post_tags, textarea#reply-text-6278266 {background-color: #5a5a5a!Important;color: #d9d9d9!Important;border-color: #1f1f1f!Important;border-width: 1px!Important;}'+
'input#file, input#post_file {border-color: #131313;}'+
'#recommendations-paginator>span.recommended-next, #recommendations-paginator>span.recommended-prev, ul.subnav li, div#header ul#navbar li:hover ul li:hover {border:1px solid transparent;}'+
'div#post-view>div#right-col>div>div#note-container>div.note-body {color: black;}'+ //Translation note on img
'div#comment-list>div.post>div.col2>div.header {color: #fff;}'+
'div#comment-list>div.post>div.col2 {float: left;border: 1px solid #101010;padding: 10px;box-shadow: 3px 3px rgba(0,0,0,.2);background: #252525;}'+

'div.status-notice {border: 2px solid #3a3a3a;background: #232323;box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.20);}'+
'div#paginator a {border:1px solid transparent;border-radius: 5px;}'+
'div#paginator a:hover {background: #ff761c;color: #333;transition: all 0.5s ease-in;}'+

'table {border: 2px solid #191919;}'+
'table thead { background: #1d1d1d;}'+
'table tbody tr:nth-child(even), table tr.pending-tag:nth-child(even) {background: #1d1d1d;}'+
'table tr.pending-tag:nth-child(odd) {background: #2d2d2d;}'+
'table td { border: 1px solid #131313;}'+
'table tfoot {background: #1d1d1d;}'+
'table tbody tr {color:#c8c8c8;}'+
'table.form th {background: #1d1d1d;color: #c8c8c8;}'+

'tr input[type="submit"] {background-color: #404040;color: #ff761c;}'+
'input[type="submit"], input[type="button"], tr input[type="button"] {color: #ff761c;border: 2px solid #0e0e0e;background: #404040;}'+
'input[type="submit"]:hover, input[type="button"]:hover, tr input[type="button"]:hover {color: #f3f3f3;background: #ff761c;transition: all 0.5s ease-in;}'+
'table.highlightable>tbody>tr:hover {background: #ff761c;color: black;}'+
'table.highlightable>tbody>tr:hover a:link {color: red;}'+
'table.highlightable>tbody>tr:hover a:visited {color: #6e00ff;}'+

'#autosuggest li span:hover {color: white;}'+
'#autosuggest li:hover {background-color: #ff761c;}'+
'#autosuggest {color: white; background-color: #383838;border-color: black;border-width: 1px;}'+

'table.highlightable th { color: #c8c8c8;}'

);