var lastDesktop = workspace.currentDesktop;
var currDesktop = workspace.currentDesktop;

workspace.currentDesktopChanged.connect(function(desktop) {
  lastDesktop = currDesktop;
  currDesktop = workspace.currentDesktop;
});

function switchToRecentDesktop() {
  workspace.currentDesktop = lastDesktop;
  return;
}

registerShortcut(
  '[Script] Switch to Recent Desktop', "", "Meta+Esc",
  function() { switchToRecentDesktop(); }
);
