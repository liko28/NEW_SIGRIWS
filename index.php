<?php
include "vendor/autoload.php";
include "config.php";

use Helpers\Authenticator as Authenticator;
use Helpers\Logger as Logger;
use Models\Connection as Connection;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Controllers\ReferenceListController as ReferenceList;
use Controllers\MunicipioController as Municipio;
use Controllers\DepartamentoController as Departamento;
use Controllers\CIE10Controller as CIE10;
use Controllers\AreaController as Area;
use Controllers\IpsController as Ips;
use Controllers\UserTypeController as UserType;
use Controllers\NewsTypeController as NovedadesTipo;
use Controllers\NewsListController as NovedadesLista;
use Controllers\PECGuideController as PECGuide;
use Controllers\PECObjetiveController as PECObjetive;
use Controllers\PECProcessController  as PECProcess;
use Controllers\PECScheduleController  as PECSchedule;
use Controllers\PECTopicController  as PECTopic;
use Controllers\ScheduleController as Schedule;

/** Instanciacion de la APP $app */
$app = new \Slim\App(CONFIG);

/** Contenedor de Custom Classes*/
$container = $app->getContainer();

/** Database */
$container['db'] = function () {
    return new Connection(...CONNECTION_CREDENTIALS);
};

/** UserName */
$container['userName'] = function () {
    return $_SERVER['PHP_AUTH_USER'];
};

/** Password */
$container['password'] = function () {
    return $_SERVER['PHP_AUTH_PW'];
};

//TODO OTROS MENSAJES DE ERROR
/** Error Conn */
$container['errorHandler'] = function ($c) {
    return function ($request, $response, $exception) use ($c) {
        $c['logger']->addCritical($request->getUri(),array("ERROR" => $exception));
        if($_SERVER['SERVER_ADDR'] == '127.0.0.1') {
            return $c['response']->withStatus(500)
                ->write($exception);
        } else {
            return $c['response']->withStatus(500)
                ->write(ERROR_CONN);
        }
    };
};

/** Error 400 */
$container['notFoundHandler'] = function ($c) {
    return function ($request, $response) use ($c) {
        $c['logger']->addError($request->getUri(),array("ERROR"=>ERROR_404));
        return $c['response']->withStatus(404)
            ->write(ERROR_404);
    };
};

/** Error 500 */
$container['phpErrorHandler'] = function($c) {
  return function ($request, $response, $exception) use ($c) {
      $c['logger']->addCritical($request->getUri(),array("ERROR" => $exception));
      return $c['response']->withStatus(500)
          ->write(ERROR_500);
  };
};

/** Logger */
$container['logger'] = function ($c) {
    $logger = new Logger($c['userName']);
    return $logger->getInstance();
};
/**
 *************
 * MIDDLEWARE *
 * ***********
 **/

/** Autenticacion */
$app->add(function (Request $request, Response $response, $next){
    if(Authenticator::authenticate()) {
        return $next($request, $response);
    } else {
        $this->logger->addError(ERROR_AUTH,array("userName"=>$this->userName,"password"=>$this->password));
        return $response->withStatus(401)->write(ERROR_AUTH);
    }
});

/**
 ***********************
 * SERVICIOS GENERICOS *
 * *********************
 **/

/** Lista de Referencia */
$app->group('/ListaReferencia/get', function(){
    $this->get('/all',function (Request $request, Response $response){
        $referenceList = new ReferenceList($this->db);
        return $response->withJson($referenceList->getAll()->values());
    });
    $this->get('/updates/{lastSyncDate}', function(Request $request, Response $response, $args){
        $lastSyncDate = $args['lastSyncDate'];
        $referenceList = new ReferenceList($this->db);
        return $response->withJson($referenceList->getUpdates($lastSyncDate)->values());
    });
});

/** Municipios */
$app->group('/Municipios/get', function () {
    $this->get('/all', function (Request $request, Response $response) {
        $municipios = new Municipio($this->db);
        return $response->withJson($municipios->getAll()->values());
    });
    $this->get('/updates/{lastSyncDate}', function (Request $request, Response $response, $args) {
        $lastSyncDate = $args['lastSyncDate'];
        $municipios = new Municipio($this->db);
        return $response->withJson($municipios->getUpdates($lastSyncDate)->values());
    });
});

/** Departamentos */
$app->group('/Departamentos/get', function () {
    $this->get('/all', function (Request $request, Response $response) {
        $departamentos = new Departamento($this->db);
        return $response->withJson($departamentos->getAll()->values());
    });
    $this->get('/updates/{lastSyncDate}', function (Request $request, Response $response, $args) {
        $lastSyncDate = $args['lastSyncDate'];
        $departamentos = new Departamento($this->db);
        return $response->withJson($departamentos->getUpdates($lastSyncDate)->values());
    });
});

/** CIE10 */
$app->get('/CIE10/get/all', function (Request $request, Response $response) {
    $cie10 = new CIE10($this->db);
    return $response->withJson($cie10->getAll()->values());
});

/** Tipos de Usuario */
$app->get('/TiposUsuario/get/all', function(Request $request, Response $response){
    $tiposUsuario = new UserType($this->db);
    return $response->withJson($tiposUsuario->getAll()->values());
});

/** Areas */
//TODO Areas especificas para el municipio o departamento del requesting User
$app->group('/Areas/get', function () {
    $this->get('/all', function (Request $request, Response $response) {
        $areas = new Area($this->db);
        return $response->withJson($areas->getAll()->values());
    });
    $this->get('/updates/{lastSyncDate}', function (Request $request, Response $response, $args) {
        $lastSyncDate = $args['lastSyncDate'];
        $areas = new Area($this->db);
        return $response->withJson($areas->getUpdates($lastSyncDate)->values());
    });
});

/** Ips */
//TODO IPS especificas para el municipio o departamento del requesting User
$app->group('/Ips/get', function () {
    $this->get('/all', function (Request $request, Response $response) {
        $ips = new Ips($this->db);
        return $response->withJson($ips->getAll()->values());
    });
    $this->get('/updates/{lastSyncDate}', function (Request $request, Response $response, $args) {
        $lastSyncDate = $args['lastSyncDate'];
        $ips = new Ips($this->db);
        return $response->withJson($ips->getUpdates($lastSyncDate)->values());
    });
});

/** Novedades */
$app->group('/Novedades/', function () {
    /** Novedades Tipo */
    $this->get('tipo/get/all', function (Request $request, Response $response) {
        $tipos = new NovedadesTipo($this->db);
        return $response->withJson($tipos->getAll()->values());
    });

    $this->get('tipo/get/updates/{lastSyncDate}', function (Request $request, Response $response, $args){
        $tipos = new NovedadesTipo($this->db);
        return $response->withJson($tipos->getUpdates($args['lastSyncDate'])->values());
    });

    /** Novedades get */
    $this->get('lista/get/all', function (Request $request, Response $response) {
        $listas = new NovedadesLista($this->db);
        return $response->withJson($listas->getAll()->values());
    });

    $this->get('lista/get/updates/{lastSyncDate}',function (Request $request, Response $response, $args){
        $listas = new NovedadesLista($this->db);
        return $response->withJson($listas->getUpdates($args['lastSyncDate'])->values());
    });
});

/** PEC */
$app->group('/PEC/', function() {
    $this->get('GruposObjetivo/get/all', function (Request $request, Response $response){
        $gruposObjetivo = new PECObjetive($this->db);
        return $response->withJson($gruposObjetivo->getAll()->values());
    });
    $this->get('Guias/get/all', function (Request $request, Response $response){
        $guias = new PECGuide($this->db);
        return $response->withJson($guias->getAll()->values());
    });
    $this->get('Guias/get/updates/{lastSyncDate}', function (Request $request, Response $response, $args){
        $guias = new PECGuide($this->db);
        return $response->withJson($guias->getUpdates($args['lastSyncDate'])->values());
    });
    $this->get('Procesos/get/all', function (Request $request, Response $response){
        $procesos = new PECProcess($this->db);
        return $response->withJson($procesos->getAll()->values());
    });
    $this->get('Programacion/get/all', function (Request $request, Response $response){
        $programaciones = new PECSchedule($this->db);
        return $response->withJson($programaciones->getAll()->values());
    });
    $this->get('Temas/get/all', function (Request $request, Response $response){
        $temas = new PECTopic($this->db);
        return $response->withJson($temas->getAll()->values());
    });
    $this->get('Temas/get/updates/{lastSyncDate}', function (Request $request, Response $response, $args){
        $temas = new PECTopic($this->db);
        return $response->withJson($temas->getUpdates($args['lastSyncDate'])->values());
    });
});

/*************************
 * SERVICIOS ESPECIFICOS *
 * ***********************
 **/

/** Programacion */
$app->group('/Programacion/',function(){
    /** All */
    $this->get('get/all', function(Request $request, Response $response){
        $programaciones = new Schedule($this->db);
        return $response->withJson($programaciones->getAll($this->userName)->values());
    });

    /** Updates */
    $this->get('get/updates/{lastSyncDate}', function(Request $request, Response $response, $args){
        $lastSyncDate = $args['lastSyncDate'];
        $programaciones = new Schedule($this->db);
        return $response->withJson($programaciones->getUpdates($this->userName,$lastSyncDate)->values());
    });
});

/** Pruebas */
$app->get('/test', function(Request $request, Response $response) {
    $programaciones = new \Controllers\ScheduleController($this->db);
    return $response->withJson($programaciones->getAll('yenny.navarro')->values());
});
$app->get('/test/updates/{lastSyncDate}', function(Request $request, Response $response, $args) {
    $programaciones = new \Controllers\ScheduleController($this->db);
    return $response->withJson($programaciones->getUpdates('yenny.navarro',$args['lastSyncDate'])->values());
});

$app->run();