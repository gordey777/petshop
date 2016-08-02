
  /* <![CDATA[ */ ;
  var CUSTOMIZE_TEXTFIELD = 1;
  var Enable_productVerticalThumb = true;
  var FIELD_enableCountdownTimer = true;
  var FIELD_mainLayout = 'fullwidth';
  var FIELD_stickyCart = true;
  var FIELD_stickyMenu = true;
  var FIELD_stickySearch = true;
  var FancyboxI18nClose = 'Close';
  var FancyboxI18nNext = 'Next';
  var FancyboxI18nPrev = 'Previous';
  var LANG_RTL = '0';
  var PS_CATALOG_MODE = false;
  var added_to_wishlist = 'The product was successfully added to your wishlist.';
  var ajax_allowed = true;
  var ajaxsearch = true;
  var allowBuyWhenOutOfStock = false;
  var attribute_anchor_separator = '-';
  var attributesCombinations = [{
    "id_attribute": "2",
    "id_attribute_group": "1",
    "attribute": "m",
    "group": "size"
  }, {
    "id_attribute": "16",
    "id_attribute_group": "3",
    "attribute": "yellow",
    "group": "color"
  }, {
    "id_attribute": "3",
    "id_attribute_group": "1",
    "attribute": "l",
    "group": "size"
  }, {
    "id_attribute": "1",
    "id_attribute_group": "1",
    "attribute": "s",
    "group": "size"
  }, {
    "id_attribute": "15",
    "id_attribute_group": "3",
    "attribute": "green",
    "group": "color"
  }];
  var availableLaterValue = '';
  var availableNowValue = 'In stock';
  var baseDir = '';
  var baseUri = '';
  var combinations = {
    "84": {
      "attributes_values": {
        "1": "S",
        "3": "Green"
      },
      "attributes": [1, 15],
      "price": 0,
      "specific_price": false,
      "ecotax": 0,
      "weight": 0,
      "quantity": 2,
      "reference": null,
      "unit_impact": 0,
      "minimal_quantity": "1",
      "date_formatted": "",
      "available_date": "",
      "id_image": -1,
      "list": "'1','15'"
    },
    "87": {
      "attributes_values": {
        "1": "S",
        "3": "Yellow"
      },
      "attributes": [1, 16],
      "price": 0,
      "specific_price": false,
      "ecotax": 0,
      "weight": 0,
      "quantity": 2,
      "reference": null,
      "unit_impact": 0,
      "minimal_quantity": "1",
      "date_formatted": "",
      "available_date": "",
      "id_image": -1,
      "list": "'1','16'"
    },
    "82": {
      "attributes_values": {
        "1": "M",
        "3": "Yellow"
      },
      "attributes": [2, 16],
      "price": 0,
      "specific_price": false,
      "ecotax": 0,
      "weight": 0,
      "quantity": 3,
      "reference": null,
      "unit_impact": 0,
      "minimal_quantity": "1",
      "date_formatted": "",
      "available_date": "",
      "id_image": -1,
      "list": "'2','16'"
    },
    "85": {
      "attributes_values": {
        "1": "M",
        "3": "Green"
      },
      "attributes": [2, 15],
      "price": 0,
      "specific_price": false,
      "ecotax": 0,
      "weight": 0,
      "quantity": 2,
      "reference": null,
      "unit_impact": 0,
      "minimal_quantity": "1",
      "date_formatted": "",
      "available_date": "",
      "id_image": -1,
      "list": "'2','15'"
    },
    "83": {
      "attributes_values": {
        "1": "L",
        "3": "Yellow"
      },
      "attributes": [3, 16],
      "price": 0,
      "specific_price": false,
      "ecotax": 0,
      "weight": 0,
      "quantity": 2,
      "reference": null,
      "unit_impact": 0,
      "minimal_quantity": "1",
      "date_formatted": "",
      "available_date": "",
      "id_image": -1,
      "list": "'3','16'"
    },
    "86": {
      "attributes_values": {
        "1": "L",
        "3": "Green"
      },
      "attributes": [3, 15],
      "price": 0,
      "specific_price": false,
      "ecotax": 0,
      "weight": 0,
      "quantity": 2,
      "reference": null,
      "unit_impact": 0,
      "minimal_quantity": "1",
      "date_formatted": "",
      "available_date": "",
      "id_image": -1,
      "list": "'3','15'"
    }
  };
  var combinationsFromController = {
    "84": {
      "attributes_values": {
        "1": "S",
        "3": "Green"
      },
      "attributes": [1, 15],
      "price": 0,
      "specific_price": false,
      "ecotax": 0,
      "weight": 0,
      "quantity": 2,
      "reference": null,
      "unit_impact": 0,
      "minimal_quantity": "1",
      "date_formatted": "",
      "available_date": "",
      "id_image": -1,
      "list": "'1','15'"
    },
    "87": {
      "attributes_values": {
        "1": "S",
        "3": "Yellow"
      },
      "attributes": [1, 16],
      "price": 0,
      "specific_price": false,
      "ecotax": 0,
      "weight": 0,
      "quantity": 2,
      "reference": null,
      "unit_impact": 0,
      "minimal_quantity": "1",
      "date_formatted": "",
      "available_date": "",
      "id_image": -1,
      "list": "'1','16'"
    },
    "82": {
      "attributes_values": {
        "1": "M",
        "3": "Yellow"
      },
      "attributes": [2, 16],
      "price": 0,
      "specific_price": false,
      "ecotax": 0,
      "weight": 0,
      "quantity": 3,
      "reference": null,
      "unit_impact": 0,
      "minimal_quantity": "1",
      "date_formatted": "",
      "available_date": "",
      "id_image": -1,
      "list": "'2','16'"
    },
    "85": {
      "attributes_values": {
        "1": "M",
        "3": "Green"
      },
      "attributes": [2, 15],
      "price": 0,
      "specific_price": false,
      "ecotax": 0,
      "weight": 0,
      "quantity": 2,
      "reference": null,
      "unit_impact": 0,
      "minimal_quantity": "1",
      "date_formatted": "",
      "available_date": "",
      "id_image": -1,
      "list": "'2','15'"
    },
    "83": {
      "attributes_values": {
        "1": "L",
        "3": "Yellow"
      },
      "attributes": [3, 16],
      "price": 0,
      "specific_price": false,
      "ecotax": 0,
      "weight": 0,
      "quantity": 2,
      "reference": null,
      "unit_impact": 0,
      "minimal_quantity": "1",
      "date_formatted": "",
      "available_date": "",
      "id_image": -1,
      "list": "'3','16'"
    },
    "86": {
      "attributes_values": {
        "1": "L",
        "3": "Green"
      },
      "attributes": [3, 15],
      "price": 0,
      "specific_price": false,
      "ecotax": 0,
      "weight": 0,
      "quantity": 2,
      "reference": null,
      "unit_impact": 0,
      "minimal_quantity": "1",
      "date_formatted": "",
      "available_date": "",
      "id_image": -1,
      "list": "'3','15'"
    }
  };
  var comparator_max_item = 3;
  var comparedProductsIds = [];
  var confirm_report_message = 'Are you sure that you want to report this comment?';
  var contentOnly = false;
  var countdownDay = 'Day';
  var countdownDays = 'Days';
  var countdownHour = 'Hour';
  var countdownHours = 'Hours';
  var countdownMinute = 'Min';
  var countdownMinutes = 'Mins';
  var countdownSecond = 'Sec';
  var countdownSeconds = 'Secs';
  var currency = {
    "id": 1,
    "name": "Dollar",
    "iso_code": "USD",
    "iso_code_num": "840",
    "sign": "$",
    "blank": "0",
    "conversion_rate": "1.000000",
    "deleted": "0",
    "format": "1",
    "decimals": "1",
    "active": "1",
    "prefix": "$ ",
    "suffix": "",
    "id_shop_list": null,
    "force_id": false
  };
  var currencyBlank = 0;
  var currencyFormat = 1;
  var currencyRate = 1;
  var currencySign = '$';
  var currentDate = '2016-07-30 10:23:14';
  var customerGroupWithoutTax = true;
  var customizationFields = false;
  var customizationId = null;
  var customizationIdMessage = 'Customization #';
  var default_eco_tax = 0;
  var delete_txt = 'Delete';
  var displayDiscountPrice = '0';
  var displayList = false;
  var displayPrice = 1;
  var doesntExist = 'This combination does not exist for this product. Please select another combination.';
  var doesntExistNoMore = 'This product is no longer in stock';
  var doesntExistNoMoreBut = 'with those attributes but is available with others.';
  var ecotaxTax_rate = 0;
  var fieldRequired = 'Please fill in all the required fields before saving your customization.';
  var fieldblocksearch_type = 'top';
  var fieldbs_autoscroll = false;
  var fieldbs_maxitem = '5';
  var fieldbs_minitem = '2';
  var fieldbs_navigation = true;
  var fieldbs_pagination = false;
  var fieldbs_pauseonhover = false;
  var freeProductTranslation = 'Free!';
  var freeShippingTranslation = 'Free shipping!';
  var generated_date = 1469888593;
  var groupReduction = 0;
  var hasDeliveryAddress = false;
  var highDPI = false;
  var idDefaultImage = 96;
  var id_lang = 1;
  var id_product = 16;
  var img_dir = 'img/';
  var img_prod_dir = 'img/';
  var img_ps_dir = 'img/';
  var instantsearch = false;
  var isGuest = 0;
  var isLogged = 0;
  var isMobile = false;
  var jqZoomEnabled = false;
  var langIso = 'en-us';
  var loggin_required = 'You must be logged in to manage your wishlist.';
  var maxQuantityToAllowDisplayOfLastQuantityMessage = 3;
  var max_item = 'You cannot add more than 3 product(s) to the product comparison';
  var min_item = 'Please select at least one product';
  var minimalQuantity = 1;
  var moderation_active = true;
  var mywishlist_url = '';
  var noTaxForThisProduct = true;
  var oosHookJsCodeFunctions = [];
  var page_name = 'product';
  var placeholder_blocknewsletter = 'Your e-mail';
  var priceDisplayMethod = 1;
  var priceDisplayPrecision = 2;
  var productAvailableForOrder = true;
  var productBasePriceTaxExcl = 20.501236;
  var productBasePriceTaxExcluded = 20.501236;
  var productBasePriceTaxIncl = 20.501236;
  var productHasAttributes = true;
  var productPrice = 20.501236;
  var productPriceTaxExcluded = 20.501236;
  var productPriceTaxIncluded = 20.501236;
  var productPriceWithoutReduction = 20.501236;
  var productReference = 'demo_7';
  var productShowPrice = true;
  var productUnitPriceRatio = 0;
  var product_fileButtonHtml = 'Choose File';
  var product_fileDefaultHtml = 'No file selected';
  var product_specific_price = [];
  var productcomment_added = 'Your comment has been added!';
  var productcomment_added_moderation = 'Your comment has been added and will be available once approved by a moderator.';
  var productcomment_ok = 'OK';
  var productcomment_title = 'New comment';
  var productcomments_controller_url = '';
  var productcomments_url_rewrite = true;
  var quantitiesDisplayAllowed = true;
  var quantityAvailable = 13;
  var quickView = true;
  var reduction_percent = 0;
  var reduction_price = 0;
  var removingLinkText = 'remove this product from my cart';
  var roundMode = 2;
  var search_url = '';
  var secure_key = 'ddcb2440ef8782d202065557365b8981';
  var sharing_img = 'img/beagle-96.jpg';
  var sharing_name = 'Beagle';
  var sharing_url = '';
  var specific_currency = false;
  var specific_price = 0;
  var static_token = '86de8cec65ff0019f7b7f41977d25940';
  var stf_msg_error = 'Your e-mail could not be sent. Please check the e-mail address and try again.';
  var stf_msg_required = 'You did not fill required fields';
  var stf_msg_success = 'Your e-mail has been sent successfully';
  var stf_msg_title = 'Send to a friend';
  var stf_secure_key = '43f3d906433dcf2ed533c705c308bd3f';
  var stock_management = 1;
  var taxRate = 0;
  var toBeDetermined = 'To be determined';
  var token = '86de8cec65ff0019f7b7f41977d25940';
  var upToTxt = 'Up to';
  var uploading_in_progress = 'Uploading in progress, please be patient.';
  var usingSecureMode = false;
  var wishlistProductsIds = false; /* ]]> */