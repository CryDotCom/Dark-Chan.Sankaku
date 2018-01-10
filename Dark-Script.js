// ==UserScript==
// @name        Dark-chan.Sankaku
// @namespace   https://github.com/CryDotCom/Dark-Chan.Sankaku
// @version     1.1.0.0
// @description Changes the apearince of chan.sankakucomplex.com to a dark version.
// @author      LoliStyle aka Onocom
// @match       https://chan.sankakucomplex.com/*
// @run-at      document-start
// @grant       none
// @updateURL   https://raw.githubusercontent.com/CryDotCom/Dark-Chan.Sankaku/master/Dark-Script.js
// @downloadURL https://raw.githubusercontent.com/CryDotCom/Dark-Chan.Sankaku/master/Dark-Script.js
// ==/UserScript==


(function() {
    'use strict';

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



    '#headerthumbs a {display: none!important;}'+  //removes the top page thumbs links text from main page
    '#headerthumbs img {display: none!important;}'+ //removes the top page thumbs images from main page
    '#headerlogo a img {content: url(//www.sankakucomplex.com/wp-content/uploads/2017/12/logo-white-478x120.png);}'+ //changes logo to transparent logo from front page

    'img {position: inherit;margin-left: 38%;}'+
    '.unit-rating {background: url(https://raw.githubusercontent.com/CryDotCom/Dark-Chan.Sankaku/master/star_rating_trans.png) left center repeat-x;}'+
    '.unit-rating li {background: url(https://raw.githubusercontent.com/CryDotCom/Dark-Chan.Sankaku/master/star_rating_trans.png) left top;}'+
    '.unit-rating li a:hover{background: url(https://raw.githubusercontent.com/CryDotCom/Dark-Chan.Sankaku/master/star_rating_trans.png) left bottom}'+
    'li#add-to-favs {background-image: url(https://raw.githubusercontent.com/CryDotCom/Dark-Chan.Sankaku/master/heartbg-trans.png);}'+

    '.avatar-large img {margin: 15px 6px 15px!important;}'+
    '.avatar-medium img {margin: auto!important;}'+

    '.ranking-item {background-color: rgba(0,0,0,0.2)!Important;box-shadow: 3px 3px 1px rgba(0,0,0,.20);display: table-row-group;}'+
    '.ranking-item h2 {text-indent: 5px;}'+

    'body, body.en, body.ja, div#header {background: rgb(45, 45, 45)!Important; color: rgb(200,200,200)!Important;}'+
    '#popular-preview, .ranking-top-spot {background: url(https://raw.githubusercontent.com/CryDotCom/Dark-Chan.Sankaku/master/crown_black.png) center 0.5em no-repeat; background-color: rgba(0,0,0,0.2)!Important;border: 1px solid              #191919!Important;box-shadow: 3px 3px 1px rgba(0,0,0,.20)}'+
    '#tags { color: #e6e6e6!Important;}'+

    'input#tags { border: 2px solid #4a4a4a!Important; background: #FAFAFA!Important;background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0,#464646),color-stop(1,#000000))!Important;border-width: 1px!Important;border-style: solid!Important;border-color: #000!Important;}'+
    'select, #mode, input#i_rated, select#order_by, input#exc_tags, input#n_rated, input#up_by, input#fav_by, input#voted_by, input#sub_of,  select#h_is, input#h_is_this, select#w_is, input#w_is_this, select#mp_is, input#mp_is_this, select#fsize_is, input#fsize_is_this, select#d_is, input#d_is_this  { background-color: #383838!Important; color: #d9d9d9!Important;border-color: #131212!Important;border-width: 1px!Important;}'+
    'ul.flat-list {background-color: rgba(45,45,45)!Important;border-color: #b3b3b3!Important;}'+

    'div#news-ticker {background: rgba(0, 0, 0, 0.22);border-bottom: 2px solid rgba(255, 255, 255, 0.15)}'+

    'div#header ul#navbar li.current-page{background-color: #3a3a3a;border-bottom: 2px solid #3a3a3a!important;;border: 1px solid #1d1d1d;}'+
    'div#header ul#navbar li:hover{background-color: #3a3a3a;border-bottom: 2px solid #3a3a3a!important;;border: 1px solid #1d1d1d;}'+
    'div#header ul#navbar li:hover>ul {background: #3a3a3a;}'+
    'div#header ul#subnavbar { background-color: #3a3a3a!Important;border: 1px solid #1d1d1d!Important;box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25)!important;}'+
    'div#header ul#navbar li { border: 1px solid transparent;border-radius: 4px;border-top-right-radius: 1em;border-bottom-right-radius: 2px;border-bottom-left-radius: 2px;}'+
    'div.sidebar {border-color: #191919!Important; background-color:rgba(0,0,0,0.2)!Important}'+
    'div#advanced_search {background: transparent!Important; border: 1px solid transparent!important;}'+

    'div#post-content {padding-top: 32px;}'+

    'textarea,input#artist_name, input#artist_alias_names, input#artist_member_names, input#query, input#name, input#url, input#pool_name_en,input#post_parent_id, input#post_source, textarea#post_tags, textarea#reply-text-6278266 {background-color: #5a5a5a!Important;color: #d9d9d9!Important;border-color: #1f1f1f!Important;border-width: 1px!Important;}'+
    'input#file, input#post_file {border-color: #131313;}'+
    'ul.subnav li, div#header ul#navbar li:hover ul li:hover {border:1px solid transparent;}'+
    'div#post-view>div#right-col>div>div#note-container>div.note-body {color: black;}'+ //Translation note on img
    'div#comment-list>div.post>div.col2>div.header {color: #fff;}'+
    'div#comment-list>div.post>div.col2 {float: left;border: 1px solid #101010;padding: 10px;box-shadow: 3px 3px rgba(0,0,0,.2);background: #252525;}'+

    'div.status-notice, div.status-notice.pending {border: 2px solid #3a3a3a;background: #232323;box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.20);}'+
    'div#paginator a{border: 1px solid transparent;border-radius: 5px;}'+
    'div#paginator a:hover, #recommendations-paginator>span.recommended-next a:hover, #recommendations-paginator>span.recommended-prev a:hover {border-radius: 5px; background: #ff761c;color: #333;transition: all 0.5s ease-in;}'+
     '#recommendations-paginator>span.recommended-next, #recommendations-paginator>span.recommended-prev, #recommendations-paginator>span.recommended-next a, #recommendations-paginator>span.recommended-prev a {border: 1px solid transparent;border-radius: 5px;}'+

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

   })();
