//your JS code here. If required.
const input=document.getElementById('fname');
function capitalize(){
	const currentvalue=input.value;
	input.value=currentvalue.toUpperCase();
}
input.addEventListener('blur',capitalize)