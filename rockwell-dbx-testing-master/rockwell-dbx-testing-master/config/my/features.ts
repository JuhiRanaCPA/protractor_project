export const features = {
  // Use dev for development features
  dev: [
    // Login
    '../../../tests/my/features/login/login.feature',
    // My Equipment
    '../../../tests/my/features/my-contacts/myContactUpdate.feature',
    // Logout
    '../../../tests/my/features/logout/logout.feature',
  ],

  remoteDev: [
    // Login
    '../../../tests/my/features/login/login.feature',
    // My Equipment
    '../../../tests/my/features/my-equipment/MyEquipment.feature',
    // Logout
    '../../../tests/my/features/logout/logout.feature',
  ],

  // Add to prod when a feature is ready to run on browserstack sessions
  prod: [
    // Login: working as of 8/14 release/9.0
    '../../../tests/my/features/login/login.feature',
    // Homepage: working as of 8/14 release/9.0
    '../../../tests/my/features/homepage/homepageHeader.feature',
    '../../../tests/my/features/homepage/verifySearchManageBrowseUI.feature',
    // '../../../tests/my/features/homepage/Reading-CAPM-BOM-Share-Notifications.feature',
    // Search: working as of 8/14 release/9.0
    '../../../tests/my/features/search/searchproduct.feature',
    '../../../tests/my/features/search/searchapp.feature',
    // '../../../tests/my/features/search/searchbom.feature',
    '../../../tests/my/features/search/searchnoresult.feature',
    '../../../tests/my/features/search/searchdiscontinuedproduct.feature',
    '../../../tests/my/features/search/productAvailability.feature',
    '../../../tests/my/features/search/quicklink.feature',
    // Menu: working as of 8/26 release/9.0
    '../../../tests/my/features/menu/menuDrawer.feature',
    // Visit Apps: working as of 8/26 release/9.0
    '../../../tests/my/features/visitapp/AddRemoveApp.feature',
    // // Help Center: Working on ONLY Prod/RAQA - as of 8/19 release/9.0 - Use @Prod or @Raqa to run
    // '../../../tests/my/features/help-center/helpCenter.feature',
    // Encode BOM
    '../../../tests/my/features/bom/EncodeHTMLInManualProductBOM.feature',
    // BOM working as of 8/14 release/9.0
    '../../../tests/my/features/bom/CreateEditNameDeleteBom.feature',
    // BOM ORDERS
    '../../../tests/my/features/bom/BOM-Orders-Navigation.feature',
    // BOM QUOTES
    '../../../tests/my/features/bom/bomQuotesNavigation.feature',
    // Product Registration
    '../../../tests/my/features/product-registration/RegisterProduct-Company-Customer.feature',
    '../../../tests/my/features/product-registration/CreateNewCustomer.feature',
    '../../../tests/my/features/product-registration/RegisteredProductList.feature',
    // Repairs
    '../../../tests/my/features/repairs/VerifyMyOrderMyQuotesTabs.feature',
    '../../../tests/my/features/repairs/CreateQuoteEditProductDeleteQuote.feature',
    // '../../../tests/my/features/repairs/Repairs-Quotes-Search.feature',
    // '../../../tests/my/features/repairs/RepairsOrdersSearch.feature',
    '../../../tests/my/features/repairs/FilterQuotes.feature',
    // // My Equipment
    // '../../../tests/my/features/my-equipment/MyEquipment.feature',
    // // My Services
    // '../../../tests/my/features/services/ServicesMarketingPage.feature',
    // '../../../tests/my/features/services/ServicesSortTicketsAndContracts.feature',
    // '../../../tests/my/features/services/ServicesFilterTicketsAndContracts.feature',
    // '../../../tests/my/features/services/ServicesInsightsPage.feature',

    // Update My Contacts
    '../../../tests/my/features/my-contacts/myContactUpdate.feature',

    // New User Validation
    '../../../tests/my/features/new-user-validation/NewUserValidation.feature',

    // Verify Apps Details page
    '../../../tests/my/features/visitapp/appDetails.feature',

    // Logout
    '../../../tests/my/features/logout/logout.feature',
  ],
};
