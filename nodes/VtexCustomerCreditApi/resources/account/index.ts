import type { INodeProperties } from 'n8n-workflow';

export const accountDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					]
				}
			},
			"options": [
				{
					"name": "Searchallaccounts",
					"value": "Searchallaccounts",
					"action": "Search all accounts",
					"description": "Search all accounts",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/creditcontrol/accounts"
						}
					}
				},
				{
					"name": "Openan Account",
					"value": "Openan Account",
					"action": "Open an Account",
					"description": "Open an account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/creditcontrol/accounts"
						}
					}
				},
				{
					"name": "Openor Change Account",
					"value": "Openor Change Account",
					"action": "Open or Change Account",
					"description": "Open or Change an account.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"accountId\"]}}"
						}
					}
				},
				{
					"name": "Closean Account",
					"value": "Closean Account",
					"action": "Close an Account",
					"description": "Closes an account.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}"
						}
					}
				},
				{
					"name": "Retrievea Accountby Id",
					"value": "Retrievea Accountby Id",
					"action": "Retrieve an Account by Id",
					"description": "Retrieve an account by id.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}"
						}
					}
				},
				{
					"name": "Updateemailanddescriptionofaaccount",
					"value": "Updateemailanddescriptionofaaccount",
					"action": "Update email and description of a account",
					"description": "Update a checking account.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}"
						}
					}
				},
				{
					"name": "Changecreditlimitofan Account",
					"value": "Changecreditlimitofan Account",
					"action": "Change credit limit of an Account",
					"description": "Increase the credit limit of an account.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/creditlimit"
						}
					}
				},
				{
					"name": "Addanaccount Holder",
					"value": "Addanaccount Holder",
					"action": "Add an account Holder",
					"description": "Add an account Holder",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/holders"
						}
					}
				},
				{
					"name": "Deleteanaccountholder",
					"value": "Deleteanaccountholder",
					"action": "Delete an account holder",
					"description": "Delete an account holder",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/holders/{{$parameter[\"holderId\"]}}"
						}
					}
				},
				{
					"name": "Accountstatements",
					"value": "Accountstatements",
					"action": "Account statements",
					"description": "Get the account statements.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/statements"
						}
					}
				},
				{
					"name": "Decreasebalanceofanaccount",
					"value": "Decreasebalanceofanaccount",
					"action": "Decrease balance of an account",
					"description": "Create a debit value updating the account BALANCE.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/statements/{{$parameter[\"statementId\"]}}"
						}
					}
				},
				{
					"name": "Changetoleranceofanaccount",
					"value": "Changetoleranceofanaccount",
					"action": "Change tolerance of an account",
					"description": "Increase the credit limit of a checking account.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/tolerance"
						}
					}
				},
				{
					"name": "Createa Pre Authorization",
					"value": "Createa Pre Authorization",
					"action": "Create a Pre Authorization",
					"description": "Create a Pre Authorization",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/transaction"
						}
					}
				},
				{
					"name": "Cancela Pre Authorization",
					"value": "Cancela Pre Authorization",
					"action": "Cancel a Pre Authorization",
					"description": "Cancel a Pre Authorization",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/transactions/{{$parameter[\"transactionId\"]}}"
						}
					}
				},
				{
					"name": "Createa Pre Authorization Usingid",
					"value": "Createa Pre Authorization Usingid",
					"action": "Create a Pre Authorization (using id)",
					"description": "Create a Pre Authorization (using id)",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/transactions/{{$parameter[\"transactionId\"]}}"
						}
					}
				},
				{
					"name": "Partialor Total Refunda Settlement",
					"value": "Partialor Total Refunda Settlement",
					"action": "Partial or Total Refund a Settlement",
					"description": "Refund a value from a already settled transaction.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/transactions/{{$parameter[\"transactionId\"]}}/refunds"
						}
					}
				},
				{
					"name": "Createor Update Settlement",
					"value": "Createor Update Settlement",
					"action": "Create or Update Settlement",
					"description": "Debit a value from checking account.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/creditcontrol/accounts/{{$parameter[\"creditAccountId\"]}}/transactions/{{$parameter[\"transactionId\"]}}/settlement"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/creditcontrol/accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Searchallaccounts"
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
						"Account"
					],
					"operation": [
						"Searchallaccounts"
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
						"Account"
					],
					"operation": [
						"Searchallaccounts"
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
						"Account"
					],
					"operation": [
						"Searchallaccounts"
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
						"Account"
					],
					"operation": [
						"Searchallaccounts"
					]
				}
			}
		},
		{
			"displayName": "POST /api/creditcontrol/accounts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Openan Account"
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
						"Account"
					],
					"operation": [
						"Openan Account"
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
						"Account"
					],
					"operation": [
						"Openan Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Credit Limit",
			"name": "creditLimit",
			"type": "string",
			"default": "500",
			"routing": {
				"send": {
					"property": "creditLimit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Openan Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "example",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Openan Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Document",
			"name": "document",
			"type": "string",
			"default": "99999999999",
			"routing": {
				"send": {
					"property": "document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Openan Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Document Type",
			"name": "documentType",
			"type": "string",
			"default": "CPF",
			"routing": {
				"send": {
					"property": "documentType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Openan Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "email@domain.com",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Openan Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tolerance",
			"name": "tolerance",
			"type": "string",
			"default": "1",
			"routing": {
				"send": {
					"property": "tolerance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Openan Account"
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
						"Account"
					],
					"operation": [
						"Openan Account"
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
						"Account"
					],
					"operation": [
						"Openan Account"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/creditcontrol/accounts/{accountId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Openor Change Account"
					]
				}
			}
		},
		{
			"displayName": "Account Id",
			"name": "accountId",
			"required": true,
			"description": "It must be an alphanumeric value",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Openor Change Account"
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
						"Account"
					],
					"operation": [
						"Openor Change Account"
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
						"Account"
					],
					"operation": [
						"Openor Change Account"
					]
				}
			}
		},
		{
			"displayName": "Credit Limit",
			"name": "creditLimit",
			"type": "number",
			"default": "100.0",
			"description": "If the user don't set a credit limit, the system will define 100 for default",
			"routing": {
				"send": {
					"property": "creditLimit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Openor Change Account"
					]
				}
			}
		},
		{
			"displayName": "Document",
			"name": "document",
			"type": "string",
			"default": "00221292404",
			"routing": {
				"send": {
					"property": "document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Openor Change Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "email@email.com",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Openor Change Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Id",
			"name": "id",
			"type": "string",
			"default": "teste",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Openor Change Account"
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
						"Account"
					],
					"operation": [
						"Openor Change Account"
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
						"Account"
					],
					"operation": [
						"Openor Change Account"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/creditcontrol/accounts/{creditAccountId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Closean Account"
					]
				}
			}
		},
		{
			"displayName": "Credit Account Id",
			"name": "creditAccountId",
			"required": true,
			"description": "Credit account's identifier",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Closean Account"
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
						"Account"
					],
					"operation": [
						"Closean Account"
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
						"Account"
					],
					"operation": [
						"Closean Account"
					]
				}
			}
		},
		{
			"displayName": "Document",
			"name": "document",
			"type": "string",
			"default": "99999999999",
			"routing": {
				"send": {
					"property": "document",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Closean Account"
					]
				}
			}
		},
		{
			"displayName": "Document Type",
			"name": "documentType",
			"type": "string",
			"default": "CPF",
			"routing": {
				"send": {
					"property": "documentType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Closean Account"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "email@domain.com",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Closean Account"
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
						"Account"
					],
					"operation": [
						"Closean Account"
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
						"Account"
					],
					"operation": [
						"Closean Account"
					]
				}
			}
		},
		{
			"displayName": "GET /api/creditcontrol/accounts/{creditAccountId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Retrievea Accountby Id"
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
						"Account"
					],
					"operation": [
						"Retrievea Accountby Id"
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
						"Account"
					],
					"operation": [
						"Retrievea Accountby Id"
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
						"Account"
					],
					"operation": [
						"Retrievea Accountby Id"
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
						"Account"
					],
					"operation": [
						"Retrievea Accountby Id"
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
						"Account"
					],
					"operation": [
						"Retrievea Accountby Id"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/creditcontrol/accounts/{creditAccountId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Updateemailanddescriptionofaaccount"
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
						"Account"
					],
					"operation": [
						"Updateemailanddescriptionofaaccount"
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
						"Account"
					],
					"operation": [
						"Updateemailanddescriptionofaaccount"
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
						"Account"
					],
					"operation": [
						"Updateemailanddescriptionofaaccount"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "example",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Updateemailanddescriptionofaaccount"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "email@domain.com",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Updateemailanddescriptionofaaccount"
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
						"Account"
					],
					"operation": [
						"Updateemailanddescriptionofaaccount"
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
						"Account"
					],
					"operation": [
						"Updateemailanddescriptionofaaccount"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/creditcontrol/accounts/{creditAccountId}/creditlimit",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Changecreditlimitofan Account"
					]
				}
			}
		},
		{
			"displayName": "Credit Account Id",
			"name": "creditAccountId",
			"required": true,
			"description": "Credit account's identifier",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Changecreditlimitofan Account"
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
						"Account"
					],
					"operation": [
						"Changecreditlimitofan Account"
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
						"Account"
					],
					"operation": [
						"Changecreditlimitofan Account"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Value",
			"name": "value",
			"type": "number",
			"default": "500.0",
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
						"Account"
					],
					"operation": [
						"Changecreditlimitofan Account"
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
						"Account"
					],
					"operation": [
						"Changecreditlimitofan Account"
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
						"Account"
					],
					"operation": [
						"Changecreditlimitofan Account"
					]
				}
			}
		},
		{
			"displayName": "POST /api/creditcontrol/accounts/{creditAccountId}/holders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Addanaccount Holder"
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
						"Account"
					],
					"operation": [
						"Addanaccount Holder"
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
						"Account"
					],
					"operation": [
						"Addanaccount Holder"
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
						"Account"
					],
					"operation": [
						"Addanaccount Holder"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Claims",
			"name": "claims",
			"type": "json",
			"default": "{\n  \"email\": \"USER-EMAIL\"\n}",
			"routing": {
				"send": {
					"property": "claims",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Addanaccount Holder"
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
						"Account"
					],
					"operation": [
						"Addanaccount Holder"
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
						"Account"
					],
					"operation": [
						"Addanaccount Holder"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/creditcontrol/accounts/{creditAccountId}/holders/{holderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Deleteanaccountholder"
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
						"Account"
					],
					"operation": [
						"Deleteanaccountholder"
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
						"Account"
					],
					"operation": [
						"Deleteanaccountholder"
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
						"Account"
					],
					"operation": [
						"Deleteanaccountholder"
					]
				}
			}
		},
		{
			"displayName": "Holder Id",
			"name": "holderId",
			"required": true,
			"description": "",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Deleteanaccountholder"
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
						"Account"
					],
					"operation": [
						"Deleteanaccountholder"
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
						"Account"
					],
					"operation": [
						"Deleteanaccountholder"
					]
				}
			}
		},
		{
			"displayName": "GET /api/creditcontrol/accounts/{creditAccountId}/statements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Accountstatements"
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
						"Account"
					],
					"operation": [
						"Accountstatements"
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
						"Account"
					],
					"operation": [
						"Accountstatements"
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
						"Account"
					],
					"operation": [
						"Accountstatements"
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
						"Account"
					],
					"operation": [
						"Accountstatements"
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
						"Account"
					],
					"operation": [
						"Accountstatements"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/creditcontrol/accounts/{creditAccountId}/statements/{statementId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Decreasebalanceofanaccount"
					]
				}
			}
		},
		{
			"displayName": "Credit Account Id",
			"name": "creditAccountId",
			"required": true,
			"description": "Credit account's identification",
			"default": "insert example here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Decreasebalanceofanaccount"
					]
				}
			}
		},
		{
			"displayName": "Statement Id",
			"name": "statementId",
			"required": true,
			"description": "",
			"default": "insert example here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Decreasebalanceofanaccount"
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
						"Account"
					],
					"operation": [
						"Decreasebalanceofanaccount"
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
						"Account"
					],
					"operation": [
						"Decreasebalanceofanaccount"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "-490.0",
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
						"Account"
					],
					"operation": [
						"Decreasebalanceofanaccount"
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
						"Account"
					],
					"operation": [
						"Decreasebalanceofanaccount"
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
						"Account"
					],
					"operation": [
						"Decreasebalanceofanaccount"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/creditcontrol/accounts/{creditAccountId}/tolerance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Changetoleranceofanaccount"
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
						"Account"
					],
					"operation": [
						"Changetoleranceofanaccount"
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
						"Account"
					],
					"operation": [
						"Changetoleranceofanaccount"
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
						"Account"
					],
					"operation": [
						"Changetoleranceofanaccount"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Value",
			"name": "value",
			"type": "number",
			"default": 0.2,
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
						"Account"
					],
					"operation": [
						"Changetoleranceofanaccount"
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
						"Account"
					],
					"operation": [
						"Changetoleranceofanaccount"
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
						"Account"
					],
					"operation": [
						"Changetoleranceofanaccount"
					]
				}
			}
		},
		{
			"displayName": "POST /api/creditcontrol/accounts/{creditAccountId}/transaction",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Createa Pre Authorization"
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
						"Account"
					],
					"operation": [
						"Createa Pre Authorization"
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
						"Account"
					],
					"operation": [
						"Createa Pre Authorization"
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
						"Account"
					],
					"operation": [
						"Createa Pre Authorization"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Expiration Date",
			"name": "expirationDate",
			"type": "string",
			"default": "1",
			"description": "date in ISO8601 (UTC) dateformat (optional default is 1(one) day)",
			"routing": {
				"send": {
					"property": "expirationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Createa Pre Authorization"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Installments",
			"name": "installments",
			"type": "string",
			"default": "1",
			"routing": {
				"send": {
					"property": "installments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Createa Pre Authorization"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Settle",
			"name": "settle",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "settle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Createa Pre Authorization"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "490.0",
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
						"Account"
					],
					"operation": [
						"Createa Pre Authorization"
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
						"Account"
					],
					"operation": [
						"Createa Pre Authorization"
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
						"Account"
					],
					"operation": [
						"Createa Pre Authorization"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/creditcontrol/accounts/{creditAccountId}/transactions/{transactionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Cancela Pre Authorization"
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
						"Account"
					],
					"operation": [
						"Cancela Pre Authorization"
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
						"Account"
					],
					"operation": [
						"Cancela Pre Authorization"
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
						"Account"
					],
					"operation": [
						"Cancela Pre Authorization"
					]
				}
			}
		},
		{
			"displayName": "Transaction Id",
			"name": "transactionId",
			"required": true,
			"description": "",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Cancela Pre Authorization"
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
						"Account"
					],
					"operation": [
						"Cancela Pre Authorization"
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
						"Account"
					],
					"operation": [
						"Cancela Pre Authorization"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/creditcontrol/accounts/{creditAccountId}/transactions/{transactionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Createa Pre Authorization Usingid"
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
						"Account"
					],
					"operation": [
						"Createa Pre Authorization Usingid"
					]
				}
			}
		},
		{
			"displayName": "Transaction Id",
			"name": "transactionId",
			"required": true,
			"description": "",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Createa Pre Authorization Usingid"
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
						"Account"
					],
					"operation": [
						"Createa Pre Authorization Usingid"
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
						"Account"
					],
					"operation": [
						"Createa Pre Authorization Usingid"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Expiration Date",
			"name": "expirationDate",
			"type": "string",
			"default": "1",
			"description": "date in ISO8601 (UTC) dateformat (optional default is 1(one) day)",
			"routing": {
				"send": {
					"property": "expirationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Createa Pre Authorization Usingid"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Installments",
			"name": "installments",
			"type": "string",
			"default": "1",
			"routing": {
				"send": {
					"property": "installments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Createa Pre Authorization Usingid"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Settle",
			"name": "settle",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "settle",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Createa Pre Authorization Usingid"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "20.0",
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
						"Account"
					],
					"operation": [
						"Createa Pre Authorization Usingid"
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
						"Account"
					],
					"operation": [
						"Createa Pre Authorization Usingid"
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
						"Account"
					],
					"operation": [
						"Createa Pre Authorization Usingid"
					]
				}
			}
		},
		{
			"displayName": "POST /api/creditcontrol/accounts/{creditAccountId}/transactions/{transactionId}/refunds",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Partialor Total Refunda Settlement"
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
						"Account"
					],
					"operation": [
						"Partialor Total Refunda Settlement"
					]
				}
			}
		},
		{
			"displayName": "Transaction Id",
			"name": "transactionId",
			"required": true,
			"description": "",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Partialor Total Refunda Settlement"
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
						"Account"
					],
					"operation": [
						"Partialor Total Refunda Settlement"
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
						"Account"
					],
					"operation": [
						"Partialor Total Refunda Settlement"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "20",
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
						"Account"
					],
					"operation": [
						"Partialor Total Refunda Settlement"
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
						"Account"
					],
					"operation": [
						"Partialor Total Refunda Settlement"
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
						"Account"
					],
					"operation": [
						"Partialor Total Refunda Settlement"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/creditcontrol/accounts/{creditAccountId}/transactions/{transactionId}/settlement",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Createor Update Settlement"
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
						"Account"
					],
					"operation": [
						"Createor Update Settlement"
					]
				}
			}
		},
		{
			"displayName": "Transaction Id",
			"name": "transactionId",
			"required": true,
			"description": "",
			"default": "insert identifier here",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Account"
					],
					"operation": [
						"Createor Update Settlement"
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
						"Account"
					],
					"operation": [
						"Createor Update Settlement"
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
						"Account"
					],
					"operation": [
						"Createor Update Settlement"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Value",
			"name": "value",
			"type": "string",
			"default": "490.0",
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
						"Account"
					],
					"operation": [
						"Createor Update Settlement"
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
						"Account"
					],
					"operation": [
						"Createor Update Settlement"
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
						"Account"
					],
					"operation": [
						"Createor Update Settlement"
					]
				}
			}
		},
];
