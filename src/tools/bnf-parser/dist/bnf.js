import * as _Shared from "./shared.js";
let _rawWasm = _Shared.DecodeBase64("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");
let _ctx = null;
if (typeof window === 'undefined') {
	_ctx = new WebAssembly.Instance(
		new WebAssembly.Module(
			_rawWasm
		), {js: {print_i32: console.log}}
	);
}
let ready = new Promise(async (res) => {
	if (typeof window !== 'undefined') {
		_ctx = await WebAssembly.instantiate(
			await WebAssembly.compile(_rawWasm),
			{js: {print_i32: console.log}}
		);
	}

	Object.freeze(_ctx);
	_rawWasm = null;
	res();
});
export { ready };
export function Parse_Program (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "program");
}
export function Parse_W (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "w");
}
export function Parse_Comment (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "comment");
}
export function Parse_Name (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "name");
}
export function Parse_Letter (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "letter");
}
export function Parse_Digit (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "digit");
}
export function Parse_Hex (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "hex");
}
export function Parse_Constant (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "constant");
}
export function Parse_Frag (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "frag");
}
export function Parse_Escape (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "escape");
}
export function Parse_Byte (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "byte");
}
export function Parse_Unicode (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "unicode");
}
export function Parse_Def (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "def");
}
export function Parse_Expr (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "expr");
}
export function Parse_Expr_arg (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "expr_arg");
}
export function Parse_Expr_prefix (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "expr_prefix");
}
export function Parse_Expr_infix (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "expr_infix");
}
export function Parse_Expr_suffix (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "expr_suffix");
}
export function Parse_Expr_brackets (data, refMapping = true) {
	return _Shared.Parse(_ctx, data, refMapping, "expr_brackets");
}