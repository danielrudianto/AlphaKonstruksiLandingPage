 100644 100644 0 ?
j?r??:l?C9??w??e?
j?r??:l?C9??w??eassets/images/ico04.svg 100644 100644 0 ??l?(??6?qN???DN??l?(??6?qN???DNassets/images/ico05.svg 100644 100644 0 Hhύ]?ԙ?qRE??N{?Hhύ]?ԙ?qRE??N{?assets/images/ico06.svg 100644 100644 0 &w????B????\?yҹ:&w????B????\?yҹ:assets/images/ico07.svg 100644 100644 0 avTT?̏I??3???k??{SavTT?̏I??3???k??{Sassets/images/ico08.svg 100644 100644 0 ??54Ǚi?VX|??B???T???54Ǚi?VX|??B???T?assets/images/logo.png 100644 100644 0 *;B? ?)5?+???q???*;B? ?)5?+???q???assets/images/machines.png 100644 100644 0 ??10VO ??? ?}9?Y5????10VO ??? ?}9?Y5??assets/images/machines.webp 100644 100644 0 Kڞ/?e?!=u???rE7q?1Kڞ/?e?!=u???rE7q?1assets/images/project-01.png 100644 100644 0 ,g?????C?Q??@,g?????C?Q??@assets/images/project-01.webp 100644 1                                                                                                                                                                                                       native new null ' + 
						'Null Number Object object_proxy override parseFloat parseInt private protected public ' + 
						'return set static String super switch this throw true try typeof uint undefined unescape ' + 
						'use void while with'
						;
	
		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },		// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// single quoted strings
			{ regex: /\b([\d]+(\.[\d]+)?|0x[a-f0-9]+)\b/gi,				css: 'value' },			// numbers
			{ regex: new RegExp(this.getKeywords(inits), 'gm'),			css: 'color3' },		// initializations
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },		// keywords
			{ regex: new RegExp('var', 'gm'),							css: 'variable' },		// variable
			{ regex: new RegExp('trace', 'gm'),							css: 'color1' }			// trace
			];
	
		this.forHtmlScript(SyntaxHighlighter.regexLib.scriptScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['actionscript3', 'as3'];

	SyntaxHighlighter.brushes.AS3 = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
