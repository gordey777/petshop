/*3154*/
/* n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
   return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $c() || _c()
 } : $c;
 var Xc = 0,
   Yc = {},
   Zc = n.ajaxSettings.xhr();
 a.ActiveXObject && n(a).on("unload", function() {
   for (var a in Yc) Yc[a](void 0, !0)
 }), l.cors = !!Zc && "withCredentials" in Zc, Zc = l.ajax = !!Zc, Zc && n.ajaxTransport(function(a) {
   if (!a.crossDomain || l.cors) {
     var b;
     return {
       send: function(c, d) {
         var e, f = a.xhr(),
           g = ++Xc;
         if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
           for (e in a.xhrFields) f[e] = a.xhrFields[e];
         a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
         for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
         f.send(a.hasContent && a.data || null), b = function(c, e) {
           var h, i, j;
           if (b && (e || 4 === f.readyState))
             if (delete Yc[g], b = void 0, f.onreadystatechange = n.noop, e) 4 !== f.readyState && f.abort();
             else {
               j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
               try {
                 i = f.statusText
               } catch (k) {
                 i = ""
               }
               h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
             }
           j && d(h, i, j, f.getAllResponseHeaders())
         }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Yc[g] = b : b()
       },
       abort: function() {
         b && b(void 0, !0)
       }
     }
   }
 });
*/


/*23107*/

 $(window).load(function() {
   $('#new_products').owlCarousel({
     itemsCustom: [
       [0, 1],
       [320, 1],

     ],
     responsiveRefreshRate: 50,
     slideSpeed: 200,
     paginationSpeed: 500,
     rewindSpeed: 600,
     autoPlay: fieldnewpsl_autoscroll,
     stopOnHover: fieldnewpsl_pauseonhover,
     rewindNav: true,
     pagination: fieldnewpsl_pagination,
     navigation: fieldnewpsl_navigation,
     navigationText: ['<div class="carousel-previous disable-select"><span class="icon-chevron-left"></span></div>', '<div class="carousel-next disable-select"><span class="icon-chevron-right"></span></div>']
   });
 });;


 $(window).load(function() {
   $('#special_products').owlCarousel({
     itemsCustom: [
       [0, 1],
       [320, 1],

     ],
     responsiveRefreshRate: 50,
     slideSpeed: 200,
     paginationSpeed: 500,
     rewindSpeed: 600,
     autoPlay: fieldspecialpsl_autoscroll,
     stopOnHover: fieldspecialpsl_pauseonhover,
     rewindNav: true,
     pagination: fieldspecialpsl_pagination,
     navigation: fieldspecialpsl_navigation,
     navigationText: ['<div class="carousel-previous disable-select"><span class="icon-chevron-left"></span></div>', '<div class="carousel-next disable-select"><span class="icon-chevron-right"></span></div>']
   });
   if ($(window).width() < 768) {
     $('#left_column #special_products').css({
       'display': 'none'
     });
     $('#right_column #special_products').css({
       'display': 'none'
     });
   }
 });;
