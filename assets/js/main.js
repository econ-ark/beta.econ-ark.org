
// Tab toggles to filter items in materials table
if ( document.querySelector('.tabs-toggles') ) {
	const tabLinks = document.querySelectorAll('.tabs-toggles li a');
	const materialItems = document.querySelectorAll('#materialsTable tbody');
	for (var i = 0; i < tabLinks.length; i++) {
		tabLinks[i].addEventListener('click', function() {
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

