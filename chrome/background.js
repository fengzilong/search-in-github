chrome.contextMenus.create({
	title: '在github中搜索',
	contexts: ['selection'],
	onclick: function(source){
		console.log(source.selectionText);
		chrome.tabs.create({
			url: 'https://github.com/search?utf8=%E2%9C%93&q=' + source.selectionText
		}, function(){
			
		});
	}
}, function(){
	
});