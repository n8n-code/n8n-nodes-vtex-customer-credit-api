import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { invoicesDescription } from './resources/invoices';
import { accountDescription } from './resources/account';
import { storeConfigurationDescription } from './resources/store-configuration';

export class VtexCustomerCreditApi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'vtex-customer-credit-api',
		name: 'N8nDevVtexCustomerCreditApi',
		icon: { light: 'file:./vtex-customer-credit-api.svg', dark: 'file:./vtex-customer-credit-api.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'With Customer Credit your store can enable credit payments through the checkout. You can also control invoices and the credit limits of your clients',
		defaults: { name: 'vtex-customer-credit-api' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVtexCustomerCreditApiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Invoices",
					"value": "Invoices",
					"description": ""
				},
				{
					"name": "Account",
					"value": "Account",
					"description": ""
				},
				{
					"name": "Store Configuration",
					"value": "Store Configuration",
					"description": ""
				}
			],
			"default": ""
		},
		...invoicesDescription,
		...accountDescription,
		...storeConfigurationDescription
		],
	};
}
