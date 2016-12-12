<?php
$I = new AcceptanceTester($scenario);
$I->wantTo('Verificar que Lista de Preguntas - All - Funciona');
$I->amHttpAuthenticated("yenny.navarro","0e9c305be2086dddde743735105aceb5");
$I->sendGET('/Preguntas/get/all');
$I->seeResponseCodeIs(200);
$I->seeResponseIsJson();
$I->seeResponseJsonMatchesJsonPath('$.[*].ID_PREGUNTA');