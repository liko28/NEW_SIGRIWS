define({ "api": [
  {
    "type": "GET",
    "url": "/Areas/:date",
    "title": "",
    "group": "Areas",
    "description": "<p>Retorna Todos los registros de Areas, si se provee :date se filtraran los resultados modificados a partir de :date</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic cHJ1ZWJhOjM0MDVlMmY1ODYxOTNiMjQ0MDRkODlmMzZjNDdmYmU3\"}",
          "type": "Json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Fecha de Ultima Sincronizacion de Registros formato <strong>UNIX TIMESTAMP</strong> o <strong>yyyy-mm-dd</strong></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo AREA</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"AREAS\":[{\"ID_AREA\":\"516\",\"DESCRIPCION\":\"EL RESPALDO,(VR)  \",\"CODAREA\":\"05107R00209\",\"CODPOSTAL\":\"\",\"DPTO\":\"05\",\"MUNICIPIO\":\"107\",\"ZONA\":\"R\",\"NIVEL4\":\"00\",\"CODIGO\":\"209\",\"ESTADO\":\"A\",\"ORDEN\":\"516\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "Areas",
    "name": "GetAreasDate"
  },
  {
    "type": "GET",
    "url": "/CIE10",
    "title": "",
    "group": "CIE10",
    "description": "<p>Retorna La Lista de CIE10 Completa</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic eWVubnkubmF2YXJybzowZTljMzA1YmUyMDg2ZGRkZGU3NDM3MzUxMDVhY2ViNQ==\"}",
          "type": "Json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo DEPARTAMENTO</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"CIE10\":[{\"ID\":\"1\",\"CODIGO\":\"A000\",\"DESCRIPCION\":\"COLERA DEBIDO A VIBRIO CHOLERAE O1, BIOTIPO CHOLERAE\",\"CLASE\":\"\",\"ACTIVO\":\"0\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "CIE10",
    "name": "GetCie10"
  },
  {
    "type": "GET",
    "url": "/Departamentos/:date",
    "title": "",
    "group": "Departamentos",
    "description": "<p>Retorna Todos los registros de Departamentos, si se provee :date se filtraran los resultados modificados a partir de :date</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic cHJ1ZWJhOjM0MDVlMmY1ODYxOTNiMjQ0MDRkODlmMzZjNDdmYmU3\"}",
          "type": "Json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Fecha de Ultima Sincronizacion de Registros formato <strong>UNIX TIMESTAMP</strong> o <strong>yyyy-mm-dd</strong></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo DEPARTAMENTO</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"DEPARTAMENTOS\":[{\"ID\" : \"2\",\"NOMBRE\" : \"ANTIOQUIA\",\"PAIS\" : \"57\",\"CODIGO\" : \"05\",\"ACTIVO\" : \"0\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "Departamentos",
    "name": "GetDepartamentosDate"
  },
  {
    "type": "GET",
    "url": "/Ips/:date",
    "title": "",
    "group": "Ips",
    "description": "<p>Retorna Todos los registros de Instituciones Prestadoras de Servicios, si se provee :date se filtraran los resultados modificados a partir de :date</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic cHJ1ZWJhOjM0MDVlMmY1ODYxOTNiMjQ0MDRkODlmMzZjNDdmYmU3\"}",
          "type": "Json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Fecha de Ultima Sincronizacion de Registros formato <strong>UNIX TIMESTAMP</strong> o <strong>yyyy-mm-dd</strong></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo IPS</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"IPS\":[{\"ID\":\"1\",\"COD_INS\":\"1\",\"NIT\":\"1\",\"NOMBRE\":\"SALUDFAMILIAR IPS\",\"DIRECCION\":\"CARRERA 57 # 74 - 71\",\"PAIS\":\"57\",\"DPTO\":\"08\",\"CIUDAD\":\"001\",\"TELEFONO\":\"3588128\",\"MOVIL\":\"3162413498\",\"EMAIL\":\"rennimunoz@saludfamiliar.com.co\",\"REPRESENTANTE\":\"\",\"ACTIVO\":\"0\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "Ips",
    "name": "GetIpsDate"
  },
  {
    "type": "GET",
    "url": "/Laboratorios",
    "title": "",
    "group": "Laboratorios",
    "description": "<p>Retorna el Listado de Laboratorios</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic eWVubnkubmF2YXJybzowZTljMzA1YmUyMDg2ZGRkZGU3NDM3MzUxMDVhY2ViNQ==\"}",
          "type": "Json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo PEC_TEMA</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"LABORATORIOS\":[{\"ID_LABORATORIO\":\"1\",\"CODIGO\":\"1\",\"DESCRIPCION\":\"LABORATORIO DE EJEMPLO\",\"VALORREF1\":\"10\",\"VALORREF2\":\"15\",\"TIPO\":\"1\",\"ORDEN\":\"1\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "Laboratorios",
    "name": "GetLaboratorios"
  },
  {
    "type": "GET",
    "url": "/ListasReferencia/:date",
    "title": "",
    "group": "Listas_Referencia",
    "description": "<p>Retorna Todos los registros de Lista de Referencia, si se provee :date se filtraran los resultados modificados a partir de :date</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic cHJ1ZWJhOjM0MDVlMmY1ODYxOTNiMjQ0MDRkODlmMzZjNDdmYmU3\"}",
          "type": "Json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Fecha de Ultima Sincronizacion de Registros formato <strong>UNIX TIMESTAMP</strong> o <strong>yyyy-mm-dd</strong></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo LISTA_REFERENCIA</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"LISTAS_REFERENCIA\":[{\"ID_LISTA\":\"1\",\"PADRE\":\"\",\"DESCRIPCION\":\"Motivo Visita\",\"CODLISTA\":\"\",\"VALOR\":\"\",\"ESTADO\":\"\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "Listas_Referencia",
    "name": "GetListasreferenciaDate"
  },
  {
    "type": "GET",
    "url": "/Medicamentos",
    "title": "",
    "group": "Medicamentos",
    "description": "<p>Retorna el Listado de Medicamentos</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic eWVubnkubmF2YXJybzowZTljMzA1YmUyMDg2ZGRkZGU3NDM3MzUxMDVhY2ViNQ==\"}",
          "type": "Json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo PEC_TEMA</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"MEDICAMENTOS\":[{\"ID_MEDICAMENTO\":\"1\",\"CODIGO\":\"J05AF0601\",\"DESCRIPCION\":\"ABACAVIR\",\"PRINCIPIO\":\"ABACAVIR\",\"CONCENTRACION\":\"Incluye todas las concentraciones\",\"PRESENTACION\":\"TABLETA CON O SIN RECUBRIMIENTO QUE NO MODIFIQUE LA LIBERACI\\u00d3N DEL F\\u00c1RMACO, C\\u00c1PSULA\",\"ACLARACION\":\"\",\"GRUPO\":\"\"},{...}]",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "Medicamentos",
    "name": "GetMedicamentos"
  },
  {
    "type": "GET",
    "url": "/Modulos/:date",
    "title": "",
    "group": "Modulos",
    "description": "<p>Retorna el Listado de Modulos, si se provee :date se filtraran los resultados modificados a partir de :date</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic cHJ1ZWJhOjM0MDVlMmY1ODYxOTNiMjQ0MDRkODlmMzZjNDdmYmU3\"}",
          "type": "Json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Fecha de Ultima Sincronizacion de Registros formato <strong>UNIX TIMESTAMP</strong> o <strong>yyyy-mm-dd</strong></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo PEC_TEMA</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"MODULOS\":[{\"ID_MODULO\":\"1\",\"DESCRIPCION\":\"IDENTIFICACION Y UBICACI\\u00d3N\",\"CODIGO\":\"1\",\"ENTIDAD\":\"\",\"ESTADO\":\"A\",\"ORDEN\":\"1\",\"TIPO\":\"P\",\"VALIDAR\":\"N\",\"EDADINI\":\"\",\"EDADFIN\":\"\",\"GENERO\":\"A\",\"MODULO_P\":\" \",\"REGISTROS\":\"N\"},{\"ID_MODULO\":\"2\",\"DESCRIPCION\":\"PERSONAS DE LA FAMILIA\",\"CODIGO\":\"2\",\"ENTIDAD\":\"\",\"ESTADO\":\"A\",\"ORDEN\":\"2\",\"TIPO\":\"F\",\"VALIDAR\":\"N\",\"EDADINI\":\"\",\"EDADFIN\":\"\",\"GENERO\":\"A\",\"MODULO_P\":\"\",\"REGISTROS\":\"S\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "Modulos",
    "name": "GetModulosDate"
  },
  {
    "type": "GET",
    "url": "/Municipios/:date",
    "title": "",
    "group": "Municipios",
    "description": "<p>Retorna Todos los registros de Municipios, si se provee :date se filtraran los resultados modificados a partir de :date</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic cHJ1ZWJhOjM0MDVlMmY1ODYxOTNiMjQ0MDRkODlmMzZjNDdmYmU3\"}",
          "type": "Json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Fecha de Ultima Sincronizacion de Registros formato <strong>UNIX TIMESTAMP</strong> o <strong>yyyy-mm-dd</strong></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo MUNICIPIO</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"MUNICIPIOS\":[{\"ID\":\"25\",\"NOMBRE\":\"AMAGÁ Antioquia\",\"ID_DPTO\":\"05\",\"NOMBRE_DPTO\":\"Antioquia\",\"CODIGO\":\"030\",\"ID_CIUDAD\":\"05030\",\"ESTADO\":\"0\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "Municipios",
    "name": "GetMunicipiosDate"
  },
  {
    "type": "GET",
    "url": "/Novedades/listas/:date",
    "title": "Listas",
    "group": "Novedades",
    "description": "<p>Retorna Todas las Listas de Novedades, si se provee :date se filtraran los resultados modificados a partir de :date</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic cHJ1ZWJhOjM0MDVlMmY1ODYxOTNiMjQ0MDRkODlmMzZjNDdmYmU3\"}",
          "type": "Json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Fecha de Ultima Sincronizacion de Registros formato <strong>UNIX TIMESTAMP</strong> o <strong>yyyy-mm-dd</strong></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo IPS</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"LISTAS_NOVEDAD\":[{\"COD_NOVEDAD\":\"1\",\"TIPO_NOVEDAD\":\"N01\",\"DESCRIPCION\":\"NUEVO TIPO DE DOCUMENTO DE IDENTIDAD\",\"ESTADO\":\"A\",\"VALOR\":\"1\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "Novedades",
    "name": "GetNovedadesListasDate"
  },
  {
    "type": "GET",
    "url": "/Novedades/tipos/:date",
    "title": "Tipos",
    "group": "Novedades",
    "description": "<p>Retorna Todos los registros de Tipos de Novedades, si se provee :date se filtraran los resultados modificados a partir de :date</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic cHJ1ZWJhOjM0MDVlMmY1ODYxOTNiMjQ0MDRkODlmMzZjNDdmYmU3\"}",
          "type": "Json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Fecha de Ultima Sincronizacion de Registros formato <strong>UNIX TIMESTAMP</strong> o <strong>yyyy-mm-dd</strong></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo IPS</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"TIPOS_NOVEDAD\":[{\"TIPO_NOVEDAD\":\"NA-03\",\"DESCRIPCION\":\"NO ATIENDE PORQUE YA FUE VISITADO EN OTRO NUCLEO FAMILIAR\",\"ESTADO\":\"A\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "Novedades",
    "name": "GetNovedadesTiposDate"
  },
  {
    "type": "GET",
    "url": "/PEC/GruposObjetivo",
    "title": "Grupos",
    "group": "PEC",
    "description": "<p>Retorna la lista de Grupos Objetivo de PEC Completa</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic eWVubnkubmF2YXJybzowZTljMzA1YmUyMDg2ZGRkZGU3NDM3MzUxMDVhY2ViNQ==\"}",
          "type": "Json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo PEC_GRUPO_OBJETIVO</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"PEC_GRUPOS_OBJETIVO\":[{\"ID_OBJETIVO\":\"0 \",\"NOMBRE_OBJETIVO\":\"COORDINADORES LIDERES\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "PEC",
    "name": "GetPecGruposobjetivo"
  },
  {
    "type": "GET",
    "url": "/PEC/Guias/:date",
    "title": "Guias",
    "group": "PEC",
    "description": "<p>Retorna Las Guias PEC, si se provee :date se filtraran los resultados modificados a partir de :date</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic cHJ1ZWJhOjM0MDVlMmY1ODYxOTNiMjQ0MDRkODlmMzZjNDdmYmU3\"}",
          "type": "Json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Fecha de Ultima Sincronizacion de Registros formato <strong>UNIX TIMESTAMP</strong> o <strong>yyyy-mm-dd</strong></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo PEC_GUIA</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"PEC_GUIAS\":[{\"ID_GUIA\":\"1\",\"NOMBRE_GUIA\":\"GUIA 1 \",\"GRUPO_OBJETIVO\":\"1|3\",\"PROCESOS\":\"6|\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "PEC",
    "name": "GetPecGuiasDate"
  },
  {
    "type": "GET",
    "url": "/PEC/Procesos",
    "title": "Procesos",
    "group": "PEC",
    "description": "<p>Retorna los Procesos PEC</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic eWVubnkubmF2YXJybzowZTljMzA1YmUyMDg2ZGRkZGU3NDM3MzUxMDVhY2ViNQ==\"}",
          "type": "Json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo PEC_PROCESO</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"PEC_PROCESOS\":[{\"ID_PROCESO\":\"1\",\"NOMBRE_PROCESO\":\"ASEGURAMIENTO\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "PEC",
    "name": "GetPecProcesos"
  },
  {
    "type": "GET",
    "url": "/PEC/Programacion",
    "title": "Programacion",
    "group": "PEC",
    "description": "<p>Retorna la Programacion de Actividades PEC</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic eWVubnkubmF2YXJybzowZTljMzA1YmUyMDg2ZGRkZGU3NDM3MzUxMDVhY2ViNQ==\"}",
          "type": "Json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo PEC_PROGRAMACION</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"PEC_PROGRAMACIONES\":[{\"ID\":\"1\",\"GUIA\":\"2\",\"DEPARTAMENTO\":\"  \",\"CIUDAD\":\"     \",\"MIN_ASISTENTES\":\"20\",\"FECHA_INICIAL\":\"2014-07-01\",\"FECHA_FINAL\":\"2014-07-31\",\"GRUPO_OBJETO\":\"\",\"HORAS\":\"2\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "PEC",
    "name": "GetPecProgramacion"
  },
  {
    "type": "GET",
    "url": "/PEC/Temas/:date",
    "title": "Temas",
    "group": "PEC",
    "description": "<p>Retorna los Temas PEC, si se provee :date se filtraran los resultados modificados a partir de :date</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic cHJ1ZWJhOjM0MDVlMmY1ODYxOTNiMjQ0MDRkODlmMzZjNDdmYmU3\"}",
          "type": "Json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Fecha de Ultima Sincronizacion de Registros formato <strong>UNIX TIMESTAMP</strong> o <strong>yyyy-mm-dd</strong></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo PEC_TEMA</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"PEC_TEMAS\":[{\"ID_GUIA\":\"1\",\"ID_TEMA\":\"1\",\"NOMBRE_TEMA\":\"Habilidades Comunicativas\",\"PROCESOS\":\"1|3\",\"SERV_GRUPAL\":\"28\",\"SERV_INDIVIDUAL\":\"\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "PEC",
    "name": "GetPecTemasDate"
  },
  {
    "type": "GET",
    "url": "/Preguntas/:date",
    "title": "",
    "group": "Preguntas",
    "description": "<p>Retorna el Listado de Preguntas, si se provee :date se filtraran los resultados modificados a partir de :date</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic cHJ1ZWJhOjM0MDVlMmY1ODYxOTNiMjQ0MDRkODlmMzZjNDdmYmU3\"}",
          "type": "Json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Fecha de Ultima Sincronizacion de Registros formato <strong>UNIX TIMESTAMP</strong> o <strong>yyyy-mm-dd</strong></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo PEC_TEMA</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"PREGUNTAS\":[{\"ID_PREGUNTA\":\"20788\",\"DESCRIPCION\":\"COD. DPTO\",\"ENTIDAD\":\"HC_MEDICA\",\"ATRIBUTO\":\"DPTO\",\"TIPOCAMPO\":\"\",\"LONCAMPO\":\"\",\"DEPENDE\":\"\",\"OBLIGATORIO\":\"\",\"ID_MODULO\":\"\",\"ID_LISTA\":\"\",\"NOMLISTA\":\"\",\"VALORLISTA\":\"\",\"CAMPOSIRFAM\":\"\",\"TIPO\":\"\",\"VALIDAR\":\"\",\"EDADINI\":\"\",\"EDADFIN\":\"\",\"GENERO\":\"\",\"ESTADO\":\"\",\"VISIBILIDAD\":\"\",\"NIVEL\":\"\",\"CODIGO\":\"\",\"ORDEN\":\"\",\"FECCREA\":\"\",\"FECMODI\":\"\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "Preguntas",
    "name": "GetPreguntasDate"
  },
  {
    "type": "GET",
    "url": "/Programaciones/:date",
    "title": "",
    "group": "Programaciones",
    "description": "<p>Retorna la Programacion asignada al usuario que realiza la peticion, si se provee :date se filtraran los resultados modificados a partir de :date</p>",
    "permission": [
      {
        "name": "specific_user",
        "title": "Usuario Especifico",
        "description": "<p>Requiere User y Password validos definidos en Header. Tenga en cuenta que se entregaran unicamente los registros relacionados con el usuario que realiza la peticion</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic cHJ1ZWJhOjM0MDVlMmY1ODYxOTNiMjQ0MDRkODlmMzZjNDdmYmU3\"}",
          "type": "Json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": true,
            "field": "date",
            "description": "<p>Fecha de Ultima Sincronizacion de Registros formato <strong>UNIX TIMESTAMP</strong> o <strong>yyyy-mm-dd</strong></p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo PEC_TEMA</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "EJEMPLO PENDIENTE",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "Programaciones",
    "name": "GetProgramacionesDate"
  },
  {
    "type": "GET",
    "url": "/TiposUsuario",
    "title": "",
    "group": "TiposUsuario",
    "description": "<p>Retorna La Lista de Tipos de Usuarios Completa</p>",
    "permission": [
      {
        "name": "user",
        "title": "Cualquier Usuario",
        "description": "<p>Requiere User y Password validos definidos en Header</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Clave Unica de Acceso RFC2045-MIME (Base64).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Header:",
          "content": "{\"Authorization\":\"Basic eWVubnkubmF2YXJybzowZTljMzA1YmUyMDg2ZGRkZGU3NDM3MzUxMDVhY2ViNQ==\"}",
          "type": "Json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "401",
            "description": "<p>Usuario o Contraseña Invalidos</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Json",
            "optional": false,
            "field": "404",
            "description": "<p>Ruta Invalida o LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Error 401:",
          "content": "{\"ERROR\":\"USARIO/CONTRASEÑA INVALIDOS\"}",
          "type": "Json"
        },
        {
          "title": "Ejemplo Error 404:",
          "content": "{\"ERROR\":\"LO QUE BUSCAS DEFINITIVAMENTE NO ESTÁ AQUÍ...\"}",
          "type": "Json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Json",
            "optional": false,
            "field": "200",
            "description": "<p>Arreglo de Objetos de tipo TIPO_USUARIO</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo Respuesta:",
          "content": "{\"TIPOS_USUARIO\":[{\"ID\":\"1\",\"NOMBRE\":\"Administrador\",\"CODIGO\":\"1\",\"ESTADO\":\"0\",\"ABREVIATURA\":\"ADM\"},{...}]}",
          "type": "Json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.php",
    "groupTitle": "TiposUsuario",
    "name": "GetTiposusuario"
  }
] });
