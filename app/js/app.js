// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

	//header-menu
	const mMenu = document.querySelector('.m-menu');
	const menu = document.querySelector('.menu');
	mMenu.addEventListener('click', (event) => {
		mMenu.classList.toggle("open");
		menu.classList.toggle('menu-open');
	});




	const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
	const tabsFieldElems = document.querySelectorAll('[data-tabs-field]');

	for (const tab of tabsHandlerElems) {
		tab.addEventListener('click', ()=> {
			tabsHandlerElems.forEach(item =>{
				if (tab === item) {
					item.classList.add('tabs-list__item_active');
				} else {
					item.classList.remove('tabs-list__item_active');
				}
			})
			tabsFieldElems.forEach(item => {
				if (item.dataset.tabsField === tab.dataset.tabsHandler) {
					item.classList.remove('hidden')
				} else {
					item.classList.add('hidden')
				}
			})
		})
	}	

})
