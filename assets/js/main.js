
// Tab toggles to filter items in materials table
if ( document.querySelector('.tabs-toggles') ) {
	const tabLinks = document.querySelectorAll('.tabs-toggles li a');
	const materialItems = document.querySelectorAll('#materialsTable tbody');
	for (var i = 0; i < tabLinks.length; i++) {
		tabLinks[i].addEventListener('click', function(e) {
			e.preventDefault();
			for (var j = 0; j < tabLinks.length; j++) {
				tabLinks[j].classList.remove('active');
			}
			this.classList.add('active');
			var materialType = this.id;
			for (var k = 0; k < materialItems.length; k++) {
				if ( materialType == 'allMaterial' ) {
					materialItems[k].style.display = 'table-row-group';
				} else if ( materialItems[k].classList.contains( materialType ) ) {
					materialItems[k].style.display = 'table-row-group';
				} else {
					materialItems[k].style.display = 'none';
				}
			}
		})
	}
}

// Select element filters table items by tag
if ( document.querySelector('#materialsTable') ) {
	var materialTags = document.querySelectorAll('#materialsTable .tags ul li');
	var tags = [];
	for (var i = 0; i < materialTags.length; i++) {
		tags.push(materialTags[i].textContent);
	}
	let uniqueTags = [...new Set(tags)];
	var tagSelect = document.getElementById('tagSelect');
	for (var i = 0; i < uniqueTags.length; i++) {
		option = document.createElement( 'option' );
		option.value = option.text = uniqueTags[i];
		tagSelect.add( option );
	}
	function filterTable(tag) {
		var tableItems = document.querySelectorAll('#materialsTable tbody');
		for (var i = 0; i < tableItems.length; i++) {
			var tableItemTags = tableItems[i].querySelectorAll('.tags ul li');
			var hasTag = false;
			for (var j = 0; j < tableItemTags.length; j++) {
				if ( ( tableItemTags[j].textContent == tag ) || ( tag == "All") ) {
					hasTag = true;
				}
			}
			if ( hasTag ) {
				tableItems[i].style.display = "";
			} else {
				tableItems[i].style.display = "none";
			}
		}		
	}
	tagSelect.addEventListener('change', (event) => {
		document.querySelectorAll('.tabs-toggles li a')[0].click();
		tagSelectValue = tagSelect.options[tagSelect.selectedIndex].value;
		filterTable(tagSelectValue);
		console.log('hello');
		
	});

	const choices = new Choices('#tagSelect', {
	  itemSelectText: ''
	});
}