/// <reference path="../Common/Helpers/LanguageList.ts" />

namespace FruitCorrect.ScriptInitialization {
    Q.Config.responsiveDialogs = true;
    Q.Config.rootNamespaces.push('FruitCorrect');
    Serenity.EntityDialog.defaultLanguageList = LanguageList.getValue;
}