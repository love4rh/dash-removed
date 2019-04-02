FetchMethod
Name
Description
Type
Path
ParsingType
ignoreError
Parameter: backupAndRead, postBody(message), requestMethod


vt: string, text, number, boolean, yesno, expression, column(s), source(s)

enum: {
	fetchType: [
		{value:"HTTP", desc:""},
		{value:"FTP", desc:""},
		{value:"LOCAL", desc:""}
	],
	appendMethod: [
		{value:"union", desc:""},
		{value:"intersect", desc:""},
		{value:"first", desc:""}
	],
	httpMethod: [
		{value:"GET", desc:""},
		{value:"POST", desc:""}
	]
}

editComponent: {
	"compName": {
		title:"Name",
		vt:"string",
		desc:""
	},
	"compDesc": {
		title:"Description",
		vt:"text",
		desc:""
	},
	"compAppend": {
		title:"Append Method",
		vt:"enum",
		vl:"appendMethod",
		desc:""
	},
	"fetchMethod": {
		title:"Method",
		vt:"enum",
		vl:"fetchType",
		desc:"데이터를 가져올 방법을 지정합니다."
	},
	"connectionTimeOut": {
		title:"connectionTimeOut",
		vt:"number",
		desc:""
	},
	"readTimeOut": {
		title:"readTimeOut",
		vt:"number",
		desc:""
	},
	"requestMethod": {
		title:"requestMethod",
		vt:"enum",
		vl:"httpMethod",
		desc:""
	}
	"ignoreError": {
		title:"requestMethod",
		vt:"boolean",
		desc:""
	}
}

groupComponent: {
	"httpParam": [
		{"id":"requestMethod", "mandatory":true},
		{"id":"connectionTimeOut"},
		{"id":"readTimeOut"},
		{"id":"ignoreError"}
	]

}

appendNode: [
	"compName", "compDesc", "compAppend"
]


fetchMethod: [
	"compName", "compDesc", "fetchMethod"
]


{id:"id1", title:"Name", vt:"string"}
{id:"id2", title:"Description", vt:"text"}
{id:"id3", title:"Fetch Type", vt:"enum", vl:"fetchType"}
{id:"id4", }




