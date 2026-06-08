import type { INodeProperties } from 'n8n-workflow';

export const storeConfigurationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					]
				}
			},
			"options": [
				{
					"name": "Retrievestoreconfiguration",
					"value": "Retrievestoreconfiguration",
					"action": "Retrieve store configuration",
					"description": "Get store configuration data.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/creditcontrol/storeconfig"
						}
					}
				},
				{
					"name": "Createorchangestoreconfiguration",
					"value": "Createorchangestoreconfiguration",
					"action": "Create or change store configuration",
					"description": "Create or change store configuration data.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/creditcontrol/storeconfig"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/creditcontrol/storeconfig",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Retrievestoreconfiguration"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Retrievestoreconfiguration"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Retrievestoreconfiguration"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Retrievestoreconfiguration"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Retrievestoreconfiguration"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/creditcontrol/storeconfig",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "Media type(s) that is/are acceptable for the response. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"required": true,
			"description": "The Media type of the body of the request. Default value for payment provider protocol is application/json",
			"default": "application/json",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Automatic Checking Account Creation Enabled",
			"name": "automaticCheckingAccountCreationEnabled",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "automaticCheckingAccountCreationEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Daily Interest Rate",
			"name": "dailyInterestRate",
			"type": "string",
			"default": "0.6",
			"routing": {
				"send": {
					"property": "dailyInterestRate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Default Credit Value",
			"name": "defaultCreditValue",
			"type": "string",
			"default": "150.0",
			"routing": {
				"send": {
					"property": "defaultCreditValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Invoice Postponement Limit",
			"name": "invoicePostponementLimit",
			"type": "string",
			"default": "2",
			"routing": {
				"send": {
					"property": "invoicePostponementLimit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Max Postponement Days",
			"name": "maxPostponementDays",
			"type": "string",
			"default": "3",
			"routing": {
				"send": {
					"property": "maxPostponementDays",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Max Pre Authorization Growth Rate",
			"name": "maxPreAuthorizationGrowthRate",
			"type": "string",
			"default": "0.1",
			"routing": {
				"send": {
					"property": "maxPreAuthorizationGrowthRate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "My Credits Enabled",
			"name": "myCreditsEnabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "myCreditsEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
		{
			"displayName": "Notifications Settings",
			"name": "notificationsSettings",
			"type": "json",
			"default": "{\n  \"daysAfter\": [\n    {\n      \"days\": \"0\",\n      \"timeOfDay\": \"12:00:00\"\n    }\n  ],\n  \"daysPrior\": [\n    {\n      \"days\": 1,\n      \"timeOfDay\": \"16:00:00\"\n    }\n  ]\n}",
			"routing": {
				"send": {
					"property": "notificationsSettings",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Postponement Enabled",
			"name": "postponementEnabled",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "postponementEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tax Rate",
			"name": "taxRate",
			"type": "string",
			"default": "0.4",
			"routing": {
				"send": {
					"property": "taxRate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tolerance Enabled",
			"name": "toleranceEnabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "toleranceEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Key (Header)",
			"name": "security_appkey",
			"type": "string",
			"default": "",
			"description": "API key for appKey (header: X-VTEX-API-AppKey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppKey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
		{
			"displayName": "X VTEX API App Token (Header)",
			"name": "security_apptoken",
			"type": "string",
			"default": "",
			"description": "API key for appToken (header: X-VTEX-API-AppToken)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"X-VTEX-API-AppToken": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Store Configuration"
					],
					"operation": [
						"Createorchangestoreconfiguration"
					]
				}
			}
		},
];
