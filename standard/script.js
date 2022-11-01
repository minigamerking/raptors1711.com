console.log("standard/script.js is running");

// TAB DIVS
(function () {
const tabContainerDivs = document.getElementsByClassName("tabs-container")

for (const tabContainerDiv of tabContainerDivs) {
	const tabSelectionDiv = document.createElement("div")
	tabSelectionDiv.className = "tab-selector"
	
	if (tabContainerDiv.dataset.height) {
		tabContainerDiv.style.height = tabContainerDiv.dataset.height + "px"
	}
	
	const tabDivs = tabContainerDiv.children
	let activeTabBtn, activeTabDiv
	
	const setActiveTab = (tabBtn, tabDiv) => {
		if (activeTabBtn) activeTabBtn.style.backgroundColor = ""
		if (activeTabDiv) activeTabDiv.style.display = "none"
		tabBtn.style.backgroundColor = "var(--main-background)";
		tabDiv.style.display = "block"
		activeTabBtn = tabBtn
		activeTabDiv = tabDiv
		
		const padding = 10
		tabDiv.style.height = (tabContainerDiv.clientHeight - tabSelectionDiv.offsetHeight - padding * 2) + "px"
		tabDiv.style.padding = padding+"px"
	}
	
	for (const tabDiv of tabDivs) {
		const selectTabButton = document.createElement("button")
		selectTabButton.className = "tab-select-button"
		selectTabButton.textContent = tabDiv.dataset.tab
		
		selectTabButton.onclick = () => setActiveTab(selectTabButton, tabDiv)
		
		tabSelectionDiv.appendChild(selectTabButton)
		
		if (!activeTabBtn) setActiveTab(selectTabButton, tabDiv)
	}
	
	tabContainerDiv.insertBefore(tabSelectionDiv, tabContainerDiv.firstChild)
}
})();
