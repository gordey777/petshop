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
      $("#search_query_top").autocomplete('#', {
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
        $("#search_query_top").autocomplete('#', {
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
    jQuery(document).ready(function($) {
      var _SlideshowTransitions = [{
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -1,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInQuad
        },
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        },
        $Brother: {
          $Duration: 1200,
          $Zoom: 1,
          $Rotate: 1,
          $Easing: $JssorEasing$.$EaseSwing,
          $Opacity: 2,
          $Round: {
            $Rotate: 0.5
          },
          $Shift: 90
        }
      }, {
        $Duration: 1400,
        $Zoom: 1.5,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInSine
        },
        $ScaleHorizontal: 0.25,
        $Opacity: 2,
        $ZIndex: -10,
        $Brother: {
          $Duration: 1400,
          $Zoom: 1.5,
          $FlyDirection: 2,
          $Easing: {
            $Left: $JssorEasing$.$EaseInWave,
            $Zoom: $JssorEasing$.$EaseInSine
          },
          $ScaleHorizontal: 0.25,
          $Opacity: 2,
          $ZIndex: -10
        }
      }, {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 1,
        $Easing: {
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInQuad
        },
        $Opacity: 2,
        $Round: {
          $Rotate: 1
        },
        $ZIndex: -10,
        $Brother: {
          $Duration: 1200,
          $Zoom: 11,
          $Rotate: -1,
          $Easing: {
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInQuad
          },
          $Opacity: 2,
          $Round: {
            $Rotate: 1
          },
          $ZIndex: -10,
          $Shift: 600
        }
      }, {
        $Duration: 1500,
        $Cols: 2,
        $FlyDirection: 1,
        $ChessMode: {
          $Column: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutCubic
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Brother: {
          $Duration: 1500,
          $Opacity: 2
        }
      }, {
        $Duration: 1500,
        $Zoom: 1,
        $Rotate: 0.1,
        $During: {
          $Left: [0.6, 0.4],
          $Top: [0.6, 0.4],
          $Rotate: [0.6, 0.4],
          $Zoom: [0.6, 0.4]
        },
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuad,
          $Top: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Brother: {
          $Duration: 1000,
          $Zoom: 11,
          $Rotate: -0.5,
          $Easing: {
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInQuad
          },
          $Opacity: 2,
          $Shift: 200
        }
      }, {
        $Duration: 1500,
        $During: {
          $Left: [0.6, 0.4]
        },
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2,
        $Outside: true,
        $Brother: {
          $Duration: 1000,
          $FlyDirection: 2,
          $Easing: {
            $Left: $JssorEasing$.$EaseInQuad,
            $Opacity: $JssorEasing$.$EaseLinear
          },
          $ScaleHorizontal: 0.3,
          $Opacity: 2
        }
      }, {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.5,
        $During: {
          $Left: [0.4, 0.6],
          $Top: [0.4, 0.6],
          $Rotate: [0.4, 0.6],
          $Zoom: [0.4, 0.6]
        },
        $Easing: {
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Brother: {
          $Duration: 1000,
          $Zoom: 1,
          $Rotate: -0.5,
          $Easing: {
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInQuad
          },
          $Opacity: 2,
          $Shift: 200
        }
      }, {
        $Duration: 1200,
        $Rotate: -0.1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuad,
          $Top: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInQuad
        },
        $ScaleHorizontal: 0.25,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Brother: {
          $Duration: 1200,
          $Rotate: 0.1,
          $FlyDirection: 10,
          $Easing: {
            $Left: $JssorEasing$.$EaseInQuad,
            $Top: $JssorEasing$.$EaseInQuad,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInQuad
          },
          $ScaleHorizontal: 0.1,
          $ScaleVertical: 0.7,
          $Opacity: 2
        }
      }, {
        $Duration: 1600,
        $Rows: 2,
        $FlyDirection: 1,
        $ChessMode: {
          $Row: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutQuart,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Brother: {
          $Duration: 1600,
          $Rows: 2,
          $FlyDirection: 2,
          $ChessMode: {
            $Row: 3
          },
          $Easing: {
            $Left: $JssorEasing$.$EaseInOutQuart,
            $Opacity: $JssorEasing$.$EaseLinear
          },
          $Opacity: 2
        }
      }, {
        $Duration: 1600,
        $Cols: 2,
        $FlyDirection: 8,
        $ChessMode: {
          $Column: 12
        },
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutQuart,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Brother: {
          $Duration: 1600,
          $Cols: 2,
          $FlyDirection: 4,
          $ChessMode: {
            $Column: 12
          },
          $Easing: {
            $Top: $JssorEasing$.$EaseInOutQuart,
            $Opacity: $JssorEasing$.$EaseLinear
          },
          $Opacity: 2
        }
      }, {
        $Duration: 1200,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutQuart,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Brother: {
          $Duration: 1200,
          $FlyDirection: 8,
          $Easing: {
            $Top: $JssorEasing$.$EaseInOutQuart,
            $Opacity: $JssorEasing$.$EaseLinear
          },
          $Opacity: 2
        }
      }, {
        $Duration: 1200,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutQuart,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Brother: {
          $Duration: 1200,
          $FlyDirection: 2,
          $Easing: {
            $Left: $JssorEasing$.$EaseInOutQuart,
            $Opacity: $JssorEasing$.$EaseLinear
          },
          $Opacity: 2
        }
      }, {
        $Duration: 1200,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutQuart,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $ZIndex: -10,
        $Brother: {
          $Duration: 1200,
          $FlyDirection: 8,
          $Easing: {
            $Top: $JssorEasing$.$EaseInOutQuart,
            $Opacity: $JssorEasing$.$EaseLinear
          },
          $Opacity: 2,
          $ZIndex: -10,
          $Shift: -100
        }
      }, {
        $Duration: 1200,
        $Delay: 40,
        $Cols: 6,
        $FlyDirection: 1,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutQuart,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $ZIndex: -10,
        $Brother: {
          $Duration: 1200,
          $Delay: 40,
          $Cols: 6,
          $FlyDirection: 1,
          $Formation: $JssorSlideshowFormations$.$FormationStraight,
          $Easing: {
            $Top: $JssorEasing$.$EaseInOutQuart,
            $Opacity: $JssorEasing$.$EaseLinear
          },
          $Opacity: 2,
          $ZIndex: -10,
          $Shift: -100
        }
      }, {
        $Duration: 1500,
        $Rotate: 0.1,
        $During: {
          $Left: [0.6, 0.4],
          $Top: [0.6, 0.4],
          $Rotate: [0.6, 0.4]
        },
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuad,
          $Top: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInQuad
        },
        $ScaleHorizontal: 0.1,
        $ScaleVertical: 0.7,
        $Opacity: 2,
        $Brother: {
          $Duration: 1000,
          $Rotate: -0.1,
          $FlyDirection: 5,
          $Easing: {
            $Left: $JssorEasing$.$EaseInQuad,
            $Top: $JssorEasing$.$EaseInQuad,
            $Opacity: $JssorEasing$.$EaseLinear,
            $Rotate: $JssorEasing$.$EaseInQuad
          },
          $ScaleHorizontal: 0.2,
          $ScaleVertical: 0.5,
          $Opacity: 2
        }
      }, {
        $Duration: 1600,
        $Delay: 40,
        $Cols: 12,
        $During: {
          $Left: [0.4, 0.6]
        },
        $SlideOut: true,
        $FlyDirection: 2,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutExpo,
          $Opacity: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.2,
        $Opacity: 2,
        $Outside: true,
        $Round: {
          $Top: 0.5
        },
        $Brother: {
          $Duration: 1000,
          $Delay: 40,
          $Cols: 12,
          $FlyDirection: 1,
          $Formation: $JssorSlideshowFormations$.$FormationStraight,
          $Assembly: 1028,
          $Easing: {
            $Left: $JssorEasing$.$EaseInOutExpo,
            $Opacity: $JssorEasing$.$EaseInOutQuad
          },
          $ScaleHorizontal: 0.2,
          $Opacity: 2,
          $Round: {
            $Top: 0.5
          }
        }
      }, {
        $Duration: 700,
        $Opacity: 2,
        $Brother: {
          $Duration: 1000,
          $Opacity: 2
        }
      }, {
        $Duration: 1200,
        $During: {
          $Left: [0.3, 0.7]
        },
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $During: {
          $Left: [0.3, 0.7]
        },
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $During: {
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $During: {
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Cols: 2,
        $During: {
          $Left: [0.3, 0.7]
        },
        $FlyDirection: 1,
        $ChessMode: {
          $Column: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Cols: 2,
        $During: {
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 4,
        $ChessMode: {
          $Column: 12
        },
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Rows: 2,
        $During: {
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 4,
        $ChessMode: {
          $Row: 12
        },
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Rows: 2,
        $During: {
          $Left: [0.3, 0.7]
        },
        $FlyDirection: 1,
        $ChessMode: {
          $Row: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Cols: 2,
        $Rows: 2,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 5,
        $ChessMode: {
          $Column: 3,
          $Row: 12
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $SlideOut: true,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $SlideOut: true,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $SlideOut: true,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $SlideOut: true,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Cols: 2,
        $SlideOut: true,
        $FlyDirection: 1,
        $ChessMode: {
          $Column: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Cols: 2,
        $SlideOut: true,
        $FlyDirection: 8,
        $ChessMode: {
          $Column: 12
        },
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Rows: 2,
        $SlideOut: true,
        $FlyDirection: 4,
        $ChessMode: {
          $Row: 12
        },
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Rows: 2,
        $SlideOut: true,
        $FlyDirection: 2,
        $ChessMode: {
          $Row: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Cols: 2,
        $Rows: 2,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 5,
        $ChessMode: {
          $Column: 3,
          $Row: 12
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $During: {
          $Left: [0.3, 0.7]
        },
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $During: {
          $Left: [0.3, 0.7]
        },
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $During: {
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $During: {
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $Cols: 2,
        $During: {
          $Left: [0.3, 0.7]
        },
        $FlyDirection: 1,
        $ChessMode: {
          $Column: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $Cols: 2,
        $During: {
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 4,
        $ChessMode: {
          $Column: 12
        },
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $Rows: 2,
        $During: {
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 4,
        $ChessMode: {
          $Row: 12
        },
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $Rows: 2,
        $During: {
          $Left: [0.3, 0.7]
        },
        $FlyDirection: 1,
        $ChessMode: {
          $Row: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $Cols: 2,
        $Rows: 2,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 5,
        $ChessMode: {
          $Column: 3,
          $Row: 12
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $SlideOut: true,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $SlideOut: true,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $SlideOut: true,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $SlideOut: true,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $Cols: 2,
        $SlideOut: true,
        $FlyDirection: 1,
        $ChessMode: {
          $Column: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $Cols: 2,
        $SlideOut: true,
        $FlyDirection: 4,
        $ChessMode: {
          $Column: 12
        },
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $Rows: 2,
        $SlideOut: true,
        $FlyDirection: 4,
        $ChessMode: {
          $Row: 12
        },
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $Rows: 2,
        $SlideOut: true,
        $FlyDirection: 1,
        $ChessMode: {
          $Row: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $Cols: 2,
        $Rows: 2,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 5,
        $ChessMode: {
          $Column: 3,
          $Row: 12
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Outside: true
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Clip: 3,
        $Assembly: 260,
        $Easing: {
          $Clip: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Clip: 12,
        $Assembly: 260,
        $Easing: {
          $Clip: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Clip: 3,
        $SlideOut: true,
        $Assembly: 260,
        $Easing: {
          $Clip: $JssorEasing$.$EaseOutCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Clip: 12,
        $SlideOut: true,
        $Assembly: 260,
        $Easing: {
          $Clip: $JssorEasing$.$EaseOutCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 800,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2050,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Opacity: 2
      }, {
        $Duration: 800,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Opacity: 2
      }, {
        $Duration: 800,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $ChessMode: {
          $Column: 3,
          $Row: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $ChessMode: {
          $Column: 3,
          $Row: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $ChessMode: {
          $Column: 3,
          $Row: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 1.3,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $ChessMode: {
          $Column: 15,
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.1, 0.9],
          $Top: [0.1, 0.9]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.1, 0.9],
          $Top: [0.1, 0.9]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.1, 0.9],
          $Top: [0.1, 0.9]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $ChessMode: {
          $Column: 15,
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $ChessMode: {
          $Column: 15,
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.1, 0.9],
          $Top: [0.1, 0.9]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.1, 0.9],
          $Top: [0.1, 0.9]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.1, 0.9],
          $Top: [0.1, 0.9]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $ChessMode: {
          $Column: 15,
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $ChessMode: {
          $Column: 15,
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $ChessMode: {
          $Column: 15,
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $ChessMode: {
          $Column: 15,
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $ChessMode: {
          $Column: 15,
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1500,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Clip: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Assembly: 260,
        $ChessMode: {
          $Column: 15,
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Assembly: 260,
        $ChessMode: {
          $Column: 15,
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Outside: true,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Assembly: 260,
        $ChessMode: {
          $Column: 15,
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Assembly: 260,
        $ChessMode: {
          $Column: 15,
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 20,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Clip: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 60,
        $Zoom: 1,
        $FlyDirection: 5,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 60,
        $Zoom: 1,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 60,
        $Zoom: 1,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 60,
        $Zoom: 1,
        $FlyDirection: 10,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 60,
        $Zoom: 1,
        $SlideOut: true,
        $FlyDirection: 5,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 60,
        $Zoom: 1,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 60,
        $Zoom: 1,
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1200,
        $Delay: 60,
        $Zoom: 1,
        $SlideOut: true,
        $FlyDirection: 10,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      }, {
        $Duration: 1800,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7]
        },
        $FlyDirection: 1,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutExpo,
          $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 1,
        $Outside: true,
        $Round: {
          $Top: 0.8
        }
      }, {
        $Duration: 1800,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 5,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2050,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseOutWave,
          $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 1,
        $ScaleVertical: 0.2,
        $Outside: true,
        $Round: {
          $Top: 1.3
        }
      }, {
        $Duration: 1800,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 5,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 2050,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseOutWave,
          $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleVertical: 0.2,
        $Outside: true,
        $Round: {
          $Top: 1.3
        }
      }, {
        $Duration: 1500,
        $Delay: 150,
        $Cols: 12,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Opacity: 2,
        $Outside: true,
        $Round: {
          $Top: 2
        }
      }, {
        $Duration: 1800,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 1,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutExpo,
          $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 1,
        $Outside: true,
        $Round: {
          $Top: 0.8
        }
      }, {
        $Duration: 1800,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 5,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2050,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseOutWave,
          $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 1,
        $ScaleVertical: 0.2,
        $Outside: true,
        $Round: {
          $Top: 1.3
        }
      }, {
        $Duration: 1800,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 5,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 2050,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseOutWave,
          $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleVertical: 0.2,
        $Outside: true,
        $Round: {
          $Top: 1.3
        }
      }, {
        $Duration: 1500,
        $Delay: 150,
        $Cols: 12,
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Opacity: 2,
        $Outside: true,
        $Round: {
          $Top: 2
        }
      }, {
        $Duration: 1800,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7]
        },
        $FlyDirection: 1,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutExpo,
          $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 1,
        $Round: {
          $Top: 0.8
        }
      }, {
        $Duration: 1800,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 5,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2050,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseOutWave,
          $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 1,
        $ScaleVertical: 0.2,
        $Round: {
          $Top: 1.3
        }
      }, {
        $Duration: 1800,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $FlyDirection: 5,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 2050,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseOutWave,
          $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleVertical: 0.2,
        $Round: {
          $Top: 1.3
        }
      }, {
        $Duration: 1500,
        $Delay: 150,
        $Cols: 12,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Opacity: 2,
        $Round: {
          $Top: 2
        }
      }, {
        $Duration: 1800,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 1,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutExpo,
          $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 1,
        $Round: {
          $Top: 0.8
        }
      }, {
        $Duration: 1800,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 5,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2050,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseOutWave,
          $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 1,
        $ScaleVertical: 0.2,
        $Round: {
          $Top: 1.3
        }
      }, {
        $Duration: 1800,
        $Delay: 30,
        $Cols: 10,
        $Rows: 5,
        $Clip: 15,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0.3, 0.7]
        },
        $SlideOut: true,
        $FlyDirection: 5,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 2050,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseOutWave,
          $Clip: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleVertical: 0.2,
        $Round: {
          $Top: 1.3
        }
      }, {
        $Duration: 1500,
        $Delay: 150,
        $Cols: 12,
        $SlideOut: true,
        $FlyDirection: 9,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Opacity: 2,
        $Round: {
          $Top: 2
        }
      }, {
        $Duration: 1200,
        $Rows: 2,
        $Zoom: 11,
        $Rotate: true,
        $FlyDirection: 6,
        $Assembly: 2049,
        $ChessMode: {
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 1,
        $ScaleVertical: 2,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      }, {
        $Duration: 1200,
        $Cols: 2,
        $Zoom: 11,
        $Rotate: true,
        $FlyDirection: 5,
        $Assembly: 2049,
        $ChessMode: {
          $Column: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 2,
        $ScaleVertical: 1,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1200,
        $Rows: 2,
        $Zoom: 1,
        $Rotate: true,
        $FlyDirection: 6,
        $Assembly: 2049,
        $ChessMode: {
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 1,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1200,
        $Cols: 2,
        $Zoom: 1,
        $Rotate: true,
        $FlyDirection: 5,
        $Assembly: 2049,
        $ChessMode: {
          $Column: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1000,
        $Rows: 2,
        $Zoom: 11,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 6,
        $Assembly: 2049,
        $ChessMode: {
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 1,
        $ScaleVertical: 2,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.85
        }
      }, {
        $Duration: 1000,
        $Cols: 2,
        $Zoom: 11,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 5,
        $Assembly: 2049,
        $ChessMode: {
          $Column: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 2,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      }, {
        $Duration: 1000,
        $Rows: 2,
        $Zoom: 1,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 6,
        $Assembly: 2049,
        $ChessMode: {
          $Row: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 1,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1000,
        $Cols: 2,
        $Zoom: 1,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 5,
        $Assembly: 2049,
        $ChessMode: {
          $Column: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1200,
        $Rows: 2,
        $Zoom: 11,
        $Rotate: true,
        $FlyDirection: 6,
        $Assembly: 2049,
        $ChessMode: {
          $Row: 28
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 2,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1200,
        $Cols: 2,
        $Zoom: 11,
        $Rotate: true,
        $FlyDirection: 5,
        $Assembly: 2049,
        $ChessMode: {
          $Column: 19
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 1,
        $ScaleVertical: 2,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      }, {
        $Duration: 1000,
        $Rows: 2,
        $Zoom: 11,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 6,
        $Assembly: 2049,
        $ChessMode: {
          $Row: 28
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 3,
        $ScaleVertical: 1,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1000,
        $Cols: 2,
        $Zoom: 11,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 5,
        $Assembly: 2049,
        $ChessMode: {
          $Column: 19
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 1,
        $ScaleVertical: 2,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      }, {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: true,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: true,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: true,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: true,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleVertical: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: true,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleVertical: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: true,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: true,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: true,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: true,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.7
        }
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $Rotate: true,
        $SlideOut: true,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $ScaleVertical: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $ScaleVertical: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $Rotate: true,
        $During: {
          $Zoom: [0.2, 0.8],
          $Rotate: [0.2, 0.8]
        },
        $Easing: {
          $Zoom: $JssorEasing$.$EaseSwing,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseSwing
        },
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $Rotate: true,
        $During: {
          $Left: [0.2, 0.8],
          $Zoom: [0.2, 0.8],
          $Rotate: [0.2, 0.8]
        },
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Zoom: $JssorEasing$.$EaseSwing,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $Rotate: true,
        $During: {
          $Left: [0.2, 0.8],
          $Zoom: [0.2, 0.8],
          $Rotate: [0.2, 0.8]
        },
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Zoom: $JssorEasing$.$EaseSwing,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $Rotate: true,
        $During: {
          $Top: [0.2, 0.8],
          $Zoom: [0.2, 0.8],
          $Rotate: [0.2, 0.8]
        },
        $FlyDirection: 4,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseSwing,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseSwing
        },
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $Rotate: true,
        $During: {
          $Top: [0.2, 0.8],
          $Zoom: [0.2, 0.8],
          $Rotate: [0.2, 0.8]
        },
        $FlyDirection: 8,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseSwing,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseSwing
        },
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $Rotate: true,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8],
          $Zoom: [0.2, 0.8],
          $Rotate: [0.2, 0.8]
        },
        $FlyDirection: 5,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseSwing,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $Rotate: true,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8],
          $Zoom: [0.2, 0.8],
          $Rotate: [0.2, 0.8]
        },
        $FlyDirection: 6,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseSwing,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $Rotate: true,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8],
          $Zoom: [0.2, 0.8],
          $Rotate: [0.2, 0.8]
        },
        $FlyDirection: 9,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseSwing,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $Rotate: true,
        $During: {
          $Left: [0.2, 0.8],
          $Top: [0.2, 0.8],
          $Zoom: [0.2, 0.8],
          $Rotate: [0.2, 0.8]
        },
        $FlyDirection: 10,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseSwing,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseSwing
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $Rotate: true,
        $SlideOut: true,
        $Easing: {
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $Rotate: true,
        $SlideOut: true,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      }, {
        $Duration: 1200,
        $Rows: 2,
        $Zoom: 11,
        $FlyDirection: 4,
        $Assembly: 2049,
        $ChessMode: {
          $Row: 15
        },
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleVertical: 2,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Cols: 2,
        $Zoom: 11,
        $FlyDirection: 1,
        $Assembly: 2049,
        $ChessMode: {
          $Column: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 4,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Rows: 2,
        $Zoom: 1,
        $FlyDirection: 4,
        $Assembly: 2049,
        $ChessMode: {
          $Row: 15
        },
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 1,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Cols: 2,
        $Zoom: 1,
        $FlyDirection: 1,
        $Assembly: 2049,
        $ChessMode: {
          $Column: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Rows: 2,
        $Zoom: 11,
        $SlideOut: true,
        $FlyDirection: 4,
        $Assembly: 2049,
        $ChessMode: {
          $Row: 15
        },
        $Easing: {
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 2,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Cols: 2,
        $Zoom: 11,
        $SlideOut: true,
        $FlyDirection: 1,
        $Assembly: 2049,
        $ChessMode: {
          $Column: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 4,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Rows: 2,
        $Zoom: 1,
        $SlideOut: true,
        $FlyDirection: 4,
        $Assembly: 2049,
        $ChessMode: {
          $Row: 15
        },
        $Easing: {
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 1,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Cols: 2,
        $Zoom: 1,
        $SlideOut: true,
        $FlyDirection: 1,
        $Assembly: 2049,
        $ChessMode: {
          $Column: 15
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 4,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 4,
        $Opacity: 2,
        $Round: {
          $Top: 2.5
        }
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleVertical: 4,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleVertical: 4,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $SlideOut: true,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $SlideOut: true,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 4,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $SlideOut: true,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 4,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $SlideOut: true,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 4,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $SlideOut: true,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 4,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $SlideOut: true,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $SlideOut: true,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $SlideOut: true,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 11,
        $SlideOut: true,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 4,
        $ScaleVertical: 4,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      }, {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $SlideOut: true,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $SlideOut: true,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $SlideOut: true,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $SlideOut: true,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $SlideOut: true,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $SlideOut: true,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $SlideOut: true,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $SlideOut: true,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Zoom: 1,
        $SlideOut: true,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseInExpo,
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2049,
        $Easing: $JssorEasing$.$EaseOutQuad
      }, {
        $Duration: 500,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Easing: $JssorEasing$.$EaseOutQuad
      }, {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: $JssorEasing$.$EaseOutQuad
      }, {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationRectangleCross,
        $Easing: $JssorEasing$.$EaseOutQuad
      }, {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationRectangle,
        $Easing: $JssorEasing$.$EaseOutQuad
      }, {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationCross,
        $Easing: $JssorEasing$.$EaseOutQuad
      }, {
        $Duration: 800,
        $Delay: 200,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Assembly: 2049
      }, {
        $Duration: 500,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Easing: $JssorEasing$.$EaseOutQuad
      }, {
        $Duration: 1000,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $SlideOut: true,
        $Easing: $JssorEasing$.$EaseOutQuad
      }, {
        $Duration: 1000,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 2050,
        $Easing: $JssorEasing$.$EaseInQuad
      }, {
        $Duration: 1000,
        $Cols: 3,
        $Rows: 2,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Easing: $JssorEasing$.$EaseInBounce
      }, {
        $Duration: 500,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Easing: $JssorEasing$.$EaseInQuad
      }, {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Easing: $JssorEasing$.$EaseInQuad
      }, {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationRectangleCross,
        $Easing: $JssorEasing$.$EaseInQuad
      }, {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationRectangle,
        $Easing: $JssorEasing$.$EaseInQuad
      }, {
        $Duration: 800,
        $Delay: 300,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationCross,
        $Easing: $JssorEasing$.$EaseInQuad
      }, {
        $Duration: 500,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: $JssorEasing$.$EaseInQuad
      }, {
        $Duration: 1000,
        $Delay: 80,
        $Cols: 8,
        $Rows: 4,
        $Clip: 15,
        $Easing: $JssorEasing$.$EaseInQuad
      }, {
        $Duration: 2000,
        $Delay: 60,
        $Cols: 15,
        $SlideOut: true,
        $FlyDirection: 8,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Easing: $JssorEasing$.$EaseOutJump,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1000,
        $Delay: 40,
        $Cols: 12,
        $SlideOut: true,
        $FlyDirection: 2,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutExpo,
          $Opacity: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.2,
        $Opacity: 2,
        $Outside: true,
        $Round: {
          $Top: 0.5
        }
      }, {
        $Duration: 1000,
        $Delay: 40,
        $Cols: 12,
        $FlyDirection: 1,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutExpo,
          $Opacity: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.2,
        $Opacity: 2,
        $Outside: true,
        $Round: {
          $Top: 0.5
        }
      }, {
        $Duration: 400,
        $Delay: 100,
        $Rows: 7,
        $Clip: 4,
        $Formation: $JssorSlideshowFormations$.$FormationStraight
      }, {
        $Duration: 400,
        $Delay: 100,
        $Cols: 10,
        $Clip: 2,
        $Formation: $JssorSlideshowFormations$.$FormationStraight
      }, {
        $Duration: 1000,
        $Rows: 6,
        $Clip: 4
      }, {
        $Duration: 1000,
        $Cols: 8,
        $Clip: 1
      }, {
        $Duration: 1000,
        $Rows: 6,
        $Clip: 4,
        $Move: true
      }, {
        $Duration: 1000,
        $Cols: 8,
        $Clip: 1,
        $Move: true
      }, {
        $Duration: 600,
        $Delay: 100,
        $Rows: 7,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 100,
        $Cols: 10,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Opacity: 2
      }, {
        $Duration: 800,
        $Delay: 80,
        $Rows: 8,
        $FlyDirection: 1,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 513,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 800,
        $Delay: 80,
        $Cols: 12,
        $FlyDirection: 4,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 513,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 1000,
        $Rows: 6,
        $FlyDirection: 2,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $ChessMode: {
          $Row: 3
        }
      }, {
        $Duration: 1000,
        $Cols: 12,
        $FlyDirection: 8,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $ChessMode: {
          $Column: 12
        }
      }, {
        $Duration: 600,
        $Delay: 80,
        $Rows: 6,
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 80,
        $Cols: 10,
        $Opacity: 2
      }, {
        $Duration: 800,
        $Delay: 150,
        $Rows: 5,
        $Clip: 8,
        $Move: true,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Assembly: 264,
        $Easing: $JssorEasing$.$EaseInBounce
      }, {
        $Duration: 800,
        $Delay: 150,
        $Cols: 10,
        $Clip: 1,
        $Move: true,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Assembly: 264,
        $Easing: $JssorEasing$.$EaseInBounce
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 12,
        $SlideOut: true,
        $FlyDirection: 8,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: $JssorEasing$.$EaseInWave,
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 15,
        $SlideOut: true,
        $FlyDirection: 8,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Easing: $JssorEasing$.$EaseInWave,
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 5,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $ChessMode: {
          $Row: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationRectangle,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationCross,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationRectangleCross,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 12,
        $FlyDirection: 8,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: $JssorEasing$.$EaseInWave,
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 15,
        $FlyDirection: 8,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Easing: $JssorEasing$.$EaseInWave,
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 5,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $ChessMode: {
          $Row: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationRectangle,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationCross,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationRectangleCross,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 513,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $ChessMode: {
          $Row: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 800,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationRectangle,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationRectangleCross,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 10,
        $Formation: $JssorSlideshowFormations$.$FormationStraight,
        $Assembly: 513,
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 10,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 10,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 10,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 10,
        $Formation: $JssorSlideshowFormations$.$FormationSquare,
        $Assembly: 260,
        $ChessMode: {
          $Row: 3
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 800,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 10,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationRectangle,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 10,
        $Formation: $JssorSlideshowFormations$.$FormationCircle,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 1500,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 10,
        $Formation: $JssorSlideshowFormations$.$FormationRectangleCross,
        $Assembly: 260,
        $Easing: {
          $Left: $JssorEasing$.$EaseSwing,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleVertical: 0.5,
        $Round: {
          $Top: 1.5
        }
      }, {
        $Duration: 600,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 264,
        $Easing: {
          $Top: $JssorEasing$.$EaseInQuart,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 100,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 264,
        $Easing: {
          $Top: $JssorEasing$.$EaseInQuart,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 5,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $ChessMode: {
          $Row: 3
        },
        $Easing: {
          $Top: $JssorEasing$.$EaseInQuart,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 60,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 5,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 260,
        $ChessMode: {
          $Row: 3
        },
        $Easing: {
          $Top: $JssorEasing$.$EaseInQuart,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuart,
          $Top: $JssorEasing$.$EaseInQuart,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 30,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 6,
        $Formation: $JssorSlideshowFormations$.$FormationStraightStairs,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuart,
          $Top: $JssorEasing$.$EaseInQuart,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 9,
        $ChessMode: {
          $Column: 3,
          $Row: 12
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 2,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 513,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 4,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 264,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 10,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 1028,
        $ChessMode: {
          $Column: 3,
          $Row: 12
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 2,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 513,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 4,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 2049,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $SlideOut: true,
        $FlyDirection: 5,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 513,
        $ChessMode: {
          $Column: 3,
          $Row: 12
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 6,
        $ChessMode: {
          $Column: 3,
          $Row: 12
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 1,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 513,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 8,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 264,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 5,
        $Formation: $JssorSlideshowFormations$.$FormationZigZag,
        $Assembly: 1028,
        $ChessMode: {
          $Column: 3,
          $Row: 12
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 1,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 513,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 8,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 2049,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }, {
        $Duration: 600,
        $Delay: 50,
        $Cols: 8,
        $Rows: 4,
        $FlyDirection: 10,
        $Reverse: true,
        $Formation: $JssorSlideshowFormations$.$FormationSwirl,
        $Assembly: 513,
        $ChessMode: {
          $Column: 3,
          $Row: 12
        },
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $Opacity: 2
      }];
      var _CaptionTransitions = [];
      _CaptionTransitions["L"] = {
        $Duration: 900,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["R"] = {
        $Duration: 900,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["T"] = {
        $Duration: 900,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutSine
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["B"] = {
        $Duration: 900,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutSine
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TL"] = {
        $Duration: 900,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInOutSine
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TR"] = {
        $Duration: 900,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInOutSine
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BL"] = {
        $Duration: 900,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInOutSine
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BR"] = {
        $Duration: 900,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInOutSine
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["L|IB"] = {
        $Duration: 1200,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutBack
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["R|IB"] = {
        $Duration: 1200,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutBack
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["T|IB"] = {
        $Duration: 1200,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutBack
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["B|IB"] = {
        $Duration: 1200,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutBack
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TL|IB"] = {
        $Duration: 1200,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutBack,
          $Top: $JssorEasing$.$EaseInOutBack
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TR|IB"] = {
        $Duration: 1200,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutBack,
          $Top: $JssorEasing$.$EaseInOutBack
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BL|IB"] = {
        $Duration: 1200,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutBack,
          $Top: $JssorEasing$.$EaseInOutBack
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BR|IB"] = {
        $Duration: 1200,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutBack,
          $Top: $JssorEasing$.$EaseInOutBack
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["L|IE"] = {
        $Duration: 1200,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["R|IE"] = {
        $Duration: 1200,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["T|IE"] = {
        $Duration: 1200,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["B|IE"] = {
        $Duration: 1200,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TL|IE"] = {
        $Duration: 1200,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutElastic,
          $Top: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TR|IE"] = {
        $Duration: 1200,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutElastic,
          $Top: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BL|IE"] = {
        $Duration: 1200,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutElastic,
          $Top: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BR|IE"] = {
        $Duration: 1200,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutElastic,
          $Top: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["L|EP"] = {
        $Duration: 1200,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutExpo
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["R|EP"] = {
        $Duration: 1200,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutExpo
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["T|EP"] = {
        $Duration: 1200,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutExpo
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["B|EP"] = {
        $Duration: 1200,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutExpo
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TL|EP"] = {
        $Duration: 1200,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutExpo,
          $Top: $JssorEasing$.$EaseInOutExpo
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TR|EP"] = {
        $Duration: 1200,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutExpo,
          $Top: $JssorEasing$.$EaseInOutExpo
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BL|EP"] = {
        $Duration: 1200,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutExpo,
          $Top: $JssorEasing$.$EaseInOutExpo
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BR|EP"] = {
        $Duration: 1200,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutExpo,
          $Top: $JssorEasing$.$EaseInOutExpo
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["L*"] = {
        $Duration: 900,
        $Rotate: -0.05,
        $FlyDirection: 1,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutSine
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["R*"] = {
        $Duration: 900,
        $Rotate: 0.05,
        $FlyDirection: 2,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutSine
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["T*"] = {
        $Duration: 900,
        $Rotate: -0.05,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutSine
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["B*"] = {
        $Duration: 900,
        $Rotate: 0.05,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutSine
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TL*"] = {
        $Duration: 900,
        $Rotate: -0.05,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInOutSine
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TR*"] = {
        $Duration: 900,
        $Rotate: 0.05,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInOutSine
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BL*"] = {
        $Duration: 900,
        $Rotate: -0.05,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInOutSine
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BR*"] = {
        $Duration: 900,
        $Rotate: 0.05,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInOutSine
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["L*IE"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: -0.3,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInElastic
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["R*IE"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: -0.3,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInElastic
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["T*IE"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: -0.3,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInElastic
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["B*IE"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: -0.3,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInElastic
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TL*IE"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 0.3,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInElastic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TR*IE"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 0.3,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInElastic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BL*IE"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 0.3,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInElastic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BR*IE"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 0.3,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInElastic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["L*IB"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: -0.3,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["R*IB"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: -0.3,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["T*IB"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: -0.3,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["B*IB"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: -0.3,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TL*IB"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 0.3,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TR*IB"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 0.3,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BL*IB"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 0.3,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BR*IB"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 0.3,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["L-*IB"] = {
        $Duration: 900,
        $Rotate: -0.5,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleHorizontal: 0.7,
        $Opacity: 2,
        $During: {
          $Left: [0.2, 0.8]
        }
      };
      _CaptionTransitions["R-*IB"] = {
        $Duration: 900,
        $Rotate: 0.5,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleHorizontal: 0.7,
        $Opacity: 2,
        $During: {
          $Left: [0.2, 0.8]
        }
      };
      _CaptionTransitions["T-*IB"] = {
        $Duration: 900,
        $Rotate: -0.5,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleVertical: 0.7,
        $Opacity: 2,
        $During: {
          $Top: [0.2, 0.8]
        }
      };
      _CaptionTransitions["B-*IB"] = {
        $Duration: 900,
        $Rotate: 0.5,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleVertical: 0.7,
        $Opacity: 2,
        $During: {
          $Top: [0.2, 0.8]
        }
      };
      _CaptionTransitions["TL-*IB"] = {
        $Duration: 900,
        $Rotate: -0.5,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleHorizontal: 0.7,
        $ScaleVertical: 0.7,
        $Opacity: 2,
        $During: {
          $Left: [0.2, 0.8]
        }
      };
      _CaptionTransitions["TR-*IB"] = {
        $Duration: 900,
        $Rotate: 0.5,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleHorizontal: 0.7,
        $ScaleVertical: 0.7,
        $Opacity: 2,
        $During: {
          $Left: [0.2, 0.8]
        }
      };
      _CaptionTransitions["BL-*IB"] = {
        $Duration: 900,
        $Rotate: -0.5,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleHorizontal: 0.7,
        $ScaleVertical: 0.7,
        $Opacity: 2,
        $During: {
          $Left: [0.2, 0.8]
        }
      };
      _CaptionTransitions["BR-*IB"] = {
        $Duration: 900,
        $Rotate: 0.5,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInBack
        },
        $ScaleHorizontal: 0.7,
        $ScaleVertical: 0.7,
        $Opacity: 2,
        $During: {
          $Left: [0.2, 0.8]
        }
      };
      _CaptionTransitions["L*IW"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 2,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["R*IW"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 2,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["T*IW"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 2,
        $FlyDirection: 4,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInWave
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["B*IW"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 2,
        $FlyDirection: 8,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInWave
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TL*IW"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 2,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["TR*IW"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 2,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BL*IW"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 2,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["BR*IW"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 2,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Rotate: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["L|IE*IE"] = {
        $Duration: 1800,
        $Zoom: 11,
        $Rotate: -1.5,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutElastic,
          $Zoom: $JssorEasing$.$EaseInElastic,
          $Rotate: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $During: {
          $Zoom: [0, 0.8],
          $Opacity: [0, 0.7]
        },
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["R|IE*IE"] = {
        $Duration: 1800,
        $Zoom: 11,
        $Rotate: -1.5,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutElastic,
          $Zoom: $JssorEasing$.$EaseInElastic,
          $Rotate: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $During: {
          $Zoom: [0, 0.8],
          $Opacity: [0, 0.7]
        },
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["T|IE*IE"] = {
        $Duration: 1800,
        $Zoom: 11,
        $Rotate: -1.5,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutElastic,
          $Zoom: $JssorEasing$.$EaseInElastic,
          $Rotate: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Zoom: [0, 0.8],
          $Opacity: [0, 0.7]
        },
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["B|IE*IE"] = {
        $Duration: 1800,
        $Zoom: 11,
        $Rotate: -1.5,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutElastic,
          $Zoom: $JssorEasing$.$EaseInElastic,
          $Rotate: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Zoom: [0, 0.8],
          $Opacity: [0, 0.7]
        },
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["TL|IE*IE"] = {
        $Duration: 1800,
        $Zoom: 11,
        $Rotate: -1.5,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutElastic,
          $Top: $JssorEasing$.$EaseInOutElastic,
          $Zoom: $JssorEasing$.$EaseInElastic,
          $Rotate: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleHorizontal: 0.4,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Zoom: [0, 0.8],
          $Opacity: [0, 0.7]
        },
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["TR|IE*IE"] = {
        $Duration: 1800,
        $Zoom: 11,
        $Rotate: -1.5,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutElastic,
          $Top: $JssorEasing$.$EaseInOutElastic,
          $Zoom: $JssorEasing$.$EaseInElastic,
          $Rotate: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleHorizontal: 0.4,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Zoom: [0, 0.8],
          $Opacity: [0, 0.7]
        },
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["BL|IE*IE"] = {
        $Duration: 1800,
        $Zoom: 11,
        $Rotate: -1.5,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutElastic,
          $Top: $JssorEasing$.$EaseInOutElastic,
          $Zoom: $JssorEasing$.$EaseInElastic,
          $Rotate: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleHorizontal: 0.4,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Zoom: [0, 0.8],
          $Opacity: [0, 0.7]
        },
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["BR|IE*IE"] = {
        $Duration: 1800,
        $Zoom: 11,
        $Rotate: -1.5,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutElastic,
          $Top: $JssorEasing$.$EaseInOutElastic,
          $Zoom: $JssorEasing$.$EaseInElastic,
          $Rotate: $JssorEasing$.$EaseInOutElastic
        },
        $ScaleHorizontal: 0.4,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Zoom: [0, 0.8],
          $Opacity: [0, 0.7]
        },
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["CLIP"] = {
        $Duration: 900,
        $Clip: 15,
        $Easing: {
          $Clip: $JssorEasing$.$EaseInOutCubic
        },
        $Opacity: 2
      };
      _CaptionTransitions["CLIP|LR"] = {
        $Duration: 900,
        $Clip: 3,
        $Easing: {
          $Clip: $JssorEasing$.$EaseInOutCubic
        },
        $Opacity: 2
      };
      _CaptionTransitions["CLIP|TB"] = {
        $Duration: 900,
        $Clip: 12,
        $Easing: {
          $Clip: $JssorEasing$.$EaseInOutCubic
        },
        $Opacity: 2
      };
      _CaptionTransitions["CLIP|L"] = {
        $Duration: 900,
        $Clip: 1,
        $Easing: {
          $Clip: $JssorEasing$.$EaseInOutCubic
        },
        $Opacity: 2
      };
      _CaptionTransitions["CLIP|R"] = {
        $Duration: 900,
        $Clip: 2,
        $Easing: {
          $Clip: $JssorEasing$.$EaseInOutCubic
        },
        $Opacity: 2
      };
      _CaptionTransitions["CLIP|T"] = {
        $Duration: 900,
        $Clip: 4,
        $Easing: {
          $Clip: $JssorEasing$.$EaseInOutCubic
        },
        $Opacity: 2
      };
      _CaptionTransitions["CLIP|B"] = {
        $Duration: 900,
        $Clip: 8,
        $Easing: {
          $Clip: $JssorEasing$.$EaseInOutCubic
        },
        $Opacity: 2
      };
      _CaptionTransitions["MCLIP|L"] = {
        $Duration: 900,
        $Clip: 1,
        $Move: true,
        $Easing: {
          $Clip: $JssorEasing$.$EaseInOutCubic
        }
      };
      _CaptionTransitions["MCLIP|R"] = {
        $Duration: 900,
        $Clip: 2,
        $Move: true,
        $Easing: {
          $Clip: $JssorEasing$.$EaseInOutCubic
        }
      };
      _CaptionTransitions["MCLIP|T"] = {
        $Duration: 900,
        $Clip: 4,
        $Move: true,
        $Easing: {
          $Clip: $JssorEasing$.$EaseInOutCubic
        }
      };
      _CaptionTransitions["MCLIP|B"] = {
        $Duration: 900,
        $Clip: 8,
        $Move: true,
        $Easing: {
          $Clip: $JssorEasing$.$EaseInOutCubic
        }
      };
      _CaptionTransitions["ZM"] = {
        $Duration: 900,
        $Zoom: 1,
        $Easing: $JssorEasing$.$EaseInCubic,
        $Opacity: 2
      };
      _CaptionTransitions["ZM|P30"] = {
        $Duration: 900,
        $Zoom: 1.3,
        $Easing: $JssorEasing$.$EaseInCubic,
        $Opacity: 2
      };
      _CaptionTransitions["ZM|P50"] = {
        $Duration: 900,
        $Zoom: 1.5,
        $Easing: $JssorEasing$.$EaseInCubic,
        $Opacity: 2
      };
      _CaptionTransitions["ZM|P70"] = {
        $Duration: 900,
        $Zoom: 1.7,
        $Easing: $JssorEasing$.$EaseInCubic,
        $Opacity: 2
      };
      _CaptionTransitions["ZM|P80"] = {
        $Duration: 900,
        $Zoom: 1.8,
        $Easing: $JssorEasing$.$EaseInCubic,
        $Opacity: 2
      };
      _CaptionTransitions["ZMF|2"] = {
        $Duration: 900,
        $Zoom: 3,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      };
      _CaptionTransitions["ZMF|3"] = {
        $Duration: 900,
        $Zoom: 4,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      };
      _CaptionTransitions["ZMF|4"] = {
        $Duration: 900,
        $Zoom: 5,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      };
      _CaptionTransitions["ZMF|5"] = {
        $Duration: 900,
        $Zoom: 6,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      };
      _CaptionTransitions["ZMF|10"] = {
        $Duration: 900,
        $Zoom: 11,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $Opacity: 2
      };
      _CaptionTransitions["ZML|L"] = {
        $Duration: 900,
        $Zoom: 11,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZML|R"] = {
        $Duration: 900,
        $Zoom: 11,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZML|T"] = {
        $Duration: 900,
        $Zoom: 11,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZML|B"] = {
        $Duration: 900,
        $Zoom: 11,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZML|TL"] = {
        $Duration: 900,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZML|TR"] = {
        $Duration: 900,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZML|BL"] = {
        $Duration: 900,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZML|BR"] = {
        $Duration: 900,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZML|IE|L"] = {
        $Duration: 1200,
        $Zoom: 6,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInElastic
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZML|IE|R"] = {
        $Duration: 1200,
        $Zoom: 6,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInElastic
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZML|IE|T"] = {
        $Duration: 1200,
        $Zoom: 6,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInElastic
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZML|IE|B"] = {
        $Duration: 1200,
        $Zoom: 6,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInElastic
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZML|IE|TL"] = {
        $Duration: 1200,
        $Zoom: 6,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInElastic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZML|IE|TR"] = {
        $Duration: 1200,
        $Zoom: 6,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInElastic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZML|IE|BL"] = {
        $Duration: 1200,
        $Zoom: 6,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInElastic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZML|IE|BR"] = {
        $Duration: 1200,
        $Zoom: 6,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInElastic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZMS|L"] = {
        $Duration: 900,
        $Zoom: 1,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZMS|R"] = {
        $Duration: 900,
        $Zoom: 1,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZMS|T"] = {
        $Duration: 900,
        $Zoom: 1,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZMS|B"] = {
        $Duration: 900,
        $Zoom: 1,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZMS|TL"] = {
        $Duration: 900,
        $Zoom: 1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZMS|TR"] = {
        $Duration: 900,
        $Zoom: 1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZMS|BL"] = {
        $Duration: 900,
        $Zoom: 1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZMS|BR"] = {
        $Duration: 900,
        $Zoom: 1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["ZM*JDN|LT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JDN|LB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JDN|RT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JDN|RB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JDN|TL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JDN|TR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JDN|BL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JDN|BR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JUP|LT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JUP|LB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JUP|RT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JUP|RB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JUP|TL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JUP|TR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JUP|BL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JUP|BR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["ZM*JDN|LB*"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        },
        $Round: {
          $Left: 0.3,
          $Top: 0.75
        }
      };
      _CaptionTransitions["ZM*JDN|RB*"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        },
        $Round: {
          $Left: 0.3,
          $Top: 0.75
        }
      };
      _CaptionTransitions["ZM*JDN1|L"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Zoom: 0.5
        }
      };
      _CaptionTransitions["ZM*JDN1|R"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Zoom: 0.5
        }
      };
      _CaptionTransitions["ZM*JDN1|T"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Zoom: 0.5
        }
      };
      _CaptionTransitions["ZM*JDN1|B"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Zoom: 0.5
        }
      };
      _CaptionTransitions["ZM*JUP1|L"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Zoom: 0.5
        }
      };
      _CaptionTransitions["ZM*JUP1|R"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Zoom: 0.5
        }
      };
      _CaptionTransitions["ZM*JUP1|T"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Zoom: 0.5
        }
      };
      _CaptionTransitions["ZM*JUP1|B"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear
        },
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Zoom: 0.5
        }
      };
      _CaptionTransitions["ZM*WVC|LT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WVC|LB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WVC|RT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WVC|RB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WVC|TL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WVC|TR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WVC|BL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WVC|BR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WVR|LT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WVR|LB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WVR|RT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WVR|RB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WVR|TL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WVR|TR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WVR|BL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WVR|BR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["ZM*WV*J1|LT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        },
        $Round: {
          $Left: 0.3,
          $Top: 0.5
        }
      };
      _CaptionTransitions["ZM*WV*J1|LB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        },
        $Round: {
          $Left: 0.3,
          $Top: 0.5
        }
      };
      _CaptionTransitions["ZM*WV*J1|RT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        },
        $Round: {
          $Left: 0.3,
          $Top: 0.5
        }
      };
      _CaptionTransitions["ZM*WV*J1|RB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        },
        $Round: {
          $Left: 0.3,
          $Top: 0.5
        }
      };
      _CaptionTransitions["ZM*WV*J1|TL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        },
        $Round: {
          $Left: 0.5,
          $Top: 0.3
        }
      };
      _CaptionTransitions["ZM*WV*J1|TR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        },
        $Round: {
          $Left: 0.5,
          $Top: 0.3
        }
      };
      _CaptionTransitions["ZM*WV*J1|BL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        },
        $Round: {
          $Left: 0.5,
          $Top: 0.3
        }
      };
      _CaptionTransitions["ZM*WV*J1|BR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        },
        $Round: {
          $Left: 0.5,
          $Top: 0.3
        }
      };
      _CaptionTransitions["ZM*WV*J2|LT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.4,
        $Opacity: 2
      };
      _CaptionTransitions["ZM*WV*J2|LB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.4,
        $Opacity: 2
      };
      _CaptionTransitions["ZM*WV*J2|RT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.4,
        $Opacity: 2
      };
      _CaptionTransitions["ZM*WV*J2|RB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.4,
        $Opacity: 2
      };
      _CaptionTransitions["ZM*WV*J2|TL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.4,
        $ScaleVertical: 0.8,
        $Opacity: 2
      };
      _CaptionTransitions["ZM*WV*J2|TR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.4,
        $ScaleVertical: 0.8,
        $Opacity: 2
      };
      _CaptionTransitions["ZM*WV*J2|BL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.4,
        $ScaleVertical: 0.8,
        $Opacity: 2
      };
      _CaptionTransitions["ZM*WV*J2|BR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.4,
        $ScaleVertical: 0.8,
        $Opacity: 2
      };
      _CaptionTransitions["ZM*WV*J3|LT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInSine,
          $Top: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Top: 0.5
        }
      };
      _CaptionTransitions["ZM*WV*J3|LB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInSine,
          $Top: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Top: 0.5
        }
      };
      _CaptionTransitions["ZM*WV*J3|RT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInSine,
          $Top: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Top: 0.5
        }
      };
      _CaptionTransitions["ZM*WV*J3|RB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInSine,
          $Top: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Top: 0.5
        }
      };
      _CaptionTransitions["ZM*WV*J3|TL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Top: $JssorEasing$.$EaseInSine,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 0.5
        }
      };
      _CaptionTransitions["ZM*WV*J3|TR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Top: $JssorEasing$.$EaseInSine,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 0.5
        }
      };
      _CaptionTransitions["ZM*WV*J3|BL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Top: $JssorEasing$.$EaseInSine,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 0.5
        }
      };
      _CaptionTransitions["ZM*WV*J3|BR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Top: $JssorEasing$.$EaseInSine,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 0.5
        }
      };
      _CaptionTransitions["RTT"] = {
        $Duration: 900,
        $Rotate: 1,
        $Easing: {
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInQuad
        },
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT|90"] = {
        $Duration: 900,
        $Rotate: 1,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.25
        }
      };
      _CaptionTransitions["RTT|360"] = {
        $Duration: 900,
        $Rotate: 1,
        $Easing: {
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInQuad
        },
        $Opacity: 2
      };
      _CaptionTransitions["RTT|0"] = {
        $Duration: 900,
        $Zoom: 1,
        $Rotate: 1,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInQuad
        },
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT|2"] = {
        $Duration: 900,
        $Zoom: 3,
        $Rotate: 1,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInQuad
        },
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT|3"] = {
        $Duration: 900,
        $Zoom: 4,
        $Rotate: 1,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInQuad
        },
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT|4"] = {
        $Duration: 900,
        $Zoom: 5,
        $Rotate: 1,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInQuad
        },
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT|5"] = {
        $Duration: 900,
        $Zoom: 6,
        $Rotate: 1,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["RTT|10"] = {
        $Duration: 900,
        $Zoom: 11,
        $Rotate: 1,
        $Easing: {
          $Zoom: $JssorEasing$.$EaseInExpo,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInExpo
        },
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["RTTL|L"] = {
        $Duration: 900,
        $Zoom: 11,
        $Rotate: 1,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["RTTL|R"] = {
        $Duration: 900,
        $Zoom: 11,
        $Rotate: 1,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["RTTL|T"] = {
        $Duration: 900,
        $Zoom: 11,
        $Rotate: 1,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["RTTL|B"] = {
        $Duration: 900,
        $Zoom: 11,
        $Rotate: 1,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["RTTL|TL"] = {
        $Duration: 900,
        $Zoom: 11,
        $Rotate: 1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["RTTL|TR"] = {
        $Duration: 900,
        $Zoom: 11,
        $Rotate: 1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["RTTL|BL"] = {
        $Duration: 900,
        $Zoom: 11,
        $Rotate: 1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["RTTL|BR"] = {
        $Duration: 900,
        $Zoom: 11,
        $Rotate: 1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.8
        }
      };
      _CaptionTransitions["RTTS|L"] = {
        $Duration: 900,
        $Zoom: 1,
        $Rotate: 1,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuad,
          $Zoom: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 1.2
        }
      };
      _CaptionTransitions["RTTS|R"] = {
        $Duration: 900,
        $Zoom: 1,
        $Rotate: 1,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuad,
          $Zoom: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 1.2
        }
      };
      _CaptionTransitions["RTTS|T"] = {
        $Duration: 900,
        $Zoom: 1,
        $Rotate: 1,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInQuad,
          $Zoom: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 1.2
        }
      };
      _CaptionTransitions["RTTS|B"] = {
        $Duration: 900,
        $Zoom: 1,
        $Rotate: 1,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInQuad,
          $Zoom: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 1.2
        }
      };
      _CaptionTransitions["RTTS|TL"] = {
        $Duration: 900,
        $Zoom: 1,
        $Rotate: 1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuad,
          $Top: $JssorEasing$.$EaseInQuad,
          $Zoom: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 1.2
        }
      };
      _CaptionTransitions["RTTS|TR"] = {
        $Duration: 900,
        $Zoom: 1,
        $Rotate: 1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuad,
          $Top: $JssorEasing$.$EaseInQuad,
          $Zoom: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 1.2
        }
      };
      _CaptionTransitions["RTTS|BL"] = {
        $Duration: 900,
        $Zoom: 1,
        $Rotate: 1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuad,
          $Top: $JssorEasing$.$EaseInQuad,
          $Zoom: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 1.2
        }
      };
      _CaptionTransitions["RTTS|BR"] = {
        $Duration: 900,
        $Zoom: 1,
        $Rotate: 1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuad,
          $Top: $JssorEasing$.$EaseInQuad,
          $Zoom: $JssorEasing$.$EaseInQuad,
          $Rotate: $JssorEasing$.$EaseInQuad,
          $Opacity: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Rotate: 1.2
        }
      };
      _CaptionTransitions["RTT*JDN|L"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JDN|R"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JDN|T"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseOutCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JDN|B"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseOutCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JUP|L"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JUP|R"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JUP|T"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JUP|B"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JDN|LT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JDN|LB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JDN|RT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JDN|RB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JDN|TL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JDN|TR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JDN|BL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JDN|BR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JUP|LT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JUP|LB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JUP|RT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JUP|RB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInCubic,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JUP|TL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JUP|TR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JUP|BL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JUP|BR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: 0.2,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseLinear,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["RTT*JDN|LB*"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        },
        $Round: {
          $Left: 0.3,
          $Top: 0.75,
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*JDN|RB*"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        },
        $Round: {
          $Left: 0.3,
          $Top: 0.75,
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*JDN1|L"] = {
        $Duration: 1200,
        $Zoom: 6,
        $Rotate: 0.25,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*JDN1|R"] = {
        $Duration: 1200,
        $Zoom: 6,
        $Rotate: 0.25,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*JDN1|T"] = {
        $Duration: 1200,
        $Zoom: 6,
        $Rotate: 0.25,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseOutWave
        },
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*JDN1|B"] = {
        $Duration: 1200,
        $Zoom: 6,
        $Rotate: 0.25,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseOutWave
        },
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*JUP1|L"] = {
        $Duration: 1200,
        $Zoom: 6,
        $Rotate: 0.25,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*JUP1|R"] = {
        $Duration: 1200,
        $Zoom: 6,
        $Rotate: 0.25,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*JUP1|T"] = {
        $Duration: 1200,
        $Zoom: 6,
        $Rotate: 0.25,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseOutWave
        },
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*JUP1|B"] = {
        $Duration: 1200,
        $Zoom: 6,
        $Rotate: 0.25,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseOutWave
        },
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*JDN1|TL"] = {
        $Duration: 1200,
        $Zoom: 6,
        $Rotate: 0.25,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*JDN1|TR"] = {
        $Duration: 1200,
        $Zoom: 6,
        $Rotate: 0.25,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*JDN1|BL"] = {
        $Duration: 1200,
        $Zoom: 6,
        $Rotate: 0.25,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*JUP1|TL"] = {
        $Duration: 1200,
        $Zoom: 6,
        $Rotate: 0.25,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Top: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*JUP1|TR"] = {
        $Duration: 1200,
        $Zoom: 6,
        $Rotate: 0.25,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Top: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*JUP1|BL"] = {
        $Duration: 1200,
        $Zoom: 6,
        $Rotate: 0.25,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Top: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic,
          $Opacity: $JssorEasing$.$EaseLinear,
          $Rotate: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WVC|LT"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 2,
        $ScaleVertical: 0.3,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WVC|LB"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 2,
        $ScaleVertical: 0.3,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WVC|RT"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 2,
        $ScaleVertical: 0.3,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WVC|RB"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 2,
        $ScaleVertical: 0.3,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WVC|TL"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 2,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WVC|TR"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 2,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WVC|BL"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 2,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WVC|BR"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 2,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WVR|LT"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 2,
        $ScaleVertical: 0.3,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WVR|LB"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 2,
        $ScaleVertical: 0.3,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WVR|RT"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 2,
        $ScaleVertical: 0.3,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WVR|RB"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 2,
        $ScaleVertical: 0.3,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WVR|TL"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 2,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WVR|TR"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 2,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WVR|BL"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 2,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WVR|BR"] = {
        $Duration: 1500,
        $Zoom: 11,
        $Rotate: 0.3,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 2,
        $Opacity: 2
      };
      _CaptionTransitions["RTT*WV*J1|LT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.8,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        },
        $Round: {
          $Left: 0.3,
          $Top: 0.5,
          $Rotate: 0.4
        }
      };
      _CaptionTransitions["RTT*WV*J1|LB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.8,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        },
        $Round: {
          $Left: 0.3,
          $Top: 0.5,
          $Rotate: 0.4
        }
      };
      _CaptionTransitions["RTT*WV*J1|RT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.8,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        },
        $Round: {
          $Left: 0.3,
          $Top: 0.5,
          $Rotate: 0.4
        }
      };
      _CaptionTransitions["RTT*WV*J1|RB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.8,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.5]
        },
        $Round: {
          $Left: 0.3,
          $Top: 0.5,
          $Rotate: 0.4
        }
      };
      _CaptionTransitions["RTT*WV*J1|TL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.8,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        },
        $Round: {
          $Left: 0.5,
          $Top: 0.3,
          $Rotate: 0.4
        }
      };
      _CaptionTransitions["RTT*WV*J1|TR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.8,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        },
        $Round: {
          $Left: 0.5,
          $Top: 0.3,
          $Rotate: 0.4
        }
      };
      _CaptionTransitions["RTT*WV*J1|BL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.8,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        },
        $Round: {
          $Left: 0.5,
          $Top: 0.3,
          $Rotate: 0.4
        }
      };
      _CaptionTransitions["RTT*WV*J1|BR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.8,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.5]
        },
        $Round: {
          $Left: 0.5,
          $Top: 0.3,
          $Rotate: 0.4
        }
      };
      _CaptionTransitions["RTT*WV*J2|LT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.6,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WV*J2|LB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.6,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WV*J2|RT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.6,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WV*J2|RB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.6,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.4,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WV*J2|TL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.6,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.4,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WV*J2|TR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.6,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.4,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WV*J2|BL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.6,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.4,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WV*J2|BR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -0.6,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.4,
        $ScaleVertical: 0.8,
        $Opacity: 2,
        $Round: {
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WV*J3|LT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInSine,
          $Top: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Top: 0.5,
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WV*J3|LB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInSine,
          $Top: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Top: 0.5,
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WV*J3|RT"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInSine,
          $Top: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Top: 0.5,
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WV*J3|RB"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInSine,
          $Top: $JssorEasing$.$EaseOutJump,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Top: 0.5,
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WV*J3|TL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Top: $JssorEasing$.$EaseInSine,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 0.5,
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WV*J3|TR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Top: $JssorEasing$.$EaseInSine,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 0.5,
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WV*J3|BL"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Top: $JssorEasing$.$EaseInSine,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 0.5,
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["RTT*WV*J3|BR"] = {
        $Duration: 1200,
        $Zoom: 11,
        $Rotate: -1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Top: $JssorEasing$.$EaseInSine,
          $Zoom: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 0.5,
          $Rotate: 0.5
        }
      };
      _CaptionTransitions["DDG|TL"] = {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.8],
          $Top: [0, 0.8]
        },
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      };
      _CaptionTransitions["DDG|TR"] = {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.8],
          $Top: [0, 0.8]
        },
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      };
      _CaptionTransitions["DDG|BL"] = {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.8],
          $Top: [0, 0.8]
        },
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      };
      _CaptionTransitions["DDG|BR"] = {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.8],
          $Top: [0, 0.8]
        },
        $Round: {
          $Left: 0.8,
          $Top: 0.8
        }
      };
      _CaptionTransitions["DDGDANCE|LT"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.8],
          $Top: [0, 0.8]
        },
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      };
      _CaptionTransitions["DDGDANCE|RT"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.8],
          $Top: [0, 0.8]
        },
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      };
      _CaptionTransitions["DDGDANCE|LB"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.8],
          $Top: [0, 0.8]
        },
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      };
      _CaptionTransitions["DDGDANCE|RB"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseInJump,
          $Zoom: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.8],
          $Top: [0, 0.8]
        },
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      };
      _CaptionTransitions["DDGPET|LT"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.05,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      };
      _CaptionTransitions["DDGPET|LB"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.05,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      };
      _CaptionTransitions["DDGPET|RT"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.05,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      };
      _CaptionTransitions["DDGPET|RB"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.05,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 0.8,
          $Top: 2.5
        }
      };
      _CaptionTransitions["FLTTR|L"] = {
        $Duration: 900,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Opacity: 2,
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["FLTTR|R"] = {
        $Duration: 900,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.1,
        $Opacity: 2,
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["FLTTR|T"] = {
        $Duration: 900,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.1,
        $ScaleVertical: 0.2,
        $Opacity: 2,
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["FLTTR|B"] = {
        $Duration: 900,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.1,
        $ScaleVertical: 0.2,
        $Opacity: 2,
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["FLTTRWN|LT"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.2,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0.1, 0.7]
        },
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["FLTTRWN|LB"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.2,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0.1, 0.7]
        },
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["FLTTRWN|RT"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.2,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0.1, 0.7]
        },
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["FLTTRWN|RB"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.2,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0.1, 0.7]
        },
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["FLTTRWN|TL"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 5,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutSine,
          $Left: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.7],
          $Left: [0.1, 0.7]
        },
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["FLTTRWN|TR"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 6,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutSine,
          $Left: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.7],
          $Left: [0.1, 0.7]
        },
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["FLTTRWN|BL"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 9,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutSine,
          $Left: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.7],
          $Left: [0.1, 0.7]
        },
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["FLTTRWN|BR"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 10,
        $Easing: {
          $Top: $JssorEasing$.$EaseInOutSine,
          $Left: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.7],
          $Left: [0.1, 0.7]
        },
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["LATENCY|LT"] = {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0.1, 0.7]
        },
        $Round: {
          $Top: 0.4
        }
      };
      _CaptionTransitions["LATENCY|LB"] = {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0.1, 0.7]
        },
        $Round: {
          $Top: 0.4
        }
      };
      _CaptionTransitions["LATENCY|RT"] = {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0.1, 0.7]
        },
        $Round: {
          $Top: 0.4
        }
      };
      _CaptionTransitions["LATENCY|RB"] = {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInOutSine,
          $Top: $JssorEasing$.$EaseInWave,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0.1, 0.7]
        },
        $Round: {
          $Top: 0.4
        }
      };
      _CaptionTransitions["LATENCY|TL"] = {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseOutSine,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0.1, 0.7],
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 0.4
        }
      };
      _CaptionTransitions["LATENCY|TR"] = {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseOutSine,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0.1, 0.7],
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 0.4
        }
      };
      _CaptionTransitions["LATENCY|BL"] = {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseOutSine,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0.1, 0.7],
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 0.4
        }
      };
      _CaptionTransitions["LATENCY|BR"] = {
        $Duration: 1200,
        $Zoom: 1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseOutSine,
          $Zoom: $JssorEasing$.$EaseInOutQuad
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0.1, 0.7],
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 0.4
        }
      };
      _CaptionTransitions["TORTUOUS|HL"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 1,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Zoom: $JssorEasing$.$EaseOutCubic
        },
        $ScaleHorizontal: 0.2,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7]
        },
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["TORTUOUS|HR"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 2,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Zoom: $JssorEasing$.$EaseOutCubic
        },
        $ScaleHorizontal: 0.2,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7]
        },
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["TORTUOUS|VB"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 8,
        $Easing: {
          $Top: $JssorEasing$.$EaseOutWave,
          $Zoom: $JssorEasing$.$EaseOutCubic
        },
        $ScaleVertical: 0.2,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.7]
        },
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["TORTUOUS|VT"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 4,
        $Easing: {
          $Top: $JssorEasing$.$EaseOutWave,
          $Zoom: $JssorEasing$.$EaseOutCubic
        },
        $ScaleVertical: 0.2,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.7]
        },
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["TORTUOUS|LT"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 5,
        $Easing: {
          $Top: $JssorEasing$.$EaseOutWave,
          $Zoom: $JssorEasing$.$EaseOutCubic
        },
        $ScaleVertical: 0.2,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["TORTUOUS|LB"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 9,
        $Easing: {
          $Top: $JssorEasing$.$EaseOutWave,
          $Zoom: $JssorEasing$.$EaseOutCubic
        },
        $ScaleVertical: 0.2,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["TORTUOUS|RT"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 6,
        $Easing: {
          $Top: $JssorEasing$.$EaseOutWave,
          $Zoom: $JssorEasing$.$EaseOutCubic
        },
        $ScaleVertical: 0.2,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["TORTUOUS|RB"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 10,
        $Easing: {
          $Top: $JssorEasing$.$EaseOutWave,
          $Zoom: $JssorEasing$.$EaseOutCubic
        },
        $ScaleVertical: 0.2,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["TORTUOUS|TL"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Zoom: $JssorEasing$.$EaseOutCubic
        },
        $ScaleHorizontal: 0.2,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7]
        },
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["TORTUOUS|TR"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Zoom: $JssorEasing$.$EaseOutCubic
        },
        $ScaleHorizontal: 0.2,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7]
        },
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["TORTUOUS|BL"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Zoom: $JssorEasing$.$EaseOutCubic
        },
        $ScaleHorizontal: 0.2,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7]
        },
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["TORTUOUS|BR"] = {
        $Duration: 1800,
        $Zoom: 1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Zoom: $JssorEasing$.$EaseOutCubic
        },
        $ScaleHorizontal: 0.2,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7]
        },
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["SPACESHIP|LT"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: -0.1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuint,
          $Top: $JssorEasing$.$EaseInWave,
          $Opacity: $JssorEasing$.$EaseInQuint
        },
        $ScaleHorizontal: 1,
        $ScaleVertical: 0.1,
        $Opacity: 2
      };
      _CaptionTransitions["SPACESHIP|LB"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: -0.1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuint,
          $Top: $JssorEasing$.$EaseInWave,
          $Opacity: $JssorEasing$.$EaseInQuint
        },
        $ScaleHorizontal: 1,
        $ScaleVertical: 0.1,
        $Opacity: 2
      };
      _CaptionTransitions["SPACESHIP|RT"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 0.1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuint,
          $Top: $JssorEasing$.$EaseInWave,
          $Opacity: $JssorEasing$.$EaseInQuint
        },
        $ScaleHorizontal: 1,
        $ScaleVertical: 0.1,
        $Opacity: 2
      };
      _CaptionTransitions["SPACESHIP|RB"] = {
        $Duration: 1200,
        $Zoom: 3,
        $Rotate: 0.1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInQuint,
          $Top: $JssorEasing$.$EaseInWave,
          $Opacity: $JssorEasing$.$EaseInQuint
        },
        $ScaleHorizontal: 1,
        $ScaleVertical: 0.1,
        $Opacity: 2
      };
      _CaptionTransitions["ATTACK|LT"] = {
        $Duration: 1500,
        $Zoom: 1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.1,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0.3, 0.7]
        },
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["ATTACK|LB"] = {
        $Duration: 1500,
        $Zoom: 1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.1,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0.3, 0.7]
        },
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["ATTACK|RT"] = {
        $Duration: 1500,
        $Zoom: 1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.1,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0.3, 0.7]
        },
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["ATTACK|RB"] = {
        $Duration: 1500,
        $Zoom: 1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInExpo,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.1,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.7],
          $Top: [0.3, 0.7]
        },
        $Round: {
          $Top: 1.3
        }
      };
      _CaptionTransitions["ATTACK|TL"] = {
        $Duration: 1500,
        $Zoom: 1,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 0.1,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["ATTACK|TR"] = {
        $Duration: 1500,
        $Zoom: 1,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 0.1,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["ATTACK|BL"] = {
        $Duration: 1500,
        $Zoom: 1,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 0.1,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["ATTACK|BR"] = {
        $Duration: 1500,
        $Zoom: 1,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseInExpo
        },
        $ScaleHorizontal: 0.1,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0.3, 0.7],
          $Top: [0, 0.7]
        },
        $Round: {
          $Left: 1.3
        }
      };
      _CaptionTransitions["LISTV|L"] = {
        $Duration: 1500,
        $Clip: 4,
        $FlyDirection: 1,
        $Easing: $JssorEasing$.$EaseInOutCubic,
        $ScaleHorizontal: 0.8,
        $ScaleClip: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0.4, 0.6],
          $Clip: [0, 0.4],
          $Opacity: [0.4, 0.6]
        }
      };
      _CaptionTransitions["LISTV|R"] = {
        $Duration: 1500,
        $Clip: 4,
        $FlyDirection: 2,
        $Easing: $JssorEasing$.$EaseInOutCubic,
        $ScaleHorizontal: 0.8,
        $ScaleClip: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0.4, 0.6],
          $Clip: [0, 0.4],
          $Opacity: [0.4, 0.6]
        }
      };
      _CaptionTransitions["LISTH|L"] = {
        $Duration: 1500,
        $Clip: 1,
        $FlyDirection: 1,
        $Easing: $JssorEasing$.$EaseInOutCubic,
        $ScaleHorizontal: 0.8,
        $ScaleClip: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0.4, 0.6],
          $Clip: [0, 0.4],
          $Opacity: [0.4, 0.6]
        }
      };
      _CaptionTransitions["LISTH|R"] = {
        $Duration: 1500,
        $Clip: 1,
        $FlyDirection: 2,
        $Easing: $JssorEasing$.$EaseInOutCubic,
        $ScaleHorizontal: 0.8,
        $ScaleClip: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0.4, 0.6],
          $Clip: [0, 0.4],
          $Opacity: [0.4, 0.6]
        }
      };
      _CaptionTransitions["LISTVC|L"] = {
        $Duration: 1500,
        $Clip: 12,
        $FlyDirection: 1,
        $Easing: $JssorEasing$.$EaseInOutCubic,
        $ScaleHorizontal: 0.8,
        $ScaleClip: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0.4, 0.6],
          $Clip: [0, 0.4],
          $Opacity: [0.4, 0.6]
        }
      };
      _CaptionTransitions["LISTVC|R"] = {
        $Duration: 1500,
        $Clip: 12,
        $FlyDirection: 2,
        $Easing: $JssorEasing$.$EaseInOutCubic,
        $ScaleHorizontal: 0.8,
        $ScaleClip: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0.4, 0.6],
          $Clip: [0, 0.4],
          $Opacity: [0.4, 0.6]
        }
      };
      _CaptionTransitions["LISTVC|B"] = {
        $Duration: 1500,
        $Clip: 12,
        $FlyDirection: 8,
        $Easing: $JssorEasing$.$EaseInOutCubic,
        $ScaleVertical: 0.8,
        $ScaleClip: 0.8,
        $Opacity: 2,
        $During: {
          $Top: [0.4, 0.6],
          $Clip: [0, 0.4],
          $Opacity: [0.4, 0.6]
        }
      };
      _CaptionTransitions["LISTVC|T"] = {
        $Duration: 1500,
        $Clip: 12,
        $FlyDirection: 4,
        $Easing: $JssorEasing$.$EaseInOutCubic,
        $ScaleVertical: 0.8,
        $ScaleClip: 0.8,
        $Opacity: 2,
        $During: {
          $Top: [0.4, 0.6],
          $Clip: [0, 0.4],
          $Opacity: [0.4, 0.6]
        }
      };
      _CaptionTransitions["LISTHC|L"] = {
        $Duration: 1500,
        $Clip: 3,
        $FlyDirection: 1,
        $Easing: $JssorEasing$.$EaseInOutCubic,
        $ScaleHorizontal: 0.8,
        $ScaleClip: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0.4, 0.6],
          $Clip: [0, 0.4],
          $Opacity: [0.4, 0.6]
        }
      };
      _CaptionTransitions["LISTHC|R"] = {
        $Duration: 1500,
        $Clip: 3,
        $FlyDirection: 2,
        $Easing: $JssorEasing$.$EaseInOutCubic,
        $ScaleHorizontal: 0.8,
        $ScaleClip: 0.8,
        $Opacity: 2,
        $During: {
          $Left: [0.4, 0.6],
          $Clip: [0, 0.4],
          $Opacity: [0.4, 0.6]
        }
      };
      _CaptionTransitions["LISTHC|B"] = {
        $Duration: 1500,
        $Clip: 3,
        $FlyDirection: 8,
        $Easing: $JssorEasing$.$EaseInOutCubic,
        $ScaleVertical: 0.8,
        $ScaleClip: 0.8,
        $Opacity: 2,
        $During: {
          $Top: [0.4, 0.6],
          $Clip: [0, 0.4],
          $Opacity: [0.4, 0.6]
        }
      };
      _CaptionTransitions["LISTHC|T"] = {
        $Duration: 1500,
        $Clip: 3,
        $FlyDirection: 4,
        $Easing: $JssorEasing$.$EaseInOutCubic,
        $ScaleVertical: 0.8,
        $ScaleClip: 0.8,
        $Opacity: 2,
        $During: {
          $Top: [0.4, 0.6],
          $Clip: [0, 0.4],
          $Opacity: [0.4, 0.6]
        }
      };
      _CaptionTransitions["WV|L"] = {
        $Duration: 1800,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Top: 2.5
        }
      };
      _CaptionTransitions["WV|R"] = {
        $Duration: 1800,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Top: 2.5
        }
      };
      _CaptionTransitions["WV|T"] = {
        $Duration: 1200,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 1.5
        }
      };
      _CaptionTransitions["WV|B"] = {
        $Duration: 1200,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 1.5
        }
      };
      _CaptionTransitions["WVC|L"] = {
        $Duration: 1800,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Top: 2.5
        }
      };
      _CaptionTransitions["WVC|R"] = {
        $Duration: 1800,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Top: 2.5
        }
      };
      _CaptionTransitions["WVC|T"] = {
        $Duration: 1200,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 1.5
        }
      };
      _CaptionTransitions["WVC|B"] = {
        $Duration: 1200,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 1.5
        }
      };
      _CaptionTransitions["WVR|L"] = {
        $Duration: 1800,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Top: 2.5
        }
      };
      _CaptionTransitions["WVR|R"] = {
        $Duration: 1800,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.3,
        $Opacity: 2,
        $Round: {
          $Top: 2.5
        }
      };
      _CaptionTransitions["JDN|L"] = {
        $Duration: 2000,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutJump
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.4,
        $Opacity: 2,
        $Round: {
          $Top: 2.5
        }
      };
      _CaptionTransitions["JDN|R"] = {
        $Duration: 2000,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutJump
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.4,
        $Opacity: 2,
        $Round: {
          $Top: 2.5
        }
      };
      _CaptionTransitions["JDN|T"] = {
        $Duration: 1500,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 1.5
        }
      };
      _CaptionTransitions["JDN|B"] = {
        $Duration: 1500,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutJump,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 1.5
        }
      };
      _CaptionTransitions["JUP|L"] = {
        $Duration: 2000,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.4,
        $Opacity: 2,
        $Round: {
          $Top: 2.5
        }
      };
      _CaptionTransitions["JUP|R"] = {
        $Duration: 2000,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInJump
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.4,
        $Opacity: 2,
        $Round: {
          $Top: 2.5
        }
      };
      _CaptionTransitions["JUP|T"] = {
        $Duration: 1500,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 1.5
        }
      };
      _CaptionTransitions["JUP|B"] = {
        $Duration: 1500,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInJump,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.3,
        $ScaleVertical: 0.6,
        $Opacity: 2,
        $Round: {
          $Left: 1.5
        }
      };
      _CaptionTransitions["FADE"] = {
        $Duration: 900,
        $Opacity: 2
      };
      _CaptionTransitions["FADE*JDN|L"] = {
        $Duration: 1200,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["FADE*JDN|R"] = {
        $Duration: 1200,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["FADE*JDN|T"] = {
        $Duration: 1200,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutCubic,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["FADE*JDN|B"] = {
        $Duration: 1200,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutCubic,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["FADE*JUP|L"] = {
        $Duration: 900,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["FADE*JUP|R"] = {
        $Duration: 900,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["FADE*JUP|T"] = {
        $Duration: 900,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["FADE*JUP|B"] = {
        $Duration: 900,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.6,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["L-JDN"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["R-JDN"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["T-JDN"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutCubic,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["B-JDN"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutCubic,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["L-JUP"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["R-JUP"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInCubic
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.5,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["T-JUP"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["B-JUP"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInCubic,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.8,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["L-WVC"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.3,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["R-WVC"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseOutWave
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.3,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["T-WVC"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 5,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.8,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["B-WVC"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseOutWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.8,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["L-WVR"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 9,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.3,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["R-WVR"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseLinear,
          $Top: $JssorEasing$.$EaseInWave
        },
        $ScaleHorizontal: 0.8,
        $ScaleVertical: 0.3,
        $During: {
          $Top: [0, 0.5]
        }
      };
      _CaptionTransitions["T-WVR"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 6,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.8,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["B-WVR"] = {
        $Duration: 1200,
        $Opacity: 2,
        $FlyDirection: 10,
        $Easing: {
          $Left: $JssorEasing$.$EaseInWave,
          $Top: $JssorEasing$.$EaseLinear
        },
        $ScaleHorizontal: 0.2,
        $ScaleVertical: 0.8,
        $During: {
          $Left: [0, 0.5]
        }
      };
      _CaptionTransitions["CLIP-FADE"] = {
        $Duration: 1200,
        $Clip: 15,
        $Opacity: 1.7,
        $During: {
          $Clip: [0.5, 0.5],
          $Opacity: [0, 0.5]
        }
      };
      _CaptionTransitions["CLIP|LR-FADE"] = {
        $Duration: 1200,
        $Clip: 3,
        $Opacity: 1.7,
        $During: {
          $Clip: [0.5, 0.5],
          $Opacity: [0, 0.5]
        }
      };
      _CaptionTransitions["CLIP|TB-FADE"] = {
        $Duration: 1200,
        $Clip: 12,
        $Opacity: 1.7,
        $During: {
          $Clip: [0.5, 0.5],
          $Opacity: [0, 0.5]
        }
      };
      _CaptionTransitions["CLIP|L-FADE"] = {
        $Duration: 1200,
        $Clip: 1,
        $Opacity: 1.7,
        $During: {
          $Clip: [0.5, 0.5],
          $Opacity: [0, 0.5]
        }
      };
      _CaptionTransitions["CLIP|R-FADE"] = {
        $Duration: 1200,
        $Clip: 2,
        $Opacity: 1.7,
        $During: {
          $Clip: [0.5, 0.5],
          $Opacity: [0, 0.5]
        }
      };
      _CaptionTransitions["CLIP|T-FADE"] = {
        $Duration: 1200,
        $Clip: 4,
        $Opacity: 1.7,
        $During: {
          $Clip: [0.5, 0.5],
          $Opacity: [0, 0.5]
        }
      };
      _CaptionTransitions["CLIP|B-FADE"] = {
        $Duration: 1200,
        $Clip: 8,
        $Opacity: 1.7,
        $During: {
          $Clip: [0.5, 0.5],
          $Opacity: [0, 0.5]
        }
      };
      _CaptionTransitions["MCLIP|L-FADE"] = {
        $Duration: 1200,
        $Clip: 1,
        $Move: true,
        $Opacity: 1.7,
        $During: {
          $Clip: [0.5, 0.5],
          $Opacity: [0, 0.5]
        }
      };
      _CaptionTransitions["MCLIP|R-FADE"] = {
        $Duration: 1200,
        $Clip: 2,
        $Move: true,
        $Opacity: 1.7,
        $During: {
          $Clip: [0.5, 0.5],
          $Opacity: [0, 0.5]
        }
      };
      _CaptionTransitions["MCLIP|T-FADE"] = {
        $Duration: 1200,
        $Clip: 4,
        $Move: true,
        $Opacity: 1.7,
        $During: {
          $Clip: [0.5, 0.5],
          $Opacity: [0, 0.5]
        }
      };
      _CaptionTransitions["MCLIP|B-FADE"] = {
        $Duration: 1200,
        $Clip: 8,
        $Move: true,
        $Opacity: 1.7,
        $During: {
          $Clip: [0.5, 0.5],
          $Opacity: [0, 0.5]
        }
      };
      _CaptionTransitions["L*CLIP"] = {
        $Duration: 1200,
        $Clip: 12,
        $FlyDirection: 1,
        $Easing: $JssorEasing$.$EaseInCubic,
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["R*CLIP"] = {
        $Duration: 1200,
        $Clip: 12,
        $FlyDirection: 2,
        $Easing: $JssorEasing$.$EaseInCubic,
        $ScaleHorizontal: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["T*CLIP"] = {
        $Duration: 1200,
        $Clip: 3,
        $FlyDirection: 4,
        $Easing: $JssorEasing$.$EaseInCubic,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["B*CLIP"] = {
        $Duration: 1200,
        $Clip: 3,
        $FlyDirection: 8,
        $Easing: $JssorEasing$.$EaseInCubic,
        $ScaleVertical: 0.6,
        $Opacity: 2
      };
      _CaptionTransitions["T-L*"] = {
        $Duration: 1500,
        $Rotate: -1,
        $FlyDirection: 5,
        $Easing: $JssorEasing$.$EaseLinear,
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.33],
          $Top: [0.67, 0.33],
          $Rotate: [0, 0.33]
        },
        $Round: {
          $Rotate: 0.25
        }
      };
      _CaptionTransitions["T-R*"] = {
        $Duration: 1500,
        $Rotate: 1,
        $FlyDirection: 6,
        $Easing: $JssorEasing$.$EaseLinear,
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.33],
          $Top: [0.67, 0.33],
          $Rotate: [0, 0.33]
        },
        $Round: {
          $Rotate: 0.25
        }
      };
      _CaptionTransitions["B-L*"] = {
        $Duration: 1500,
        $Rotate: -1,
        $FlyDirection: 9,
        $Easing: $JssorEasing$.$EaseLinear,
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.33],
          $Top: [0.67, 0.33],
          $Rotate: [0, 0.33]
        },
        $Round: {
          $Rotate: 0.25
        }
      };
      _CaptionTransitions["B-R*"] = {
        $Duration: 1500,
        $Rotate: -1,
        $FlyDirection: 10,
        $Easing: $JssorEasing$.$EaseLinear,
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.33],
          $Top: [0.67, 0.33],
          $Rotate: [0, 0.33]
        },
        $Round: {
          $Rotate: 0.25
        }
      };
      _CaptionTransitions["L-T*"] = {
        $Duration: 1500,
        $Rotate: -1,
        $FlyDirection: 5,
        $Easing: $JssorEasing$.$EaseLinear,
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0.67, 0.33],
          $Top: [0, 0.33],
          $Rotate: [0, 0.33]
        },
        $Round: {
          $Rotate: 0.25
        }
      };
      _CaptionTransitions["L-B*"] = {
        $Duration: 1500,
        $Rotate: -1,
        $FlyDirection: 10,
        $Easing: $JssorEasing$.$EaseLinear,
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0.67, 0.33],
          $Top: [0, 0.33],
          $Rotate: [0, 0.33]
        },
        $Round: {
          $Rotate: 0.25
        }
      };
      _CaptionTransitions["R-T*"] = {
        $Duration: 1500,
        $Rotate: -1,
        $FlyDirection: 6,
        $Easing: $JssorEasing$.$EaseLinear,
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0.67, 0.33],
          $Top: [0, 0.33],
          $Rotate: [0, 0.33]
        },
        $Round: {
          $Rotate: 0.25
        }
      };
      _CaptionTransitions["R-B*"] = {
        $Duration: 1500,
        $Rotate: -1,
        $FlyDirection: 10,
        $Easing: $JssorEasing$.$EaseLinear,
        $ScaleHorizontal: 0.5,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0.67, 0.33],
          $Top: [0, 0.33],
          $Rotate: [0, 0.33]
        },
        $Round: {
          $Rotate: 0.25
        }
      };
      _CaptionTransitions["FADE-L*"] = {
        $Duration: 1500,
        $Rotate: 6.25,
        $FlyDirection: 1,
        $Easing: $JssorEasing$.$EaseLinear,
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.33],
          $Rotate: [0, 0.33]
        },
        $Round: {
          $Rotate: 0.25
        }
      };
      _CaptionTransitions["FADE-R*"] = {
        $Duration: 1500,
        $Rotate: 6.25,
        $FlyDirection: 2,
        $Easing: $JssorEasing$.$EaseLinear,
        $ScaleHorizontal: 0.5,
        $Opacity: 2,
        $During: {
          $Left: [0, 0.33],
          $Rotate: [0, 0.33]
        },
        $Round: {
          $Rotate: 0.25
        }
      };
      _CaptionTransitions["FADE-T*"] = {
        $Duration: 1500,
        $Rotate: 6.25,
        $FlyDirection: 4,
        $Easing: $JssorEasing$.$EaseLinear,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.33],
          $Rotate: [0, 0.33]
        },
        $Round: {
          $Rotate: 0.25
        }
      };
      _CaptionTransitions["FADE-B*"] = {
        $Duration: 1500,
        $Rotate: 6.25,
        $FlyDirection: 8,
        $Easing: $JssorEasing$.$EaseLinear,
        $ScaleVertical: 0.5,
        $Opacity: 2,
        $During: {
          $Top: [0, 0.33],
          $Rotate: [0, 0.33]
        },
        $Round: {
          $Rotate: 0.25
        }
      };
      var options = {
        $FillMode: 2,
        $AutoPlay: false,
        $AutoPlayInterval: 300000,
        $PauseOnHover: 1,
        $ArrowKeyNavigation: true,
        $SlideEasing: $JssorEasing$.$EaseOutQuint,
        $SlideDuration: 800,
        $MinDragOffsetToSlide: 20,
        $SlideSpacing: 0,
        $DisplayPieces: 1,
        $ParkingPosition: 0,
        $UISearchMode: 1,
        $PlayOrientation: 1,
        $DragOrientation: 1,
        $SlideshowOptions: {
          $Class: $JssorSlideshowRunner$,
          $Transitions: _SlideshowTransitions,
          $TransitionsOrder: 0,
          $ShowLink: true
        },
        $CaptionSliderOptions: {
          $Class: $JssorCaptionSlider$,
          $CaptionTransitions: _CaptionTransitions,
          $PlayInMode: 10,
          $PlayOutMode: 4
        },
        $BulletNavigatorOptions: {
          $Class: $JssorBulletNavigator$,
          $ChanceToShow: 2,
          $AutoCenter: 1,
          $Steps: 1,
          $Lanes: 1,
          $SpacingX: 8,
          $SpacingY: 8,
          $Orientation: 1
        },
        $ArrowNavigatorOptions: {
          $Class: $JssorArrowNavigator$,
          $ChanceToShow: 2,
          $AutoCenter: 2,
          $Steps: 1
        }
      };
      var insideslider_mod = new $JssorSlider$("insideslider_mod", options);
      $('.homepage-slideshow [data-u="arrowleft"]').on('click', function() {
        insideslider_mod.$Prev();
      });
      $('.homepage-slideshow [data-u="arrowleft"]').on('click', function() {
        insideslider_mod.$Next();
      });

      function ScaleSlider() {
        var cfgWidth = 1920;
        var cfgHeight = 500;
        var parentWidth = insideslider_mod.$Elmt.parentNode.clientWidth;
        var slideCurrWidth = $('#insideslider_mod').outerWidth();
        var baseWidthMax = 1200;
        var slideWrapRate = baseWidthMax / cfgHeight;
        var arrowleft = $('#insideslider_mod [data-u="arrowleft"]');
        var arrowright = $('#insideslider_mod [data-u="arrowright"]');
        if (cfgWidth <= baseWidthMax) {
          arrowleft.css({
            'left': 30
          });
          arrowright.css({
            'right': 30
          });
        } else {
          arrowleft.css({
            'left': ((cfgWidth - baseWidthMax) / 2) + 30
          });
          arrowright.css({
            'right': ((cfgWidth - baseWidthMax) / 2) + 30
          });
        }
        $('#insideslider_mod').css({
          'left': '50%',
          'margin-left': -(slideCurrWidth / 2)
        })
        if (parentWidth) {
          if (cfgWidth > baseWidthMax) {
            if (parentWidth <= baseWidthMax) {
              insideslider_mod.$ScaleHeight(parentWidth / slideWrapRate);
            } else {
              insideslider_mod.$ScaleHeight(cfgHeight);
            }
          } else {
            insideslider_mod.$ScaleWidth(Math.min(cfgWidth, parentWidth));
          }
        } else {
          window.setTimeout(ScaleSlider, 30);
        }
      }
      ScaleSlider();
      if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
        $(window).on('resize', ScaleSlider);
      }
      $(window).bind("load", ScaleSlider);
      $(window).bind("resize", ScaleSlider);
      $(window).bind("orientationchange", ScaleSlider);
    });
    jQuery(window).on('load', function() {
      jQuery('#insideslider_mod .loading').fadeOut();
    });;
    $(document).ready(function() {
      $('#slide').after('<div id="testimonial_pagination">').cycle({
        fx: 'scrollHorz',
        speed: 1000,
        timeout: 3000,
        pager: '#testimonial_pagination'
      });
      $('#media_post').fancybox();
      $('.fancybox-media').attr('rel', 'media-gallery').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        prevEffect: 'none',
        nextEffect: 'none',
        arrows: false,
        helpers: {
          media: {},
          buttons: {}
        }
      });
      if ($(window).width() < 768) {
        $('#left_column #wrapper').css({
          'display': 'none'
        });
        $('#right_column #wrapper').css({
          'display': 'none'
        });
      }
    });;
    var placeholder2 = "Your e-mail";
    $(document).ready(function() {
      $('#newsletter-input-popup').on({
        focus: function() {
          if ($(this).val() == placeholder2) {
            $(this).val('');
          }
        },
        blur: function() {
          if ($(this).val() == '') {
            $(this).val(placeholder2);
          }
        }
      });
    }); /* ]]> */

