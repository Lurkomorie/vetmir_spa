const $ = require('jquery');

/** ***
 * CONFIGURATION
 */
$(document).ready(() => {
  // Active ajax page loader
  $.ajaxLoad = false;

  // required when $.ajaxLoad = true
  $.defaultPage = 'main.html';
  $.subPagesDirectory = 'views/';
  $.page404 = 'views/pages/404.html';
  $.mainContent = $('#ui-view');

  // Main navigation
  $.navigation = $('nav > ul.nav');

  $.panelIconOpened = 'icon-arrow-up';
  $.panelIconClosed = 'icon-arrow-down';

  // Default colours
  $.brandPrimary = '#20a8d8';
  $.brandSuccess = '#4dbd74';
  $.brandInfo = '#63c2de';
  $.brandWarning = '#f8cb00';
  $.brandDanger = '#f86c6b';

  $.grayDark = '#2a2c36';
  $.gray = '#55595c';
  $.grayLight = '#818a91';
  $.grayLighter = '#d1d4d7';
  $.grayLightest = '#f8f9fa';

  ('use strict');

  /** ***
   * ASYNC LOAD
   * Load JS files and CSS files asynchronously in ajax mode
   */
  $(document).ready(() => {
    function loadJS(jsFiles, pageScript) {
      const body = document.getElementsByTagName('body')[0];

      for (let i = 0; i < jsFiles.length; i++) {
        appendScript(body, jsFiles[i]);
      }

      if (pageScript) {
        appendScript(body, pageScript);
      }

      init();
    }

    function appendScript(element, src) {
      const async = src.substring(0, 4) === 'http';
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = async;
      script.defer = async;
      script.src = src;
      async ? appendOnce(element, script) : element.appendChild(script);
    }

    function appendOnce(element, script) {
      const scripts = Array.from(document.querySelectorAll('script')).map(scr => scr.src);

      if (!scripts.includes(script.src)) {
        element.appendChild(script);
      }
    }

    function loadCSS(cssFile, end, callback) {
      const cssArray = {};

      if (!cssArray[cssFile]) {
        cssArray[cssFile] = true;

        if (end == 1) {
          var head = document.getElementsByTagName('head')[0];
          var s = document.createElement('link');
          s.setAttribute('rel', 'stylesheet');
          s.setAttribute('type', 'text/css');
          s.setAttribute('href', cssFile);

          s.onload = callback;
          head.appendChild(s);
        } else {
          var head = document.getElementsByTagName('head')[0];
          const style = document.getElementById('main-style');

          var s = document.createElement('link');
          s.setAttribute('rel', 'stylesheet');
          s.setAttribute('type', 'text/css');
          s.setAttribute('href', cssFile);

          s.onload = callback;
          head.insertBefore(s, style);
        }
      } else if (callback) {
        callback();
      }
    }

    /** **
     * AJAX LOAD
     * Load pages asynchronously in ajax mode
     */

    if ($.ajaxLoad) {
      const paceOptions = {
        elements: false,
        restartOnRequestAfter: false,
      };

      const url = location.hash.replace(/^#/, '');

      if (url != '') {
        setUpUrl(url);
      } else {
        setUpUrl($.defaultPage);
      }

      $(document).on('click', '.nav a[href!="#"]', function(e) {
        const thisNav = $(this)
          .parent()
          .parent();
        if (thisNav.hasClass('nav-tabs') || thisNav.hasClass('nav-pills')) {
          e.preventDefault();
        } else if ($(this).attr('target') == '_top') {
          e.preventDefault();
          var target = $(e.currentTarget);
          window.location = target.attr('href');
        } else if ($(this).attr('target') == '_blank') {
          e.preventDefault();
          var target = $(e.currentTarget);
          window.open(target.attr('href'));
        } else {
          e.preventDefault();
          var target = $(e.currentTarget);
          setUpUrl(target.attr('href'));
        }
      });

      $(document).on('click', 'a[href="#"]', e => {
        e.preventDefault();
      });

      $(document).on('click', '.sidebar .nav a[href!="#"]', e => {
        if (document.body.classList.contains('sidebar-mobile-show')) {
          document.body.classList.toggle('sidebar-mobile-show');
        }
      });
    }

    function setUpUrl(url) {
      $('nav .nav li .nav-link').removeClass('active');
      $('nav .nav li.nav-dropdown').removeClass('open');
      $(`nav .nav li:has(a[href="${url.split('?')[0]}"])`).addClass('open');
      $(`nav .nav a[href="${url.split('?')[0]}"]`).addClass('active');

      loadPage(url);
    }

    function loadPage(url) {
      $.ajax({
        type: 'GET',
        url: $.subPagesDirectory + url,
        dataType: 'html',
        cache: false,
        async: false,
        beforeSend() {
          $.mainContent.css({ opacity: 0 });
        },
        success() {
          Pace.restart();
          $('html, body').animate({ scrollTop: 0 }, 0);
          $.mainContent
            .load($.subPagesDirectory + url, null, responseText => {
              window.location.hash = url;
            })
            .delay(250)
            .animate({ opacity: 1 }, 0);
        },
        error() {
          window.location.href = $.page404;
        },
      });
    }

    /** **
     * MAIN NAVIGATION
     */

    $(document).ready($ => {
      // Add class .active to current link - AJAX Mode off
      $.navigation.find('a').each(function() {
        let cUrl = String(window.location).split('?')[0];

        if (cUrl.substr(cUrl.length - 1) == '#') {
          cUrl = cUrl.slice(0, -1);
        }

        if ($($(this))[0].href == cUrl) {
          $(this).addClass('active');

          $(this)
            .parents('ul')
            .add(this)
            .each(function() {
              $(this)
                .parent()
                .addClass('open');
            });
        }
      });

      // Dropdown Menu
      $.navigation.on('click', 'a', function(e) {
        if ($.ajaxLoad) {
          e.preventDefault();
        }

        if ($(this).hasClass('nav-dropdown-toggle')) {
          $(this)
            .parent()
            .toggleClass('open');
          resizeBroadcast();
        }
      });

      function resizeBroadcast() {
        let timesRun = 0;
        var interval = setInterval(() => {
          timesRun += 1;
          if (timesRun === 5) {
            clearInterval(interval);
          }
          if (
            navigator.userAgent.indexOf('MSIE') !== -1 ||
            navigator.appVersion.indexOf('Trident/') > 0
          ) {
            const evt = document.createEvent('UIEvents');
            evt.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(evt);
          } else {
            window.dispatchEvent(new Event('resize'));
          }
        }, 62.5);
      }

      /* ---------- Main Menu Open/Close, Min/Full ---------- */
      $('.sidebar-toggler').click(() => {
        $('body').toggleClass('sidebar-hidden');
        resizeBroadcast();
      });

      $('.sidebar-minimizer').click(() => {
        $('body').toggleClass('sidebar-minimized');
        resizeBroadcast();
      });

      $('.brand-minimizer').click(() => {
        $('body').toggleClass('brand-minimized');
      });

      $('.aside-menu-toggler').click(() => {
        $('body').toggleClass('aside-menu-hidden');
        resizeBroadcast();
      });

      $('.mobile-sidebar-toggler').click(() => {
        $('body').toggleClass('sidebar-mobile-show');
        resizeBroadcast();
      });

      $('.sidebar-close').click(() => {
        $('body')
          .toggleClass('sidebar-opened')
          .parent()
          .toggleClass('sidebar-opened');
      });

      /* ---------- Disable moving to top ---------- */
      $('a[href="#"][data-top!=true]').click(e => {
        e.preventDefault();
      });
    });

    /** **
     * CARDS ACTIONS
     */

    $('.card-actions').on('click', 'a, button', function(e) {
      e.preventDefault();

      if ($(this).hasClass('btn-close')) {
        $(this)
          .parent()
          .parent()
          .parent()
          .fadeOut();
      } else if ($(this).hasClass('btn-minimize')) {
        // var $target = $(this).parent().parent().next('.card-body').collapse({toggle: true});
        if ($(this).hasClass('collapsed')) {
          $('i', $(this))
            .removeClass($.panelIconOpened)
            .addClass($.panelIconClosed);
        } else {
          $('i', $(this))
            .removeClass($.panelIconClosed)
            .addClass($.panelIconOpened);
        }
      } else if ($(this).hasClass('btn-setting')) {
        $('#myModal').modal('show');
      }
    });

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function init(url) {
      /* ---------- Tooltip ---------- */
      $('[rel="tooltip"],[data-rel="tooltip"]').tooltip({
        placement: 'bottom',
        delay: { show: 400, hide: 200 },
      });

      /* ---------- Popover ---------- */
      $('[rel="popover"],[data-rel="popover"],[data-toggle="popover"]').popover();
    }

    // Production steps of ECMA-262, Edition 6, 22.1.2.1
    if (!Array.from) {
      Array.from = (function() {
        const toStr = Object.prototype.toString;
        const isCallable = function(fn) {
          return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
        };
        const toInteger = function(value) {
          const number = Number(value);
          if (isNaN(number)) {
            return 0;
          }
          if (number === 0 || !isFinite(number)) {
            return number;
          }
          return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
        };
        const maxSafeInteger = Math.pow(2, 53) - 1;
        const toLength = function(value) {
          const len = toInteger(value);
          return Math.min(Math.max(len, 0), maxSafeInteger);
        };

        // The length property of the from method is 1.
        return function from(arrayLike /* , mapFn, thisArg */) {
          // 1. Let C be the this value.
          const C = this;

          // 2. Let items be ToObject(arrayLike).
          const items = Object(arrayLike);

          // 3. ReturnIfAbrupt(items).
          if (arrayLike == null) {
            throw new TypeError('Array.from requires an array-like object - not null or undefined');
          }

          // 4. If mapfn is undefined, then let mapping be false.
          const mapFn = arguments.length > 1 ? arguments[1] : void undefined;
          let T;
          if (typeof mapFn !== 'undefined') {
            // 5. else
            // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
            if (!isCallable(mapFn)) {
              throw new TypeError(
                'Array.from: when provided, the second argument must be a function',
              );
            }

            // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
            if (arguments.length > 2) {
              T = arguments[2];
            }
          }

          // 10. Let lenValue be Get(items, "length").
          // 11. Let len be ToLength(lenValue).
          const len = toLength(items.length);

          // 13. If IsConstructor(C) is true, then
          // 13. a. Let A be the result of calling the [[Construct]] internal method
          // of C with an argument list containing the single item len.
          // 14. a. Else, Let A be ArrayCreate(len).
          const A = isCallable(C) ? Object(new C(len)) : new Array(len);

          // 16. Let k be 0.
          let k = 0;
          // 17. Repeat, while k < len… (also steps a - h)
          let kValue;
          while (k < len) {
            kValue = items[k];
            if (mapFn) {
              A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
            } else {
              A[k] = kValue;
            }
            k += 1;
          }
          // 18. Let putStatus be Put(A, "length", len, true).
          A.length = len;
          // 20. Return A.
          return A;
        };
      })();
    }

    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    if (!Array.prototype.includes) {
      Object.defineProperty(Array.prototype, 'includes', {
        value(searchElement, fromIndex) {
          if (this == null) {
            throw new TypeError('"this" is null or not defined');
          }

          // 1. Let O be ? ToObject(this value).
          const o = Object(this);

          // 2. Let len be ? ToLength(? Get(O, "length")).
          const len = o.length >>> 0;

          // 3. If len is 0, return false.
          if (len === 0) {
            return false;
          }

          // 4. Let n be ? ToInteger(fromIndex).
          //    (If fromIndex is undefined, this step produces the value 0.)
          const n = fromIndex | 0;

          // 5. If n ≥ 0, then
          //  a. Let k be n.
          // 6. Else n < 0,
          //  a. Let k be len + n.
          //  b. If k < 0, let k be 0.
          let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

          function sameValueZero(x, y) {
            return (
              x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y))
            );
          }

          // 7. Repeat, while k < len
          while (k < len) {
            // a. Let elementK be the result of ? Get(O, ! ToString(k)).
            // b. If SameValueZero(searchElement, elementK) is true, return true.
            if (sameValueZero(o[k], searchElement)) {
              return true;
            }
            // c. Increase k by 1.
            k++;
          }

          // 8. Return false
          return false;
        },
      });
    }
  });
});
