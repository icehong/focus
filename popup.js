function store_foucs_id(){
	chrome.storage.sync.set({'foucs_id':document.getElementById('foucs_id').value},function(){
		document.getElementById('status').textContent = '设置完成';
	});
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', store_foucs_id);

  chrome.storage.sync.get('foucs_id',function (obj) {
	  document.getElementById('foucs_id').value = obj["foucs_id"];
	  console.log(obj["foucs_id"]);
  });
});
