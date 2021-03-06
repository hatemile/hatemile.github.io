---
layout: project_page
title: HaTeMiLe for JavaScript
permalink: /projects/hatemile_for_javascript/
---

HaTeMiLe (HTML Accessible) is a open source library writen in CoffeeScript and compiled to JavaScript, that can convert a HTML code in a HTML code more accessible.

### Features

If you want know the features of HaTeMiLe for JavaScript, read the [features page](/projects/hatemile_for_javascript/features/).

### Documentation

To generate the full API documentation of HaTeMiLe of JavaScript:

1. [Install Node.js](https://nodejs.org/en/download/package-manager/);
2. [Install the dependencies of HaTeMiLe of JavaScript](https://docs.npmjs.com/cli/install);
3. Execute the command `grunt doc` in HaTeMiLe of JavaScript directory.

Or [read the API documentation here](/projects/hatemile_for_javascript/documentation/).

### Usage

Include the configuration, dependencies and solutions scripts and styles:

```html
<!-- Hide visual changes -->
<link rel="stylesheet" type="text/css" href="/path/to/css/hide_changes.css" />
<!-- Configuration -->
<script type="text/javascript" src="/path/to/_locales/en_US/js/configurations.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile-skippers.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile-symbols.js"></script>
<!-- Dependencies -->
<script type="text/javascript" src="/path/to/js/eventlistener.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile/util/CommonFunctions.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile/util/Configure.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile/util/IDGenerator.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile/util/html/vanilla/VanillaHTMLDOMParser.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile/util/html/vanilla/VanillaHTMLDOMElement.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile/util/html/vanilla/VanillaHTMLDOMTextNode.js"></script>
<script type="text/javascript" src="/path/to/js/cssParser.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile/util/css/jscssp/JSCSSPParser.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile/util/css/jscssp/JSCSSPRule.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile/util/css/jscssp/JSCSSPDeclaration.js"></script>
<!-- Solutions -->
<script type="text/javascript" src="/path/to/js/hatemile/implementation/AccessibleCSSImplementation.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile/implementation/AccessibleEventImplementation.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile/implementation/AccessibleFormImplementation.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile/implementation/AccessibleDisplayScreenReaderImplementation.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile/implementation/AccessibleNavigationImplementation.js"></script>
<script type="text/javascript" src="/path/to/js/hatemile/implementation/AccessibleAssociationImplementation.js"></script>
```

Instanciate the configuration, the parsers and solution classes and execute them:

```javascript
//Configure
var configuration = new hatemile.util.Configure(hatemile_configuration);
//Parsers
var htmlParser = new hatemile.util.html.vanilla.VanillaHTMLDOMParser(document);
var cssParser = new hatemile.util.css.jscssp.JSCSSPParser(document, location.href);
//Execute
var accessibleCSS = new hatemile.implementation.AccessibleCSSImplementation(htmlParser, cssParser, hatemile_configuration_symbols);
accessibleCSS.provideAllSpeakProperties();

var accessibleEvent = new hatemile.implementation.AccessibleEventImplementation(htmlParser);
accessibleEvent.makeAccessibleAllDragandDropEvents();
accessibleEvent.makeAccessibleAllHoverEvents();
accessibleEvent.makeAccessibleAllClickEvents();

var accessibleForm = new hatemile.implementation.AccessibleFormImplementation(htmlParser, configuration);
accessibleForm.markAllRequiredFields()
accessibleForm.markAllRangeFields();
accessibleForm.markAllAutoCompleteFields();
accessibleForm.markAllInvalidFields();

var accessibleNavigation = new hatemile.implementation.AccessibleNavigationImplementation(htmlParser, configuration, hatemile_configuration_skippers);
accessibleNavigation.provideNavigationByAllHeadings();
accessibleNavigation.provideNavigationByAllSkippers();
accessibleNavigation.provideNavigationToAllLongDescriptions();

var accessibleAssociation = new hatemile.implementation.AccessibleAssociationImplementation(htmlParser, configuration);
accessibleAssociation.associateAllDataCellsWithHeaderCells();
accessibleAssociation.associateAllLabelsWithFields();

var accessibleScreenReader = new hatemile.implementation.AccessibleDisplayScreenReaderImplementation(htmlParser, configuration, navigator.userAgent);
accessibleScreenReader.displayAllRoles();
accessibleScreenReader.displayAllCellHeaders();
accessibleScreenReader.displayAllShortcuts();
accessibleScreenReader.displayAllWAIARIAStates();
accessibleScreenReader.displayAllLinksAttributes();
accessibleScreenReader.displayAllTitles();
accessibleScreenReader.displayAllDragsAndDrops();
accessibleScreenReader.displayAllLanguages();
```

### Contributing

If you want contribute with HaTeMiLe for JavaScript, read [contributing guidelines](/projects/hatemile_for_javascript/contributing/).
