require([
         'dojo/_base/window',
         'dojo/dom-construct',
         'dijit/Dialog'
], function (win, domConstruct, Dialog) {
	var _dlg = new Dialog({
		title: 'test dialog',
		content: 'test content',
		style: 'width: 300px; height: 300px;'
	});
	domConstruct.destroy('dvLoading');	/* 初期画面（loading...）を削除 */
	_dlg.placeAt(win.body(), 'first');
	_dlg.startup();
	_dlg.show();
});