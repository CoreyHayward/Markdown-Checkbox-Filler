chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "fillCheckboxes",
      title: "Fill Markdown Checkboxes",
      contexts: ["editable"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "fillCheckboxes") {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: fillCheckboxes
      });
    }
  });
  
  function fillCheckboxes() {
    console.log("test");
    const focusedElement = document.activeElement;
    const text = focusedElement.value;
    const filledText = text.replace(/- \[\s\]/g, '- [x]');
    focusedElement.value = filledText;

  }