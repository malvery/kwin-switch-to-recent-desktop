error:
	echo "use 'make install' or 'make uninstall'"

install:
	kpackagetool6 --type=KWin/Script -i .

uninstall:
	kpackagetool6 --type=KWin/Script -r .

upgrade:
	kpackagetool6 --type=KWin/Script -u .

package:
	zip -r kwin-switch-to-recent-desktop.kwinscript contents metadata.json README.md

clean:
	rm kwin-switch-to-recent-desktop.kwinscript
