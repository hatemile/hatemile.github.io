(function($){
    $(document).ready(function() {
        var configure = new hatemile.util.Configure(hatemile_configuration);
        var htmlParser = new hatemile.util.html.vanilla
                .VanillaHTMLDOMParser(document);
        
        var accessibleEvent = new hatemile.implementation
                .AccessibleEventImplementation(htmlParser);
        accessibleEvent.makeAccessibleAllClickEvents();
        accessibleEvent.makeAccessibleAllDragandDropEvents();
        accessibleEvent.makeAccessibleAllHoverEvents();
        
        var accessibleAssociation = new hatemile.implementation
                .AccessibleAssociationImplementation(htmlParser, configure);
        accessibleAssociation.associateAllDataCellsWithHeaderCells();
        
        var accessibleDisplay = new hatemile.implementation
                .AccessibleDisplayScreenReaderImplementation(htmlParser,
                        configure, window.navigator.userAgent);
        accessibleDisplay.displayAllWAIARIAStates();
        accessibleDisplay.displayAllLinksAttributes();
        accessibleDisplay.displayAllAlternativeTextImages();
        accessibleDisplay.displayAllTitles();
        accessibleDisplay.displayAllShortcuts();
        
        var accessibleNavigation = new hatemile.implementation
                .AccessibleNavigationImplementation(htmlParser, configure,
                        hatemile_configuration_skippers);
        accessibleNavigation.provideNavigationByAllHeadings();
        accessibleNavigation.provideNavigationToAllLongDescriptions();
        accessibleNavigation.provideNavigationByAllSkippers();
        
        accessibleDisplay.displayAllLanguages();
        accessibleDisplay.displayAllRoles();
    });
})(jQuery);
