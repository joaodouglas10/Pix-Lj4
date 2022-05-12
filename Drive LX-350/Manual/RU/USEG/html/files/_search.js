	
var key = "";

// Search mode AND(1) OR(0)
var	SWay = 1;


function makeEntry (){
	this.Name="";
	this.URL = "";
	this.Desc = "";
	this.Category = "";
	return this;
}

function makeArray(n) {
	this.length = n;
	for (var k = 1; k <= n; k++) {
		this[k] = "";
	}
	return this;
}

function makeLinks(size) {
	this.length = size;
	for (var r=1; r<= size; r++) {
		this[r] = new makeEntry();
		this[r].Name = namesArray[r];
		this[r].URL = urlsArray[r];
		this[r].Desc = descArray[r];
	}
	return this;
}

function showAll(linkobj) {
	for (var s=1; s<= linkobj.length; s++) {
		showLink(linkobj,s);
	}
}

function showLink (links, index) {
	document.write("<tr><td>" + links[index].Name + "</td>");
	document.write("<td><a href=" + links[index].URL + ">" + links[index].Desc + "</a></td></tr>");
}


function makeSrchKey() {
	this.SrchKeyIndex="";
	this.DataIndex = "";
	return this;
}

function makeSrchKeyList(size) {	
	this.length = size;
	for (var r=0; r< size; r++) {
		this[r] = new makeSrchKey();
		this[r].SrchKeyIndex = "";
		this[r].DataLength = "";
	}
	return this;

}

function getSWay(){
	var way = 1;
	if( navigator.appName.charAt(0) != "N"){
		way = SWay;
	}
	return way;
}



function resopen()
{
	winOpen('epsonwin4','result.htm',0,80,385,iheight-150);
	
	if(navigator.appName.indexOf("Netscape") != -1){
		return false;
	}
}

function searchLinks(links, keyword){
	var searchWay = getSWay();

	var srchlinksize=0

	var srchnamesArray = new makeArray(srchlinksize);
	var srchurlsArray = new makeArray(srchlinksize);
	var srchdescArray = new makeArray(srchlinksize);


	var srcharraycount=0


	var newkey;


	keyword=keyword.replace(/&/g,"&amp;")
	keyword=keyword.replace(/</g,"&lt;")
	keyword=keyword.replace(/>/g,"&gt;")
	keyword=keyword.replace(/"/g,"&quot;")

	if (keyword != null) {
		newkey=keyword.toLowerCase();
	}
	
	var strsplittmp;
	strsplittmp = newkey.split(" ");
	
	var i;

	for (var q=1; q<=links.length; q++) {
		var newdesc=links[q].Desc.toLowerCase();
		var newname=links[q].Name.toLowerCase();

		var bRet = 0;
		if (searchWay == 1){
			if(newdesc.indexOf(newkey) != -1) {
				bRet = 1;
			} else {
				var strSearch;
				bRet = 1;
				for (i=0; i<strsplittmp.length; i++) {
					strSearch = strsplittmp[i];
					if(newdesc.indexOf(strSearch) == -1){
						bRet = 0;
						break;
					}
				}
			}
		} else {
			var strSearch;
			if(strsplittmp.length == 1){
				if(newdesc.indexOf(newkey) != -1) {
					bRet = 1;
				}
			} else {
				for (i=0; i<strsplittmp.length; i++) {
					strSearch = strsplittmp[i];
					if(newdesc.indexOf(strSearch) != -1){
						bRet = 1;
					}
				}
			}
		}
		
		if(bRet == 1){
			srchnamesArray[srcharraycount] = links[q].Name;
			srchurlsArray[srcharraycount] = links[q].URL;
			srchdescArray[srcharraycount] = links[q].Desc;
			srcharraycount += 1;
			continue;
		}

		var bRet = 0;
		if (searchWay == 1){
			if(newname.indexOf(newkey) != -1) {
				bRet = 1;
			} else {
				var strSearch;
				bRet = 1;
				for (i=0; i<strsplittmp.length; i++) {
					strSearch = strsplittmp[i];
					if(newname.indexOf(strSearch) == -1){
						bRet = 0;
						break;
					}
				}
			}
		} else {
			var strSearch;
			if(strsplittmp.length == 1){
				if(newname.indexOf(newkey) != -1) {
					bRet = 1;
				}
			} else {
				for (i=0; i<strsplittmp.length; i++) {
					strSearch = strsplittmp[i];
					if(newname.indexOf(strSearch) != -1){
						bRet = 1;
						break;
					}
				}
			}
		}
		
		if(bRet == 1){
			srchnamesArray[srcharraycount] = links[q].Name;
			srchurlsArray[srcharraycount] = links[q].URL;
			srchdescArray[srcharraycount] = links[q].Desc;
			srcharraycount += 1;
			continue;
		}
	}

	var strsplittmp;
	strsplittmp = newkey.split(" ");
	var SrchKeylist = new makeSrchKeyList(strsplittmp.length);


	
	srchlinksize = srcharraycount;

	document.open();

	document.writeln("<!-- saved from url=(0013)about:internet -->");
	document.writeln("<html>");
	document.writeln("<head>");
	
	document.writeln("<meta http-equiv=\"content-type\" content=\"text/html;charset=UTF-8\">");
	
	document.writeln("<meta NAME=\"Version\" CONTENT=\"BPS0132-01 RU\">");
	document.writeln("<title>Результаты поиска</title>");
	document.writeln("<LINK href=\"files/_style07.css\" rel=stylesheet>");
	
	document.writeln("<script language=\"javascript\">");
	document.writeln("<!--");
	document.writeln("function goMain(url){");
	document.writeln("	window.opener.location.href=url\;");
	document.writeln("}");
	document.writeln("	--></script>");
	
	document.writeln("</head>");
	document.writeln("<body target=\"main\" bgColor=\"#ffffff\">");

	document.writeln("<div class=\"extra-head\">Результаты поиска</div>");

	document.writeln("<div class=\"extra-text\">");
	document.writeln("Результаты поиска по ключевому слову: <B>" +keyword.toUpperCase() +"</B>");
	document.writeln("</div>");
	document.writeln("<!-- KeyWord Start -->");

	newkey=keyword.toLowerCase();


	var strsplittmp;
	strsplittmp = newkey.split(" ");
	var strSearch = strsplittmp[0];
	
	for (var q=0; q<srchlinksize; q++) {
		var iIndex;
		var newDst=srchnamesArray[q].toLowerCase();
		if(srchnamesArray[q].length == 0){
			var newdsc = srchdescArray[q].toLowerCase();
			
			for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
				var strSearch = strsplittmp[iCnt];
				iIndex = newdsc.indexOf(strSearch);
				if (searchWay == 1){ //AND
					if(iIndex == -1){
						break;
					}
				} else { //OR
					if(iIndex != -1){
						break;
					}
				}
			}
			var ihit = 0;
			if(iIndex != -1){
				var datatmp = srchdescArray[q].toLowerCase();
				for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
					var strSearch = strsplittmp[iCnt];
					if(datatmp.indexOf(strSearch) == -1){
						SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
						SrchKeylist[iCnt].DataLength = 0;
						continue;
					}
					SrchKeylist[iCnt].SrchKeyIndex = datatmp.indexOf(strSearch);
					SrchKeylist[iCnt].DataLength = strSearch.length;
					var iflag=1;
					for(var iCnt3=0; iCnt3<iCnt; iCnt3++){
						if((SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt3].SrchKeyIndex) && (SrchKeylist[iCnt].SrchKeyIndex < (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
							SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
							SrchKeylist[iCnt].DataLength = 0;
							iflag=0;
							break;	
						}
					}
					if(iflag == 0){
						continue;
					}
					for(var iCnt3=iCnt - 1; iCnt3>=0; iCnt3--){
						if((SrchKeylist[iCnt].SrchKeyIndex < SrchKeylist[iCnt3].SrchKeyIndex) && ((SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) > (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
							SrchKeylist[iCnt3].SrchKeyIndex = datatmp.length;
							SrchKeylist[iCnt3].DataLength = 0;
							ihit--;
						}
					}
					ihit++;
				}

				for(iCnt=0; iCnt<strsplittmp.length - 1; iCnt++){
					for (var iCnt2=1; iCnt2<strsplittmp.length; iCnt2++){
						if(SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt2].SrchKeyIndex){
							var SrchKeyIndextemp = SrchKeylist[iCnt].SrchKeyIndex;
							var DataLengthtemp = SrchKeylist[iCnt].DataLength;
							SrchKeylist[iCnt].SrchKeyIndex = SrchKeylist[iCnt2].SrchKeyIndex;
							SrchKeylist[iCnt].DataLength = SrchKeylist[iCnt2].DataLength;
							SrchKeylist[iCnt2].SrchKeyIndex = SrchKeyIndextemp;
							SrchKeylist[iCnt2].DataLength = DataLengthtemp;
						}
					}
				}

				document.write("<div class=\"result-text\">" + srchdescArray[q].substring(0, SrchKeylist[0].SrchKeyIndex));
				for(iCnt=0; iCnt<ihit; iCnt++){
					if(iCnt < (ihit - 1)){
						document.write("<font color=\"red\">" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, SrchKeylist[iCnt + 1].SrchKeyIndex));
					} else {
						document.write("<font color=\"red\">" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, srchdescArray[q].length));
					}
				}
				document.write("</div>");
				
			}else {
				document.write("<div class=\"result-text\">" + srchdescArray[q] + "</div>");
			}
		} else {
			iIndex = newDst.indexOf(strSearch);
			for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
				var strSearch = strsplittmp[iCnt];
				iIndex = newDst.indexOf(strSearch);
				if (searchWay == 1){ //AND
					if(iIndex == -1){
						break;
					}
				} else { //OR
					if(iIndex != -1){
						break;
					}
				}
			}
			var redflag = 0;
			if(iIndex != -1){
				redflag = 1;
			}
			var markerflag = 0;
			if(q==0){
				markerflag = 1;
			} else {
				var newSrc=srchnamesArray[q-1].toLowerCase();

				if((newSrc.length == 0) || (newDst.indexOf(newSrc) == -1) ||  ( (newDst.indexOf(newSrc) != -1) && (newDst.length != newSrc.length))) {
					markerflag = 1;
				}
			}
			if(markerflag == 1){
				if(redflag == 1){
					
					var datatmp = srchnamesArray[q].toLowerCase();
					var ihit = 0;
					for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
						var strSearch = strsplittmp[iCnt];
						if(datatmp.indexOf(strSearch) == -1){
							SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
							SrchKeylist[iCnt].DataLength = 0;
							continue;
						}
						SrchKeylist[iCnt].SrchKeyIndex = datatmp.indexOf(strSearch);
						SrchKeylist[iCnt].DataLength = strSearch.length;
						var iflag=1;
						for(var iCnt3=0; iCnt3<iCnt; iCnt3++){
							if((SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt3].SrchKeyIndex) && (SrchKeylist[iCnt].SrchKeyIndex < (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
								SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
								SrchKeylist[iCnt].DataLength = 0;
								iflag=0;
								break;	
							}
						}
						if(iflag == 0){
							continue;
						}
						for(var iCnt3=iCnt - 1; iCnt3>=0; iCnt3--){
							if((SrchKeylist[iCnt].SrchKeyIndex < SrchKeylist[iCnt3].SrchKeyIndex) && ((SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) > (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
								SrchKeylist[iCnt3].SrchKeyIndex = datatmp.length;
								SrchKeylist[iCnt3].DataLength = 0;
								ihit--;
							}
						}
						ihit++;
					}
		
					for(iCnt=0; iCnt<strsplittmp.length - 1; iCnt++){
						for (var iCnt2=1; iCnt2<strsplittmp.length; iCnt2++){
							if(SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt2].SrchKeyIndex){
								var SrchKeyIndextemp = SrchKeylist[iCnt].SrchKeyIndex;
								var DataLengthtemp = SrchKeylist[iCnt].DataLength;
								SrchKeylist[iCnt].SrchKeyIndex = SrchKeylist[iCnt2].SrchKeyIndex;
								SrchKeylist[iCnt].DataLength = SrchKeylist[iCnt2].DataLength;
								SrchKeylist[iCnt2].SrchKeyIndex = SrchKeyIndextemp;
								SrchKeylist[iCnt2].DataLength = DataLengthtemp;
							}
						}
					}

					document.write("<div class=\"result-text\">" + srchnamesArray[q].substring(0, SrchKeylist[0].SrchKeyIndex));
					for(iCnt=0; iCnt<ihit; iCnt++){
						if(iCnt < (ihit - 1)){
							document.write("<font color=\"red\">" + srchnamesArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchnamesArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, SrchKeylist[iCnt + 1].SrchKeyIndex));
						} else {
							document.write("<font color=\"red\">" + srchnamesArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchnamesArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, srchnamesArray[q].length));
						}
					}
				
					document.write("</div>");
					
				} else {
					document.write("<div class=\"result-text\">" + srchnamesArray[q] + "</div>");
				}
			}
		}
		newDst=srchdescArray[q].toLowerCase();
		for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
			var strSearch = strsplittmp[iCnt];
			iIndex = newDst.indexOf(strSearch);
			if (searchWay == 1){ //AND
				if(iIndex == -1){
					break;
				}
			} else { //OR
				if(iIndex != -1){
					break;
				}
			}
		}
		if(iIndex != -1){
			
			var datatmp = srchdescArray[q].toLowerCase();
			var ihit = 0;
			for(var iCnt=0; iCnt<strsplittmp.length; iCnt++){
				var strSearch = strsplittmp[iCnt];
				if(datatmp.indexOf(strSearch) == -1){
					SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
					SrchKeylist[iCnt].DataLength = 0;
					continue;
				}
				SrchKeylist[iCnt].SrchKeyIndex = datatmp.indexOf(strSearch);
				SrchKeylist[iCnt].DataLength = strSearch.length;
				var iflag=1;
				for(var iCnt3=0; iCnt3<iCnt; iCnt3++){
					if((SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt3].SrchKeyIndex) && (SrchKeylist[iCnt].SrchKeyIndex < (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
						SrchKeylist[iCnt].SrchKeyIndex = datatmp.length;
						SrchKeylist[iCnt].DataLength = 0;
						iflag=0;
						break;	
					}
				}
				if(iflag == 0){
					continue;
				}
				for(var iCnt3=iCnt - 1; iCnt3>=0; iCnt3--){
					if((SrchKeylist[iCnt].SrchKeyIndex < SrchKeylist[iCnt3].SrchKeyIndex) && ((SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) > (SrchKeylist[iCnt3].SrchKeyIndex + SrchKeylist[iCnt3].DataLength))){
						SrchKeylist[iCnt3].SrchKeyIndex = datatmp.length;
						SrchKeylist[iCnt3].DataLength = 0;
						ihit--;
					}
				}
				ihit++;
			}

			for(iCnt=0; iCnt<strsplittmp.length - 1; iCnt++){
				for (var iCnt2=1; iCnt2<strsplittmp.length; iCnt2++){
					if(SrchKeylist[iCnt].SrchKeyIndex > SrchKeylist[iCnt2].SrchKeyIndex){
						var SrchKeyIndextemp = SrchKeylist[iCnt].SrchKeyIndex;
						var DataLengthtemp = SrchKeylist[iCnt].DataLength;
						SrchKeylist[iCnt].SrchKeyIndex = SrchKeylist[iCnt2].SrchKeyIndex;
						SrchKeylist[iCnt].DataLength = SrchKeylist[iCnt2].DataLength;
						SrchKeylist[iCnt2].SrchKeyIndex = SrchKeyIndextemp;
						SrchKeylist[iCnt2].DataLength = DataLengthtemp;
					}
				}
			}

			document.write("<div class=\"result-link\"><a href=\"javascript:goMain(\'" + srchurlsArray[q] + "\')\">" + srchdescArray[q].substring(0, SrchKeylist[0].SrchKeyIndex));
			for(iCnt=0; iCnt<ihit; iCnt++){

				if(iCnt < (ihit - 1)){
					document.write("<font color=\"red\">" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, SrchKeylist[iCnt + 1].SrchKeyIndex));
				} else {
					document.write("<font color=\"red\">" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex, SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength) + "</font>" + srchdescArray[q].substring(SrchKeylist[iCnt].SrchKeyIndex + SrchKeylist[iCnt].DataLength, srchdescArray[q].length));
				}
			}
			document.write("</a></div>");
			
		} else {
			document.write("<div class=\"result-link\"><a href=\"javascript:goMain(\'" + srchurlsArray[q] + "\')\">" + srchdescArray[q] + "</a></div>");
		}
	}


	document.writeln("");
	document.writeln("<!-- KeyWord End -->");

	document.writeln("<div class=\"extra-foot\">");
	document.writeln("Если вы не нашли того, что искали, обратитесь к Советам по поиску");
	document.writeln("</div>");
	document.writeln("<div class=\"extra-link\">");
	
	document.writeln("<a href=\"javascript:goMain(\'sch.htm\')\">Советы по поиску</a>");
	
	document.writeln("</div>");

	document.writeln("<div id=\"closed\"></div>");
	document.writeln("</body>");
	document.writeln("</html>");

	document.close();
}



var linksize=0

namesArray = new makeArray(linksize);
urlsArray = new makeArray(linksize);
descArray = new makeArray(linksize);


var arraycount=0

// ---- search target start -----


arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00800"
descArray[arraycount] = "0 slash (Перечеркнутый ноль)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01300"
descArray[arraycount] = "Auto CR (Автоматический возврат каретки)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01000"
descArray[arraycount] = "Auto I/F (interface) wait time (Время ожидания автоматического переключения интерфейса)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00400"
descArray[arraycount] = "Auto line feed (Автоматический перевод строки)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00300"
descArray[arraycount] = "Auto tear-off (Автоматический отрыв)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01500"
descArray[arraycount] = "Baud rate (Скорость передачи данных)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_6.htm#S-00400-00900"
descArray[arraycount] = "Bi-D Adjustment"
	
arraycount += 1
	
namesArray[arraycount] = "Character table (Кодовая таблица символов)"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02100"
descArray[arraycount] = "Настройка"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01700"
descArray[arraycount] = "Data length (Разрядность данных)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_5.htm#S-00400-00500"
descArray[arraycount] = "EPSON Status Monitor 3"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_2.htm#S-00400-00200"
descArray[arraycount] = "EPSON Status Monitor 3"
	
arraycount += 1
	
namesArray[arraycount] = "EPSON Status Monitor 3"
urlsArray[arraycount] = "soft_5.htm#S-00400-00500-00200"
descArray[arraycount] = "Доступ"
	
arraycount += 1
	
namesArray[arraycount] = "EPSON Status Monitor 3"
urlsArray[arraycount] = "soft_5.htm#S-00400-00500-00100"
descArray[arraycount] = "Настройка"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00100"
descArray[arraycount] = "ESC/P"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00900"
descArray[arraycount] = "I/F (interface) mode (Режим интерфейса)"
	
arraycount += 1
	
namesArray[arraycount] = "IBM character table (Кодовая таблица символов IBM)"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01800"
descArray[arraycount] = "Настройка по умолчанию"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00300"
descArray[arraycount] = "IBM PPDS"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01900"
descArray[arraycount] = "Low-noise mode (Тихий режим)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02300"
descArray[arraycount] = "Manual feed wait time (Время ожидания ручной подачи)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01200"
descArray[arraycount] = "Packet mode (Пакетный режим)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00100"
descArray[arraycount] = "Page length for tractor (длина страницы для устройства протяжки)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01100"
descArray[arraycount] = "Parallel I/F (interface) bidirectional mode (Двунаправленный режим параллельного интерфейса)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01600"
descArray[arraycount] = "Parity (Контроль четности)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-01400"
descArray[arraycount] = "Pitch (Шаг)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02000"
descArray[arraycount] = "Power off timer (Таймер выключения)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00500"
descArray[arraycount] = "Print direction (Направление печати)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_7.htm#S-00400-01000"
descArray[arraycount] = "Printer Setting (Настройка принтера)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00200"
descArray[arraycount] = "Skip over perforation"
	
arraycount += 1
	
namesArray[arraycount] = "Software (Программное обеспечение)"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00700"
descArray[arraycount] = "Настройка по умолчанию"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_5.htm#S-00400-00500"
descArray[arraycount] = "Status Monitor 3"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_2.htm#S-00400-00200"
descArray[arraycount] = "Status Monitor 3"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_5.htm#S-00600-00500"
descArray[arraycount] = "Внутренний тест"
	
arraycount += 1
	
namesArray[arraycount] = "Встроенные шрифты"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "Список"
	
arraycount += 1
	
namesArray[arraycount] = "Встроенный шрифт"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100-00200"
descArray[arraycount] = "Выбор"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00700"
descArray[arraycount] = "Выравнивание бумаги"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_5.htm#S-00600-00500"
descArray[arraycount] = "Выравнивание вертикальных линий"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00500"
descArray[arraycount] = "Двунаправленная (Bi-d) печать"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "optn_1.htm#S-00800-00100-00100"
descArray[arraycount] = "Держатель рулонной бумаги"
	
arraycount += 1
	
namesArray[arraycount] = "Дополнительные принадлежности"
urlsArray[arraycount] = "optn_1.htm#S-00800-00100-00100"
descArray[arraycount] = "Держатель рулонной бумаги"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_2.htm#S-00400-00200"
descArray[arraycount] = "Драйвер (драйвер принтера)"
	
arraycount += 1
	
namesArray[arraycount] = "Драйвер принтера"
urlsArray[arraycount] = "soft_3.htm#S-00400-00300"
descArray[arraycount] = "Доступ"
	
arraycount += 1
	
namesArray[arraycount] = "Драйвер принтера"
urlsArray[arraycount] = "soft_3.htm#S-00400-00300-00300"
descArray[arraycount] = "Настройки"
	
arraycount += 1
	
namesArray[arraycount] = "Драйвер принтера"
urlsArray[arraycount] = "soft_4.htm#S-00400-00400"
descArray[arraycount] = "Настройки"
	
arraycount += 1
	
namesArray[arraycount] = "Драйвер принтера"
urlsArray[arraycount] = "soft_10.htm#S-00400-00800"
descArray[arraycount] = "Удаление"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_4.htm#S-00600-00600"
descArray[arraycount] = "Замятие бумаги, устранение"
	
arraycount += 1
	
namesArray[arraycount] = "Извлечение"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00200"
descArray[arraycount] = "Отпечатанный документ"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Индикаторы"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_1.htm#S-00600-00100"
descArray[arraycount] = "Индикация ошибок"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00900"
descArray[arraycount] = "Интерфейс USB"
	
arraycount += 1
	
namesArray[arraycount] = "Интерфейс USB"
urlsArray[arraycount] = "trble_3.htm#S-00600-00300"
descArray[arraycount] = "Проблемы"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00100"
descArray[arraycount] = "Картридж с красящей лентой"
	
arraycount += 1
	
namesArray[arraycount] = "Картридж с красящей лентой"
urlsArray[arraycount] = "optn_2.htm#S-00800-00200-00100"
descArray[arraycount] = "Замена"
	
arraycount += 1
	
namesArray[arraycount] = "Клиент"
urlsArray[arraycount] = "soft_8.htm#S-00400-00600-00300"
descArray[arraycount] = "Windows 7, Vista, XP или 2000"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Кнопки"
	
arraycount += 1
	
namesArray[arraycount] = "Кодовые таблицы символов"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "Список"
	
arraycount += 1
	
namesArray[arraycount] = "Конверты"
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00300"
descArray[arraycount] = "Печать"
	
arraycount += 1
	
namesArray[arraycount] = "Конверты"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "Спецификации"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "Международные наборы символов"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02200"
descArray[arraycount] = "Международный набор символов для кодовой таблицы Italic (Курсив)"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00300"
descArray[arraycount] = "Микронастройка"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600"
descArray[arraycount] = "Микронастройка"
	
arraycount += 1
	
namesArray[arraycount] = "Многоэкземплярные формы"
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00100"
descArray[arraycount] = "Печать"
	
arraycount += 1
	
namesArray[arraycount] = "Многоэкземплярные формы"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "спецификации"
	
arraycount += 1
	
namesArray[arraycount] = "Настройка"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00500"
descArray[arraycount] = "Позиция начала страницы"
	
arraycount += 1
	
namesArray[arraycount] = "Настройка"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00300"
descArray[arraycount] = "Позиция отрыва"
	
arraycount += 1
	
namesArray[arraycount] = "Настройка"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600"
descArray[arraycount] = "Позиция отрыва"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02400"
descArray[arraycount] = "Настройка Buzzer (Звуковой сигнал)"
	
arraycount += 1
	
namesArray[arraycount] = "Настройки по умолчанию"
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100"
descArray[arraycount] = "Список значений"
	
arraycount += 1
	
namesArray[arraycount] = "Непрерывная бумага"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300"
descArray[arraycount] = "Печать"
	
arraycount += 1
	
namesArray[arraycount] = "Непрерывная бумага"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "Спецификации"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "custo_2.htm#S-00700-00200-00100"
descArray[arraycount] = "Обращение в компанию Epson"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-00500"
descArray[arraycount] = "Однонаправленная (Uni-d) печать"
	
arraycount += 1
	
namesArray[arraycount] = "Отдельные листы"
urlsArray[arraycount] = "paper_2.htm#S-00300-00400"
descArray[arraycount] = "печать"
	
arraycount += 1
	
namesArray[arraycount] = "Отдельные листы"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "Спецификации"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "soft_9.htm#S-00400-00700"
descArray[arraycount] = "Отмена печати"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600"
descArray[arraycount] = "Отрыв"
	
arraycount += 1
	
namesArray[arraycount] = "Отрыв"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00200"
descArray[arraycount] = "Автоматический"
	
arraycount += 1
	
namesArray[arraycount] = "Отрыв"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00100"
descArray[arraycount] = "Кнопка"
	
arraycount += 1
	
namesArray[arraycount] = "Отрыв"
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00600-00300"
descArray[arraycount] = "Настройка"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_5.htm#S-00900-00500"
descArray[arraycount] = "Очистка принтера"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Панель"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "trble_1.htm#S-00600-00100"
descArray[arraycount] = "Панель управления"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Панель управления"
	
arraycount += 1
	
namesArray[arraycount] = "Панель управления"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Индикаторы"
	
arraycount += 1
	
namesArray[arraycount] = "Панель управления"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Кнопки"
	
arraycount += 1
	
namesArray[arraycount] = "Панель управления"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100"
descArray[arraycount] = "Панель"
	
arraycount += 1
	
namesArray[arraycount] = "Принтер"
urlsArray[arraycount] = "soft_8.htm#S-00400-00600-00100"
descArray[arraycount] = "Общий доступ"
	
arraycount += 1
	
namesArray[arraycount] = "Регулировка"
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00400"
descArray[arraycount] = "Рычаг выбора толщины бумаги"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_2.htm#S-00500-00300"
descArray[arraycount] = "Режим блокировки"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00200"
descArray[arraycount] = "Режим установок по умолчанию"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00600"
descArray[arraycount] = "Рекомендованная область печати"
	
arraycount += 1
	
namesArray[arraycount] = "Рукоятка"
urlsArray[arraycount] = "trble_4.htm#S-00600-00600"
descArray[arraycount] = "Принтер"
	
arraycount += 1
	
namesArray[arraycount] = "Рулонная бумага"
urlsArray[arraycount] = "optn_1.htm#S-00800-00100-00100"
descArray[arraycount] = "Печать"
	
arraycount += 1
	
namesArray[arraycount] = "Рулонная бумага"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "Спецификации"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_3.htm#S-00300-00500-00400"
descArray[arraycount] = "Рычаг выбора толщины бумаги"
	
arraycount += 1
	
namesArray[arraycount] = "Сервер"
urlsArray[arraycount] = "soft_8.htm#S-00400-00600-00200"
descArray[arraycount] = "Windows 7, Vista, XP или 2000"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "custo_2.htm#S-00700-00200-00100"
descArray[arraycount] = "Служба поддержки пользователей"
	
arraycount += 1
	
namesArray[arraycount] = "Спецификации"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "Бумага"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00500"
descArray[arraycount] = "Спецификации бумаги"
	
arraycount += 1
	
namesArray[arraycount] = "Список команд"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00100"
descArray[arraycount] = "ESC/P"
	
arraycount += 1
	
namesArray[arraycount] = "Список команд"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00300"
descArray[arraycount] = "IBM PPDS"
	
arraycount += 1
	
namesArray[arraycount] = "Спящий режим"
urlsArray[arraycount] = "cntrl_1.htm#S-00500-00100-00300"
descArray[arraycount] = "Использование панели управления"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "custo_2.htm#S-00700-00200-00100"
descArray[arraycount] = "Техническая поддержка"
	
arraycount += 1
	
namesArray[arraycount] = "Технические характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "Встроенные шрифты"
	
arraycount += 1
	
namesArray[arraycount] = "Технические характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00700"
descArray[arraycount] = "Выравнивание бумаги"
	
arraycount += 1
	
namesArray[arraycount] = "Технические характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "Кодовые таблицы символов"
	
arraycount += 1
	
namesArray[arraycount] = "Технические характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "Международные наборы символов"
	
arraycount += 1
	
namesArray[arraycount] = "Технические характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00100"
descArray[arraycount] = "Механические характеристики"
	
arraycount += 1
	
namesArray[arraycount] = "Технические характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00600"
descArray[arraycount] = "Рекомендованная область печати"
	
arraycount += 1
	
namesArray[arraycount] = "Технические характеристики"
urlsArray[arraycount] = "apspe_4.htm#S-00900-00400"
descArray[arraycount] = "Соответствие стандартам и сертификация"
	
arraycount += 1
	
namesArray[arraycount] = "Технические характеристики"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00100"
descArray[arraycount] = "Списки команд"
	
arraycount += 1
	
namesArray[arraycount] = "Технические характеристики"
urlsArray[arraycount] = "apspe_3.htm#S-00900-00300-00300"
descArray[arraycount] = "Списки команд"
	
arraycount += 1
	
namesArray[arraycount] = "Технические характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00400"
descArray[arraycount] = "Условия окружающей среды"
	
arraycount += 1
	
namesArray[arraycount] = "Технические характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00300"
descArray[arraycount] = "Электрические характеристики"
	
arraycount += 1
	
namesArray[arraycount] = "Технические характеристики"
urlsArray[arraycount] = "apspe_2.htm#S-00900-00200-00200"
descArray[arraycount] = "Электронные характеристики"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "paper_1.htm#S-00300-00300-00500"
descArray[arraycount] = "Точная настройка"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "apspe_6.htm#S-00900-00600"
descArray[arraycount] = "Транспортировка принтера"
	
arraycount += 1
	
namesArray[arraycount] = "Удаление"
urlsArray[arraycount] = "soft_10.htm#S-00400-00800"
descArray[arraycount] = "Программное обеспечения принтера"
	
arraycount += 1
	
namesArray[arraycount] = "Устранение неполадок"
urlsArray[arraycount] = "trble_3.htm#S-00600-00300"
descArray[arraycount] = "Проблемы USB"
	
arraycount += 1
	
namesArray[arraycount] = "Устранение неполадок"
urlsArray[arraycount] = "trble_4.htm#S-00600-00600"
descArray[arraycount] = "Устранение замятия бумаги"
	
arraycount += 1
	
namesArray[arraycount] = ""
urlsArray[arraycount] = "cntrl_3.htm#S-00500-00200-00100-02200"
descArray[arraycount] = "Шрифт"
	

// ---- search target end -----

linksize = arraycount;



// ----end data -------

// final stuff
// the main program ---

jsi = new makeLinks(linksize);
document.write("<title>Результаты поиска</title><body bgcolor=white>");

	