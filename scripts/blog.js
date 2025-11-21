import DecapCmsApp from "decap-cms-app";
// Initialize the CMS object
DecapCmsApp.init();
// Now the registry is available via the DecapCmsApp object.
DecapCmsApp.registerPreviewTemplate("my-template", MyTemplate);
