import type { INodeProperties } from 'n8n-workflow';

export const invoicesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					]
				}
			},
			"options": [
				{
					"name": "Searchallinvoicesofa Account",
					"value": "Searchallinvoicesofa Account",
					"action": "Retrieve invoice by creditAccountId",
					"description": "Returns associated invoices by specified creditAccountId, the param that identifies a client in VTEX's system.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/invoices"
						}
					}
				},
				{
					"name": "Cancel Invoice",
					"value": "Cancel Invoice",
					"action": "Cancel Invoice",
					"description": "Changes invoice's status from ancells invoice by specified Id.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/invoices/{{$parameter[\"invoiceId\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Invoiceby Id",
					"value": "Retrieve Invoiceby Id",
					"action": "Retrieve Invoice by Id",
					"description": "Returns associated data for the specified Invoice Id, like status  and value, for example.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/invoices/{{$parameter[\"invoiceId\"]}}"
						}
					}
				},
				{
					"name": "Change Invoice",
					"value": "Change Invoice",
					"action": "Change Invoice",
					"description": "Updates invoice's attributes `status`, `paymentLink` and `observation`.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/invoices/{{$parameter[\"invoiceId\"]}}"
						}
					}
				},
				{
					"name": "Markaninvoiceas Paid",
					"value": "Markaninvoiceas Paid",
					"action": "Mark an invoice as Paid",
					"description": "Pay an invoice.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/invoices/{{$parameter[\"invoiceId\"]}}/payments"
						}
					}
				},
				{
					"name": "Postponeaninvoice",
					"value": "Postponeaninvoice",
					"action": "Postpone an invoice",
					"description": "Postpone an invoice.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/invoices/{{$parameter[\"invoiceId\"]}}/postponement"
						}
					}
				},
				{
					"name": "Searchallinvoices",
					"value": "Searchallinvoices",
					"action": "Search all invoices",
					"description": "Returns all invoices according to the informed query params in the request.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/creditcontrol/invoices"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/creditcontrol/accounts/{creditAccountId}/invoices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Searchallinvoicesofa Account"
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
						"Invoices"
					],
					"operation": [
						"Searchallinvoicesofa Account"
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
						"Invoices"
					],
					"operation": [
						"Searchallinvoicesofa Account"
					]
				}
			}
		},
		{
			"displayName": "Credit Account Id",
			"name": "creditAccountId",
			"required": true,
			"description": "",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Searchallinvoicesofa Account"
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
						"Invoices"
					],
					"operation": [
						"Searchallinvoicesofa Account"
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
						"Invoices"
					],
					"operation": [
						"Searchallinvoicesofa Account"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Cancel Invoice"
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
						"Invoices"
					],
					"operation": [
						"Cancel Invoice"
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
						"Invoices"
					],
					"operation": [
						"Cancel Invoice"
					]
				}
			}
		},
		{
			"displayName": "Credit Account Id",
			"name": "creditAccountId",
			"required": true,
			"description": "Credit account's identification",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Cancel Invoice"
					]
				}
			}
		},
		{
			"displayName": "Invoice Id",
			"name": "invoiceId",
			"required": true,
			"description": "",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Cancel Invoice"
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
						"Invoices"
					],
					"operation": [
						"Cancel Invoice"
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
						"Invoices"
					],
					"operation": [
						"Cancel Invoice"
					]
				}
			}
		},
		{
			"displayName": "GET /api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Retrieve Invoiceby Id"
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
						"Invoices"
					],
					"operation": [
						"Retrieve Invoiceby Id"
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
						"Invoices"
					],
					"operation": [
						"Retrieve Invoiceby Id"
					]
				}
			}
		},
		{
			"displayName": "Credit Account Id",
			"name": "creditAccountId",
			"required": true,
			"description": "Credit account's identification",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Retrieve Invoiceby Id"
					]
				}
			}
		},
		{
			"displayName": "Invoice Id",
			"name": "invoiceId",
			"required": true,
			"description": "",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Retrieve Invoiceby Id"
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
						"Invoices"
					],
					"operation": [
						"Retrieve Invoiceby Id"
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
						"Invoices"
					],
					"operation": [
						"Retrieve Invoiceby Id"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Change Invoice"
					]
				}
			}
		},
		{
			"displayName": "Credit Account Id",
			"name": "creditAccountId",
			"required": true,
			"description": "Credit account's identification",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Change Invoice"
					]
				}
			}
		},
		{
			"displayName": "Invoice Id",
			"name": "invoiceId",
			"required": true,
			"description": "",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Change Invoice"
					]
				}
			}
		},
		{
			"displayName": "Friendly Id",
			"name": "friendlyId",
			"description": "Invoice's identification",
			"default": "insert identifier here",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "friendlyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Change Invoice"
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
						"Invoices"
					],
					"operation": [
						"Change Invoice"
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
						"Invoices"
					],
					"operation": [
						"Change Invoice"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Observation",
			"name": "observation",
			"type": "string",
			"default": "example",
			"routing": {
				"send": {
					"property": "observation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Change Invoice"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payment Link",
			"name": "paymentLink",
			"type": "string",
			"default": "example",
			"routing": {
				"send": {
					"property": "paymentLink",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Change Invoice"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "Paid",
			"description": "Invoice's status. It must be completed with &quot;Paid&quot;, &quot;Cancelled&quot; or &quot;Open&quot; value.",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Change Invoice"
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
						"Invoices"
					],
					"operation": [
						"Change Invoice"
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
						"Invoices"
					],
					"operation": [
						"Change Invoice"
					]
				}
			}
		},
		{
			"displayName": "POST /api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}/payments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Markaninvoiceas Paid"
					]
				}
			}
		},
		{
			"displayName": "Credit Account Id",
			"name": "creditAccountId",
			"required": true,
			"description": "Credit account's identification",
			"default": "isert indentifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Markaninvoiceas Paid"
					]
				}
			}
		},
		{
			"displayName": "Invoice Id",
			"name": "invoiceId",
			"required": true,
			"description": "",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Markaninvoiceas Paid"
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
						"Invoices"
					],
					"operation": [
						"Markaninvoiceas Paid"
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
						"Invoices"
					],
					"operation": [
						"Markaninvoiceas Paid"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "example",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Markaninvoiceas Paid"
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
						"Invoices"
					],
					"operation": [
						"Markaninvoiceas Paid"
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
						"Invoices"
					],
					"operation": [
						"Markaninvoiceas Paid"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/creditcontrol/accounts/{creditAccountId}/invoices/{invoiceId}/postponement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Postponeaninvoice"
					]
				}
			}
		},
		{
			"displayName": "Credit Account Id",
			"name": "creditAccountId",
			"required": true,
			"description": "Credit account's identification",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Postponeaninvoice"
					]
				}
			}
		},
		{
			"displayName": "Invoice Id",
			"name": "invoiceId",
			"required": true,
			"description": "",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Postponeaninvoice"
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
						"Invoices"
					],
					"operation": [
						"Postponeaninvoice"
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
						"Invoices"
					],
					"operation": [
						"Postponeaninvoice"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Due Days",
			"name": "dueDays",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "dueDays",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Postponeaninvoice"
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
						"Invoices"
					],
					"operation": [
						"Postponeaninvoice"
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
						"Invoices"
					],
					"operation": [
						"Postponeaninvoice"
					]
				}
			}
		},
		{
			"displayName": "GET /api/creditcontrol/invoices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Searchallinvoices"
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
						"Invoices"
					],
					"operation": [
						"Searchallinvoices"
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
						"Invoices"
					],
					"operation": [
						"Searchallinvoices"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "from",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Searchallinvoices"
					]
				}
			}
		},
		{
			"displayName": "To",
			"name": "to",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "to",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Searchallinvoices"
					]
				}
			}
		},
		{
			"displayName": "Created Date From",
			"name": "createdDateFrom",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdDateFrom",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Searchallinvoices"
					]
				}
			}
		},
		{
			"displayName": "Created Date To",
			"name": "createdDateTo",
			"description": "",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "createdDateTo",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Searchallinvoices"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"description": "Invoice's value. It must be completed with a decimal value.",
			"default": "101.22",
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "value",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Searchallinvoices"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"description": "Invoice's status. It must be completed with \"Paid\", \"Cancelled\" or \"Open\" value.",
			"default": "Paid",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Searchallinvoices"
					]
				}
			}
		},
		{
			"displayName": "Friendly Id",
			"name": "friendlyId",
			"description": "Invoice's identifier",
			"default": "insert identifier here",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "friendlyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Searchallinvoices"
					]
				}
			}
		},
		{
			"displayName": "Credit Account Id",
			"name": "creditAccountId",
			"description": "Credit account's identifier",
			"default": "B75F0",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "creditAccountId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Invoices"
					],
					"operation": [
						"Searchallinvoices"
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
						"Invoices"
					],
					"operation": [
						"Searchallinvoices"
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
						"Invoices"
					],
					"operation": [
						"Searchallinvoices"
					]
				}
			}
		},
];
