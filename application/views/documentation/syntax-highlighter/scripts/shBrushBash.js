/shThemeFadeToGrey.css 100644 100644 0 ?????3???[?ܿ[??Sڏ????3???[?ܿ[??S?application/views/documentation/syntax-highlighter/styles/shThemeMDUltra.css 100644 100644 0 ??9̓?	b4?Ӓ?=Xπl???9̓?	b4?Ӓ?=Xπl?application/views/documentation/syntax-highlighter/styles/shThemeMidnight.css 100644 100644 0 ĕc̝?]q?AW?H??*Mĕc̝?]q?AW?H??*Mapplication/views/documentation/syntax-highlighter/styles/shThemeRDark.css 100644 100644 0 c?N?	?k?????`?cc?N?	?k?????`?capplication/views/documentation/upload/thumbnail.png 100644 100644 0 ??F????l?zj??S?b?9??F????l?zj??S?b?9application/views/documentation/upload/thumbnail2.png 100644 100644 0 ?*o???-OI?۾??6?fvm?*o???-OI?۾??6?fvmapplication/views/errors/cli/error_404.php 100644 100644 0 i???<$ʞl?K??Ab?ui???<$ʞl?K??Ab?                                                                                                                                                                                                                                       find fmt fold format ' +
						'free fsck ftp gawk getopts grep groups gzip hash head history hostname id ifconfig ' +
						'import install join kill less let ln local locate logname logout look lpc lpr lprint ' +
						'lprintd lprintq lprm ls lsof make man mkdir mkfifo mkisofs mknod more mount mtools ' +
						'mv netstat nice nl nohup nslookup open op passwd paste pathchk ping popd pr printcap ' +
						'printenv printf ps pushd pwd quota quotacheck quotactl ram rcp read readonly renice ' +
						'remsync rm rmdir rsync screen scp sdiff sed select seq set sftp shift shopt shutdown ' +
						'sleep sort source split ssh strace su sudo sum symlink sync tail tar tee test time ' +
						'times touch top traceroute trap tr true tsort tty type ulimit umask umount unalias ' +
						'uname unexpand uniq units unset unshar useradd usermod users uuencode uudecode v vdir ' +
						'vi watch wc whereis which who whoami Wget xargs yes'
						;

		this.regexList = [
			{ regex: /^#!.*$/gm,											css: 'preprocessor bold' },
			{ regex: /\/[\w-\/]+/gm,										css: 'plain' },
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,		css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,			css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,			css: 'string' },		// single quoted strings
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),			css: 'keyword' },		// keywords
			{ regex: new RegExp(this.getKeywords(commands), 'gm'),			css: 'functions' }		// commands
			];
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['bash', 'shell'];

	SyntaxHighlighter.brushes.Bash = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
