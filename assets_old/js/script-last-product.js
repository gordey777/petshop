
  /* <![CDATA[ */ ;
  var zoom_type = 'window';
  var zoom_fade_in = 400;
  var zoom_fade_out = 550;
  var zoom_cursor_type = 'default';
  var zoom_window_pos = 1;
  var zoom_scroll = true;
  var zoom_easing = true;
  var zoom_tint = true;
  var zoom_tint_color = '#333';
  var zoom_tint_opacity = 0.4;
  var zoom_lens_shape = 'round';
  var zoom_lens_size = 345;;

  function applyElevateZoom() {
    var src = $('.thickbox.shown').attr('href');
    var bigimage = $('.fancybox.shown').attr('href');
    $('#bigpic').elevateZoom({
      zoomType: zoom_type,
      cursor: zoom_cursor_type,
      zoomWindowFadeIn: zoom_fade_in,
      zoomWindowFadeOut: zoom_fade_out,
      zoomWindowPosition: zoom_window_pos,
      scrollZoom: zoom_scroll,
      easing: zoom_easing,
      tint: zoom_tint,
      tintColour: zoom_tint_color,
      tintOpacity: zoom_tint_opacity,
      lensShape: zoom_lens_shape,
      lensSize: zoom_lens_size,
      zoomImage: bigimage,
      borderSize: 1,
      borderColour: '#e2dfdf',
      zoomWindowWidth: 450,
      zoomWindowHeight: 450,
      zoomLevel: 0.7,
      lensBorderSize: 0
    });
  }
  $(document).ready(function() {
    applyElevateZoom();
    $('#color_to_pick_list').click(function() {
      restartElevateZoom();
    });
    $('#color_to_pick_list').hover(function() {
      restartElevateZoom();
    });
    $('#views_block li a').hover(function() {
      restartElevateZoom();
    });
  });

  function restartElevateZoom() {
    $(".zoomContainer").remove();
    applyElevateZoom();
  };;
  var $input = $("#search_query_top");
  var width_ac_results = $input.parent('form').width();
  $('document').ready(function() {
    $("#search_query_top").autocomplete('', {
      minChars: 3,
      max: 10,
      width: (width_ac_results > 0 ? width_ac_results : 500),
      selectFirst: false,
      scroll: true,
      dataType: "json",
      formatItem: function(data, i, max, value, term) {
        return value;
      },
      parse: function(data) {
        var mytab = new Array();
        for (var i = 0; i < data.length; i++)
          mytab[mytab.length] = {
            data: data[i],
            value: '<img alt="' + data[i].pname + '" src="' + data[i].image + '"><div class="right-search"><h5>' + data[i].pname + '</h5><span class="price">' + data[i].dprice + '</span></div> '
          };
        return mytab;
      },
      extraParams: {
        ajaxSearch: 1,
        id_lang: 1,
        category_filter: $("#category_filter").val()
      }
    }).result(function(event, data, formatted) {
      $('#search_query_top').val(data.pname);
      document.location.href = data.product_link;
    });
    $("#category_filter").change(function() {
      $(".ac_results").remove();
      $("#search_query_top").trigger('unautocomplete');
      $("#search_query_top").autocomplete('', {
        minChars: 3,
        max: 10,
        width: (width_ac_results > 0 ? width_ac_results : 500),
        selectFirst: false,
        scroll: true,
        dataType: "json",
        formatItem: function(data, i, max, value, term) {
          return value;
        },
        parse: function(data) {
          var mytab = new Array();
          for (var i = 0; i < data.length; i++)
            mytab[mytab.length] = {
              data: data[i],
              value: '<img alt="' + data[i].pname + '" src="' + data[i].image + '"><div class="right-search"><h5>' + data[i].pname + '</h5><span class="price">' + data[i].dprice + '</span></div> '
            };
          return mytab;
        },
        extraParams: {
          ajaxSearch: 1,
          id_lang: 1,
          category_filter: $("#category_filter").val()
        }
      }).result(function(event, data, formatted) {
        $('#search_query_top').val(data.pname);
        document.location.href = data.product_link;
      });
    });
  });;
  $('#search_query_top').on('focus', function() {
    var $this = $(this);
    if ($this.val() == 'Search...') {
      $this.val('');
      $('.btn.button-search').addClass('active');
    }
  }).on('blur', function() {
    var $this = $(this);
    if ($this.val() == '') {
      $this.val('Search...');
      $('.btn.button-search').removeClass('active');
    }
  });
  $("#click_show_searchbox").click(function(e) {
    $("#searchbox").toggle();
    if ($("#searchbox").is(":visible")) {
      $("#click_show_searchbox").addClass("click_hide");
    } else {
      $("#click_show_searchbox").removeClass("click_hide");
    }
  });
  $(document).click(function(event) {
    if (!$(event.target).closest("#searchbox,#click_show_searchbox,.ac_results").length) {
      $("#searchbox").hide();
      $("#click_show_searchbox").removeClass("click_hide");
    }
  });;
  $('#productCates').owlCarousel({
    itemsCustom: [
      [0, 1],
      [320, 1],
      [480, 1],
      [768, 3],
      [992, 4],
      [1200, 5]
    ],
    responsiveRefreshRate: 50,
    slideSpeed: 200,
    paginationSpeed: 500,
    rewindSpeed: 600,
    autoPlay: false,
    stopOnHover: false,
    rewindNav: true,
    pagination: false,
    navigation: true,
    navigationText: ['<div class="carousel-previous disable-select"><span class="icon-chevron-left"></span></div>', '<div class="carousel-next disable-select"><span class="icon-chevron-right"></span></div>']
  }); /* ]]> */